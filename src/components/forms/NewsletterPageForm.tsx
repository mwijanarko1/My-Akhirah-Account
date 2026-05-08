"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { validateNewsletterDraft, mapSubmitError, type NewsletterDraft } from "@/lib/validation/formsClient";

const fieldClass =
  "min-h-11 w-full px-4 py-3 text-base rounded-sm border border-akhirah-teal/15 bg-purity-white text-account-black placeholder:text-account-black/40 focus:outline-none focus:ring-2 focus:ring-eternal-gold";

interface NewsletterPageFormProps {
  /** Hidden source tag forwarded to Convex via API */
  source?: string;
}

export default function NewsletterPageForm({ source = "newsletter-page" }: NewsletterPageFormProps) {
  const startedAt = useMemo(() => String(Date.now()), []);
  const [draft, setDraft] = useState<NewsletterDraft>({ email: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof NewsletterDraft, string>>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [honeypotArmed, setHoneypotArmed] = useState(false);
  const [company, setCompany] = useState("");

  useEffect(() => {
    setHoneypotArmed(true);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    setSuccess(false);

    const next = validateNewsletterDraft(draft);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("email", draft.email.trim());
      formData.set("consentTextVersion", "v1");
      formData.set("source", source);
      formData.set("company", company);
      formData.set("startedAt", startedAt);

      const res = await fetch("/api/newsletter", { method: "POST", body: formData });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFormError(mapSubmitError(body));
        return;
      }
      setSuccess(true);
      setDraft({ email: "" });
    } catch {
      setFormError("Unable to subscribe right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md" noValidate aria-label="Newsletter signup">
      {honeypotArmed ? (
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="newsletter-company">Company</label>
          <input
            id="newsletter-company"
            name="company"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      ) : null}

      <div>
        <label htmlFor="newsletter-email-page" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Email address <span className="text-red-700">*</span>
        </label>
        <input
          id="newsletter-email-page"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={255}
          className={fieldClass}
          value={draft.email}
          onChange={(e) => {
            setDraft({ email: e.target.value });
            setErrors({});
            setFormError("");
            setSuccess(false);
          }}
          disabled={submitting}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "newsletter-email-page-err" : undefined}
        />
        {errors.email ? (
          <p id="newsletter-email-page-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        ) : (
          <p className="mt-1 text-xs text-account-black/60">
            We&apos;ll only send intentional updates—you can unsubscribe any time once flows are finalized (consent text version v1).
          </p>
        )}
      </div>

      <input type="hidden" name="source" value={source} readOnly />
      <input type="hidden" name="startedAt" value={startedAt} readOnly />

      {formError ? (
        <p className="text-sm text-red-600" role="alert">
          {formError}
        </p>
      ) : null}
      {success ? (
        <p className="text-sm font-semibold text-akhirah-teal" role="status">
          Thanks — check your inbox to confirm subscription details when available.
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary font-bold min-h-11 w-full sm:w-auto" disabled={submitting} aria-busy={submitting}>
        {submitting ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}

"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  validateContactDraft,
  mapSubmitError,
  type ContactDraft,
} from "@/lib/validation/formsClient";
import { contactSubmissionStatusUi, type SubmissionStatusUi } from "@/lib/forms/publicSubmissionStatus";
import SubmissionStatusCallout from "@/components/forms/SubmissionStatusCallout";

const baseField =
  "min-h-11 w-full px-4 py-3 text-base rounded-sm border bg-purity-white text-account-black placeholder:text-account-black/40 focus:outline-none focus:ring-2 focus:ring-eternal-gold";

function fieldClassFor(invalid: boolean): string {
  return `${baseField} ${invalid ? "border-red-600" : "border-akhirah-teal/15"}`;
}

const FIELD_ORDER: Array<keyof ContactDraft> = [
  "fullName",
  "email",
  "phone",
  "subject",
  "message",
];

export default function ContactForm() {
  const startedAt = useMemo(() => String(Date.now()), []);
  const [draft, setDraft] = useState<ContactDraft>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactDraft, string>>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successUi, setSuccessUi] = useState<SubmissionStatusUi | null>(null);
  const [honeypotArmed, setHoneypotArmed] = useState(false);
  const [company, setCompany] = useState("");

  useEffect(() => {
    setHoneypotArmed(true);
  }, []);

  const setField =
    <K extends keyof ContactDraft>(key: K) =>
    (value: ContactDraft[K]) => {
      setDraft((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setFormError("");
      setSuccessUi(null);
    };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    setSuccessUi(null);

    const next = validateContactDraft(draft);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = FIELD_ORDER.find((k) => next[k]);
      if (firstKey) {
        document.getElementById(`contact-${firstKey}`)?.focus();
      }
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("fullName", draft.fullName.trim());
      formData.set("email", draft.email.trim());
      formData.set("phone", draft.phone.trim());
      formData.set("subject", draft.subject.trim());
      formData.set("message", draft.message.trim());
      formData.set("company", company);
      formData.set("startedAt", startedAt);

      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFormError(mapSubmitError(body));
        return;
      }
      setSuccessUi(contactSubmissionStatusUi(body.status));
      setDraft({ fullName: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setFormError("Unable to submit right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 max-w-xl"
      noValidate
      aria-label="Contact form"
    >
      {honeypotArmed ? (
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      ) : null}

      {Object.values(errors).some(Boolean) ? (
        <div
          role="alert"
          aria-labelledby="contact-errors-title"
          className="rounded-sm border border-red-300 bg-red-50 p-4"
        >
          <p id="contact-errors-title" className="text-sm font-semibold text-red-700">
            Please fix the following:
          </p>
          <ul className="list-disc pl-5 mt-2 text-sm text-red-700">
            {FIELD_ORDER.map((k) =>
              errors[k] ? (
                <li key={k}>
                  <a href={`#contact-${k}`} className="underline">
                    {errors[k]}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ) : null}

      <div>
        <label htmlFor="contact-fullName" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Full name <span className="text-red-700">*</span>
        </label>
        <input
          id="contact-fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          maxLength={160}
          className={fieldClassFor(Boolean(errors.fullName))}
          value={draft.fullName}
          onChange={(e) => setField("fullName")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "contact-fullName-err" : undefined}
        />
        {errors.fullName ? (
          <p id="contact-fullName-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.fullName}
          </p>
        ) : (
          <p className="mt-1 text-xs text-account-black/55">Maximum 160 characters</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={255}
          className={fieldClassFor(Boolean(errors.email))}
          value={draft.email}
          onChange={(e) => setField("email")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-err" : undefined}
        />
        {errors.email ? (
          <p id="contact-email-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={60}
          className={fieldClassFor(Boolean(errors.phone))}
          value={draft.phone}
          onChange={(e) => setField("phone")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-err" : undefined}
        />
        {errors.phone ? (
          <p id="contact-phone-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Subject <span className="text-red-700">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          autoComplete="on"
          required
          maxLength={200}
          className={fieldClassFor(Boolean(errors.subject))}
          value={draft.subject}
          onChange={(e) => setField("subject")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-err" : undefined}
        />
        {errors.subject ? (
          <p id="contact-subject-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          autoComplete="off"
          required
          maxLength={6000}
          className={`${fieldClassFor(Boolean(errors.message))} min-h-[9rem] resize-y`}
          value={draft.message}
          onChange={(e) => setField("message")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-err" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        ) : (
          <p className="mt-1 text-xs text-account-black/55">Maximum 6000 characters</p>
        )}
      </div>

      <input type="hidden" name="startedAt" value={startedAt} readOnly />

      {formError ? (
        <p className="text-sm text-red-600" role="alert">
          {formError}
        </p>
      ) : null}
      {successUi ? <SubmissionStatusCallout {...successUi} /> : null}

      <button type="submit" className="btn btn-primary font-bold min-h-11 w-full sm:w-auto" disabled={submitting} aria-busy={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

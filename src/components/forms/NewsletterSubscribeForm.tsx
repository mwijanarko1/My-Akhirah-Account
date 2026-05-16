"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { formFieldHintClass, formFieldInputClass, formFieldLabelClass } from "@/components/forms/formFieldClasses";
import { mapSubmitError, validateNewsletterDraft } from "@/lib/validation/formsClient";

type NewsletterSubscribeFormProps = {
    /** Sent to `/api/newsletter` as `source` for analytics */
    source: string;
    /** Wider layout on dedicated newsletter page */
    layout?: "inline" | "stacked";
    /** Footer sits on dark teal — use light labels for readability */
    surface?: "light" | "dark";
};

export default function NewsletterSubscribeForm({
    source,
    layout = "inline",
    surface = "light",
}: NewsletterSubscribeFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const startedAt = useMemo(() => Date.now().toString(), []);
    const [honeypotArmed, setHoneypotArmed] = useState(false);
    const [company, setCompany] = useState("");

    useEffect(() => {
        setHoneypotArmed(true);
    }, []);

    const labelClass =
        surface === "dark" ? "block text-sm font-semibold text-white mb-1.5" : formFieldLabelClass;
    const hintClass =
        surface === "dark" ? "mt-1 text-xs text-white/75 leading-snug" : formFieldHintClass;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const validation = validateNewsletterDraft({ email });
        if (validation.email) {
            setStatus("error");
            setErrorMessage(validation.email);
            return;
        }
        setStatus("submitting");
        setErrorMessage("");

        try {
            const formData = new FormData();
            formData.set("email", email.trim());
            formData.set("consentTextVersion", "v1");
            formData.set("source", source);
            formData.set("company", company);
            formData.set("startedAt", startedAt);

            const response = await fetch("/api/newsletter", {
                method: "POST",
                body: formData,
            });
            const body = await response.json().catch(() => ({}));
            if (!response.ok) {
                setStatus("error");
                setErrorMessage(mapSubmitError(body));
                return;
            }
            setStatus("success");
            setEmail("");
        } catch {
            setStatus("error");
            setErrorMessage("Unable to submit right now.");
        }
    };

    const formClass =
        layout === "stacked"
            ? "flex flex-col gap-4 sm:gap-3"
            : "flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3";

    const successClass =
        surface === "dark"
            ? "mt-3 text-sm text-eternal-gold font-medium leading-relaxed"
            : layout === "stacked"
              ? "mt-3 text-sm text-akhirah-teal font-medium leading-relaxed"
              : "mt-3 text-sm text-mercy-mint";

    const errorClass =
        surface === "dark" ? "mt-3 text-sm text-red-200 font-medium leading-relaxed" : "mt-3 text-sm text-red-700";

    const emailId = `newsletter-email-${source.replace(/[^a-z0-9-]/gi, "-")}`;
    const describedBy = [`${emailId}-hint`, status === "error" ? `${emailId}-error` : null].filter(Boolean).join(" ");

    return (
        <div className="max-w-lg">
            <form className={formClass} onSubmit={handleSubmit} aria-label="Newsletter subscription form" noValidate>
                <div className="flex-1 min-w-0 relative">
                    <label htmlFor={emailId} className={labelClass}>
                        Email address
                    </label>
                    <input
                        id={emailId}
                        type="email"
                        className={formFieldInputClass}
                        required
                        autoComplete="email"
                        maxLength={255}
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === "error") {
                                setStatus("idle");
                                setErrorMessage("");
                            }
                        }}
                        disabled={status === "submitting"}
                        placeholder="you@example.com"
                        aria-invalid={status === "error"}
                        aria-describedby={describedBy || undefined}
                    />
                    <p id={`${emailId}-hint`} className={hintClass}>
                        Occasional updates only — unsubscribe anytime. See our privacy policy for how we store your email.
                    </p>
                    {honeypotArmed ? (
                        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                            <label htmlFor={`newsletter-company-${source}`}>Company</label>
                            <input
                                id={`newsletter-company-${source}`}
                                name="company"
                                type="text"
                                autoComplete="off"
                                tabIndex={-1}
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                    ) : null}
                    <input type="hidden" name="startedAt" value={startedAt} readOnly />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap font-bold w-full sm:w-auto min-h-11 shrink-0"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                >
                    {status === "submitting" ? "Subscribing…" : "Subscribe"}
                </button>
            </form>
            {status === "success" && (
                <p className={successClass} role="status">
                    You&apos;re subscribed — look for our next update in your inbox.
                </p>
            )}
            {status === "error" && (
                <p id={`${emailId}-error`} className={errorClass} role="alert">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

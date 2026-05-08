"use client";

import { FormEvent, useMemo, useState } from "react";
import { formFieldErrorClass, formFieldHintClass, formFieldInputClass, formFieldLabelClass } from "@/components/forms/formFieldClasses";
import { humanizePublicFormError, readPublicFormErrorMessage } from "@/lib/forms/publicFormMessages";

export default function ContactForm() {
    const startedAt = useMemo(() => Date.now().toString(), []);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                const msg = await readPublicFormErrorMessage(response);
                throw new Error(msg);
            }
            setStatus("success");
            form.reset();
        } catch (err) {
            setStatus("error");
            setErrorMessage(humanizePublicFormError(err instanceof Error ? err.message : ""));
        }
    };

    const disabled = status === "submitting";

    return (
        <div className="max-w-2xl">
            <form
                className="space-y-6 sm:space-y-7"
                onSubmit={handleSubmit}
                aria-describedby={status === "error" ? "contact-form-error" : undefined}
                noValidate
            >
                <input type="hidden" name="startedAt" value={startedAt} />
                <input type="hidden" name="company" value="" />

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
                    <div>
                        <label htmlFor="contact-fullName" className={formFieldLabelClass}>
                            Full name <span className="text-red-700">*</span>
                        </label>
                        <input
                            id="contact-fullName"
                            name="fullName"
                            type="text"
                            required
                            autoComplete="name"
                            maxLength={160}
                            disabled={disabled}
                            className={formFieldInputClass}
                            aria-required="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-email" className={formFieldLabelClass}>
                            Email <span className="text-red-700">*</span>
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            maxLength={255}
                            disabled={disabled}
                            className={formFieldInputClass}
                            aria-required="true"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="contact-phone" className={formFieldLabelClass}>
                        Phone <span className="text-account-black/55 font-normal">(optional)</span>
                    </label>
                    <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={60}
                        disabled={disabled}
                        className={formFieldInputClass}
                        placeholder="Include country code if outside the UK"
                    />
                    <p id="contact-phone-hint" className={formFieldHintClass}>
                        Share a number only if you’d like a callback about this enquiry.
                    </p>
                </div>

                <div>
                    <label htmlFor="contact-subject" className={formFieldLabelClass}>
                        Subject <span className="text-red-700">*</span>
                    </label>
                    <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        maxLength={200}
                        disabled={disabled}
                        className={formFieldInputClass}
                        placeholder="e.g. Donation receipt, Media enquiry"
                        aria-required="true"
                    />
                </div>

                <div>
                    <label htmlFor="contact-message" className={formFieldLabelClass}>
                        Message <span className="text-red-700">*</span>
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        maxLength={6000}
                        disabled={disabled}
                        className={`${formFieldInputClass} min-h-[140px] resize-y`}
                        placeholder="Tell us what you need — we read every message."
                        aria-required="true"
                    />
                    <p className={formFieldHintClass}>Up to 6,000 characters.</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                    <button type="submit" className="btn btn-primary font-bold w-full sm:w-auto min-h-11 px-8" disabled={disabled} aria-busy={disabled}>
                        {disabled ? "Sending message…" : "Send message"}
                    </button>
                    <p className="text-xs text-account-black/60 leading-snug sm:max-w-xs">
                        By sending this form you agree we’ll use your details only to respond to this enquiry, as described in our privacy policy.
                    </p>
                </div>
            </form>

            {status === "success" && (
                <p className="mt-6 text-sm sm:text-base text-akhirah-teal font-semibold leading-relaxed" role="status">
                    Thank you — your message was sent. We aim to reply within a few working days. If your question is urgent,
                    mention that in the subject line next time so we can prioritise it.
                </p>
            )}
            {status === "error" && (
                <p id="contact-form-error" className={`mt-6 ${formFieldErrorClass}`} role="alert">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

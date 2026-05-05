"use client";

import { FormEvent, useMemo, useState } from "react";

type NewsletterSubscribeFormProps = {
    /** Sent to `/api/newsletter` as `source` for analytics */
    source: string;
    /** Wider layout on dedicated newsletter page */
    layout?: "inline" | "stacked";
};

export default function NewsletterSubscribeForm({
    source,
    layout = "inline",
}: NewsletterSubscribeFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const startedAt = useMemo(() => Date.now().toString(), []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const formData = new FormData();
            formData.set("email", email);
            formData.set("consentTextVersion", "v1");
            formData.set("source", source);
            formData.set("company", "");
            formData.set("startedAt", startedAt);

            const response = await fetch("/api/newsletter", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Failed to subscribe");
            }
            setStatus("success");
            setEmail("");
        } catch {
            setStatus("error");
            setErrorMessage("Failed to subscribe. Please try again.");
        }
    };

    const formClass =
        layout === "stacked"
            ? "flex flex-col gap-3"
            : "flex flex-col sm:flex-row gap-3";

    const successClass =
        layout === "stacked"
            ? "mt-3 text-sm text-akhirah-teal font-medium"
            : "mt-3 text-sm text-mercy-mint";

    const errorClass = layout === "stacked" ? "mt-3 text-sm text-red-700" : "mt-3 text-sm text-red-300";

    return (
        <div className="max-w-lg">
            <form className={formClass} onSubmit={handleSubmit} aria-label="Newsletter subscription form">
                <div className="flex-1">
                    <label htmlFor={`newsletter-email-${source}`} className="sr-only">
                        Email address
                    </label>
                    <input
                        id={`newsletter-email-${source}`}
                        type="email"
                        className="min-h-11 w-full px-4 py-3 text-base rounded-sm text-account-black focus:outline-none focus:ring-2 focus:ring-eternal-gold border-2 border-akhirah-teal/15 bg-purity-white"
                        required
                        autoComplete="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "submitting"}
                        aria-describedby={status === "error" ? `newsletter-error-${source}` : undefined}
                        aria-invalid={status === "error"}
                    />
                    <input type="hidden" name="company" value="" />
                    <input type="hidden" name="startedAt" value={startedAt} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap font-bold"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                >
                    {status === "submitting" ? "Subscribing…" : "Subscribe"}
                </button>
            </form>
            {status === "success" && (
                <p className={successClass} role="status">
                    Thank you for subscribing.
                </p>
            )}
            {status === "error" && (
                <p id={`newsletter-error-${source}`} className={errorClass} role="alert">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

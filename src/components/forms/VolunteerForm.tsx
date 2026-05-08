"use client";

import { FormEvent, useMemo, useState } from "react";
import { formFieldErrorClass, formFieldHintClass, formFieldInputClass, formFieldLabelClass } from "@/components/forms/formFieldClasses";
import { humanizePublicFormError, readPublicFormErrorMessage } from "@/lib/forms/publicFormMessages";

const INTEREST_OPTIONS = [
    { value: "On-site logistics", description: "Warehouse packing, distributions, on-the-ground prep." },
    { value: "Community events", description: "Outreach booths, greeting donors, local gatherings." },
    { value: "Remote support", description: "Design, translation, comms, or screened admin help." },
    { value: "Other skills", description: "Anything else you’d like us to consider." },
] as const;

const AVAILABILITY_OPTIONS = [
    { value: "Weekday daytime", label: "Weekday daytime" },
    { value: "Weekday evenings", label: "Weekday evenings" },
    { value: "Weekends", label: "Weekends" },
    { value: "Flexible / variable", label: "Flexible / variable" },
] as const;

export default function VolunteerForm() {
    const startedAt = useMemo(() => Date.now().toString(), []);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [interestError, setInterestError] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const toggleInterest = (value: string) => {
        setInterestError("");
        setSelectedInterests((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInterestError("");
        setErrorMessage("");

        if (selectedInterests.length === 0) {
            setInterestError("Choose at least one way you’d like to help.");
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.set("interests", selectedInterests.join(", "));
        setStatus("submitting");

        try {
            const response = await fetch("/api/volunteer", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                const msg = await readPublicFormErrorMessage(response);
                throw new Error(msg);
            }
            setStatus("success");
            form.reset();
            setSelectedInterests([]);
        } catch (err) {
            setStatus("error");
            setErrorMessage(humanizePublicFormError(err instanceof Error ? err.message : ""));
        }
    };

    const disabled = status === "submitting";

    return (
        <div className="max-w-2xl">
            <form
                className="space-y-8 sm:space-y-10"
                onSubmit={handleSubmit}
                aria-describedby={
                    interestError ? "volunteer-interests-error" : status === "error" ? "volunteer-form-error" : undefined
                }
                noValidate
            >
                <input type="hidden" name="startedAt" value={startedAt} />
                <input type="hidden" name="company" value="" />

                <fieldset className="space-y-5 sm:space-y-6 border-0 p-0 m-0">
                    <legend className="text-lg font-bold text-akhirah-teal mb-4 sm:mb-5">Your details</legend>

                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="vol-fullName" className={formFieldLabelClass}>
                                Full name <span className="text-red-700">*</span>
                            </label>
                            <input
                                id="vol-fullName"
                                name="fullName"
                                type="text"
                                required
                                autoComplete="name"
                                maxLength={160}
                                disabled={disabled}
                                className={formFieldInputClass}
                            />
                        </div>
                        <div>
                            <label htmlFor="vol-email" className={formFieldLabelClass}>
                                Email <span className="text-red-700">*</span>
                            </label>
                            <input
                                id="vol-email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                maxLength={255}
                                disabled={disabled}
                                className={formFieldInputClass}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="vol-phone" className={formFieldLabelClass}>
                            Phone <span className="text-red-700">*</span>
                        </label>
                        <input
                            id="vol-phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            maxLength={60}
                            disabled={disabled}
                            className={formFieldInputClass}
                            placeholder="Best number for volunteer coordination"
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6">
                        <div>
                            <label htmlFor="vol-country" className={formFieldLabelClass}>
                                Country <span className="text-red-700">*</span>
                            </label>
                            <input
                                id="vol-country"
                                name="country"
                                type="text"
                                required
                                autoComplete="country-name"
                                maxLength={100}
                                disabled={disabled}
                                className={formFieldInputClass}
                            />
                        </div>
                        <div>
                            <label htmlFor="vol-city" className={formFieldLabelClass}>
                                City / town <span className="text-red-700">*</span>
                            </label>
                            <input
                                id="vol-city"
                                name="city"
                                type="text"
                                required
                                autoComplete="address-level2"
                                maxLength={100}
                                disabled={disabled}
                                className={formFieldInputClass}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="space-y-4 border-0 p-0 m-0">
                    <legend className="text-lg font-bold text-akhirah-teal mb-2">How you&apos;d like to help</legend>
                    <p className={`${formFieldHintClass} mb-3`}>Select every option that fits — we&apos;ll follow up with roles that match.</p>
                    <div className="grid gap-3 sm:gap-4">
                        {INTEREST_OPTIONS.map((opt) => {
                            const id = `vol-interest-${opt.value.replace(/\s+/g, "-").toLowerCase()}`;
                            const checked = selectedInterests.includes(opt.value);
                            return (
                                <label
                                    key={opt.value}
                                    htmlFor={id}
                                    className={`flex gap-3 rounded-sm border-2 p-4 cursor-pointer transition-colors ${
                                        checked ? "border-akhirah-teal bg-mercy-mint/50" : "border-akhirah-teal/15 bg-purity-white"
                                    } ${disabled ? "opacity-60 cursor-not-allowed" : "hover:border-akhirah-teal/40"}`}
                                >
                                    <input
                                        id={id}
                                        type="checkbox"
                                        checked={checked}
                                        disabled={disabled}
                                        onChange={() => toggleInterest(opt.value)}
                                        className="mt-1 h-4 w-4 shrink-0 rounded-sm border-akhirah-teal/40 text-akhirah-teal focus:ring-akhirah-teal"
                                    />
                                    <span>
                                        <span className="block text-sm font-semibold text-account-black">{opt.value}</span>
                                        <span className="block text-xs text-account-black/65 mt-0.5 leading-snug">{opt.description}</span>
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                    {interestError ? (
                        <p id="volunteer-interests-error" className={formFieldErrorClass} role="alert">
                            {interestError}
                        </p>
                    ) : null}
                </fieldset>

                <div>
                    <label htmlFor="vol-availability" className={formFieldLabelClass}>
                        Typical availability <span className="text-red-700">*</span>
                    </label>
                    <select
                        id="vol-availability"
                        name="availability"
                        required
                        disabled={disabled}
                        className={formFieldInputClass}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Choose an option
                        </option>
                        {AVAILABILITY_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="vol-experience" className={formFieldLabelClass}>
                        Relevant experience <span className="text-account-black/55 font-normal">(optional)</span>
                    </label>
                    <textarea
                        id="vol-experience"
                        name="experience"
                        rows={4}
                        maxLength={4000}
                        disabled={disabled}
                        className={`${formFieldInputClass} min-h-[100px] resize-y`}
                        placeholder="Skills, certifications, or similar volunteering — helps us match you faster."
                    />
                    <p className={formFieldHintClass}>Up to 4,000 characters.</p>
                </div>

                <div>
                    <label htmlFor="vol-motivation" className={formFieldLabelClass}>
                        Why do you want to volunteer with us? <span className="text-red-700">*</span>
                    </label>
                    <textarea
                        id="vol-motivation"
                        name="motivation"
                        required
                        rows={5}
                        maxLength={4000}
                        disabled={disabled}
                        className={`${formFieldInputClass} min-h-[120px] resize-y`}
                        placeholder="A few sentences is plenty — we’d love to hear what drew you to My Akhirah Account."
                    />
                    <p className={formFieldHintClass}>Up to 4,000 characters.</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                    <button type="submit" className="btn btn-primary font-bold w-full sm:w-auto min-h-11 px-8" disabled={disabled} aria-busy={disabled}>
                        {disabled ? "Submitting application…" : "Submit application"}
                    </button>
                    <p className="text-xs text-account-black/60 leading-snug sm:max-w-sm">
                        We&apos;ll only use these details to assess volunteering roles and respond to you, as described in our privacy policy.
                    </p>
                </div>
            </form>

            {status === "success" && (
                <p className="mt-6 text-sm sm:text-base text-akhirah-teal font-semibold leading-relaxed" role="status">
                    Application received — thank you. The team will email you when there&apos;s a suitable opportunity or if we need more
                    detail. If you don&apos;t hear back within two weeks, message us through the contact page.
                </p>
            )}
            {status === "error" && (
                <p id="volunteer-form-error" className={`mt-6 ${formFieldErrorClass}`} role="alert">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

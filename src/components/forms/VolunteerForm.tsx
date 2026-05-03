"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  validateVolunteerDraft,
  mapSubmitError,
  type VolunteerDraft,
} from "@/lib/validation/formsClient";

const fieldClass =
  "min-h-11 w-full px-4 py-3 text-base rounded-sm border border-akhirah-teal/15 bg-purity-white text-account-black placeholder:text-account-black/40 focus:outline-none focus:ring-2 focus:ring-eternal-gold";

export default function VolunteerForm() {
  const startedAt = useMemo(() => String(Date.now()), []);
  const [draft, setDraft] = useState<VolunteerDraft>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    interestsRaw: "",
    availability: "",
    experience: "",
    motivation: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof VolunteerDraft, string>>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField =
    <K extends keyof VolunteerDraft>(key: K) =>
    (value: VolunteerDraft[K]) => {
      setDraft((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setFormError("");
      setSuccess(false);
    };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    setSuccess(false);

    const next = validateVolunteerDraft(draft);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("fullName", draft.fullName.trim());
      formData.set("email", draft.email.trim());
      formData.set("phone", draft.phone.trim());
      formData.set("country", draft.country.trim());
      formData.set("city", draft.city.trim());
      formData.set("interests", draft.interestsRaw.trim());
      formData.set("availability", draft.availability.trim());
      if (draft.experience.trim()) {
        formData.set("experience", draft.experience.trim());
      }
      formData.set("motivation", draft.motivation.trim());
      formData.set("company", "");
      formData.set("startedAt", startedAt);

      const res = await fetch("/api/volunteer", { method: "POST", body: formData });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFormError(mapSubmitError(body));
        return;
      }
      setSuccess(true);
      setDraft({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        interestsRaw: "",
        availability: "",
        experience: "",
        motivation: "",
      });
    } catch {
      setFormError("Unable to submit right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-2xl" noValidate aria-label="Volunteer application">
      <input type="hidden" name="company" value="" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="vol-fullName" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
            Full name <span className="text-red-700">*</span>
          </label>
          <input
            id="vol-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={160}
            className={fieldClass}
            value={draft.fullName}
            onChange={(e) => setField("fullName")(e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "vol-fullName-err" : undefined}
          />
          {errors.fullName ? (
            <p id="vol-fullName-err" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="vol-email" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            id="vol-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={255}
            className={fieldClass}
            value={draft.email}
            onChange={(e) => setField("email")(e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "vol-email-err" : undefined}
          />
          {errors.email ? (
            <p id="vol-email-err" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="vol-phone" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
            Phone <span className="text-red-700">*</span>
          </label>
          <input
            id="vol-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={60}
            className={fieldClass}
            value={draft.phone}
            onChange={(e) => setField("phone")(e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "vol-phone-err" : undefined}
          />
          {errors.phone ? (
            <p id="vol-phone-err" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="vol-country" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
            Country <span className="text-red-700">*</span>
          </label>
          <input
            id="vol-country"
            name="country"
            type="text"
            autoComplete="country-name"
            required
            maxLength={100}
            className={fieldClass}
            value={draft.country}
            onChange={(e) => setField("country")(e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "vol-country-err" : undefined}
          />
          {errors.country ? (
            <p id="vol-country-err" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.country}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="vol-city" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
            City <span className="text-red-700">*</span>
          </label>
          <input
            id="vol-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            maxLength={100}
            className={fieldClass}
            value={draft.city}
            onChange={(e) => setField("city")(e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "vol-city-err" : undefined}
          />
          {errors.city ? (
            <p id="vol-city-err" className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.city}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="vol-interests" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Interests <span className="text-red-700">*</span>
        </label>
        <textarea
          id="vol-interests"
          name="interests"
          rows={3}
          autoComplete="off"
          placeholder="School builds, distributions, volunteering locally, translations…"
          maxLength={600}
          required
          className={`${fieldClass} min-h-[5.5rem]`}
          value={draft.interestsRaw}
          onChange={(e) => setField("interestsRaw")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.interestsRaw)}
          aria-describedby={errors.interestsRaw ? "vol-interests-err" : undefined}
        />
        {errors.interestsRaw ? (
          <p id="vol-interests-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.interestsRaw}
          </p>
        ) : (
          <p className="mt-1 text-xs text-account-black/55">Separate multiple interests with commas (max 600 characters total).</p>
        )}
      </div>

      <div>
        <label htmlFor="vol-availability" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Availability <span className="text-red-700">*</span>
        </label>
        <input
          id="vol-availability"
          name="availability"
          type="text"
          autoComplete="off"
          maxLength={200}
          required
          className={fieldClass}
          value={draft.availability}
          onChange={(e) => setField("availability")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.availability)}
          aria-describedby={errors.availability ? "vol-availability-err" : undefined}
        />
        {errors.availability ? (
          <p id="vol-availability-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.availability}
          </p>
        ) : (
          <p className="mt-1 text-xs text-account-black/55">Examples: weekdays after 17:00, weekends, term breaks.</p>
        )}
      </div>

      <div>
        <label htmlFor="vol-experience" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Relevant experience
        </label>
        <textarea
          id="vol-experience"
          name="experience"
          rows={4}
          autoComplete="off"
          maxLength={4000}
          className={`${fieldClass} min-h-[7rem]`}
          value={draft.experience}
          onChange={(e) => setField("experience")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.experience)}
          aria-describedby={errors.experience ? "vol-experience-err" : undefined}
        />
        {errors.experience ? (
          <p id="vol-experience-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.experience}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="vol-motivation" className="block text-sm font-semibold text-akhirah-teal mb-1.5">
          Why you want to volunteer <span className="text-red-700">*</span>
        </label>
        <textarea
          id="vol-motivation"
          name="motivation"
          rows={5}
          autoComplete="off"
          required
          maxLength={4000}
          className={`${fieldClass} min-h-[8rem]`}
          value={draft.motivation}
          onChange={(e) => setField("motivation")(e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(errors.motivation)}
          aria-describedby={errors.motivation ? "vol-motivation-err" : undefined}
        />
        {errors.motivation ? (
          <p id="vol-motivation-err" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.motivation}
          </p>
        ) : null}
      </div>

      <input type="hidden" name="startedAt" value={startedAt} readOnly />

      {formError ? (
        <p className="text-sm text-red-600" role="alert">
          {formError}
        </p>
      ) : null}
      {success ? (
        <p className="text-sm font-semibold text-akhirah-teal" role="status">
          Thank you — we received your application.
        </p>
      ) : null}

      <button type="submit" className="btn btn-secondary font-bold min-h-11 w-full sm:w-auto text-white" disabled={submitting} aria-busy={submitting}>
        {submitting ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}

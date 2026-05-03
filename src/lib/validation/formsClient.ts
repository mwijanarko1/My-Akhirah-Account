/**
 * Client-safe mirrors of rules in `./forms.ts` for inline validation UX.
 * Authoritative parsing remains server-side in API routes.
 */

const trim = (v: string) => v.trim();

function required(label: string, value: string, max: number): string | undefined {
  const t = trim(value);
  if (!t) return `${label} is required`;
  if (t.length > max) return `${label} must be ${max} characters or fewer`;
  return undefined;
}

function optionalMax(label: string, value: string, max: number): string | undefined {
  const t = trim(value);
  if (!t) return undefined;
  if (t.length > max) return `${label} must be ${max} characters or fewer`;
  return undefined;
}

export interface ContactDraft {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function validateContactDraft(draft: ContactDraft): Partial<Record<keyof ContactDraft, string>> {
  const errs: Partial<Record<keyof ContactDraft, string>> = {};

  let e = required("Full name", draft.fullName, 160);
  if (e) errs.fullName = e;

  e = required("Email", draft.email, 255);
  if (e) errs.email = e;

  e = optionalMax("Phone", draft.phone, 60);
  if (e) errs.phone = e;

  e = required("Subject", draft.subject, 200);
  if (e) errs.subject = e;

  e = required("Message", draft.message, 6000);
  if (e) errs.message = e;

  return errs;
}

export interface NewsletterDraft {
  email: string;
}

export function validateNewsletterDraft(draft: NewsletterDraft): Partial<Record<keyof NewsletterDraft, string>> {
  const errs: Partial<Record<keyof NewsletterDraft, string>> = {};
  const e = required("Email", draft.email, 255);
  if (e) errs.email = e;
  return errs;
}

export interface VolunteerDraft {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  interestsRaw: string;
  availability: string;
  experience: string;
  motivation: string;
}

export function validateVolunteerDraft(draft: VolunteerDraft): Partial<Record<keyof VolunteerDraft, string>> {
  const errs: Partial<Record<keyof VolunteerDraft, string>> = {};

  let e = required("Full name", draft.fullName, 160);
  if (e) errs.fullName = e;

  e = required("Email", draft.email, 255);
  if (e) errs.email = e;

  e = required("Phone", draft.phone, 60);
  if (e) errs.phone = e;

  e = required("Country", draft.country, 100);
  if (e) errs.country = e;

  e = required("City", draft.city, 100);
  if (e) errs.city = e;

  e = required("Interests", draft.interestsRaw, 600);
  if (e) errs.interestsRaw = e;
  else {
    const segments = draft.interestsRaw
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
    if (!segments.length) errs.interestsRaw = "Add at least one interest";
  }

  e = required("Availability", draft.availability, 200);
  if (e) errs.availability = e;

  e = optionalMax("Experience", draft.experience, 4000);
  if (e) errs.experience = e;

  e = required("Motivation", draft.motivation, 4000);
  if (e) errs.motivation = e;

  return errs;
}

export function mapSubmitError(raw: unknown): string {
  if (
    typeof raw === "object" &&
    raw !== null &&
    "error" in raw &&
    typeof (raw as { error: unknown }).error === "string"
  ) {
    const msg = (raw as { error: string }).error;
    if (msg.includes("Spam detected")) return "Submission could not be sent.";
    if (msg.includes("Submission too fast") || msg.includes("too fast"))
      return "Please wait a moment before submitting.";
    return msg;
  }
  return "Something went wrong. Please try again.";
}

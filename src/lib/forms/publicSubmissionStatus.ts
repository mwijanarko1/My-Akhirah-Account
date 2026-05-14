/**
 * User-facing copy for successful form API responses from Convex-backed mutations.
 * Keep aligned with `convex/forms.ts` return shapes only — do not surface internal
 * staff workflow statuses (e.g. contact row `status: "new"`).
 */

export type ContactApiSuccessStatus = "created";
export type VolunteerApiSuccessStatus = "created";
export type NewsletterApiSuccessStatus = "subscribed" | "reactivated";

export type SubmissionStatusUi = {
  badge: string;
  title: string;
  description: string;
};

export function contactSubmissionStatusUi(apiStatus: unknown): SubmissionStatusUi {
  if (apiStatus === "created") {
    return {
      badge: "Received",
      title: "We received your message",
      description:
        "A teammate will read it and reply by email when they can. You do not need to do anything else right now.",
    };
  }
  return {
    badge: "Submitted",
    title: "Thank you",
    description: "Your message was sent successfully.",
  };
}

export function volunteerSubmissionStatusUi(apiStatus: unknown): SubmissionStatusUi {
  if (apiStatus === "created") {
    return {
      badge: "Received",
      title: "We received your application",
      description:
        "If your skills and availability match an upcoming need, we will contact you by email. We cannot reply to every application individually.",
    };
  }
  return {
    badge: "Submitted",
    title: "Thank you",
    description: "Your volunteer application was sent successfully.",
  };
}

export function newsletterSubmissionStatusUi(apiStatus: unknown): SubmissionStatusUi {
  if (apiStatus === "reactivated") {
    return {
      badge: "Welcome back",
      title: "You are subscribed again",
      description: "We have turned email updates back on for this address.",
    };
  }
  if (apiStatus === "subscribed") {
    return {
      badge: "Subscribed",
      title: "You are on the list",
      description: "We will only email you when we have something worth sharing.",
    };
  }
  return {
    badge: "Done",
    title: "Thank you",
    description: "Your newsletter preferences were updated.",
  };
}

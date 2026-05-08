import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { api } from "../../../../convex/_generated/api";
import { runConvexMutation } from "@/lib/server/convex";
import { consumeRateLimit, getClientIp, hashIp } from "@/lib/server/security";
import { parseNewsletterForm, verifyHoneypot, verifySubmissionDelay } from "@/lib/validation/forms";

const SAFE_ERRORS = [
  "Spam detected",
  "Submission too fast",
  "Submission expired",
  "Missing startedAt",
  "Invalid startedAt",
  "Invalid email format",
];

function getSafeErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return "Unable to submit right now.";
  }
  if (error.message.startsWith("Missing ") || error.message.endsWith(" is too long")) {
    return error.message;
  }
  if (SAFE_ERRORS.includes(error.message)) {
    return error.message;
  }
  return "Unable to submit right now.";
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    verifyHoneypot(formData);
    verifySubmissionDelay(formData);
    const payload = parseNewsletterForm(formData);

    const ipHash = hashIp(getClientIp(request));
    await consumeRateLimit("newsletter", ipHash, 20, 60 * 60 * 1000);

    const result = await runConvexMutation(api.forms.subscribeNewsletter, {
      ...payload,
      requestMeta: {
        ipHash,
        userAgent: request.headers.get("user-agent") ?? undefined,
        requestId: randomUUID(),
        source: payload.source ?? "website",
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: getSafeErrorMessage(error) },
      { status: 400 },
    );
  }
}

/**
 * Maps `/api/*` form JSON errors to friendly UI copy (spam guard, rate limits, validation).
 */
export async function readPublicFormErrorMessage(response: Response): Promise<string> {
    try {
        const data: unknown = await response.json();
        if (data && typeof data === "object" && "error" in data) {
            const err = (data as { error?: unknown }).error;
            if (typeof err === "string" && err.trim()) {
                return humanizePublicFormError(err.trim());
            }
        }
    } catch {
        /* ignore malformed JSON */
    }
    return humanizePublicFormError("");
}

export function humanizePublicFormError(message: string): string {
    if (!message) {
        return "Something went wrong and we couldn’t send that. Please wait a moment and try again.";
    }
    if (message === "Submission too fast") {
        return "That went through a little too quickly. Please wait a second and try again.";
    }
    if (message === "Spam detected") {
        return "We couldn’t submit this request. If you’re browsing normally, refresh the page and try once more.";
    }
    return message;
}

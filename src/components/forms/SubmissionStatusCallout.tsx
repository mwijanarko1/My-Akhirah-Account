import type { SubmissionStatusUi } from "@/lib/forms/publicSubmissionStatus";

type SubmissionStatusCalloutProps = SubmissionStatusUi & {
  className?: string;
};

export default function SubmissionStatusCallout({
  badge,
  title,
  description,
  className = "",
}: SubmissionStatusCalloutProps) {
  return (
    <div
      role="status"
      className={`rounded-sm border border-akhirah-teal/20 bg-mercy-mint/90 p-4 text-account-black ${className}`}
    >
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-eternal-gold">{badge}</p>
      <p className="mb-1 text-base font-semibold text-akhirah-teal">{title}</p>
      <p className="text-sm leading-relaxed text-account-black/80">{description}</p>
    </div>
  );
}

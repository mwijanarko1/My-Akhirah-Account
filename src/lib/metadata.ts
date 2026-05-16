import type { Metadata } from "next";

/** Mirrors `src/app/layout.tsx` — site name and default description for child routes. */
export const SITE_NAME = "My Akhirah Account";

export const DEFAULT_DESCRIPTION =
  "My Akhirah Account helps you invest in your hereafter through charitable giving, community support, and spiritual growth.";

export const DEFAULT_KEYWORDS = [
  "charity",
  "Islamic",
  "akhirah",
  "sadaqah",
  "zakat",
  "giving",
] as const;

export function pageTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
}: {
  title: string;
  description?: string;
  keywords?: string[];
}): Metadata {
  return {
    title: pageTitle(title),
    description,
    keywords: [...(keywords ?? DEFAULT_KEYWORDS)],
  };
}

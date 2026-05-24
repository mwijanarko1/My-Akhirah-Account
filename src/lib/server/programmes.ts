import { api } from "../../../convex/_generated/api";
import { fetchConvexQuery } from "./convex";

export type ProgrammePublicSummary = {
  slug: string;
  name: string;
  summary: string;
};

export type ProgrammePublicDetail = ProgrammePublicSummary & {
  descriptionMarkdown: string;
};

/**
 * Listing page only: if Convex is unreachable at build/runtime, return [] so the index
 * can show its empty state. Detail lookups must not use this pattern (see getPublicBySlug).
 */
export async function getProgrammesPublicList(): Promise<ProgrammePublicSummary[]> {
  try {
    return await fetchConvexQuery(api.programs.listPublicSummaries, {});
  } catch {
    return [];
  }
}

/** Returns null when the slug is missing or unpublished; fetch/config errors propagate. */
export async function getProgrammePublicBySlug(slug: string): Promise<ProgrammePublicDetail | null> {
  return await fetchConvexQuery(api.programs.getPublicBySlug, { slug });
}

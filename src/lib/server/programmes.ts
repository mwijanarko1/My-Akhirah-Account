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

export async function getProgrammesPublicList(): Promise<ProgrammePublicSummary[]> {
  try {
    return await fetchConvexQuery(api.programs.listPublicSummaries, {});
  } catch {
    return [];
  }
}

export async function getProgrammePublicBySlug(slug: string): Promise<ProgrammePublicDetail | null> {
  try {
    return await fetchConvexQuery(api.programs.getPublicBySlug, { slug });
  } catch {
    return null;
  }
}

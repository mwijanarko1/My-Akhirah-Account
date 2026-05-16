import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireDomainAccess } from "./lib/auth";
import { normalizeSlug } from "./lib/validators";

/** Public listing: only fields safe to show on the marketing site. */
export const listPublicSummaries = query({
  args: {},
  handler: async (ctx) => {
    const programs = await ctx.db.query("programs").collect();
    return programs
      .filter((program) => program.isActive)
      .map((program) => ({
        slug: program.slug,
        name: program.name,
        summary: program.summary,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});

/** Public detail for an active programme by slug. */
export const getPublicBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const slug = normalizeSlug(args.slug);
    const program = await ctx.db
      .query("programs")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();
    if (!program || !program.isActive) {
      return null;
    }
    return {
      slug: program.slug,
      name: program.name,
      summary: program.summary,
      descriptionMarkdown: program.descriptionMarkdown,
    };
  },
});

export const listActive = query({
  args: {},
  handler: async (ctx) => {
    const programs = await ctx.db.query("programs").collect();
    return programs.filter((program) => program.isActive);
  },
});

export const create = mutation({
  args: {
    slug: v.string(),
    name: v.string(),
    summary: v.string(),
    descriptionMarkdown: v.string(),
    heroMediaId: v.optional(v.id("media_assets")),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    await requireDomainAccess(ctx, "content");
    const now = Date.now();
    return await ctx.db.insert("programs", {
      slug: normalizeSlug(args.slug),
      name: args.name.trim(),
      summary: args.summary.trim(),
      descriptionMarkdown: args.descriptionMarkdown.trim(),
      heroMediaId: args.heroMediaId,
      isActive: args.isActive ?? true,
      createdAt: now,
      updatedAt: now,
    });
  },
});

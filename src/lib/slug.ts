/** Matches Convex `normalizeSlug`: lowercase, trim, spaces → hyphens. */
export function normalizeContentSlug(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

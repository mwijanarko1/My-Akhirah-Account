import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function normalizeSlug(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch) {
    const raw = decodeURIComponent(blogMatch[1]);
    const normalized = normalizeSlug(raw);
    if (raw !== normalized) {
      const url = request.nextUrl.clone();
      url.pathname = `/blog/${encodeURIComponent(normalized)}`;
      return NextResponse.redirect(url, 308);
    }
  }

  const eventsMatch = pathname.match(/^\/events\/([^/]+)\/?$/);
  if (eventsMatch) {
    const raw = decodeURIComponent(eventsMatch[1]);
    const normalized = normalizeSlug(raw);
    if (raw !== normalized) {
      const url = request.nextUrl.clone();
      url.pathname = `/events/${encodeURIComponent(normalized)}`;
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:slug*", "/events/:slug*"],
};

import { api } from "../../../convex/_generated/api";
import {
  mockBlogPostDetailsBySlug,
  mockBlogs,
  mockEventDetailsBySlug,
  mockEvents,
} from "../mockData";
import { normalizeContentSlug } from "../slug";
import { fetchConvexQuery } from "./convex";

export async function listPublishedBlogPosts() {
  try {
    const posts = await fetchConvexQuery(api.posts.listPublished, { limit: 24 });
    if (posts.length > 0) {
      return posts;
    }
  } catch {
    /* Convex unavailable or misconfigured — use mock data */
  }
  return mockBlogs;
}

export async function listPublishedEvents() {
  try {
    const events = await fetchConvexQuery(api.events.listPublished, { limit: 48 });
    if (events.length > 0) {
      return events;
    }
  } catch {
    /* Convex unavailable or misconfigured — use mock data */
  }
  return mockEvents;
}

export async function getBlogPostBySlug(slug: string) {
  const normalized = normalizeContentSlug(slug);
  try {
    const post = await fetchConvexQuery(api.posts.getBySlug, { slug: normalized });
    if (post) {
      return post;
    }
  } catch {
    /* fall through to mock */
  }
  const mock = mockBlogPostDetailsBySlug[normalized];
  return mock ?? null;
}

export async function getEventBySlug(slug: string) {
  const normalized = normalizeContentSlug(slug);
  try {
    const event = await fetchConvexQuery(api.events.getBySlug, { slug: normalized });
    if (event) {
      return event;
    }
  } catch {
    /* fall through to mock */
  }
  return mockEventDetailsBySlug[normalized] ?? null;
}

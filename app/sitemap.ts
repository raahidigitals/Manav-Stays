import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

const BASE_URL = "https://www.manavstays.com";

const BLOG_POSTS_QUERY = `
  *[_type == "blog" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    _updatedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await client.fetch(
    BLOG_POSTS_QUERY,
    {},
    { cache: "no-store" }
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hotel-lalit`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hotel-naman`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dockyard`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/travel-journal`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(
    (post: {
      slug: string;
      publishedAt?: string;
      _updatedAt?: string;
    }) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified:
        post._updatedAt ||
        post.publishedAt ||
        new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...blogPages];
}
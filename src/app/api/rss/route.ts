import { getPosts } from "@/utils/utils";
import { baseURL, blog, person } from "@/resources/resources-server";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${blog.title}</title>
    <link>${baseURL}/blog</link>
    <description>${blog.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/api/rss" rel="self" type="application/rss+xml" />
    ${sortedPosts.map(post => `
      <item>
        <title>${post.metadata.title}</title>
        <link>${baseURL}/blog/${post.slug}</link>
        <guid>${baseURL}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        <description><![CDATA[${post.metadata.summary}]]></description>
        ${post.metadata.image ? `<enclosure url="${baseURL}${post.metadata.image}" type="image/jpeg" />` : ""}
        ${post.metadata.tag ? `<category>${post.metadata.tag}</category>` : ""}
        <author>${person.email || "noreply@example.com"} (${person.name})</author>
      </item>`).join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: { "Content-Type": "application/xml" },
  });
}

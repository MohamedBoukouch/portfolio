// // app/sitemap.ts
// import { getPosts } from "@/utils/server-utils";
// import { baseURL } from "@/resources/server";

// export const runtime = "nodejs"; // Node runtime to allow fs/path

// export default async function GET() {
//   // Fetch blogs and works
//   const blogs = getPosts(["src", "app", "blog", "posts"]).map((p) => ({
//     url: `${baseURL}/blog/${p.slug}`,
//     lastModified: p.metadata?.publishedAt || new Date().toISOString(),
//   }));

//   const works = getPosts(["src", "app", "work", "projects"]).map((p) => ({
//     url: `${baseURL}/work/${p.slug}`,
//     lastModified: p.metadata?.publishedAt || new Date().toISOString(),
//   }));

//   // Static routes
//   const staticRoutes = [
//     { url: `${baseURL}/`, lastModified: new Date().toISOString() },
//     { url: `${baseURL}/about`, lastModified: new Date().toISOString() },
//     { url: `${baseURL}/work`, lastModified: new Date().toISOString() },
//     { url: `${baseURL}/blog`, lastModified: new Date().toISOString() },
//     { url: `${baseURL}/gallery`, lastModified: new Date().toISOString() },
//   ];

//   const allUrls = [...staticRoutes, ...blogs, ...works];

//   // Build XML
//   const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${allUrls
//     .map(
//       (route) => `<url>
//   <loc>${route.url}</loc>
//   <lastmod>${route.lastModified}</lastmod>
// </url>`
//     )
//     .join("\n")}
// </urlset>`;

//   return new Response(sitemapXml, {
//     headers: { "Content-Type": "application/xml" },
//   });
// }

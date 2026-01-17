import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPosts } from "@/utils/utils";
import { formatDate } from "@/utils/formatDate";

import {
  Meta,
  Schema,
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
} from "@once-ui-system/core";

import { baseURL, about, person, work } from "@/resources";
import { ScrollToHash, CustomMDX } from "@/components";
import { Projects } from "@/components/work/Projects";

/* ----------------------- Static params for SSG ----------------------- */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/* -------------------------- Metadata -------------------------- */
export async function generateMetadata({
  params,
}: {
  params: { slug: string | string[] };
}): Promise<Metadata> {
  // Unwrap params safely
  const slugParam = await Promise.resolve(params);
  const slug = Array.isArray(slugParam.slug)
    ? slugParam.slug.join("/")
    : slugParam.slug;

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!post) return {};

  const ogImage =
    post.metadata.image ??
    `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`;

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image: ogImage,
    path: `${work.path}/${post.slug}`,
  });
}

/* -------------------------- Project Page -------------------------- */
export default async function ProjectPage({
  params,
}: {
  params: { slug: string | string[] };
}) {
  const slugParam = await Promise.resolve(params); // Unwrap params
  const slug = Array.isArray(slugParam.slug)
    ? slugParam.slug.join("/")
    : slugParam.slug;

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!post) {
    console.error("Slug not found:", slug);
    console.log("Available slugs:", posts.map((p) => p.slug));
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({ src: member.avatar })) ?? [];

  const heroImage = post.metadata.images?.[0] ?? null;

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ??
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>

        {post.metadata.publishedAt && (
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        )}

        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>

      {/* Team */}
      {avatars.length > 0 && (
        <Row marginBottom="32" horizontal="center">
          <Row gap="16" vertical="center">
            <AvatarGroup reverse avatars={avatars} size="s" />

            <Text variant="label-default-m" onBackground="brand-weak">
              {post.metadata.team?.map((member, index) => (
                <span key={index}>
                  {index > 0 && (
                    <Text as="span" onBackground="neutral-weak">
                      ,{" "}
                    </Text>
                  )}
                  <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
                </span>
              ))}
            </Text>
          </Row>
        </Row>
      )}

      {/* Hero image */}
      {heroImage && <Media priority aspectRatio="16/9" radius="m" alt={post.metadata.title} src={heroImage} />}

      {/* Content */}
      <Column as="article" maxWidth="xs" style={{ margin: "auto" }}>
        <CustomMDX source={post.content} />
      </Column>

      {/* Related projects */}
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl">
          Related projects
        </Heading>
        <Projects exclude={[post.slug]} range={[2]} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}

import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";

import { CustomMDX, ScrollToHash } from "@/components";
import {
  Schema,
  Column,
  Heading,
  HeadingNav,
  Row,
  Text,
  SmartLink,
  Avatar,
  Media,
  Line,
} from "@once-ui-system/core";

import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";

/* ✅ FORCE NODE */
export const runtime = "nodejs";

/* ✅ STATIC PARAMS — MUST NEVER THROW */
export async function generateStaticParams() {
  try {
    const posts = getPosts(["src", "app", "blog", "posts"]);
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("generateStaticParams failed:", error);
    return [];
  }
}

/* ✅ SAFE METADATA — NO notFound HERE */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const posts = getPosts(["src", "app", "blog", "posts"]);
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) return {};

    return {
      title: post.metadata.title,
      description: post.metadata.summary,
      openGraph: {
        title: post.metadata.title,
        description: post.metadata.summary,
        url: `${baseURL}${blog.path}/${post.slug}`,
        images: [
          {
            url:
              post.metadata.image ??
              `/api/og/generate?title=${encodeURIComponent(
                post.metadata.title
              )}`,
          },
        ],
      },
    };
  } catch {
    return {};
  }
}

/* ✅ PAGE — notFound ONLY AT RUNTIME */
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }} />

      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="m" gap="l" paddingTop="24">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ??
              `/api/og/generate?title=${encodeURIComponent(
                post.metadata.title
              )}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />

          <Column maxWidth="s" align="center" gap="16">
            <SmartLink href="/blog">
              <Text variant="label-strong-m">Blog</Text>
            </SmartLink>

            <Text variant="body-default-xs" onBackground="neutral-weak">
              {post.metadata.publishedAt &&
                formatDate(post.metadata.publishedAt)}
            </Text>

            <Heading variant="display-strong-m">
              {post.metadata.title}
            </Heading>
          </Column>

          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              radius="l"
            />
          )}

          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>

          <ShareSection
            title={post.metadata.title}
            url={`${baseURL}${blog.path}/${post.slug}`}
          />

          <Column fillWidth gap="40" marginTop="40">
            <Line maxWidth="40" />
            <Text as="h2" variant="heading-strong-xl">
              Recent posts
            </Text>
            <Posts exclude={[post.slug]} range={[1, 2]} />
          </Column>

          <ScrollToHash />
        </Column>
      </Row>

      <Column maxWidth={12} position="sticky" top="80" m={{ hide: true }}>
        <HeadingNav />
      </Column>
    </Row>
  );
}

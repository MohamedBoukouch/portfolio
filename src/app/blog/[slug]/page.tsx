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

/* ✅ FORCE NODE — disables Edge */
export const runtime = "nodejs";

/* ✅ STATIC GENERATION */
export async function generateStaticParams() {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({ slug: post.slug }));
}

/* ✅ SAFE METADATA (NO EDGE) */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

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
}

/* ✅ PAGE */
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

  const avatars =
    post.metadata.team?.map((p) => ({ src: p.avatar })) ?? [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }} />

      <Row fillWidth horizontal="center">
        <Column
          as="section"
          maxWidth="m"
          horizontal="center"
          gap="l"
          paddingTop="24"
        >
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

          <Column maxWidth="s" gap="16" align="center">
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

            {post.metadata.subtitle && (
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                align="center"
                style={{ fontStyle: "italic" }}
              >
                {post.metadata.subtitle}
              </Text>
            )}
          </Column>

          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m">
                {person.name}
              </Text>
            </Row>
          </Row>

          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              border="neutral-alpha-weak"
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
            <Posts
              exclude={[post.slug]}
              range={[1, 2]}
              columns="2"
              thumbnail
              direction="column"
            />
          </Column>

          <ScrollToHash />
        </Column>
      </Row>

      <Column
        maxWidth={12}
        paddingLeft="40"
        position="sticky"
        top="80"
        m={{ hide: true }}
      >
        <HeadingNav />
      </Column>
    </Row>
  );
}

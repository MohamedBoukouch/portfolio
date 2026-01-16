import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

import {
  Meta,
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

import { CustomMDX, ScrollToHash } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";

import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";

/* ---------------------------------------------
 * Static params — MUST be sync & safe
 * -------------------------------------------- */
export function generateStaticParams(): { slug: string }[] {
  const posts = getPosts(["src", "app", "blog", "posts"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/* ---------------------------------------------
 * Metadata — MUST NOT throw
 * -------------------------------------------- */
export function generateMetadata({
  params,
}: {
  params: { slug: string | string[] };
}): Metadata {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug;

  const post = getPosts(["src", "app", "blog", "posts"]).find(
    (p) => p.slug === slugPath
  );

  if (!post) {
    return {};
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    path: `${blog.path}/${post.slug}`,
    image:
      post.metadata.image ||
      `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
  });
}

/* ---------------------------------------------
 * Page
 * -------------------------------------------- */
export default function BlogPage({
  params,
}: {
  params: { slug: string | string[] };
}) {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug;

  const post = getPosts(["src", "app", "blog", "posts"]).find(
    (p) => p.slug === slugPath
  );

  if (!post) {
    notFound();
  }

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
          {/* SEO Schema */}
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
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

          {/* Header */}
          <Column maxWidth="s" gap="16" horizontal="center" align="center">
            <SmartLink href="/blog">
              <Text variant="label-strong-m">Blog</Text>
            </SmartLink>

            {post.metadata.publishedAt && (
              <Text
                variant="body-default-xs"
                onBackground="neutral-weak"
                marginBottom="12"
              >
                {formatDate(post.metadata.publishedAt)}
              </Text>
            )}

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

          {/* Author */}
          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
            </Row>
          </Row>

          {/* Cover Image */}
          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              sizes="(min-width: 768px) 100vw, 768px"
              border="neutral-alpha-weak"
              radius="l"
              marginTop="12"
              marginBottom="8"
            />
          )}

          {/* Content */}
          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>

          {/* Share */}
          <ShareSection
            title={post.metadata.title}
            url={`${baseURL}${blog.path}/${post.slug}`}
          />

          {/* Recent posts */}
          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Text
              as="h2"
              id="recent-posts"
              variant="heading-strong-xl"
              marginBottom="24"
            >
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

      {/* Heading navigation */}
      <Column
        maxWidth={12}
        paddingLeft="40"
        fitHeight
        position="sticky"
        top="80"
        gap="16"
        m={{ hide: true }}
      >
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}

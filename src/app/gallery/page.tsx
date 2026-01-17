import { Flex, Meta, Schema } from "@once-ui-system/core";
import type { Metadata } from "next";

import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

const ogImage = `/api/og/generate?title=${encodeURIComponent(gallery.title)}`;

export async function generateMetadata(): Promise<Metadata> {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL,
    image: ogImage,
    path: gallery.path,
  });
}

export default function GalleryPage() {
  return (
    <Flex maxWidth="l">
      {/* <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={ogImage}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <GalleryView /> */}
      <div>
        No images published yet.
      </div>
    </Flex>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/components/GallerySection";
import { StudentShowcaseSection } from "@/components/StudentShowcaseSection";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";

export const Route = createFileRoute("/gallery")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.gallery ?? defaultContent.seo.gallery,
      "/gallery",
      loaderData?.seo.ogImage,
    ),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <GallerySection />
      <StudentShowcaseSection />
    </>
  );
}

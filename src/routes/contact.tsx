import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";

export const Route = createFileRoute("/contact")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.contact ?? defaultContent.seo.contact,
      "/contact",
      loaderData?.seo.ogImage,
    ),
  component: ContactPage,
});

function ContactPage() {
  return <ContactSection />;
}

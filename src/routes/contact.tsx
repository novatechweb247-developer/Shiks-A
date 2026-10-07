import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
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
  return (
    <>
      <PageHeader
        badge="Direct Admissions Office · Jos Campus"
        title="Contact Us & Visit Our Jos Academy"
        description="Have questions regarding courses, tuition plans, accommodation assistance in Jos, or the 3-in-1 Innovation Hub? Reach out to our admissions team today."
        breadcrumbs={[{ label: "Contact & Admissions" }]}
      />

      {/* Main Contact Section with Form, Map & Contact Details */}
      <ContactSection />

      {/* Marquee Banner */}
      <MarqueeBanner />
    </>
  );
}

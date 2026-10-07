import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { FounderSection } from "@/components/FounderSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";

export const Route = createFileRoute("/about")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(loaderData?.seo.about ?? defaultContent.seo.about, "/about", loaderData?.seo.ogImage),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useEnrollmentModal();
  return (
    <>
      <AboutSection onOpenEnrollment={() => open()} />
      <MarqueeBanner />
      <FounderSection />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { CoursesSection } from "@/components/CoursesSection";
import { InnovationHubSection } from "@/components/InnovationHubSection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { defaultContent, pageMeta } from "@/content/site";
import { publishedContentQuery } from "@/lib/content.functions";
import { useEnrollmentModal } from "@/lib/site-content-context";

export const Route = createFileRoute("/services")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedContentQuery),
  head: ({ loaderData }) =>
    pageMeta(
      loaderData?.seo.courses ?? defaultContent.seo.courses,
      "/services",
      loaderData?.seo.ogImage,
    ),
  component: ServicesPage,
});

function ServicesPage() {
  const { open } = useEnrollmentModal();
  return (
    <>
      <CoursesSection onEnrollCourse={(course) => open(course)} />
      <MarqueeBanner />
      <InnovationHubSection onOpenAppointment={() => open()} />
    </>
  );
}

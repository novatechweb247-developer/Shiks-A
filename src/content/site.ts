import heroStudio from "@/assets/demo-hero-studio.jpg";
import consultation from "@/assets/demo-consultation.jpg";
import space from "@/assets/demo-space.jpg";
import craft from "@/assets/demo-craft.jpg";
import {
  BRAND_INFO,
  HERO_SLIDES,
  COURSES,
  TUTORIALS,
  STUDENT_WORKS,
  GALLERY_ITEMS,
  ECOSYSTEM_PARTNERS,
  TESTIMONIALS,
} from "@/data/fashionData";
import type { HeroSlide, AcademyCourse, Tutorial, StudentWork, GalleryItem } from "@/types/fashion";

export type SitePath =
  | "/"
  | "/about"
  | "/courses"
  | "/services"
  | "/hub"
  | "/tutorials"
  | "/showcase"
  | "/gallery"
  | "/contact";
export const sitePaths: SitePath[] = [
  "/",
  "/about",
  "/courses",
  "/services",
  "/hub",
  "/tutorials",
  "/showcase",
  "/gallery",
  "/contact",
];

/** Bundled demo images fallback. */
export const demoMedia = {
  studio: {
    src: heroStudio,
    alt: "Shiks Fashion Academy Studio",
  },
  consultation: {
    src: consultation,
    alt: "Shiks Fashion Consultation",
  },
  space: {
    src: space,
    alt: "Shiks Fashion Training Facility",
  },
  craft: {
    src: craft,
    alt: "Shiks Fashion Garment Craftsmanship",
  },
} as const;

export type ImageRef = string;

/** Resolve an image reference (local /images/*, demo:key, or uploaded storage path) to a valid URL. */
export function imageUrl(ref: ImageRef | undefined | null): string {
  if (!ref) return "/images/IMG_9791.jpg";
  if (ref.startsWith("http://") || ref.startsWith("https://") || ref.startsWith("/")) {
    return ref;
  }
  if (ref.startsWith("demo:")) {
    const key = ref.slice(5) as keyof typeof demoMedia;
    return (demoMedia[key] ?? demoMedia.studio).src;
  }
  return `/media/${ref}`;
}

export function imageAlt(
  ref: ImageRef | undefined | null,
  fallback = "Shiks Fashion Academy",
): string {
  if (ref?.startsWith("demo:")) {
    const key = ref.slice(5) as keyof typeof demoMedia;
    return fallback || (demoMedia[key] ?? demoMedia.studio).alt;
  }
  return fallback;
}

export const defaultContent = {
  brand: {
    name: BRAND_INFO.name,
    hubName: BRAND_INFO.hubName,
    founder: BRAND_INFO.founder,
    founderCredentials: BRAND_INFO.founderCredentials,
    motto: BRAND_INFO.motto,
    established: BRAND_INFO.established,
    address: BRAND_INFO.address,
    phone1: BRAND_INFO.phone1,
    phone2: BRAND_INFO.phone2,
    email: BRAND_INFO.email,
    instagram: BRAND_INFO.instagram,
    facebook: BRAND_INFO.facebook,
    alumniTrained: BRAND_INFO.alumniTrained,
    awardTitle: BRAND_INFO.awardTitle,
    summitDate: BRAND_INFO.summitDate,
    facilityInvestment: BRAND_INFO.facilityInvestment,
    logo: "",
    ctaLabel: "Enroll Now",
  },

  // EXACTLY 3 HERO SLIDES
  heroSlides: HERO_SLIDES as [HeroSlide, HeroSlide, HeroSlide],

  about: {
    badge: "Established 2016 · Jos, Nigeria",
    title: "ABOUT SHIKS FASHION ACADEMY",
    description:
      "Shiks Fashion Academy & Innovation Hub is a premier fashion training, enterprise development, and production platform based in Jos, Plateau State. Founded by award-winning entrepreneur Maryam Sadiq Shikra, our mission is to empower youth and women through transformative, practical fashion education.",
    facilityImage: "/images/DTO_3524.jpeg",
    awardTitle: "BEST FASHION SCHOOL IN PLATEAU STATE",
    awardSub:
      "Multiple-time recipient of Plateau Excellence Awards & Youth Empowerment Merit Award.",
    purposeTitle: "Our Core Purpose",
    purpose:
      "Shik's exists to close the gap between acquiring a skill and being able to use that skill productively. We believe that the real measure of a skills programme is not only how many people are trained, but how many are able to use their skills to earn, produce and create opportunities for others.",
    visionTitle: "Our Vision",
    vision:
      "To become a leading fashion enterprise development and innovation hub in Nigeria, producing skilled, confident and economically independent entrepreneurs who create value, businesses and employment.",
    missionTitle: "Our Mission",
    mission:
      "To empower young people and women through practical fashion and textile skills, enterprise development, incubation, access to productive infrastructure, mentorship and market opportunities.",
    stats: [
      { number: "500+", label: "Individuals Trained" },
      { number: "2016", label: "Year Established" },
      { number: "3-in-1", label: "Academy Model" },
      { number: "#1", label: "Fashion School in Plateau" },
    ],
  },

  courses: COURSES as AcademyCourse[],

  tutorials: TUTORIALS as Tutorial[],

  hub: {
    kicker: "Institutional Framework · Est. 2016",
    title: "THE SHIK'S 3-IN-1 MODEL",
    description:
      "Bridging the gap between vocational training and commercially viable enterprise. Shiks Fashion & Innovation Hub in Jos, Plateau State, powers a proven pathway from technical competence to sustainable enterprise.",
    pillar1Title: "Training Centre",
    pillar1Text:
      "Practical fashion, textile, pattern making, and garment-construction skills on industrial machinery leading to technical competence and mastery.",
    pillar1Sub: "Over 500+ individuals trained since 2016",
    pillar2Title: "Incubation Centre",
    pillar2Text:
      "Professional workspace, equipment access, technical guidance, business planning, and enterprise clinics to ensure readiness and commercial survival.",
    pillar2Sub: "Mentorship, market access & industry linkages",
    pillar3Title: "Production Hub",
    pillar3Text:
      "Ready-to-wear lines, bespoke bridal dresses, custom uniforms, modest abayas, and luxury home duvets fulfilling large institutional contracts.",
    pillar3Sub: "Generating income & sustainable employment",
    proposalTitle: "PROPOSED SHARED PRODUCTION FACILITY",
    proposalKicker: "Strategic Infrastructure Proposal · ₦119,000,000",
    proposalText:
      "Reducing the prohibitive capital barrier for emerging Nigerian fashion designers. The facility features 80 industrial straight-stitch machines, overlock and coverstitch units, computerized embroidery, and laser cutting.",
    proposalImage: "/images/IMG_9722.jpg",
    ecosystemPartners: ECOSYSTEM_PARTNERS,
  },

  founder: {
    kicker: "MEET THE FOUNDER & CEO",
    name: "MARYAM SADIQ SHIKRA",
    title: "Fashion Enterprise Development Advocate • Entrepreneur • Educator",
    bio: "Maryam Sadiq Shikra holds a degree in Business Administration and Entrepreneurship from Bayero University, Kano (2014, NYSC 2015). Under her stewardship, Shiks Fashion & Innovation Hub has established itself as Nigeria's preeminent fashion training academy and enterprise development engine.",
    image: "/images/ELS_9208.jpg",
    awardBadge: "MULTIPLE AWARD WINNER",
    awardSub: "Best Fashion School in Plateau State • Youth Empowerment Merit Award",
    quote:
      "The real measure of a skills programme is not only how many people are trained, but how many are able to use their skills to earn, produce and create opportunities for others.",
    roles: [
      {
        title: "Former President, Plateau Fashion Designers Association (PLAFDA)",
        detail:
          "Facilitated industrial machinery acquisition from SMEDAN, grant support and equipment via PLASMIDA and NG CARES for emerging designers.",
      },
      {
        title: "Public Relations Officer, NASME",
        detail:
          "Championing MSME expansion and federal policies across the small and medium enterprise sector in Nigeria.",
      },
      {
        title: "Lady President, ASNAT",
        detail:
          "Spearheading national advancement for artisans and technical craftswomen in Nigeria.",
      },
    ],
  },

  studentWorks: STUDENT_WORKS as StudentWork[],

  gallery: GALLERY_ITEMS as GalleryItem[],

  testimonials: TESTIMONIALS,

  contact: {
    phone: BRAND_INFO.phone1,
    phone2: BRAND_INFO.phone2,
    email: BRAND_INFO.email,
    address: BRAND_INFO.address,
    hours: "Monday – Saturday: 08:30 – 18:00",
    whatsapp: `https://wa.me/2347035623741`,
  },

  socials: {
    instagram: `https://instagram.com/${BRAND_INFO.instagram.replace("@", "")}`,
    facebook: `https://facebook.com/${BRAND_INFO.facebook}`,
    whatsapp: `https://wa.me/2347035623741`,
  },

  footer: {
    newsletterTitle: "BE THE FIRST TO RECEIVE PRIVATE COUTURE DROPS & ADMISSION ALERTS",
    newsletterSubtitle:
      "Invitations to bridal showcases, academy admissions, and the Alumni Impact Summit directly to your inbox.",
    copyright: "SHIKS FASHION & INNOVATION HUB. All rights reserved.",
    locationNote: "Jos, Plateau State, Nigeria • Registration & CAC Documented",
  },

  navigation: [
    { name: "Home", href: "/", description: "Academy Overview & Highlights" },
    { name: "About", href: "/about", description: "Our Story, Purpose & Leadership" },
    { name: "Courses", href: "/courses", description: "Diplomas & Training Programs" },
    { name: "3-in-1 Hub", href: "/hub", description: "Incubation & Production Hub" },
    { name: "Tutorials", href: "/tutorials", description: "Practical Lessons & Masterclasses" },
    { name: "Showcase", href: "/showcase", description: "Student & Alumni Creations" },
    { name: "Gallery", href: "/gallery", description: "Campus & Runway Visuals" },
    { name: "Contact", href: "/contact", description: "Admissions, Location & WhatsApp" },
  ],

  seo: {
    ogImage: "/images/IMG_9791.jpg",
    home: {
      title: "SHIKS FASHION ACADEMY – Premier Fashion Education & Innovation Hub",
      description:
        "The official website of Shiks Fashion Academy & Innovation Hub. Premier fashion education, garment construction, modest design, tutorials, and vocational enterprise training in Jos, Nigeria.",
    },
    about: {
      title: "About Us – Shiks Fashion Academy & Innovation Hub",
      description:
        "Learn about Shiks Fashion Academy, founded in 2016 by Maryam Sadiq Shikra in Jos, Plateau State. Empowering youth and women through fashion skills and enterprise incubation.",
    },
    courses: {
      title: "Courses & Programs – Shiks Fashion Academy",
      description:
        "Explore professional fashion design diplomas, modest abaya cut, reception bridal couture, digital CAD illustration, and computerized embroidery training.",
    },
    services: {
      title: "Services & Production – Shiks Fashion Academy",
      description:
        "Bespoke bridal couture, uniform production, garment manufacturing, and enterprise workspace at Shiks Fashion & Innovation Hub.",
    },
    hub: {
      title: "3-in-1 Innovation Hub & Shared Production Facility – Shiks Fashion Academy",
      description:
        "Discover the Shik's 3-in-1 model: Training Centre, Incubation Centre, and Shared Production Facility empowering Nigerian fashion entrepreneurs in Jos, Plateau State.",
    },
    tutorials: {
      title: "Tutorials & Masterclasses – Shiks Fashion Academy",
      description:
        "Free fashion tutorials, pattern drafting lessons, and industrial sewing masterclasses by Shiks Fashion Academy instructors.",
    },
    showcase: {
      title: "Student & Alumni Showcase – Shiks Fashion Academy",
      description:
        "Discover portfolio collections, brand launches, and couture designs by alumni of Shiks Fashion Academy.",
    },
    gallery: {
      title: "Gallery & Runway – Shiks Fashion Academy",
      description:
        "View photographs of classroom training, industrial machinery workshops, alumni runway collections, and graduation ceremonies at Shiks Fashion Academy.",
    },
    contact: {
      title: "Contact & Admissions – Shiks Fashion Academy",
      description:
        "Connect with our admissions office at British American Junction Beside Kingsbite, Jos, Plateau State, Nigeria. Phone: 07035623741 / 09050788214.",
    },
  },
};

export type SiteContent = typeof defaultContent;
export type SectionKey = keyof SiteContent;

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Stored content wins; defaults fill anything never saved. Arrays are replaced whole when provided. */
export function mergeContent(stored: unknown): SiteContent {
  const merge = (base: unknown, over: unknown): unknown => {
    if (over === undefined || over === null) return base;
    if (Array.isArray(base)) return Array.isArray(over) && over.length > 0 ? over : base;
    if (isObject(base) && isObject(over)) {
      const out: Record<string, unknown> = { ...base };
      for (const key of Object.keys(base)) out[key] = merge(base[key], over[key]);
      return out;
    }
    return typeof over === typeof base ? over : base;
  };
  const result = merge(defaultContent, stored) as SiteContent;

  // STRICT RULE: EXACTLY THREE HERO SLIDES.
  const slides = [0, 1, 2].map((i) =>
    merge(defaultContent.heroSlides[i], (result.heroSlides as unknown[])?.[i]),
  ) as [HeroSlide, HeroSlide, HeroSlide];

  return { ...result, heroSlides: slides };
}

export function pageMeta(
  seo: { title: string; description: string },
  path: string,
  ogImage?: string,
) {
  const meta: Record<string, string>[] = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  const image = ogImage || defaultContent.seo.ogImage;
  if (image) {
    meta.push({ property: "og:image", content: image }, { name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: path }] };
}

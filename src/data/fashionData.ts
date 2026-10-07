import { AcademyCourse, Tutorial, StudentWork, GalleryItem, HeroSlide } from "../types/fashion";

export const BRAND_INFO = {
  name: "SHIKS FASHION ACADEMY",
  hubName: "Shiks Fashion & Innovation Hub",
  founder: "Maryam Sadiq Shikra",
  founderCredentials:
    "B.Sc Business Admin & Entrepreneurship (Bayero University Kano), Former President PLAFDA, PRO NASME, Lady President ASNAT",
  motto: "BUILDING SKILLS – CREATING OPPORTUNITIES – SHAPING THE FUTURE OF FASHION",
  established: 2016,
  address: "British American Junction Right Beside Kingsbite, JOS, Plateau State, Nigeria",
  phone1: "07035623741",
  phone2: "09050788214",
  email: "shiksfashion2014@gmail.com",
  instagram: "@shiksfashionacademy",
  facebook: "shiksFashionBoutiq",
  alumniTrained: "500+",
  awardTitle: "Best Fashion School in Plateau State (Honoured Multiple Times)",
  summitDate: "9 January 2027",
  facilityInvestment: "₦119,000,000",
};

// EXACTLY 3 HERO SLIDES REQUIRED
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    slideNumber: "01",
    kicker: "Shiks Fashion Academy · Est. 2016",
    title: "Transform Your Creative Vision into Professional Craftsmanship.",
    subtitle: "Premier Fashion Institution · Jos, Plateau State",
    description:
      "Join more than 500 graduates who mastered practical garment engineering, pattern drafting, and haute couture on industrial machinery at Shiks.",
    ctaText: "Explore the Academy",
    ctaTarget: "#about",
    image: "/images/IMG_9791.jpg",
    tagline: "Vocational Excellence · Jos, Plateau State",
    highlightCategory: "Foundational & Advanced Studies",
  },
  {
    id: 2,
    slideNumber: "02",
    kicker: "Technical Garment Engineering · 3-in-1 Model",
    title: "Master Industrial Craft. Build a Sustainable Label.",
    subtitle: "From Practical Skill to Commercially Viable Enterprise",
    description:
      "Intensive studio training in modest abaya silhouettes, bridal reception couture, digital CAD design, and enterprise launch strategies.",
    ctaText: "View Programs",
    ctaTarget: "#courses",
    image: "/images/IMG_9727.jpg",
    tagline: "Industry-Ready Curriculum",
    highlightCategory: "Practical Studio Training",
  },
  {
    id: 3,
    slideNumber: "03",
    kicker: "Admissions Open · Professional Diplomas",
    title: "Where Future Couturiers Learn Their Art.",
    subtitle: "Hands-On Training · Shared Production Facility",
    description:
      "Whether you are starting from your very first seam or expanding your existing fashion brand, our structured diplomas and incubation hub provide the tools to thrive.",
    ctaText: "Enroll Now",
    ctaTarget: "#enroll",
    image: "/images/DTO_3524.jpeg",
    tagline: "Admissions 2026/2027 · Rolling Cohorts",
    highlightCategory: "Admissions Now Open",
  },
];

export const COURSES: AcademyCourse[] = [
  {
    id: "course-01",
    title: "Fashion Design & Garment Construction",
    subtitle: "Comprehensive foundational and advanced diploma in garment engineering",
    category: "Garment Construction",
    duration: "6 Months / 1 Year Master Diploma",
    format: "Full-Time (Weekday)",
    level: "Beginner to Advanced",
    description:
      "Our signature professional diploma program. Takes students from basic anatomy measurements to advanced pattern drafting, precision cutting, and industrial sewing machine mastery.",
    curriculum: [
      "Human Anatomy & Accurate Body Measurement Techniques",
      "Drafting Basic Slopers (Bodice, Skirt, Trouser, Sleeve)",
      "Dart Manipulation, Slash & Spread, and Silhouette Contouring",
      "Industrial Straight-Stitch & Overlock Machine Maintenance & Speed Control",
      "Neckline Facings, Collars, Cuffs, and Invisible Zipper Insertions",
      "Haute Couture Hand Stitches and French Seam Finishing",
    ],
    careerOutcomes: [
      "Professional Fashion Designer & Studio Owner",
      "Production Specialist for Ready-to-Wear Brands",
      "Sample Maker & Technical Pattern Cutter",
    ],
    certification: "Shiks Professional Diploma in Fashion Design & Garment Construction",
    image: "/images/IMG-20261007-WA0001.jpg",
    featured: true,
  },
  {
    id: "course-02",
    title: "Modest Fashion & Abaya Design",
    subtitle: "Specialized masterclass in fluid drapery, Islamic modesty and royal cut",
    category: "Modest Fashion",
    duration: "3 Months Intensive",
    format: "Full-Time (Weekday)",
    level: "Intermediate",
    description:
      "Focuses on the art of modest elegance. Students learn to cut and manipulate lightweight and heavyweight crepe, luxury Nida, and georgette into flowing abayas, kimonos, and modest ceremonial attire.",
    curriculum: [
      "Understanding Modest Silhouette Architecture & Ease Allowances",
      "Cutting Batwing, Kimono, Raglan, and Dolman Sleeves",
      "Handling Flowing Crepes, Silks, and Chiffons with Zero Tension Puckering",
      "Embellishment Techniques: Crystal Heat-Pressing & Satin Piping",
      "Coordination of Hijabs, Sheilas, and Slip Underdresses",
    ],
    careerOutcomes: [
      "Modest Fashion Brand Founder",
      "Specialist Abaya Couturier",
      "Bespoke Modest Wardrobe Consultant",
    ],
    certification: "Certificate of Specialization in Modest Fashion & Abaya Engineering",
    image: "/images/IMG_9788.jpg",
    featured: true,
  },
  {
    id: "course-03",
    title: "Reception & Royal Bridal Couture",
    subtitle: "Mastery in structural corsetry, boning, and ceremonial gala wear",
    category: "Bridal Couture",
    duration: "4 Months Masterclass",
    format: "Weekend Executive",
    level: "Masterclass",
    description:
      "The pinnacle of event dressing. Taught by founder Maryam Sadiq Shikra. Covers molded corsetry, underwire cups, flexible steel boning, cathedral train balance, and luxury beadwork.",
    curriculum: [
      "Architectural Undergarments & Structural Boning Placement",
      "Constructing Built-in Push-Up & Underwire Cup Bodices",
      "Working with Silk Velvet, Duchesse Satin, and French Lace",
      "Detachable Cathedral Trains & Reception Skirt Transitions",
      "Hand-Beading, Sequins, and 3D Appliqué Placement",
    ],
    careerOutcomes: [
      "High-End Bridal Gown Designer",
      "Red-Carpet & Gala Couturier",
      "Celebrity Wedding Stylist",
    ],
    certification: "Master Certificate in Bridal & Reception Couture",
    image: "/images/IMG_9722.jpg",
    featured: true,
  },
  {
    id: "course-04",
    title: "Fashion Illustration & Digital CAD",
    subtitle: "Digital sketching, 3D prototyping, and technical production tech-packs",
    category: "Digital & Illustration",
    duration: "2 Months",
    format: "Part-Time",
    level: "Beginner to Advanced",
    description:
      "Transition from hand sketching to digital mastery. Learn industry-standard CAD software in our computer lab to create vector illustrations, fabric rendering, and commercial factory tech-packs.",
    curriculum: [
      "Croquis Figure Drawing & Proportions (9-Head & 10-Head)",
      "Digital Sketching of Garment Details & Drapes",
      "Fabric Texture Simulation (Leather, Silk, Velvet, Denim)",
      "Production Tech-Packs with Bill of Materials (BOM) & Measurement Charts",
      "Colorway Palettes and Digital Lookbook Presentation",
    ],
    careerOutcomes: [
      "Fashion Illustrator & Concept Artist",
      "Technical Designer for Apparel Factories",
      "Digital Fashion Content Creator",
    ],
    certification: "Certificate in Digital Fashion CAD & Technical Illustration",
    image: "/images/IMG-20261007-WA0006.jpg",
    featured: false,
  },
  {
    id: "course-05",
    title: "Textile & Surface Design (Embroidery & Monogram)",
    subtitle: "Computerized embroidery, fabric manipulation, and custom monogramming",
    category: "Textile & Surface",
    duration: "3 Months",
    format: "Full-Time (Weekday)",
    level: "Intermediate",
    description:
      "Harness the power of computerized embroidery and manual embellishment. Students gain hands-on access to our industrial multi-needle embroidery and monogramming machines.",
    curriculum: [
      "Embroidery Digitizing Software & Vector Conversion",
      "Operating Industrial Computerized Embroidery Machines",
      "Monogramming for Corporate & Luxury Clients",
      "Fabric Smocking, Pleating, and Fabric Origami",
      "Surface Dyeing and Traditional Resist Printing",
    ],
    careerOutcomes: [
      "Textile Embellishment Specialist",
      "Commercial Monogramming Entrepreneur",
      "Custom Surface Designer",
    ],
    certification: "Certificate in Industrial Embroidery & Surface Design",
    image: "/images/IMG-20261007-WA0010.jpg",
    featured: false,
  },
  {
    id: "course-06",
    title: "Fashion Entrepreneurship & Business Development",
    subtitle: "Business planning, pricing, marketing, and scaling fashion MSMEs",
    category: "Business & Enterprise",
    duration: "2 Months",
    format: "Weekend Executive",
    level: "Beginner to Advanced",
    description:
      "Skills alone do not create wealth business acumen does. Backed by Maryam Sadiq's Bayero University business pedigree, this course teaches costing, supply chains, grant applications, and scaling.",
    curriculum: [
      "Costing Formulas: Fabric Yield, Labor, Overhead, and Profit Margins",
      "Writing Bankable Business Plans & Grant Proposals (SMEDAN / GIZ / ITF)",
      "Brand Identity, Social Media Storytelling & Client Acquisition",
      "Managing Production Deadlines & Quality Control Protocols",
      "Legal Business Registration, CAC Compliance, and Tax Fundamentals",
    ],
    careerOutcomes: [
      "Sustainable Fashion Entrepreneur",
      "Production Studio Manager",
      "Creative Director & Brand Consultant",
    ],
    certification: "Certificate in Fashion Enterprise Management (MSME Pathway)",
    image: "/images/ELS_9208.jpg",
    featured: true,
  },
  {
    id: "course-07",
    title: "Production, Quality Control & Industry Skills",
    subtitle: "High-volume manufacturing, assembly line operation, and speed sewing",
    category: "Garment Construction",
    duration: "3 Months Immersion",
    format: "Apprenticeship Immersion",
    level: "Intermediate",
    description:
      "Designed for commercial garment production. Prepares learners to work in or establish high-capacity clothing production hubs fulfilling school uniforms, corporate wear, and bulk contracts.",
    curriculum: [
      "Assembly Line Garment Breakdown & Work Station Flow",
      "High-Speed Industrial Machine Operations (Straight, Overlock, Coverstitch)",
      "Buttonhole & Button-Attaching Machine Calibration",
      "Strict Quality Control Checkpoints & Defect Remediation",
      "Industrial Steam Pressing & Vacuum Table Finishing",
    ],
    careerOutcomes: [
      "Factory Production Supervisor",
      "High-Volume Uniform Contractor",
      "Quality Assurance Inspector",
    ],
    certification: "Professional Certificate in Industrial Garment Production",
    image: "/images/IMG-20261007-WA0004.jpg",
    featured: false,
  },
  {
    id: "course-08",
    title: "Luxury Bedspreads, Duvets & Throw Pillow Manufacturing",
    subtitle: "Home textiles, quilted bedding sets, and corporate event souvenirs",
    category: "Textile & Surface",
    duration: "2 Months",
    format: "Part-Time",
    level: "Beginner to Advanced",
    description:
      "A lucrative craft specialty of Shiks Hub. Learn professional cutting, batting quilting, edge piping, and computerized monogramming for bridal bedding and VIP corporate souvenirs.",
    curriculum: [
      "Cutting Large-Scale Fabric Panels with Square Precision",
      "Batting Layers, Quilting Channels, and Thermal Bonding",
      "Invisible Zipper Pillow Cases & Flanged Piped Borders",
      "Embroidered Monogram Sets for Weddings & Corporate Gifting",
      "Packaging, Presentation & Logistics for Home Goods",
    ],
    careerOutcomes: [
      "Luxury Bedding Brand Founder",
      "Corporate Event Souvenir Manufacturer",
      "Interior Soft Furnishing Specialist",
    ],
    certification: "Certificate in Home Textiles & Souvenir Manufacturing",
    image: "/images/IMG-20261007-WA0016.jpg",
    featured: false,
  },
];

export const TUTORIALS: Tutorial[] = [
  {
    id: "tut-01",
    title: "Industrial Straight-Stitch Machine: Threading, Tension & Bobbin Winding",
    category: "Sewing Fundamentals",
    duration: "18 Mins Read & Practice",
    level: "Beginner",
    description:
      "Master the foundation of all professional garment construction. Learn how to set upper thread tension, thread the rotary hook, and calibrate presser foot pressure for zero thread bunching.",
    equipmentNeeded: [
      "Industrial Straight-Stitch Machine",
      "Schmetz DBx1 Needles (Size 14/16)",
      "Bonded Polyester Thread",
      "Metal Bobbin",
      "Fabric Scraps",
    ],
    steps: [
      {
        number: "01",
        heading: "Winding and Inserting the Metal Bobbin",
        detail:
          "Disengage needle drive, wind bobbin evenly until 80% full. Insert bobbin into case with thread pulling clockwise through the tension spring slit. Test drop tension.",
      },
      {
        number: "02",
        heading: "Threading the Upper Machine Path",
        detail:
          "Guide spool thread through upper tree guides, primary tension discs (ensure disc engagement), check spring, and take-up lever from right to left.",
      },
      {
        number: "03",
        heading: "Needle Orientation and Final Threading",
        detail:
          "Insert DBx1 needle with the long groove facing left and the scarf facing the rotary hook on the right. Thread from left to right.",
      },
      {
        number: "04",
        heading: "Tension Balance Test",
        detail:
          "Sew a 10cm line on double-folded calico. Inspect top and bottom: the knot should lock invisibly inside the center of the fabric layers.",
      },
    ],
    masterTips: [
      "Never turn the balance wheel away from you always turn towards your body to avoid thread jam.",
      "Oil the machine daily at designated red oil points before starting high-speed runs.",
    ],
    image: "/images/IMG-20261007-WA0001.jpg",
  },
  {
    id: "tut-02",
    title: "Precision Bodice Sloper Drafting: Bust Dart to Side-Seam Pivot",
    category: "Pattern Drafting",
    duration: "25 Mins Masterclass",
    level: "Intermediate",
    description:
      "Discover how Shiks Academy instructors transfer bust dart volume from waist to side seam or french dart using the slash-and-spread and pivot techniques for a seamless silhouette.",
    equipmentNeeded: [
      "Pattern Paper / Brown Paper",
      "L-Square Ruler",
      "French Curve",
      "Grading Ruler",
      "0.5mm Mechanical Pencil",
      "Tracing Wheel",
    ],
    steps: [
      {
        number: "01",
        heading: "Locating the True Bust Point (Apex)",
        detail:
          "Mark the intersection of bust depth and bust span (apex). All dart rotations pivot around this exact geometric center.",
      },
      {
        number: "02",
        heading: "Determining New Dart Location",
        detail:
          "Measure 5cm down from the armhole along the side seam. Draw a straight slash line from this side point directly to the apex.",
      },
      {
        number: "03",
        heading: "Pivoting the Waist Dart Volume",
        detail:
          "Pin the apex. Slash the new side line up to 1mm before the apex. Close the waist dart flat with masking tape the side seam will open automatically.",
      },
      {
        number: "04",
        heading: "Backing Away from the Apex",
        detail:
          "True darts must not apex at the nipple. Back the new dart tip 2.5cm away from the apex. Redraw straight dart legs and true the seam allowance.",
      },
    ],
    masterTips: [
      "Always true your side seams by folding the dart down towards the waist before cutting the paper edge.",
      "Use heavy pattern weights rather than pinning through tracing paper to prevent dimensional distortion.",
    ],
    image: "/images/IMG-20261007-WA0005.jpg",
  },
  {
    id: "tut-03",
    title: "Bridal Corsetry: Internal Boning Channels & Clean Waist Stay Insertion",
    category: "Bridal Engineering",
    duration: "30 Mins Masterclass",
    level: "Advanced",
    description:
      "How to engineer red-carpet and bridal reception corsets that snatch the waistline while maintaining comfortable breathing ease using German plastic and spiral steel boning.",
    equipmentNeeded: [
      "Couture Coutil / Heavy Duchess",
      "German Rigilene / Spiral Steel Boning",
      "Plush Elastic Waist Stay (2.5cm)",
      "Bone Tipping Caps",
      "Bone Casing Ribbon",
    ],
    steps: [
      {
        number: "01",
        heading: "Underlining and Seam Pressing",
        detail:
          "Fuse outer silk with lightweight woven interfacing. Underline with 100% cotton coutil. Stitch vertical seams and press open with a tailor's wooden ham.",
      },
      {
        number: "02",
        heading: "Stitching Internal Boning Channels",
        detail:
          "Topstitch boning casing tape centered directly over each seam on the interior lining layer. Leave 1.5cm clearance at the top and bottom seam lines.",
      },
      {
        number: "03",
        heading: "Cutting and Capping the Bones",
        detail:
          "Cut boning 2cm shorter than the casing. File sharp corners or apply brass end-caps to prevent fabric puncture. Slide into casing.",
      },
      {
        number: "04",
        heading: "Anchoring the Interior Grosgrain Waist Stay",
        detail:
          "Measure client's exact waist minus 2cm. Stitch plush grosgrain stay at the waistline level anchored to seam allowances with hook-and-eye closure.",
      },
    ],
    masterTips: [
      "The waist stay bears 80% of the dress weight, allowing the zipper to close without horizontal strain ripples.",
      "Steam boning with an industrial iron while curved around a mannequin to pre-mold body shape.",
    ],
    image: "/images/IMG_9722.jpg",
  },
  {
    id: "tut-04",
    title: "Modest Abaya Draping: Cutting Bias Silk Crepe with Zero Puckering",
    category: "Abaya & Modest Cut",
    duration: "20 Mins Practical",
    level: "Intermediate",
    description:
      "Learn the secrets of cutting fluid 150cm-wide crepe fabrics into sweeping modest abayas that hang straight without wavy hems or static cling.",
    equipmentNeeded: [
      "Dubai Nida or Silk Georgette",
      "Rotary Cutter & Large Mat",
      "Microtex Needle (Size 10/12)",
      "Fine Silk Pins",
      "Walking Foot",
    ],
    steps: [
      {
        number: "01",
        heading: "True Grainline Straightening",
        detail:
          "Pull a single crosswise thread across the fabric width to establish the absolute 90-degree grainline before laying pattern blocks.",
      },
      {
        number: "02",
        heading: "Preventing Shifting During Cutting",
        detail:
          "Lay tissue paper beneath sheer crepe. Pin along the selvages. Use a rotary cutter rather than shears to prevent lifting the drape.",
      },
      {
        number: "03",
        heading: "Walking Foot Sewing Setup",
        detail:
          "Install a walking foot or reduce presser foot pressure to level 1.5. Increase stitch length to 2.8mm to prevent fabric puckering.",
      },
      {
        number: "04",
        heading: "Letting the Hem Drop 24 Hours",
        detail:
          "Hang the cut abaya on a mannequin for 24 hours to allow bias fibers to settle under gravity before measuring and hemming the final sweep.",
      },
    ],
    masterTips: [
      "Never pull lightweight crepe from behind the needle while sewing let the feed dogs glide the fabric naturally.",
      "Finish abaya hems with narrow 3mm double-turn baby hems for maximum flutter motion.",
    ],
    image: "/images/IMG_9788.jpg",
  },
  {
    id: "tut-05",
    title: "Computerized Embroidery: Hooping Technique, Stabilizer & Tension Balance",
    category: "Embroidery CAD",
    duration: "22 Mins Masterclass",
    level: "Intermediate",
    description:
      "How to produce flawless institutional monograms and royal embroidery badges without fabric distortion, puckering, or bird-nesting.",
    equipmentNeeded: [
      "Computerized Embroidery Unit",
      "Tear-Away / Cut-Away Stabilizer",
      "Temporary Spray Adhesive (505)",
      "Embroidery Hoops",
      "40-wt Rayon Thread",
    ],
    steps: [
      {
        number: "01",
        heading: "Selecting the Correct Stabilizer",
        detail:
          "Use cut-away stabilizer for knits and stretchy fabrics; use tear-away for woven cottons. For velvet or terrycloth, add a water-soluble topping film.",
      },
      {
        number: "02",
        heading: "Drum-Tight Hooping",
        detail:
          "Spray light adhesive on stabilizer. Adhere fabric smoothly. Hoop firmly until the fabric sounds like a taut drum when tapped. Do not stretch grain.",
      },
      {
        number: "03",
        heading: "Bobbin and Upper Tension Calibration",
        detail:
          "Embroidery bobbin thread should be 60-wt white. On the back of the test motif, the top thread should occupy 1/3 on each side and bobbin 1/3 in the middle.",
      },
      {
        number: "04",
        heading: "Executing the Stitch Run",
        detail:
          "Run machine at 600-750 SPM. Monitor thread color sequence changes. Trim jump stitches closely with curved embroidery scissors.",
      },
    ],
    masterTips: [
      "Water-soluble topping prevents stitches from sinking into velvet pile or fluffy fabrics.",
      "Check bobbin case tension with the 'yo-yo test' before every major embroidery run.",
    ],
    image: "/images/IMG-20261007-WA0010.jpg",
  },
  {
    id: "tut-06",
    title: "Industrial Steam Sculpting & Tailor's Pressing Techniques",
    category: "Pressing & Finishing",
    duration: "15 Mins Guide",
    level: "Beginner to Advanced",
    description:
      "In bespoke tailoring, 50% of the garment is made with the iron. Learn how to mold collars, shrink wool fullness, and flatten seams like an Italian maestro.",
    equipmentNeeded: [
      "Industrial Gravity-Feed Iron",
      "Hardwood Tailor's Clapper",
      "Sleeve Board",
      "Velvet Press Board",
      "Cotton Press Cloth",
    ],
    steps: [
      {
        number: "01",
        heading: "Pressing as You Sew (Never Skip)",
        detail:
          "Every seam must be pressed flat as sewn to bed the stitches, then pressed open before crossing with another seam.",
      },
      {
        number: "02",
        heading: "The Wood Clapper Magic",
        detail:
          "Apply a blast of steam to bulky seams, then immediately press down firmly with a hardwood clapper for 10 seconds to trap heat and absorb moisture.",
      },
      {
        number: "03",
        heading: "Shrinking Ease in Sleeve Caps",
        detail:
          "Before setting a sleeve, steam the sleeve cap gathering on a pressing ham without touching the iron directly to the seam line until fullness shrinks.",
      },
      {
        number: "04",
        heading: "Lapel Roll Molding",
        detail:
          "Roll the lapel over the palm of your hand while applying steam along the roll line to ensure the lapel hugs the chest naturally.",
      },
    ],
    masterTips: [
      "Never press directly on silk velvet without a needle board flat irons crush the pile permanently.",
      "Always test steam temperature on a spare scrap of fabric to check for water spitting.",
    ],
    image: "/images/IMG-20261007-WA0004.jpg",
  },
];

export const STUDENT_WORKS: StudentWork[] = [
  {
    id: "work-01",
    title: "The Regal Empress Reception Gown",
    studentName: "Fatima Al-Hassan",
    cohort: "Diploma Class of 2025",
    category: "Bridal & Reception Couture",
    description:
      "Created as a final graduation piece. Deep royal purple silk velvet with interior flexible steel boning and hand-beaded lace appliques.",
    skillsDemonstrated: [
      "Internal 12-bone structural corsetry",
      "Hand-finished invisible zipper closure",
      "Detachable ceremonial reception train",
      "French seam lining in mulberry silk",
    ],
    image: "/images/IMG_9727.jpg",
    testimonial:
      "Shiks Fashion Academy transformed me from someone who couldn't thread an industrial machine into a certified bridal designer running my own studio in Jos.",
  },
  {
    id: "work-02",
    title: "Blanche Architectural Power Suit",
    studentName: "Blessing Okonjo",
    cohort: "Master Tailoring Class of 2024",
    category: "Architectural Tailoring",
    description:
      "Constructed from double-faced Italian wool twill with razor peak lapels, chest canvas padding, and matching wide-leg trousers.",
    skillsDemonstrated: [
      "Floating chest canvas tailoring",
      "Hand-rolled lapel roll molding",
      "Functional surgeon cuff buttonholes",
      "Double reverse front pleat trouser drape",
    ],
    image: "/images/ELS_9208.jpg",
    testimonial:
      "The discipline and speed training at Shiks is unrivaled. I learned how to produce garments that rival luxury European fashion houses.",
  },
  {
    id: "work-03",
    title: "Imperial Violet Modest Abaya Ensemble",
    studentName: "Amina Mohammed",
    cohort: "Modest Fashion Specialization 2025",
    category: "Modest Fashion & Abayas",
    description:
      "Floor-length flowing modest abaya crafted from Dubai crepe with hand-applied purple crystal accents and matching Sheila wrap.",
    skillsDemonstrated: [
      "Zero-tension bias crepe cutting",
      "Clean 3mm baby hem finishing",
      "Hot-fix crystal embellishment technique",
      "Coordinated slip dress pattern drafting",
    ],
    image: "/images/IMG_9791.jpg",
    testimonial:
      "Mrs. Maryam Sadiq taught us not only how to sew, but how to price our creations and market to high-net-worth clients across Nigeria.",
  },
  {
    id: "work-04",
    title: "Double-Breasted Cocoon Cashmere Coat",
    studentName: "Gideon Pam",
    cohort: "Diploma Class of 2024",
    category: "Outerwear & Construction",
    description:
      "Handcrafted from double-faced Mongolian cashmere with oversized notched collar and hand-stitched purple pick details.",
    skillsDemonstrated: [
      "Double-face split seam hand finishing",
      "Raglan sleeve volumetric drafting",
      "Deep tailored welt pockets",
      "Horn buckle belt creation",
    ],
    image: "/images/IMG_0081.jpg",
    testimonial:
      "The 3-in-1 model gave me access to industrial machines I could never afford on my own. Shiks Hub launched my career.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Industrial Machine Training Session",
    category: "Classroom & Training",
    image: "/images/IMG-20261007-WA0001.jpg",
    caption:
      "Students practicing speed control and precision seam guidelines on industrial straight-stitch workstations in Jos campus.",
  },
  {
    id: "gal-02",
    title: "Pattern Drafting & Measurement Masterclass",
    category: "Classroom & Training",
    image: "/images/IMG-20261007-WA0005.jpg",
    caption:
      "Learners mastering bust dart manipulation and L-square measurements on pattern drafting tables.",
  },
  {
    id: "gal-03",
    title: "Finished Bridal Reception Masterpiece",
    category: "Student Creations",
    image: "/images/IMG_9727.jpg",
    caption:
      "Alumni showcase piece: Royal purple silk velvet gown with internal boned corsetry presented at fashion week.",
  },
  {
    id: "gal-04",
    title: "Alumni Impact Runway Showcase",
    category: "Alumni Runway",
    image: "/images/IMG_9722.jpg",
    caption:
      "Shiks Fashion Academy graduates showcasing their original collections before industry assessment panels.",
  },
  {
    id: "gal-05",
    title: "Tailored White Tuxedo Suit by Student",
    category: "Student Creations",
    image: "/images/ELS_9208.jpg",
    caption:
      "Precision power blazer with peaked lapels and hand-finished buttonholes created by our tailoring cohort.",
  },
  {
    id: "gal-06",
    title: "Plateau State Excellence Award Ceremony",
    category: "Awards & Ceremonies",
    image: "/images/IMG_0245.jpg",
    caption:
      "Founder Maryam Sadiq Shikra receiving recognition as Best Fashion School in Plateau State.",
  },
  {
    id: "gal-07",
    title: "High-Volume Duvet & Home Textile Finishing",
    category: "Machine Skills",
    image: "/images/IMG-20261007-WA0016.jpg",
    caption:
      "Quilted bridal bedding and embroidered throw pillows manufactured in the Shiks Production Hub.",
  },
  {
    id: "gal-08",
    title: "Modest Fashion & Abaya Graduation Look",
    category: "Student Creations",
    image: "/images/IMG_9791.jpg",
    caption:
      "Flowing silk crepe modest abaya with crystal embellishments designed by Shiks Academy alumni.",
  },
  {
    id: "gal-09",
    title: "Computerized Embroidery & Monogramming Station",
    category: "Machine Skills",
    image: "/images/IMG-20261007-WA0010.jpg",
    caption:
      "Students calibrating multi-needle computerized embroidery machines for custom institutional client orders.",
  },
  {
    id: "gal-10",
    title: "Graduation Certificate Presentation",
    category: "Awards & Ceremonies",
    image: "/images/IMG-20261007-WA0003.jpg",
    caption: "Students celebrating certification supported by ITF, GIZ, and IDEAS/TVET programmes.",
  },
  {
    id: "gal-11",
    title: "Shiks Academy Campus & Facade",
    category: "Classroom & Training",
    image: "/images/DTO_3524.jpeg",
    caption:
      "Our official training facility at British American Junction Beside Kingsbite, Jos, Plateau State.",
  },
  {
    id: "gal-12",
    title: "Cashmere Winter Outerwear Project",
    category: "Student Creations",
    image: "/images/IMG_0081.jpg",
    caption:
      "Oversized double-faced cashmere cocoon coat tailored by our advanced diploma learners.",
  },
];

export const ECOSYSTEM_PARTNERS = [
  "ITF (Industrial Training Fund)",
  "GIZ (German International Cooperation)",
  "PLASMIDA (Plateau Micro Enterprise Agency)",
  "NYSC (National Youth Service Corps)",
  "NDE (National Directorate of Employment)",
  "IDEAS / TVET World Bank Project",
  "NASME (National Association of Small & Medium Enterprises)",
  "PLAFDA (Plateau Fashion Designers Association)",
];

export const TESTIMONIALS = [
  {
    quote:
      "Shiks Fashion Academy gave me the real practical discipline to start my bridal boutique. Today I employ 4 assistants in Jos and fulfill wedding gowns nationwide.",
    author: "Zainab Abubakar",
    role: "Founder, Zayna Bridal Studio – Shiks Graduate 2023",
    image: "/images/IMG-20261007-WA0001.jpg",
  },
  {
    quote:
      "The 3-in-1 incubation model changed everything for me. Having access to computerized embroidery and industrial straight machines let me bid for school uniform contracts confidently.",
    author: "Emmanuel Dachung",
    role: "Director, Apex Apparel – Shiks Alumni 2024",
    image: "/images/IMG-20261007-WA0004.jpg",
  },
  {
    quote:
      "Maryam Sadiq Shikra is a mentor of unmatched dedication. She teaches you not just to make beautiful clothes, but to build a profitable, sustainable business enterprise.",
    author: "Ruth Gyang",
    role: "Creative Director, Ruthie Couture – Shiks Graduate 2025",
    image: "/images/IMG-20261007-WA0005.jpg",
  },
];

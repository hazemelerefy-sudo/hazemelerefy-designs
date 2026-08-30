/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every figure, date, and claim below comes from Youssef Sherif's CV and
 *  project repositories. Nothing here is placeholder copy — if a number
 *  changes, change it here and the whole site follows.
 *
 *  Images live in /public/images/.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ── BRAND ─────────────────────────────────────────────────────────────────── */

export const BRAND = {
  /**
   * Header/footer logo text. The hero wordmark shrinks into this exact slot on
   * scroll, so `name` and `wordmark` must stay identical or the handoff jumps.
   */
  name: "YOUSSEF",
  wordmark: "YOUSSEF",
  fullName: "Youssef Sherif",
  role: "Data Analyst",
  /** Split across two lines in the hero. */
  headlineTop: "BEYOND THE NUMBERS",
  headlineBottom: "BUILT FOR DECISIONS",
  email: "yshreef924@gmail.com",
  location: "Cairo, Egypt",
  timezone: "EET (UTC+2)",
  availability: "Open to data analyst roles, freelance projects, and internships",
  /** Short paragraph in the footer's first column. */
  footerNote:
    "Junior data analyst and marketing analytics specialist based in Cairo, turning raw data into decisions teams can act on.",
  /** Rendered in the footer's bottom bar. */
  credit: "BUILT WITH NEXT.JS · GSAP · TAILWIND CSS",
  year: 2026,
} as const;

/* ── NAVIGATION ────────────────────────────────────────────────────────────── */

/**
 * Drives both the StaggeredMenu panel and the footer's Navigate column.
 * `ariaLabel` is what screen readers announce — keep it descriptive.
 */
export const NAV_LINKS = [
  { label: "About", href: "#about", ariaLabel: "Read the about section" },
  { label: "Projects", href: "#projects", ariaLabel: "See selected projects" },
  { label: "Why me", href: "#why-me", ariaLabel: "See the numbers so far" },
  { label: "Expertise", href: "#expertise", ariaLabel: "View areas of expertise" },
  { label: "Experience", href: "#experience", ariaLabel: "See the professional journey" },
  { label: "Skills", href: "#skills", ariaLabel: "View the technical toolkit" },
  { label: "Education", href: "#education", ariaLabel: "View education and training" },
  { label: "Contact", href: "#cta", ariaLabel: "Get in touch" },
] as const;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/YoussefSherif218" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/youssefsherif-/" },
  { label: "Email", href: "mailto:yshreef924@gmail.com" },
] as const;

/* ── HERO ──────────────────────────────────────────────────────────────────── */

export const HERO: {
  base: string;
  reveal: string;
  statementStrong: string;
  statementMuted: string;
} = {
  /**
   * Cursor-spotlight backdrop. The base layer is always visible; the reveal
   * layer shows only inside the soft circle that trails the pointer, so the
   * scene looks "peeled back" to a second version of itself.
   */
  base: "/images/hero-base.webp",
  reveal: "/images/hero-reveal.webp",
  /** Bottom-left statement. The first half is white, the rest dimmed. */
  statementStrong: "I turn raw datasets into strategic insights",
  statementMuted: "across analytics, marketing, and applied AI.",
};

/* ── ABOUT ─────────────────────────────────────────────────────────────────── */

export const ABOUT = {
  label: "(ABOUT)",
  statementStrong: "From biotechnology to data analytics — ",
  statementMuted:
    "I read a dataset for the business decision hiding inside it.",
} as const;

/* ── PROJECTS ──────────────────────────────────────────────────────────────── */

export interface Project {
  index: string;
  title: string;
  blurb: string;
  image: string;
  href: string;
  year: string;
  tags: readonly string[];
  /** Set on team projects only, so the contribution is never left implied. */
  role?: string;
  /**
   * Crop anchor for the card image. Cards are ~1.2:1, so wide banners need
   * pulling off-centre to avoid slicing their artwork mid-word.
   */
  imagePosition?: "center" | "right";
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "Logistics Delay Prediction",
    blurb:
      "Random Forest flagging late shipments at 88.9% accuracy across 6,880 GPS-tracked deliveries, plus an 11-table SQL Server schema with an ERD and ten business queries.",
    image: "/images/work-1.jpg",
    href: "https://github.com/YoussefSherif218/Transportation_and_Logistics_Tracking",
    year: "2026",
    tags: ["Python", "Random Forest", "SQL Server"],
  },
  {
    index: "02",
    title: "DAFEsteel",
    blurb:
      "DAFEGate, a morphology-aware module for YOLOv11n, lifting steel-defect mAP@0.5 from 79.35% to 81.98% on the NEU-DET benchmark — at 145 FPS and only 2.69M parameters.",
    image: "/images/project-dafesteel.png",
    href: "https://github.com/hazemelerefey/DAFEsteel",
    year: "2026",
    tags: ["PyTorch", "YOLOv11", "Computer Vision"],
    role: "Research, model code review & module architecture",
    imagePosition: "right",
  },
  {
    index: "03",
    title: "NeuroScope",
    blurb:
      "An interactive 3D workspace for configuring deep learning architectures — visualise, select, and wire model components directly in the browser.",
    image: "/images/project-neuroscope.webp",
    href: "https://github.com/hazemelerefey/NeuroScope",
    year: "2026",
    tags: ["Deep Learning", "Three.js", "React"],
    role: "Model code & research",
  },
  {
    index: "04",
    title: "RetailPulse AI",
    blurb:
      "K-Means segmentation over roughly a million Online Retail II rows, engineering RFM features into four actionable customer archetypes.",
    image: "/images/work-2.jpg",
    href: "https://github.com/YoussefSherif218/Retail-Pulse-AI-Strategic-Customer-Intelligence",
    year: "2026",
    tags: ["Python", "Scikit-learn", "Streamlit"],
  },
  {
    index: "05",
    title: "Retail SQL Lab",
    blurb:
      "The same Online Retail II data taken the other way — a five-table star schema, 1.07M invoice lines bulk-loaded, and the entire EDA written in T-SQL.",
    image: "/images/work-3.jpg",
    href: "https://github.com/YoussefSherif218/Retail-SQL-Lab",
    year: "2026",
    tags: ["SQL Server", "T-SQL", "Star Schema"],
  },
  {
    index: "06",
    title: "Bank Marketing Analytics",
    blurb:
      "EDA and classification models identifying what actually drives term-deposit subscription in a bank marketing campaign.",
    image: "/images/service-2.jpg",
    href: "https://github.com/YoussefSherif218/Bank-Marketing-Analytics",
    year: "2025",
    tags: ["Python", "Pandas", "Scikit-learn"],
  },
] as const;

/** Button under the project list. */
export const PROJECTS_CTA = {
  label: "View all on GitHub",
  href: "https://github.com/YoussefSherif218",
} as const;

/* ── WHY ME / STATS ────────────────────────────────────────────────────────── */

export interface Stat {
  /** Numeric portion — rolls up on scroll. Digits only. */
  value: number;
  /** Rendered immediately after the number, e.g. "+", "%", "M". */
  suffix: string;
  label: string;
}

export const STATS: readonly Stat[] = [
  { value: 2, suffix: "+", label: "Years across data analysis and marketing analytics" },
  { value: 7, suffix: "+", label: "Social accounts managed across agency portfolios" },
  { value: 1, suffix: "M", label: "Retail transaction rows modelled end to end" },
] as const;

export const WHY_ME = {
  label: "(WHY ME)",
  heading: "NUMBERS DON'T LIE",
  /** Full-bleed background image behind the stats. */
  image: "/images/why-us.jpg",
} as const;

/* ── PHILOSOPHY PULL-QUOTE ─────────────────────────────────────────────────── */

export const PHILOSOPHY = {
  label: "(PHILOSOPHY)",
  quote:
    "Understanding not just the numbers, but the business context behind them.",
  author: BRAND.fullName,
  role: "Applied AI & Data Analytics Scholar — Digilians, MCIT",
  /**
   * Studio cutout with a transparent background, trimmed to the subject
   * (667x1194). Because it has alpha it is composited as a standing figure on
   * the ink background — never used as a faded full-bleed texture.
   */
  portrait: "/images/youssef-portrait.webp",
} as const;

/* ── EXPERTISE ─────────────────────────────────────────────────────────────── */

export interface Expertise {
  index: string;
  title: string;
  blurb: string;
  items: readonly string[];
  image: string;
}

export const EXPERTISE: readonly Expertise[] = [
  {
    index: "01",
    title: "Data Analysis",
    blurb:
      "Python, SQL, Excel, Tableau, and Power BI to pull actionable insight out of complex datasets.",
    items: [],
    image: "/images/service-1.jpg",
  },
  {
    index: "02",
    title: "Marketing Analytics",
    blurb:
      "Campaign performance analysis, audience insight, and data-driven marketing strategy.",
    items: [],
    image: "/images/service-2.jpg",
  },
  {
    index: "03",
    title: "AI & ML Foundations",
    blurb:
      "Predictive models with machine learning and deep learning, via the Digilians MCIT scholarship.",
    items: [],
    image: "/images/service-3.jpg",
  },
  {
    index: "04",
    title: "Digital Marketing",
    blurb:
      "Social media strategy, content creation, and brand management across multiple agencies.",
    items: [],
    image: "/images/service-4.jpg",
  },
] as const;

/* ── EXPERIENCE ────────────────────────────────────────────────────────────── */

export interface ExperienceRole {
  id: string;
  /** Compact marker shown oversized on the card. */
  step: string;
  title: string;
  /** Company and dates. */
  subtitle: string;
  body: string;
  /** Rendered as the bulleted list on the expanded card. */
  subsections: string[];
  deliverables: string[];
  image: string;
}

export const EXPERIENCE_ROLES: readonly ExperienceRole[] = [
  {
    id: "role-1",
    step: "NOW",
    title: "Applied AI & Data Analytics Scholar",
    subtitle: "Digilians Initiative, MCIT · Dec 2025 — Present",
    body: "Selected for a nine-month scholarship from Egypt's Ministry of Communications, applying statistics and probability with Python, SQL, and Excel.",
    subsections: [
      "Python, SQL & Excel",
      "Statistics & probability",
      "Machine & deep learning",
    ],
    deliverables: ["Applied projects", "Scholarship track"],
    image: "/images/service-1.jpg",
  },
  {
    id: "role-2",
    step: "2025",
    title: "Senior Social Media Specialist",
    subtitle: "Arcktech Marketing Agency · Feb — Oct 2025",
    body: "Ran content creation and scheduling for seven social accounts spanning very different industries.",
    subsections: [
      "Content strategy",
      "Meta Business Suite",
      "7 accounts in parallel",
    ],
    deliverables: ["Content calendars", "Performance reporting"],
    image: "/images/service-2.jpg",
  },
  {
    id: "role-3",
    step: "2024",
    title: "Social Media Specialist",
    subtitle: "Vook Marketing Agency · Mar — Dec 2024",
    body: "Grew client accounts with strategies built around each brand's goals, then reported on what actually moved.",
    subsections: ["Account growth", "Content creation", "Channel analytics"],
    deliverables: ["Channel strategy", "Growth reporting"],
    image: "/images/service-3.jpg",
  },
  {
    id: "role-4",
    step: "2023",
    title: "Social Media Specialist",
    subtitle: "Creative Digital Marketing · Jan 2023 — Feb 2024",
    body: "Led digital campaigns that widened brand visibility across the agency's client base.",
    subsections: ["Campaign delivery", "Copywriting", "Brand strategy"],
    deliverables: ["Campaign assets", "Brand guidelines"],
    image: "/images/service-4.jpg",
  },
  {
    id: "role-5",
    step: "2020",
    title: "Customer Service Representative",
    subtitle: "Concentrix · Oct 2020 — Feb 2022",
    body: "Handled inbound and outbound customer calls — where the habit of listening for the real problem started.",
    subsections: ["Communication", "Problem solving", "CRM systems"],
    deliverables: ["Service targets", "Escalation handling"],
    image: "/images/why-us.jpg",
  },
] as const;

/* ── SKILLS ────────────────────────────────────────────────────────────────── */

export interface SkillGroup {
  name: string;
  blurb: string;
  /** Self-assessed proficiency, rendered by the odometer. */
  level: number;
  /** Supporting skills, each with its own real level where one exists. */
  features: readonly string[];
  featured: boolean;
}

export const SKILLS_INTRO = {
  label: "(TOOLKIT)",
  heading: "Skills",
  note: "Levels are self-assessed against the work shipped so far.",
} as const;

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    name: "Python",
    blurb: "Data analysis, ML pipelines, and automation.",
    level: 80,
    features: [
      "Pandas · 75%",
      "Scikit-learn · 65%",
      "Matplotlib · 75%",
      "Data cleaning · 80%",
      "Statistics · 75%",
      "ML fundamentals · 60%",
    ],
    featured: true,
  },
  {
    name: "Excel",
    blurb: "Advanced formulas, pivot tables, and dashboards.",
    level: 85,
    features: [
      "SQL · 70%",
      "Tableau · 65%",
      "Power BI · 60%",
      "Data storytelling · 70%",
      "Microsoft Office",
    ],
    featured: false,
  },
  {
    name: "Social Media",
    blurb: "Strategy, content, and campaigns across 7+ accounts.",
    level: 90,
    features: [
      "Meta Business Suite · 85%",
      "Content creation · 85%",
      "Campaign analytics · 80%",
      "Copywriting · 80%",
      "Canva · 85%",
    ],
    featured: false,
  },
] as const;

/** Scrolling marquee under the skill cards. */
export const TOOLS: readonly string[] = [
  "Git & GitHub",
  "Streamlit",
  "Buffer",
  "Google Analytics",
  "CRM Systems",
  "Microsoft Office",
  "Deep Learning Basics",
  "Data Mining",
] as const;

/* ── EDUCATION ─────────────────────────────────────────────────────────────── */

export interface EducationItem {
  title: string;
  excerpt: string;
  /** Date range, shown top-right on the card. */
  date: string;
  /** Short badge, shown top-left. */
  category: string;
}

export const EDUCATION: readonly EducationItem[] = [
  {
    title: "Applied AI & Data Analytics",
    excerpt:
      "A nine-month Digilians Initiative scholarship from Egypt's Ministry of Communications, covering statistics, machine learning, deep learning, and visualisation with Python, SQL, and Excel.",
    date: "Dec 2025 — Present",
    category: "Scholarship",
  },
  {
    title: "B.Sc. Biotechnology",
    excerpt:
      "Cairo University. Four years of hypothesis testing and lab-grade rigour — the same discipline analytics runs on.",
    date: "Sep 2019 — Jun 2023",
    category: "Degree",
  },
  {
    title: "Social Media Marketing Track",
    excerpt:
      "ITI — MCIT, Fayoum. Strategy, content systems, and campaign analytics.",
    date: "Nov 2024 — Mar 2025",
    category: "Training",
  },
] as const;

/* ── FAQ ───────────────────────────────────────────────────────────────────── */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: readonly FaqItem[] = [
  {
    question: "What roles are you looking for?",
    answer:
      "Data analyst roles, freelance analytics projects, and internships — I'm currently open to all three.",
  },
  {
    question: "What's your core stack?",
    answer:
      "Python, SQL, and Excel for the analysis; Pandas, scikit-learn, and Matplotlib for modelling; Tableau and Power BI for reporting.",
  },
  {
    question: "How does biotechnology connect to data analytics?",
    answer:
      "A biotech degree is years of hypothesis testing, statistics, and evidence. Analytics needs exactly that discipline, pointed at business questions instead of lab results.",
  },
  {
    question: "Do you work with teams in other timezones?",
    answer:
      "Yes. I'm based in Cairo on EET and work asynchronously with clear written updates.",
  },
  {
    question: "What are you focused on right now?",
    answer:
      "Finishing the Digilians AI scholarship while shipping end-to-end projects — segmentation, predictive modelling, and data visualisation.",
  },
] as const;

/* ── CV / RÉSUMÉ ───────────────────────────────────────────────────────────── */

export const RESUME = {
  /** Lives in /public, so it is served as a static file. */
  href: "/youssef-sherif-cv.pdf",
  viewLabel: "View CV",
  downloadLabel: "Download PDF",
  /** Filename the browser saves it as. */
  filename: "Youssef-Sherif-CV.pdf",
} as const;

/* ── CTA ───────────────────────────────────────────────────────────────────── */

export const CTA = {
  headingLine1: "LET'S WORK",
  headingLine2: "TOGETHER",
  blurb:
    "Open to data analyst roles, freelance projects, and internships. If you have a dataset or a decision to make, let's talk.",
  buttonLabel: "GET IN TOUCH",
  buttonHref: `mailto:${BRAND.email}`,
  /** The person you are about to email, rather than stock imagery. */
  image: PHILOSOPHY.portrait,
} as const;

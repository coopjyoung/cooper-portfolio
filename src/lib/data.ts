export const profile = {
  name: "Cooper Young",
  location: "Spokane, WA",
  title: "Software Developer | AI Applications | Creator of Concord",
  intro:
    "I build practical AI-powered tools that help people understand complex information.",
};

export const links = {
  github: "https://github.com/coopjyoung",
  linkedin: "https://www.linkedin.com/in/cooper-young1",
  concord: "https://concord-news.vercel.app/",
  email: "coop3ryoung@gmail.com",
  phone: "(425) 318-5251",
  phoneHref: "+14253185251",
};

export const about = [
  "I'm an early-career software developer focused on building practical AI-powered tools that solve real problems, not just demo well. I'm especially interested in AI and public-interest technology — using AI to cut through information overload rather than add to it.",
  "Most of what I know, I learned by building and shipping independently. I designed, deployed, and now maintain Concord, a production AI intelligence platform, end to end — architecture, database design, deployment, debugging, and iteration based on real usage.",
  "That independent experience shapes how I approach AI: responsibly. Concord is built around transparency, source comparison, and surfacing uncertainty, instead of presenting AI output as an unquestionable answer.",
];

export const project = {
  name: "Concord",
  tagline: "AI Intelligence Platform",
  role: "Founder & Developer",
  period: "2026",
  url: links.concord,
  urlLabel: "concord-news.vercel.app",
  problem:
    "People are flooded with fragmented, biased, and often untrustworthy information online, making it hard to quickly build a confident, well-sourced understanding of complex or fast-moving topics.",
  solution:
    "Concord is a production AI intelligence platform that aggregates information from multiple sources and uses AI-assisted workflows to produce structured, transparent reports — helping users understand complex topics through source comparison, context, and clearly surfaced uncertainty, instead of a single opaque answer.",
  features: [
    "Automated ingestion workflows that connect to and process external sources on a schedule",
    "AI-assisted analysis pipeline that produces structured, source-compared intelligence reports",
    "Transparency-focused output: sourcing, context, and uncertainty are surfaced, not hidden",
    "Deployed and running in production with real users",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Prisma",
    "Neon",
    "Vercel",
    "External APIs",
    "LLM / Prompt Engineering",
  ],
  challenges: [
    "Designing AI workflows that stay accurate and transparent while aggregating and summarizing many sources at once",
    "Building reliable scheduled ingestion and database operations for continuously updating source material",
    "Owning the entire software lifecycle solo — architecture, deployment, debugging, and migrations — and iterating based on real usage",
  ],
  screenshots: [
    {
      src: "/projects/concord/homepage.png",
      alt: "Concord homepage",
      caption:
        "Homepage — the landing experience introducing Concord's AI-driven intelligence reports.",
    },
    {
      src: "/projects/concord/intelligence-report.png",
      alt: "Concord intelligence report page",
      caption:
        "Intelligence Report — a structured, source-compared report generated from aggregated sources.",
    },
    {
      src: "/projects/concord/story-page.png",
      alt: "Concord story page",
      caption:
        "Story Page — a single story broken down with context, background, and related coverage.",
    },
    {
      src: "/projects/concord/pulse.png",
      alt: "Concord pulse page",
      caption: "Pulse — a real-time view of trending stories and topic momentum.",
    },
    {
      src: "/projects/concord/ai-features.png",
      alt: "Concord AI feature examples",
      caption:
        "AI Features — examples of AI-assisted analysis, summarization, and transparency indicators in action.",
    },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "Java", "HTML", "CSS"],
  },
  {
    category: "AI & Development",
    items: [
      "LLM Applications",
      "Prompt Engineering",
      "Claude Code",
      "AI Workflows",
      "API Integration",
    ],
  },
  {
    category: "Software Development",
    items: [
      "Full-Stack Development",
      "Database Design",
      "Cloud Deployment",
      "Git",
      "Debugging",
      "Documentation",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Next.js", "React", "PostgreSQL", "Prisma", "Vercel", "Neon"],
  },
];

export const certifications = [
  "Microsoft Office Specialist: Word",
  "Microsoft Office Specialist: PowerPoint",
];

export const experience = [
  {
    role: "Founder & Developer, Concord",
    org: "Self-employed",
    period: "2026 – Present",
    bullets: [
      "Took full ownership of a production AI platform from idea to deployment — architecture, database design, AI workflow design, deployment, and ongoing maintenance.",
      "Diagnosed and resolved real production issues, including debugging and database migrations, without a team to fall back on.",
      "Made independent technical and product decisions, then iterated based on real usage and feedback.",
    ],
  },
  {
    role: "Customer Service / Lot Attendant",
    org: "U-Haul",
    period: "Aug 2024 – Sept 2025",
    bullets: [
      "Resolved rental and equipment issues for customers in a fast-paced, in-person environment, translating logistics details into clear guidance.",
      "Owned daily lot operations — equipment organization, safety procedures, and facility upkeep — with minimal oversight.",
      "Adapted communication style across a wide range of customer needs, the same clarity-first instinct now applied to explaining AI-driven systems.",
    ],
  },
];

export const education = [
  { school: "Eastern Washington University", period: "Sept 2025 – Present", detail: "" },
  {
    school: "Centralia College",
    period: "Sept 2022 – June 2025",
    detail: "Associate Degree",
  },
];

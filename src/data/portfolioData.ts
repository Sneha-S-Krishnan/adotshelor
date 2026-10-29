import {
  NavItem,
  ServicePillar,
  WorkStage,
  ProjectItem,
  DifferenceItem,
  ContactChannel,
  SocialLink,
} from "@/types/portfolio";

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export const BRAND_INFO = {
  name: "AdotShelor",
  domain: ".com",
  fullName: "AdotShelor.com",
  tagline: "Technology & Product Development Studio",
  headline: "From Problems to Powerful Solutions.",
  subheadline:
    "We design, develop, and deliver digital solutions that solve real problems, turn ideas into working products, and help you understand the technology behind them.",
  primaryButtonText: "Discuss Your Idea",
  secondaryButtonText: "Explore Our Work",
};

export const HERO_HIGHLIGHTS = [
  {
    title: "Practical Solutions",
    description: "Designed for real-world reliability and day-to-day simplicity.",
  },
  {
    title: "Transparent Process",
    description: "Clear milestones, direct collaboration, and no surprises.",
  },
  {
    title: "Long-Term Support",
    description: "Ongoing guidance and engineering ownership after delivery.",
  },
] as const;

export const SERVICE_PILLARS: readonly ServicePillar[] = [
  {
    id: "problem-solving",
    number: "01",
    title: "Service One — Problem Solving Through Technology",
    heading: "Solve the Problem. Simplify the Process.",
    subtitle: "Solve the Problem. Simplify the Process.",
    tag: "Problem Solving",
    description:
      "We identify practical challenges and develop digital solutions that improve workflows, reduce repetitive work, and make everyday tasks easier.",
    whatWeOffer: [
      "Custom websites and web applications",
      "Workflow automation",
      "Business management systems",
      "Custom software tools",
    ],
    buttonText: "Explore Problem Solving",
    buttonHref: "#contact",
    technicalFocus: [
      "Custom Web Apps",
      "Workflow Automation",
      "Business Systems",
      "Custom Software Tools",
    ],
  },
  {
    id: "idea-to-product",
    number: "02",
    title: "Service Two — Idea-to-Product Development",
    heading: "Your Idea, Built Into Reality.",
    subtitle: "Your Idea, Built Into Reality.",
    tag: "Idea-to-Product",
    description:
      "Have an idea for a digital product? We help transform your concept into a working application through thoughtful planning, design, development, and testing.",
    whatWeOffer: [
      "Website and application development",
      "MVP and prototype development",
      "Database and API integration",
      "Product interface design",
    ],
    buttonText: "Build Your Idea",
    buttonHref: "#contact",
    technicalFocus: [
      "MVP & Prototypes",
      "Full-Stack Web Apps",
      "Database & APIs",
      "Product UI/UX Design",
    ],
  },
  {
    id: "guided-development",
    number: "03",
    title: "Service Three — Guided Project Development",
    heading: "Build It. Understand It.",
    subtitle: "Build It. Understand It.",
    tag: "Guided Development",
    description:
      "We develop projects while explaining the technologies, implementation choices, and working principles behind them, helping clients gain practical technical understanding.",
    whatWeOffer: [
      "Guided software project development",
      "Code walkthroughs",
      "Technical documentation",
      "Implementation explanations",
      "Project demonstrations",
    ],
    buttonText: "Explore Guided Development",
    buttonHref: "#contact",
    technicalFocus: [
      "Guided Engineering",
      "Code Walkthroughs",
      "System Documentation",
      "Live Technical Demos",
    ],
  },
];

export const WORK_STAGES: readonly WorkStage[] = [
  {
    step: "01",
    title: "Understand",
    description: "We discuss your goals, challenges, and requirements.",
    timeline: "Stage 01",
  },
  {
    step: "02",
    title: "Plan & Design",
    description:
      "We define the project scope, choose suitable technologies, and create a clear development plan.",
    timeline: "Stage 02",
  },
  {
    step: "03",
    title: "Develop & Collaborate",
    description:
      "We build the solution, test its functionality, and share progress throughout development.",
    timeline: "Stage 03",
  },
  {
    step: "04",
    title: "Deliver & Explain",
    description:
      "We deliver the completed work, explain its functionality, and provide the agreed documentation and support.",
    timeline: "Stage 04",
  },
];

export const PROJECTS_DATA: readonly ProjectItem[] = [
  {
    id: "business-management-platform",
    name: "Business Management Platform",
    title: "Business Management Platform",
    category: "Business Software",
    problem:
      "Fragmented operations, scattered spreadsheets, and inefficient manual administrative overhead slowed team execution.",
    solution:
      "Engineered an integrated business management platform centralizing operations, client records, invoicing, and real-time operational reporting.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
    status: "Active",
    screenshot: "/projects/business-platform.jpg",
    liveDemo: "https://adotshelor.com",
    githubRepo: "https://github.com/adotshelor",
    metrics: "Production Active • Real-Time Client Telemetry",
  },
  {
    id: "workflow-automation-platform",
    name: "Workflow Automation Platform",
    title: "Workflow Automation Platform",
    category: "Workflow Systems",
    problem:
      "Repetitive data entry and disconnected multi-step communication between departments caused recurring errors and delay.",
    solution:
      "Developed an automated pipeline engine that synchronizes event-driven triggers, formats payloads, and eliminates redundant manual steps.",
    technologies: ["React", "Node.js", "REST APIs", "Redis", "Docker"],
    status: "Active",
    screenshot: "/projects/workflow-automation.jpg",
    liveDemo: "https://adotshelor.com",
    githubRepo: "https://github.com/adotshelor",
    metrics: "Event-Driven • Zero Payload Loss • Sub-20ms",
  },
  {
    id: "ai-analytics-tool",
    name: "AI-Powered Analytics Tool",
    title: "AI-Powered Analytics Tool",
    category: "AI Integration",
    problem:
      "Complex data streams and unstructured performance logs were too dense to interpret quickly without specialized analysts.",
    solution:
      "Created an intuitive analytics interface integrating AI assistance for automated trend summaries, anomaly detection, and actionable insights.",
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "OpenAI / Claude API",
      "Chart.js",
    ],
    status: "In Development",
    isPrototype: true,
    screenshot: "/projects/ai-analytics.jpg",
    githubRepo: "https://github.com/adotshelor",
    metrics: "In Development Prototype • Predictive Modeling",
  },
];

export const DIFFERENCE_ITEMS: readonly DifferenceItem[] = [
  {
    title: "Solutions With Purpose",
    description: "Every project begins with understanding the actual problem.",
    icon: "Target",
  },
  {
    title: "Clear Communication",
    description:
      "We explain project scope, technical decisions, and development progress.",
    icon: "MessageSquare",
  },
  {
    title: "Practical Development",
    description:
      "We focus on functionality, usability, and maintainable code.",
    icon: "Cpu",
  },
  {
    title: "Technical Understanding",
    description:
      "We help clients understand what has been built and how it works.",
    icon: "Lightbulb",
  },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    label: "Official Email",
    value: "contact@adotshelor.com",
    href: "mailto:contact@adotshelor.com",
  },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/adotshelor", isConfigured: true },
  { platform: "LinkedIn", url: "https://linkedin.com/company/adotshelor", isConfigured: true },
  { platform: "X / Twitter", url: "https://x.com/adotshelor", isConfigured: true },
];

export const FOOTER_SERVICES = [
  { label: "Problem Solving", href: "/services#problem-solving" },
  { label: "Idea-to-Product", href: "/services#idea-to-product" },
  { label: "Guided Development", href: "/services#guided-development" },
];

export const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

import {
  NavItem,
  ServiceItem,
  ProjectItem,
  TeamMember,
  ContactChannel,
  SocialLink,
} from "@/types/portfolio";

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Services", href: "#our-services" },
  { label: "Our Projects", href: "#our-projects" },
  { label: "Who Are We", href: "#who-are-we" },
  { label: "Contact", href: "#contact" },
];

export const BRAND_INFO = {
  name: "AdotShelor",
  domain: ".com",
  fullName: "AdotShelor.com",
  tagline: "Software & Technology Studio",
  headline: "Build. Create. Make an Impact.",
  supportingMessage:
    "AdotShelor turns ideas into practical digital experiences through thoughtful software, design, and technology.",
  aboutDescription:
    "AdotShelor is an independent software and technology brand dedicated to engineering modern web applications, reliable digital products, and dependable technical architectures. We bridge conceptual design and robust engineering to deliver software that is fast, accessible, and structured for longevity.",
};

export const ABOUT_PILLARS = [
  {
    title: "Purpose-Driven Engineering",
    description:
      "We build resilient software using strict typing, modular architectures, and modern web standards. Every solution is engineered for maintainability, speed, and clean code hygiene.",
    accent: "cyan" as const,
    icon: "code",
  },
  {
    title: "Accessible & Thoughtful Design",
    description:
      "Visual polish meets inclusive usability. We craft light, tactile, and glossy interfaces that prioritize user clarity, responsive layouts across devices, and strict reduced-motion adherence.",
    accent: "purple" as const,
    icon: "sparkles",
  },
  {
    title: "Scalable Systems Architecture",
    description:
      "From zero-configuration deployment pipelines to dependable cloud services, our architectural approaches ensure systems grow smoothly without compounding technical debt.",
    accent: "mint" as const,
    icon: "cube",
  },
];

export const SERVICES_DATA: readonly ServiceItem[] = [
  {
    id: "web-development",
    title: "Website & Web Application Development",
    category: "Web Engineering",
    shortDescription:
      "Engineering modern, accessible web applications and responsive web platforms utilizing modern Next.js, React, and TypeScript foundations.",
    accentColor: "cyan",
    deliverables: [
      "Full-stack web application development and single-page apps",
      "Type-safe component design systems and headless architectures",
      "Performance optimization for Core Web Vitals and lightning load times",
      "API integration, database interfaces, and server-side logic",
    ],
    technologies: ["Next.js (App Router)", "TypeScript", "React 19", "Tailwind CSS", "Node.js"],
    approach:
      "We design web platforms with strict type contracts, modular server/client boundaries, and automated build pipelines that ensure high uptime and consistent rendering across devices.",
    isProposed: true,
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    category: "Mobile Solutions",
    shortDescription:
      "Designing and developing cross-platform mobile solutions delivering fluid user interactions, offline capabilities, and native performance.",
    accentColor: "purple",
    deliverables: [
      "Cross-platform iOS and Android application development",
      "Native device API integrations (camera, geolocation, push alerts)",
      "Offline-first synchronization and secure local storage",
      "App Store and Google Play deployment preparation",
    ],
    technologies: ["React Native", "TypeScript", "Tailwind / NativeWind", "REST / GraphQL"],
    approach:
      "Focusing on high frame-rate responsiveness, minimal bundle size, and seamless cross-platform design consistency with native tactile feel.",
    isProposed: true,
  },
  {
    id: "ai-ml-solutions",
    title: "AI & Machine Learning Solutions",
    category: "Intelligent Systems",
    shortDescription:
      "Integrating applied machine learning models, natural language interfaces, and automated data pipelines into practical software workflows.",
    accentColor: "mint",
    deliverables: [
      "Custom LLM integration, agentic workflows, and semantic search",
      "Automated prompt engineering, guardrails, and validation pipelines",
      "Vector database embeddings and contextual knowledge retrieval",
      "API orchestration for predictive intelligence features",
    ],
    technologies: ["Gemini API", "Python", "Vector Embeddings", "LangChain / LangGraph", "Node.js"],
    approach:
      "Pragmatic AI adoption prioritizing measurable utility, cost control, data privacy, and deterministic software fallbacks.",
    isProposed: true,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Interface Systems",
    category: "Design & Interaction",
    shortDescription:
      "Translating brand identity and user requirements into clean, light-themed, tactile user interfaces and reusable design token systems.",
    accentColor: "pink",
    deliverables: [
      "Comprehensive design systems and component libraries",
      "High-fidelity interactive prototypes and wireframes",
      "WCAG 2.1 AA accessibility auditing and keyboard navigation design",
      "Responsive layout engineering from mobile to ultra-wide viewports",
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Accessible HTML5 / ARIA"],
    approach:
      "Design rooted in clarity, generous whitespace, restrained drop shadows, and subtle pastel accents with full reduced-motion accessibility.",
    isProposed: true,
  },
  {
    id: "software-consulting",
    title: "Software Consulting & Technical Assistance",
    category: "Technical Advisory",
    shortDescription:
      "Providing structured codebase audits, architecture reviews, scalability guidance, and debugging support for technology projects.",
    accentColor: "blue",
    deliverables: [
      "In-depth technical architecture evaluation and debt mitigation",
      "Performance profiling and bundle size optimization audits",
      "CI/CD build automation, testing strategies, and deployment hardening",
      "Technology stack selection and system scalability blueprints",
    ],
    technologies: ["System Design", "Cloud Infrastructure", "Code Audits", "Git Workflows"],
    approach:
      "Direct, actionable engineering recommendations aimed at reducing ongoing operational overhead and accelerating delivery velocity.",
    isProposed: true,
  },
];

export const PROJECTS_DATA: readonly ProjectItem[] = [
  {
    id: "adotshelor-portfolio",
    title: "AdotShelor.com Brand Web Presence",
    shortDescription:
      "The official single-page brand portfolio website engineering the AdotShelor.com identity and capabilities.",
    problemAddressed:
      "Establishing a distinctive, high-performance web presence that communicates technical rigor, a light-theme aesthetic, and modular software craft.",
    mainFeatures: [
      "Animated brand wordmark introduction with zero-layout-shift navbar transition",
      "Inline card expansion with keyboard accessibility and ARIA compliance",
      "Responsive single-scroll layout adapting from mobile to desktop",
      "Strict light theme with glossy white surfaces and subtle pastel glows",
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Turbopack"],
    status: "Active",
    detailedInformation:
      "Engineered on Next.js 16 App Router using Turbopack and React 19. Implements custom CSS keyframes and coordinate-based transitions for the brand intro, pure CSS glassmorphic surfaces, and structured data separation.",
    externalUrl: "https://adotshelor.com",
    isPlaceholder: false,
  },
  {
    id: "placeholder-project-alpha",
    title: "Application Framework Core [Placeholder]",
    shortDescription:
      "A modular web application architecture foundation designed for scalable software products.",
    problemAddressed:
      "Addressing boilerplate overhead and architectural inconsistency across new software initiative launches.",
    mainFeatures: [
      "Strict data contract validation and error handling primitives",
      "Pre-configured authentication and role-based route guards",
      "Lightweight state orchestration with minimal client bundle footprint",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    status: "In Development",
    detailedInformation:
      "Development placeholder representing upcoming software core. Details, repository links, and live demonstrations will be populated upon official project release.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-project-beta",
    title: "Intelligent Data Connector [Placeholder]",
    shortDescription:
      "A resilient utility suite for external cloud service orchestration and rate-limited API synchronization.",
    problemAddressed:
      "Mitigating intermittent third-party service latency and payload formatting drift across distributed endpoints.",
    mainFeatures: [
      "Exponential backoff retry algorithms with circuit breaker patterns",
      "Automated payload schema validation with TypeScript type narrowing",
      "Edge-ready deployment support for serverless compute",
    ],
    technologies: ["TypeScript", "Node.js", "Edge Computing", "Cloud Functions"],
    status: "Planned",
    detailedInformation:
      "Development placeholder representing planned backend toolsuite. Project specifications, repository URL, and documentation will be linked once published.",
    isPlaceholder: true,
  },
];

export const TEAM_DATA: readonly TeamMember[] = [
  {
    id: "discipline-software-engineering",
    name: "Engineering Lead [Placeholder]",
    role: "Full-Stack Software Architecture",
    bio: "Focusing on resilient web applications, strict TypeScript systems, and high-performance front-end and back-end integration.",
    initials: "SE",
    skills: ["TypeScript", "Next.js", "React", "Node.js", "System Design"],
    isPlaceholder: true,
  },
  {
    id: "discipline-product-design",
    name: "Product Design Lead [Placeholder]",
    role: "UI/UX & Interface Systems",
    bio: "Guiding the visual identity, accessible design tokens, micro-interactions, and responsive layout polish across platforms.",
    initials: "PD",
    skills: ["UI/UX Systems", "Design Tokens", "Accessibility (a11y)", "Tailwind CSS"],
    isPlaceholder: true,
  },
  {
    id: "discipline-systems-devops",
    name: "Systems & Cloud Lead [Placeholder]",
    role: "DevOps & Infrastructure",
    bio: "Ensuring zero-downtime deployment pipelines, edge network configurations, and robust build automation.",
    initials: "SC",
    skills: ["CI/CD", "Vercel / Cloud Infrastructure", "Performance Tuning", "Security"],
    isPlaceholder: true,
  },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    label: "Direct Email",
    value: "contact@adotshelor.com",
    href: "mailto:contact@adotshelor.com",
    isPlaceholder: true,
  },
  {
    label: "Inquiries",
    value: "inquiries@adotshelor.com",
    href: "mailto:inquiries@adotshelor.com",
    isPlaceholder: true,
  },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: "GitHub", isConfigured: false },
  { platform: "LinkedIn", isConfigured: false },
  { platform: "X / Twitter", isConfigured: false },
];

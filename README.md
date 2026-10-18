# AdotShelor.com — Official Portfolio

An independent, single-page portfolio web application introducing **AdotShelor.com** as a software and technology brand. Built with modern web standards, strict type safety, accessible interactions, and a light-theme aesthetic with glossy white surfaces and subtle pastel accents.

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) 16.4.2 (App Router with Turbopack)
- **UI Runtime**: [React](https://react.dev) 19.3.0
- **Language**: [TypeScript](https://www.typescriptlang.org) 5.9.3 (`strict: true`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.3.3 (via `@tailwindcss/turbopack`)
- **Font Optimization**: [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist Sans & Geist Mono)
- **Code Quality**: [ESLint](https://eslint.org) 9 (`eslint-config-next`)

---

## Features & Page Structure

1. **Brand Intro & Hero (`#home`)**: 
   - Interactive character-by-character typewriter sequence for `AdotShelor`.
   - Smooth slide-out reveal for `.com` in signature cyan (`#0891b2`).
   - Coordinate-based FLIP flight settling the logo into the sticky navbar without layout shifts.
   - Smooth entrance for headline (*“Build. Create. Make an Impact.”*), supporting message, CTAs, and glossy interface preview.
   - Full `prefers-reduced-motion` immediate bypass and session persistence.
2. **About AdotShelor (`#about`)**:
   - Split layout explaining brand mission, engineering philosophy, and technology focus chips.
   - 3 core architectural pillars: *Purpose-Driven Engineering*, *Accessible & Thoughtful Design*, and *Scalable Systems Architecture*.
3. **Our Services (`#our-services`)**:
   - 5 proposed service categories with accessible inline expansion (`aria-expanded`, `aria-controls`):
     - Website & Web Application Development
     - Mobile Application Development
     - AI & Machine Learning Solutions
     - UI/UX Design & Interface Systems
     - Software Consulting & Technical Assistance
4. **Our Projects (`#our-projects`)**:
   - Reusable project showcase cards with problem definitions, main features, status badges, and inline architecture disclosures.
   - External destination support opening live projects with secure attributes (`rel="noopener noreferrer"`).
5. **Who Are We? / Our Team (`#who-are-we`)**:
   - Clean profile cards with discipline initials avatars, roles, focus areas, and inline scope disclosures.
   - Clearly identified placeholders pending final team onboarding.
6. **Contact (`#contact`)**:
   - Accessible inquiry form with client-side validation for Name, Email, Subject, and Message.
   - Truthful delivery feedback (no false submission claims): generates prefilled mail client links directly to `contact@adotshelor.com`.
7. **Footer**:
   - Branded wordmark, quick section navigation, direct email channels, social placeholders (`(TBA)`), copyright notice, and a *"Replay Brand Intro"* action for testing.

---

## Project Structure

```
adotshelor-next/
├── public/                       # Static public assets and favicons
├── src/
│   ├── app/
│   │   ├── favicon.ico           # Application favicon
│   │   ├── globals.css           # Tailwind v4 tokens, light theme, glassmorphism
│   │   ├── layout.tsx            # Root layout, fonts, and OpenGraph metadata
│   │   └── page.tsx              # Single-page orchestrator assembling all sections
│   ├── components/
│   │   ├── brand/
│   │   │   ├── BrandIntro.tsx    # 6-phase logo typing & navbar flight animation
│   │   │   └── Logo.tsx          # Standalone responsive AdotShelor.com wordmark
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Responsive sticky glassmorphic navigation
│   │   │   └── Footer.tsx        # Semantic footer, links, and replay control
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx  # Brand narrative & 3 engineering pillars
│   │   │   ├── ContactSection.tsx# Accessible form & direct email channels
│   │   │   ├── HeroSection.tsx   # Hero headline, CTAs, and glossy interface mockup
│   │   │   ├── ProjectsSection.tsx# Reusable project cards with inline expansion
│   │   │   ├── ServicesSection.tsx# 5 service categories with inline disclosures
│   │   │   └── TeamSection.tsx   # Team disciplines & responsive profile cards
│   │   └── ui/
│   │       ├── Button.tsx        # Polymorphic buttons & link primitives
│   │       ├── ExpandableCard.tsx# Accessible inline card disclosure pattern
│   │       ├── InfoCard.tsx      # Glossy surface information card
│   │       └── SectionHeading.tsx# Reusable section heading with pastel badge
│   ├── data/
│   │   └── portfolioData.ts      # Structured data layer for all portfolio sections
│   └── types/
│       └── portfolio.ts          # TypeScript type definitions and interfaces
├── .env.example                  # Environment variable schema template
├── .gitignore                    # Git exclusions
├── eslint.config.mjs             # ESLint 9 configuration
├── next.config.ts                # Next.js configuration (Turbopack, caching)
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Deterministic dependency lockfile
├── tsconfig.json                 # TypeScript compiler configuration
└── README.md                     # Documentation
```

---

## Prerequisites

- **Node.js**: `v20.x` or higher (`v22.x` recommended)
- **npm**: `v10.x` or higher

---

## Setup & Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd adotshelor-next
   ```

2. **Install dependencies cleanly**:
   ```bash
   npm ci
   ```

3. **Configure local environment (optional)**:
   ```bash
   cp .env.example .env.local
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Validation & Verification Commands

Run these commands to verify code quality, type integrity, and production build readiness:

```bash
# 1. Lint the codebase (ESLint 9)
npm run lint

# 2. Type-check with TypeScript (zero emit)
npm run typecheck

# 3. Compile optimized production build (Next.js 16 with Turbopack)
npm run build

# 4. Preview production build locally
npm run start
```

---

## Recommended Git Workflow for Collaboration

1. **Main Branch Protection**:
   - Keep `master` / `main` stable and deployable.
   - Require pull requests with passing `npm run lint` and `npm run typecheck` checks prior to merging.

2. **Feature Branching**:
   - Create focused branches for new milestones:
     ```bash
     git checkout -b feature/contact-backend
     ```

3. **Atomic Commits**:
   - Use conventional commit messages (`feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`).

4. **Pre-Push Validation**:
   - Always run `npm run lint && npm run typecheck && npm run build` locally before pushing.

---

## Current Status & Next Steps

This repository represents the initial development milestone of the portfolio website. Content and backend connections that await final business input prior to public deployment include:
- Confirming final service offerings (currently marked as *Proposed Offering*).
- Replacing placeholder project case studies with production applications and repositories.
- Supplying approved team photographs, biographies, and profiles.
- Wiring the contact form to a transactional email service (e.g. Resend, SendGrid) or server action.
- Adding official social media profile URLs once established.

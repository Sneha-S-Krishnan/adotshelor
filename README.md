# AdotShelor

The AdotShelor portfolio website: a single-page studio site built with Next.js, React, TypeScript, and Tailwind CSS.

## Project structure

```text
.
├── public/                         # Static assets served from the site root
│   └── projects/                   # Project showcase images
├── src/
│   ├── app/                        # Next.js routes, root layout, and global styles
│   │   └── api/contact/route.ts    # Contact form endpoint
│   ├── components/
│   │   ├── brand/                  # Brand identity and intro
│   │   ├── blocks/                 # Composed visual blocks
│   │   ├── effects/                # Reusable animation and interaction components
│   │   ├── layout/                 # Site-wide navigation and footer
│   │   ├── sections/               # Home page sections
│   │   └── ui/                     # Shared interface primitives
│   ├── data/                       # Portfolio and navigation content
│   ├── lib/                        # Shared utilities
│   └── types/                      # Shared TypeScript types
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

### Organization guidelines

- Keep Next.js route entry points and route handlers in `src/app`.
- Put page-specific content in `src/components/sections` and reusable site chrome in `src/components/layout`.
- Put reusable animation and interaction pieces in `src/components/effects`; use `src/components/ui` for general interface primitives.
- Keep shared content, utilities, and types in `src/data`, `src/lib`, and `src/types`.
- Place static files in `public` and reference them with root-relative URLs.

## Getting started

Requirements: Node.js 20 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact email

The contact form posts to `/api/contact`. To send inquiries through Resend, configure `RESEND_API_KEY` and, optionally, `CONTACT_TO_EMAIL` in the local environment. Without a Resend API key, the endpoint validates submissions and logs limited inquiry details for development.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

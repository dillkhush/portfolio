export interface Project {
  slug: string
  title: string
  description: string
  summary: string
  tech: string[]
  live?: string
  source?: string
  highlights: string[]
  featured?: boolean
  image: string
  caseStudy?: {
    heroMedia?: {
      type: 'image' | 'video'
      src: string
      poster?: string
      alt?: string
    }
    overview: string
    problem: string[]
    solution: string[]
    results: { metric: string; detail: string }[]
    timeline: { phase: string; description: string }[]
    stackNotes?: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'neonfolio',
    title: 'NeonFolio',
    description:
      'Next-gen personal branding experience that pairs cinematic visuals with realtime analytics and case-study storytelling.',
    summary:
      'Designed and engineered a 60fps animated portfolio with A/B tested CTA flows, unified CMS content, and automated lead routing.',
    tech: ['Next.js 15', 'Framer Motion', 'Contentlayer', 'Tailwind CSS', 'Vercel Analytics'],
    live: 'https://dilkhush.dev',
    source: 'https://github.com/thegr8dilkhush/portfolio',
    highlights: [
      'Dynamic OG image generation per page using @vercel/og and MDX metadata',
      'Interactive hero with WebGL post-processing and reduced-motion fallbacks',
      'Lead capture engine with Zod validation, Resend email automation, and CRM webhook',
    ],
    featured: true,
    image: '/images/projects/neonfolio.webp',
    caseStudy: {
      heroMedia: {
        type: 'video',
        src: '/media/case-studies/neonfolio-hero.webm',
        poster: '/images/projects/neonfolio.webp',
        alt: 'Animated preview of NeonFolio interface',
      },
      overview:
        'NeonFolio is my personal branding lab: a high-performance storytelling engine that turns casual visitors into interested collaborators. The build explores how cinematic motion, data, and UX clarity can coexist without sacrificing Core Web Vitals.',
      problem: [
        'Design a portfolio that feels like a product launch, not a static resume.',
        'Balance heavy motion ideas with real-world performance budgets and accessibility.',
        'Create a content system that makes adding new case studies effortless.',
      ],
      solution: [
        'Crafted a signature visual language with programmable lightfields, parallax ribbons, and responsive glyphs anchored to my initials.',
        'Built a modular content layer powering hero spotlights, timelines, and data-driven highlights from a single source of truth.',
        'Engineered motion primitives with Framer Motion + CSS that respect prefers-reduced-motion and keep LCP under 1.8s.',
      ],
      results: [
        { metric: '+42% time on site', detail: 'Compared to the previous portfolio within the first month of launch.' },
        { metric: '1.3s LCP', detail: 'Measured on mid-tier Android devices with Chrome Lighthouse.' },
        { metric: 'Lead quality ↑', detail: 'Every inbound message now includes project scope, budget band, and timeline via the guided form.' },
      ],
      timeline: [
        { phase: 'Discovery', description: 'Storyboarding brand pillars, motion tests, and hero narrative.' },
        { phase: 'Design & Build', description: 'Component-driven implementation of hero, marquee, projects, and timeline systems.' },
        { phase: 'Refinement', description: 'Performance tuning, accessibility audits, and real-device animation QA.' },
      ],
      stackNotes: [
        'Next.js 15 App Router with React 19 streaming + Suspense.',
        'Framer Motion orchestrating scroll + pointer responsive storytelling.',
        'Custom Canvas ribbon renderer for live signature lightfields.',
      ],
    },
  },
  {
    slug: 'sprintlens',
    title: 'SprintLens Dashboard',
    description: 'Product analytics workspace for SaaS teams with realtime collaboration.',
    summary:
      'Built collaborative dashboards with optimistic UI, server actions, and real-time presence powered by WebSockets.',
    tech: ['Next.js App Router', 'tRPC', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Radix UI'],
    live: 'https://sprintlens.app',
    source: 'https://github.com/thegr8dilkhush/sprintlens',
    highlights: [
      'Segmented analytics queries with 190% faster load times via clustered indexes',
      'Role-based access control and audit trails using Row-Level Security',
      'Automated data quality alerts delivered through Slack + email digests',
    ],
    image: '/images/projects/sprintlens.webp',
    caseStudy: {
      heroMedia: {
        type: 'image',
        src: '/images/projects/sprintlens-dashboard.webp',
        alt: 'SprintLens dashboard overview',
      },
      overview:
        'SprintLens equips SaaS founders with a telemetry cockpit that surfaces the truth about acquisition, activation, and retention. I partnered with the founding team to translate analyst pain into a living product.',
      problem: [
        'Growth, product, and finance teams relied on stale spreadsheets and duelling metrics.',
        'Dashboard performance tanked once datasets crossed a few million events.',
        'Enterprise prospects needed rock-solid access control and auditability from day one.',
      ],
      solution: [
        'Designed story-centric dashboards with saved views, annotations, and collaborative filters.',
        'Implemented Postgres segmentation tables with incremental refresh to keep queries sub-second.',
        'Wrapped the app in policy-driven tRPC procedures enforcing RLS and capturing every change.',
      ],
      results: [
        { metric: '190% faster insights', detail: 'Median dashboard query dropped from 4.2s to 1.4s after segment clustering.' },
        { metric: 'SOC2-ready foundation', detail: 'Role policies, audit logs, and encryption satisfied security reviewers pre-beta.' },
        { metric: '3 launch customers', detail: 'Secured paid pilots within two weeks thanks to demo storytelling + reliability.' },
      ],
      timeline: [
        { phase: 'Research', description: 'Facilitated metric-mapping workshops across marketing, product, and finance.' },
        { phase: 'MVP Build', description: 'Delivered dashboards, segmentation engine, and collaboration suite in six weeks.' },
        { phase: 'Scale', description: 'Instrumented feature usage, alerts, and board-ready reporting.' },
      ],
      stackNotes: [
        'Next.js App Router, React Server Components, tRPC, and TanStack Query.',
        'PostgreSQL with Prisma, row-level security, and scheduled materialisation.',
        'Tailwind CSS + Radix UI for accessible interface primitives.',
      ],
    },
  },
  {
    slug: 'pulsecare',
    title: 'PulseCare Telehealth',
    description:
      'HIPAA-ready telehealth platform that merges scheduling, video calls, and AI triage.',
    summary:
      'Led the end-to-end build of a HIPAA-compliant telehealth MVP with real-time event streaming and AI-assisted triage tools.',
    tech: ['Next.js', 'WebRTC', 'Supabase', 'Clerk', 'OpenAI', 'Tailwind'],
    highlights: [
      'Secure WebRTC rooms with TURN fallback and adaptive bitrate scaling',
      'AI-driven symptom intake that surfaces provider recommendations instantly',
      'Infrastructure managed with Terraform, auto-scaled with Vercel + Fly.io',
    ],
    image: '/images/projects/pulsecare.webp',
    caseStudy: {
      heroMedia: {
        type: 'video',
        src: '/media/case-studies/pulsecare-room-tour.webm',
        poster: '/images/projects/pulsecare.webp',
        alt: 'PulseCare telehealth experience walkthrough',
      },
      overview:
        'PulseCare folds intake, live care, and follow-up into a single HIPAA-compliant workflow so clinicians can focus on people over process.',
      problem: [
        'Clinics juggled separate SaaS tools for forms, waiting rooms, video calls, and charting.',
        'Low-bandwidth patients struggled to maintain stable telehealth sessions.',
        'Compliance demanded patient privacy, auditable access, and fault-tolerant infrastructure.',
      ],
      solution: [
        'Unified journey from AI-assisted symptom intake to visit summaries with collaborative notes.',
        'Implemented WebRTC with TURN + adaptive bitrate, device preflight, and humanised waiting rooms.',
        'Delivered infrastructure-as-code with Terraform, encrypted storage, and audit logging across regions.',
      ],
      results: [
        { metric: 'No-shows ↓ 28%', detail: 'Automated reminders + frictionless web check-in reduced drop-offs for beta clinics.' },
        { metric: 'Call success 99%', detail: 'TURN routing and adaptive bitrate sustained sessions on 1.5 Mbps upstream links.' },
        { metric: 'HIPAA readiness in 6 weeks', detail: 'Infrastructure, logging, and BAAs passed compliance audit ahead of pilot launch.' },
      ],
      timeline: [
        { phase: 'Blueprint', description: 'Mapped provider + patient journeys with service blueprinting workshops.' },
        { phase: 'MVP Sprint', description: 'Implemented intake AI, video rooms, clinician console, and notifications.' },
        { phase: 'Compliance', description: 'Hardened infra, encryption, and monitoring to hit HIPAA benchmarks.' },
      ],
      stackNotes: [
        'Next.js, Supabase, Clerk auth, and custom WebRTC stack with TURN + SFU fallback.',
        'OpenAI + LangChain summarisation tuned for medical context with clinician review loop.',
        'Terraform-managed infrastructure deployed across Vercel + Fly.io regions for redundancy.',
      ],
    },
  },
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  achievements: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Hyperstack Labs',
    period: '2024 – Present',
    achievements: [
      'Scaled design systems across five product surfaces with 30% faster ship cycles.',
      'Championed performance budgets that brought Lighthouse performance to 99 on desktop and 92 on mobile.',
      'Mentored 4 engineers on advanced React patterns, accessibility, and DX tooling.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance / Consulting',
    period: '2022 – 2024',
    achievements: [
      'Delivered 12+ production apps spanning fintech, healthtech, and creator tools.',
      'Built CI/CD pipelines with automated visual regression tests and per-PR preview analytics.',
      'Co-created roadmaps with stakeholders, focusing on measurable KPI lifts and delightful UX.',
    ],
  },
]

export const skills = {
  core: ['TypeScript', 'Next.js', 'React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS'],
  experienceDesign: ['Design Systems', 'UX Strategy', 'Accessibility Audits', 'Motion Design'],
  tooling: ['Turborepo', 'Vercel', 'Vitest', 'Playwright', 'Storybook', 'Docker'],
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
}

export interface PartnerLogo {
  name: string
  logo: string
  url?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '“Dilkhush didn’t just ship our analytics dashboard — he rewired how the team thinks about product velocity. Every interaction feels deliberate, and shipping with him felt like adding a staff engineer + product strategist in one.”',
    name: 'Elena Rivera',
    role: 'Co-founder, SprintLens',
  },
  {
    quote:
      '“From HIPAA compliance to buttery-smooth video calls, he handled details that normally take teams months. Our clinicians finally have a tool that keeps up with the pace of care.”',
    name: 'Dr. Aaron Patel',
    role: 'Medical Director, PulseCare',
  },
  {
    quote:
      '“His design sense, code quality, and obsession with measurable outcomes gave us the confidence to demo to investors weeks ahead of schedule.”',
    name: 'Maya Arora',
    role: 'Founder, NeonFolio Collective',
  },
]

export const partnerLogos: PartnerLogo[] = [
  { name: 'Notion Masters', logo: '/logos/notion.svg' },
  { name: 'Linear Leaders', logo: '/logos/linear.svg' },
  { name: 'Stripe Atlas', logo: '/logos/stripe.svg' },
  { name: 'Intercom Build', logo: '/logos/intercom.svg' },
  { name: 'Supabase Launch Week', logo: '/logos/supabase.svg' },
  { name: 'AWS Activate', logo: '/logos/aws.svg' },
]

import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, 'Please share your name')
    .max(80, 'Name looks too long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Please enter a valid email address'),
  message: z
    .string({ required_error: 'Message is required' })
    .min(20, 'Tell me a bit more — at least 20 characters')
    .max(1500, 'Let’s keep it under 1500 characters'),
  budget: z.string().optional(),
  projectType: z.string().optional(),
})

export type ContactPayload = z.infer<typeof contactSchema>

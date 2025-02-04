import { z } from "zod"

export const contactSchema = z.object({
    _id: z.string(),
    name: z.string(),
    phone: z.number(),
    email: z.string(),
    message: z.string(),
    contacted: z.boolean()
})

export const adminContactSchema = z.array(
    contactSchema
)

export type Contact = z.infer<typeof contactSchema>
export type ContactForm = Pick<Contact, 'name' | 'phone' | 'email' | 'message'>

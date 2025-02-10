import { z } from "zod";

export const ContactSalesSchema = z.object({
    name: z.string()
        .min(3, { message: 'First name is required' })
        .max(100, {
            message: "Max 100 characters allowed",
        }),
    email: z.string()
        .email({
            message: "Please enter a valid email address",
        }),
    message: z.string()
        .min(1, { message: 'Message is required' })
        .max(255, {
            message: "Max 255 characters allowed",
        }),
    service: z.string()
        .min(1, { message: 'Service is required' })
        .max(30, {
            message: "Max 30 characters allowed",
        }),
    budget: z.string()
        .min(1, { message: 'service is required' })
        .max(20, {
            message: "Max 20 characters allowed",
        }),
    accept: z.string().nullable().refine(data => data?.includes('on'), {
        message: 'Must accept privacy policy'
    })
})
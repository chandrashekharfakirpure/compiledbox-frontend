'use server'

import { ContactSalesSchema } from "@/_lib/definations";
import { ActionResult } from "next/dist/server/app-render/types";

export async function ContactSalesAction(
    prevState: ActionResult, formData: FormData
) {
    const validatedFields = ContactSalesSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        service: formData.get('service'),
        budget: formData.get('budget'),
        accept: formData.get('accept'),
    })

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            payloadErrors: null,
            message: "Missing Fields.",
        };
    }

    const payload = {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
        service: validatedFields.data.service,
        budget: validatedFields.data.budget,
    }

    try {
         const res = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        if (!res) {
            return {
                error: 'error',
                message: "Something went wrong!"
            }
        } else {
            return {
                success: 'success',
                message: "Message sent successfully"
            }
        }
    } catch (error) {
        console.error("error", error);
        throw error;
    }

    
}
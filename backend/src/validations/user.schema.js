import { z } from "zod";

export const userRegistrationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email format").min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),   
    password: z.string().min(6, "Password must be at least 6 characters long")
});


export const userLoginFlexibleSchema = z.object({
    identifier: z.string().min(1, "Identifier (email or phone) is required"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

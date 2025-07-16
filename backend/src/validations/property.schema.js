import { z } from 'zod';

export const propertySchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    status: z.enum(['sale', 'rent'], "Status must be either 'sale' or 'rent'"),
    type: z.enum(['apartment', 'house', 'land'], "Type must be either 'apartment', 'house', or 'land'"),
    imageURL: z.url("Image URL must be a valid URL"),
    isAvailable: z.boolean().optional(),
    addressLine: z.string().min(1, "Address line is required"),
    location: z.string("Location ID must be a valid UUID")
});
import {z} from "zod";

// type ProductFormValues = {
//     title: string;
//     price: number;
//     categoryId: number;
//     description: string;
//     images: string[];
// }

export const productSchema = z.object({
    //id: z.coerce.number().min(1, "id must be greater than zero"),
    title: z.string().min(5, "title must be at least 5 chars."),
    // price: z.coerce.number<number>().min(1, "price must be greater than zero"),
    // categoryId: z.coerce.number<number>(),
    price: z.coerce.number().min(1, "price must be greater than zero"),
    description: z.string(),
    categoryId: z.coerce.number(),
    file: z.file().min(1).max(1024 * 1024)
});
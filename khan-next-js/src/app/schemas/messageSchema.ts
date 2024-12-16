import {z} from "zod";

export const messageSchema = z.object({
    content :z
    .string()
    .min(10, `Message must be atleast of 10 charecters`)
    .max(300, `Message must be no more than 300 charecters`)
})
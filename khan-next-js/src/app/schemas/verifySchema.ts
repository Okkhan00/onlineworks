import {z} from "zod";

export const verifySchema = z.object({
    code: z.string().length(6, `Verifecation Code Must be 6 Digits`)
})
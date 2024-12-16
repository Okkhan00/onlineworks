import {z} from "zod";

export const singInSchema = z.object({
    identifer: z.string(),
    password:z.string()
})
import {z} from "zod";

export const usernameValidation = z
   .string()
   .min(2, "Username must be Atleast 2 Charecters")
   .max(20, "Username must be No more than 20 Charecters")
   .regex(/^[a-zA-Z0-9_]+$/,"Username must Not contain special Charecters")


export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({ message: `Invalid Email Address`}),
    password: z.string().min(6,{message: `Password must be Atleast 6 Charecters`})
}) 
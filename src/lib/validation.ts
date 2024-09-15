import { z } from 'zod'

const requiredString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]{3,16}$/,
        "Username must be between 3 and 16 characters long, and can only contain letters, numbers, underscores, and dashes."
    ),
    password: requiredString.min(8, "Password must be at least 8 characters"),
})

export type SignUpValue = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
    username: requiredString, 
    password: requiredString,
}) 

export type LoginSchema = z.infer<typeof loginSchema>
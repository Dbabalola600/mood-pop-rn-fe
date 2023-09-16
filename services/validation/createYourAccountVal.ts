
import { Schema, z } from "zod";

export const createYourAccountSchema = z
    .object({

        userName: z.string({
            required_error: "Your username is required",
        }),
        password: z
            .string({
                required_error: "A password is required",
            })
        ,
        email: z
            .string({
                required_error: "Your Email is required",
            })
            .email({ message: "Must be a valid email address" }),
    })
    .refine((schema) => schema.userName, {
        path: ["userName"],
        message: "Must be a valid username",
    });

export type CreateYourAccountFormType = z.infer<typeof createYourAccountSchema>;

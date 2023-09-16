import { z } from "zod";


export const NewPostSchema = z
    .object({
        category: z.string({ required_error: " Invalid " }),

        post: z
            .string({ required_error: " Invalid " })
    })

export type NewPostFormType = z.infer<typeof NewPostSchema>
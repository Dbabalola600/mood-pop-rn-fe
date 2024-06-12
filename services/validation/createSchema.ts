import { z } from "zod";



export const createNoteSchema = z
    .object({
        title: z
            .string({ required_error: " Required" }),

        content: z
            .string({ required_error: "Required" }),

    })

export type createNoteFormType = z.infer<typeof createNoteSchema> 
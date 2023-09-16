import { z } from "zod";


export const NewJournalSchema = z
    .object({
        title: z.string({ required_error: " Invalid " }),

        content: z
            .string({ required_error: " Invalid " })
    })

export type NewJournalFormType = z.infer<typeof NewJournalSchema>
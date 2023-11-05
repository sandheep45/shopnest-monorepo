import * as z from "zod";

export const TagsSchema = z.object({
  id: z.string(),
  name: z.string(),
});


export interface ITags extends z.infer<typeof TagsSchema> {}

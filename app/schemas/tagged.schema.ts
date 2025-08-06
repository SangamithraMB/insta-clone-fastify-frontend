import { z } from "zod";

const tagSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().optional(),
  tagged_by_user: z.string(),
  created_at: z.string()
});

const tagsSchema = z.array(tagSchema);

type Tag = z.infer<typeof tagSchema>;

export { tagSchema, tagsSchema };
export type { Tag };
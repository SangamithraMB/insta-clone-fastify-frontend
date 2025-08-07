import { z } from "zod";

// Existing schema for a single post
export const postSchema = z.object({
  id: z.number(),
  img_url: z.string(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

// Existing schema for multiple posts
export const postsSchema = z.array(postSchema);

// Schema for creating a new post (frontend validation)
// It expects a caption (optional, but at least one of caption or image must be present)
// and an image (File instance, optional)

const isFileAvailable = typeof File !== "undefined";

export const createPostInputSchema = z
  .object({
    caption: z.string().min(1, "Caption is required.").max(255).optional(),
    image: isFileAvailable ? z.instanceof(File).optional() : z.any().optional(),
  })
  .refine((data) => data.caption || data.image, {
    message: "Either an image or a caption is required.",
    path: ["image"],
  });

// Typescript type inferred from createPostInputSchema
export type CreatePostInput = z.infer<typeof createPostInputSchema>;

// Typescript type inferred from postSchema
export type Post = z.infer<typeof postSchema>;
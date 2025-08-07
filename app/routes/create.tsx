import type { ActionFunctionArgs } from 'react-router';
import { CreatePostForm } from "~/components/CreatePostForm";
import { api } from "~/services/api";
import { createPostInputSchema } from "~/schemas/post.schema";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const caption = formData.get("caption")?.toString();
  const imageFile = formData.get("image") as File;

  const validationResult = createPostInputSchema.safeParse({
    caption,
    image: imageFile,
  });

  if (!validationResult.success) {
    console.error("Client-side validation failed:", validationResult.error.issues);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/create",
      },
    });
  }

  const payload = new FormData();
  payload.append("caption", validationResult.data.caption);
  payload.append("image", validationResult.data.image);

  try {
    await api.post("/posts", payload); // remove manual Content-Type
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/profile/posts/grid",
      },
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to create post." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
}}

export default function CreatePostPage() {
  return (
    <div className="py-8">
      <CreatePostForm />
    </div>
  );
}
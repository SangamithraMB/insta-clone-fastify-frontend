import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { tagsSchema, type Tag } from "~/schemas/tagged.schema";
import { TaggedItem } from "~/components/TaggedItem";

export async function loader() {
  try {
    const response = await api.get("/tagged/grid");
    return tagsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load posts:", error);
    throw new Response("Could not load posts.", { status: 500 });
  }
}

export default function PostsGrid() {
  const tags = useLoaderData() as Tag[];
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {tags.map((tag) => (
        <TaggedItem key={tag.id} tag={tag} />
      ))}
    </div>
  );
}
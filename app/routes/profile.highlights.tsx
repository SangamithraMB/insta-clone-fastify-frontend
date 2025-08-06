import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { highlightsSchema, type Highlight } from "~/schemas/highlights.schema";
import { HighlightBubble } from "~/components/HighlightBubble";

export async function loader() {
  try {
    const response = await api.get("/highlights");
    return highlightsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Could not load highlights.", { status: 500 });
  }
}

export default function HighlightsList() {
  const highlights = useLoaderData() as Highlight[];

  return (
    <div className="flex space-x-4 overflow-x-auto py-4">
      {highlights.map((highlight) => (
        <HighlightBubble
          key={highlight.id}
          id={highlight.id}
          cover_image_url={highlight.cover_image_url}
          title={highlight.title}
        />
      ))}
    </div>
  );
}
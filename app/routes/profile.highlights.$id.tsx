// app/routes/profile.highlightsById.tsx

import { useLoaderData } from "react-router";
import { HighlightStory } from "~/components/HighlightStory";
import { highlightSchema } from "~/schemas/highlights.schema";
import { api } from "~/services/api";

export async function loader({ params }: { params: { id: string } }) {
  try {
    const response = await api.get(`/highlights/${params.id}`);
    return highlightSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to fetch highlight:", error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData<typeof loader>();
  return <HighlightStory highlight={highlight} />;
}
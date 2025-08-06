// app/components/HighlightStory.tsx

import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

type HighlightStoryProps = {
  highlight: Highlight;
};

export function HighlightStory({ highlight }: HighlightStoryProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="max-h-96 object-cover rounded-lg shadow-lg"
      />
      <h2 className="mt-4 text-xl font-semibold">{highlight.title}</h2>

      <Link
        to={`/profile/posts/grid`}
        className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 transition"
      >
        View Posts
      </Link>

    </div>
  );
}
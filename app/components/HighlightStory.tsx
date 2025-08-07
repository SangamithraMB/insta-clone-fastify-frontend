// app/components/HighlightStory.tsx

import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

type HighlightStoryProps = {
  highlight: Highlight;
};

export function HighlightStory({ highlight }: HighlightStoryProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="w-full max-w-md max-h-[28rem] object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
      />
      <h2 className="mt-6 text-2xl font-semibold text-gray-800 text-center">{highlight.title}</h2>

      <Link
        to={`/profile/posts/grid`}
        className="mt-8 px-6 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300"
      >
        View Posts
      </Link>
    </div>
  );
}
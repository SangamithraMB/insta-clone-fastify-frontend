// app/components/HighlightStory.tsx

import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

type HighlightStoryProps = {
  highlight: Highlight;
};

export function HighlightStory({ highlight }: HighlightStoryProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02]">
    <img
      src={highlight.cover_image_url}
      alt={highlight.title}
      className="w-full h-auto max-h-[28rem] object-cover"
    />
  </div>

  <h2 className="mt-6 text-2xl font-semibold text-gray-800 text-center tracking-tight">
    {highlight.title}
  </h2>

  <Link
    to={`/profile/posts/grid`}
    className="mt-8 px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
  >
    View Posts
  </Link>
</div>

  );
}
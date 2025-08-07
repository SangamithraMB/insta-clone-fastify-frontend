import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
  to={`/profile/highlights/${highlight.id}`}
  className="group flex flex-col items-center space-y-1 transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
  aria-label={`View highlight: ${highlight.title}`}
>
  <div className="w-16 h-16 rounded-full p-[2px] border-2 border-gray-200 shadow-sm group-hover:border-indigo-500 group-hover:shadow-md transition-all duration-200">
    <img
      src={highlight.cover_image_url}
      alt={highlight.title}
      className="w-full h-full object-cover rounded-full"
    />
  </div>
  <span className="text-[11px] font-medium text-gray-800 text-center truncate max-w-[4.5rem] group-hover:text-indigo-600">
    {highlight.title}
  </span>
</Link>
  );
}
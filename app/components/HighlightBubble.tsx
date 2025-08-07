import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="group flex flex-col items-center space-y-2 transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label={`View highlight: ${highlight.title}`}
    >
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow-sm group-hover:border-indigo-500 group-hover:shadow-md transition-all duration-200"
      />
      <span className="text-xs font-medium text-gray-700 truncate max-w-[4.5rem] text-center group-hover:text-indigo-600">
        {highlight.title}
      </span>
    </Link>
  );
}
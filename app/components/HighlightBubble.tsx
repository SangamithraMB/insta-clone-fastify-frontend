import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

// type HighlightBubbleProps = {
//   id: number;
//   cover_image_url: string;
//   title: string;
// };

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <>
    {/* <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-6">
      <div className="px-6 py-4 bg-gray-50">
        <p className="font-semibold text-gray-700 tracking-wide">webeet_user</p>
      </div>
      <img
        src={highlight.cover_image_url}
        alt={highlight.title || "Instagram post"}
        className="w-full aspect-square object-cover"
      />
      <div className="px-6 py-4">
        <p className="text-gray-900 text-sm leading-relaxed">
          <span className="font-semibold mr-2 text-indigo-600">webeet_user</span>
          {highlight.title}
        </p>
      </div>
    </div> */}
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-200"
      aria-label={`View highlight: ${highlight.title}`}
    >
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-sm"
      />
      <span className="text-xs text-center truncate max-w-[4rem] font-medium text-gray-700">
        {highlight.title}
      </span>
    </Link>
    </>
  );
}

import { Link } from "react-router";

type HighlightBubbleProps = {
  id: number;
  cover_image_url: string;
  title: string;
};

export function HighlightBubble({ id, cover_image_url, title }: HighlightBubbleProps) {
  return (
    <Link to={`/profile/highlights/${id}`} className="flex flex-col items-center space-y-1">
      <img
        src={cover_image_url}
        alt={title}
        className="w-16 h-16 rounded-full object-cover border border-gray-300"
      />
      <span className="text-xs text-center truncate max-w-[4rem]">{title}</span>
    </Link>
  );
}
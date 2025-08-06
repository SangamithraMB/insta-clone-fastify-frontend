import type { Reel } from "~/schemas/reel.schema";

export function ReelGridItem({ reel }: { reel: Reel }) {
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-gray-300 shadow-sm">
      <img
        src={reel.thumbnail_url}
        alt={reel.caption || "Reel thumbnail"}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 rounded-md px-2 py-1 text-white text-xs font-semibold flex items-center space-x-1">
        <span>▶️</span>
        <span>{reel.views}</span>
      </div>
    </div>
  );
}

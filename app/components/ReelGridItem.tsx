import type { Reel } from "~/schemas/reel.schema";

export function ReelGridItem({ reel }: { reel: Reel }) {
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={reel.thumbnail_url}
        alt={reel.caption || "Reel thumbnail"}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-2.5 py-1.5 text-white text-xs font-medium flex items-center gap-1">
        <span className="text-sm">▶️</span>
        <span>{reel.views}</span>
      </div>
    </div>
  );
}
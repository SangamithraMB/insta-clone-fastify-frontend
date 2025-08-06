import type { Tag } from "~/schemas/tagged.schema";

export function TaggedItem({ tag }: { tag: Tag }) {
  return (
    <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-6">
      <div className="p-5 bg-gray-50">
        <p className="font-semibold text-gray-700">Personal Page</p>
      </div>
      <img
        src={tag.img_url}
        alt={tag.caption || "Instagram post"}
        className="w-full aspect-square object-cover"
      />
      <div className="p-5">
        <p className="text-gray-800">
          <span className="font-semibold mr-2 text-indigo-600">Someone</span>
          {tag.caption}
        </p>
      </div>
    </div>
  );
}

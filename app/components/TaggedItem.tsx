import type { Tag } from "~/schemas/tagged.schema";

export function TaggedItem({ tag }: { tag: Tag }) {
  const backendDomain = "https://insta-clone-fastify-backend.onrender.com";
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow transition hover:shadow-md mb-6">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-600">📌 Tagged on Personal Page</p>
      </div>
      <img
        src={`${backendDomain}${tag.img_url}`}
        alt={tag.caption || "Instagram post"}
        className="w-full aspect-square object-cover"
      />
      <div className="p-4">
        <p className="text-gray-700 text-sm">
          <span className="font-semibold text-indigo-600 mr-2">Someone</span>
          {tag.caption}
        </p>
      </div>
    </div>
  );
}
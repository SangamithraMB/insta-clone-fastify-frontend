import type { Post } from "~/schemas/post.schema";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-6">
      <div className="px-6 py-4 bg-gray-50">
        <p className="font-semibold text-indigo-700 tracking-wide">Sangamithra</p>
      </div>
      <img
        src={post.img_url}
        alt={post.caption || "Instagram post"}
        className="w-full aspect-square object-cover"
      />
      <div className="px-6 py-4">
        <p className="text-gray-900 text-sm leading-relaxed">
          <span className="font-semibold mr-2 text-indigo-600">Sangamithra</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}

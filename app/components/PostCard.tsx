import type { Post } from "~/schemas/post.schema";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg transition-transform hover:scale-[1.01] mb-8">
      
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            S
          </div>
          <p className="font-semibold text-sm text-gray-900">Sangamithra</p>
        </div>
        <span className="text-gray-400">•••</span>
      </div>

      {/* Image */}
      <img
        src={post.img_url}
        alt={post.caption || "Instagram post"}
        className="w-full aspect-square object-cover"
      />

      {/* Caption */}
      <div className="px-4 py-3 text-sm text-gray-800">
        <p>
          <span className="font-semibold text-indigo-600 mr-1">Sangamithra</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}
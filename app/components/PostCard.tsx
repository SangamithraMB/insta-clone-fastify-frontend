import { Heart, MessageCircle, Send } from "lucide-react";
import type { Post } from "~/schemas/post.schema";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-6 transition-transform hover:scale-[1.01]">
      
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-sm flex items-center justify-center">
            S
          </div>
          <p className="font-semibold text-sm text-gray-900">Sangamithra</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="4" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="10" cy="16" r="2" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <img
        src={post.img_url}
        alt={post.caption || "Instagram post"}
        className="w-full aspect-square object-cover"
      />

      {/* Action Buttons */}
      <div className="flex gap-4 px-4 pt-3 text-gray-700">
        <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer" />
        <MessageCircle className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
        <Send className="w-5 h-5 ml-auto hover:text-green-500 cursor-pointer" />
      </div>

      {/* Caption */}
      <div className="px-4 py-3 text-sm text-gray-800 leading-5">
        <span className="font-semibold text-black mr-1">Sangamithra</span>
        {post.caption}
      </div>
    </div>
  );
}

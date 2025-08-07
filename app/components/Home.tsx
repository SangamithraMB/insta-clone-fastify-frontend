import type { Post } from "~/schemas/post.schema";
import type { Highlight } from "~/schemas/highlights.schema";
import { PostCard } from "~/components/PostCard";
import { HighlightBubble } from "~/components/HighlightBubble";

type HomeProps = {
  posts: Post[];
  highlights: Highlight[];
};

export function Home({ posts, highlights }: HomeProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 space-y-10">

      {/* Highlights at the top */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Highlights</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {highlights.length > 0 ? (
            highlights.map((highlight) => (
              <HighlightBubble key={highlight.id} highlight={highlight} />
            ))
          ) : (
            <p className="text-gray-500">No highlights available.</p>
          )}
        </div>
      </section>

      {/* Posts grid/list */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Posts</h2>
        <div className="flex flex-col space-y-8">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-gray-500">No posts available.</p>
          )}
        </div>
      </section>

    </main>
  );
}
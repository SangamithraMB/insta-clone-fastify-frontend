import type { Tag } from "~/schemas/tagged.schema";

export function TaggedItem({ tag }: { tag: Tag }) {
  return (
    <div className='w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6'>
      <div className='p-4'>
        <p className='font-bold'>Personal Page</p>
      </div>
      <img
        src={tag.img_url}
        alt={tag.caption || "Instagram post"}
        className='w-full h-auto aspect-square object-cover'
      />
      <div className='p-4'>
        <p>
          <span className='font-bold mr-2'>Sangamithra</span>
          {tag.caption}
        </p>
      </div>
    </div>
  );
}
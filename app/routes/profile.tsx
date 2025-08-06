import { NavLink, Outlet, useLocation } from "react-router";

export default function ProfileLayout() {
  const location = useLocation();
  const isStoryFullscreen = location.pathname.startsWith("/profile/highlights/")
    && location.pathname !== "/profile/highlights";

  if (isStoryFullscreen) {
    // Don’t render tab UI for highlight story
    return <Outlet />;
  }

  return (
    <div>
      <div className='flex justify-center items-center border-b mb-4'>
        <NavLink to='/profile/posts/grid' className='flex-1 text-center p-4'>Posts</NavLink>
        <NavLink to='/profile/reels/grid' className='flex-1 text-center p-4'>Reels</NavLink>
        <NavLink to='/profile/tagged/grid' className='flex-1 text-center p-4'>Tagged</NavLink>
        <NavLink to='/profile/highlights' className='flex-1 text-center p-4'>Highlights</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

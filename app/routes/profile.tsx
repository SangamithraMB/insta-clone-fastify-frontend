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
      <nav className="flex justify-center border-b border-gray-300 mb-6 bg-white sticky top-0 z-40 shadow-sm">
        {[
          { to: '/profile/posts/grid', label: 'Posts' },
          { to: '/profile/reels/grid', label: 'Reels' },
          { to: '/profile/tagged/grid', label: 'Tagged' },
          { to: '/profile/highlights', label: 'Highlights' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex-1 text-center py-3 font-medium transition-colors duration-200
               ${
                 isActive
                   ? 'border-b-2 border-indigo-600 text-indigo-600'
                   : 'text-gray-600 hover:text-indigo-500'
               }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <main className="px-4 md:px-0">
        <Outlet />
      </main>
    </div>
  );
}
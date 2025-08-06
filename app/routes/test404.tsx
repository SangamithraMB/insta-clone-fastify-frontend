// routes/test404.tsx

import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function NotFound() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRedirect(true);
    }, 2000); // Redirect after 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/profile/posts/grid" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600">Redirecting to your profile...</p>
    </div>
  );
}

// app/components/NotFound.tsx

import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export function NotFound() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRedirect(true);
    }, 2000); // Wait for 2 seconds before redirecting

    return () => clearTimeout(timeout);
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 – Page Not Found</h1>
      <p className="text-gray-600 mb-4">Redirecting you to your profile...</p>
      <div className="animate-pulse text-sm text-gray-500">Please wait</div>
    </div>
  );
}

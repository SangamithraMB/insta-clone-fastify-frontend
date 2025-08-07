export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://www.pngkey.com/png/full/2-28310_instagram-logo-black-and-ahite-instagram-word-logo.png"
            alt="Instagram Logo"
            className="h-8 object-contain"
          />
        </a>
        <div className="text-2xl" role="img" aria-label="Love">
          ❤️
        </div>
      </nav>
    </header>
  );
}
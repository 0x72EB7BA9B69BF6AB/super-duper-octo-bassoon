import Link from "next/link"

export function Navigation() {
  return (
    <nav className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/" className="text-lg sm:text-xl font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span className="bg-white text-black px-3 py-1 rounded">Harmony</span>
            <span className="text-white">TV</span>
          </Link>
        </div>

        <div className="flex gap-6 sm:gap-8 text-white text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-gray-300 transition-colors px-2 py-1 rounded hover:bg-white/10">
            Home
          </Link>
          <Link href="/login" className="hover:text-gray-300 transition-colors px-2 py-1 rounded hover:bg-white/10">
            Connexion
          </Link>
          <Link href="/register" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors font-semibold">
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  )
}
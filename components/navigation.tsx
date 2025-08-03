import Link from "next/link"

export function Navigation() {
  return (
    <nav className="py-2 sm:py-3 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span className="bg-white text-black px-3 py-1">Harmony</span>
            <span className="text-white">TV</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-white text-sm sm:text-base font-medium w-full sm:w-auto justify-center sm:justify-end">
          <Link href="/" className="hover:text-gray-300 transition-colors px-2 sm:px-3 py-2 rounded hover:bg-white/10 text-center whitespace-nowrap">
            Home
          </Link>
          <Link href="/login" className="hover:text-gray-300 transition-colors px-2 sm:px-3 py-2 rounded hover:bg-white/10 text-center whitespace-nowrap">
            Connexion
          </Link>
          <Link href="/register" className="bg-white text-black px-3 sm:px-4 py-2 rounded hover:bg-gray-200 transition-colors font-semibold text-center whitespace-nowrap">
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  )
}
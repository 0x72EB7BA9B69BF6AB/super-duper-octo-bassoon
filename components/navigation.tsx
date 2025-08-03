import Link from "next/link"

export function Navigation() {
  return (
    <nav className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-500 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/" className="text-lg sm:text-xl font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity">
            <span className="bg-white text-black px-2">Harmony</span>
            <span className="text-white">TV</span>
          </Link>
        </div>

        <div className="flex gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Connexion
          </Link>
          <Link href="/register" className="hover:text-white transition-colors">
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  )
}
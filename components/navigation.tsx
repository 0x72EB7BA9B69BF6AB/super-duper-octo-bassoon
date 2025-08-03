import Link from "next/link"

export function Navigation() {
  return (
    <nav className="w-full py-2 sm:py-3 bg-black/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-bold flex items-center gap-1 hover:scale-105 transition-all duration-300 ease-out">
            <span className="bg-white text-black px-3 py-1 font-semibold hover:bg-gray-100 transition-colors duration-300">Harmony</span>
            <span className="text-white font-semibold hover:text-gray-200 transition-colors duration-300">TV</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-white text-sm sm:text-base font-medium">
          <Link href="/" className="relative overflow-hidden group text-gray-300 hover:text-white transition-all duration-300 px-2 sm:px-3 py-2 rounded text-center whitespace-nowrap">
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded"></div>
          </Link>
          <Link href="/login" className="relative overflow-hidden group text-gray-300 hover:text-white transition-all duration-300 px-2 sm:px-3 py-2 rounded text-center whitespace-nowrap">
            <span className="relative z-10">Connexion</span>
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded"></div>
          </Link>
          <Link href="/register" className="bg-white text-black px-3 sm:px-4 py-2 rounded hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out font-semibold text-center whitespace-nowrap">
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  )
}
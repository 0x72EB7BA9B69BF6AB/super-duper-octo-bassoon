import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-500 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center">
        <div className="flex gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

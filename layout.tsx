import { Manrope } from "next/font/google"
import { Preloader } from "@/components/preloader"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Preloader />
        {children}
      </body>
    </html>
  )
}

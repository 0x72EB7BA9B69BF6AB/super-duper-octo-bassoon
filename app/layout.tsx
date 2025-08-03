import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navigation } from '@/components/navigation'
import { Preloader } from '@/components/preloader'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harmony TV',
  description: 'The fastest and most effective way to start, test and validate your business idea with AI',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Preloader />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

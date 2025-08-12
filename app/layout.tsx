import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StarfieldBackground } from "@/components/starfield-background"
import { CursorGlow } from "@/components/cursor-glow"

export const metadata: Metadata = {
  title: "Moonveil - Discord Bot",
  description: "Premium Discord bot with space-themed features and capabilities",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      {/* Removed fixed background colors to allow theme switching */}
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <StarfieldBackground />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

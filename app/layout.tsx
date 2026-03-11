import "./globals.css"
import { ThemeProvider } from "next-themes"

import ScrollProgress from "@/components/ScrollProgress"
import CursorGlow from "@/components/CursorGlow"
import ParticlesBg from "@/components/ParticlesBg"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          <ScrollProgress/>
          <CursorGlow/>
          <ParticlesBg/>

          {children}

        </ThemeProvider>

      </body>
    </html>
  )
}
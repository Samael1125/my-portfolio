import "./globals.css"
import { ThemeProvider } from "next-themes"

import ScrollProgress from "@/components/ScrollProgress"
import CursorGlow from "@/components/CursorGlow"
import Chatbot from "@/components/Chatbot"
import ParticlesBg from "@/components/ParticlesBg"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          <ScrollProgress/>
          <CursorGlow/>
          <ParticlesBg/>
          <Chatbot/>
          <Analytics/>
          {children}

        </ThemeProvider>

      </body>
    </html>
  )
}
export const metadata = {
title: "Utkarsh | Portfolio",
description: "Full Stack Developer & ML Enthusiast"
}
import type React from "react"
import "@/app/globals.css"
import { DM_Sans, Inter, Montserrat, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata = {
  title: "Tabi - Hall of Fame",
  description: "Honoring those who make Tabi special",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${montserrat.variable} ${playfair.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}

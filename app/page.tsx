"use client"

import React from "react"

import { useEffect, useState, useCallback, memo, useRef } from "react"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { TabizensGuide } from "@/components/tabizens-guide"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { OfficialTweetsView } from "@/components/official-tweets-view"
import { HonorRollView } from "@/components/honor-roll-view"
import { Twitter, Award, Users, BookOpen } from "lucide-react"
import initialTopTweets from "@/data/top-tweets.json"



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

type ViewType = "official" | "tweets" | "honor" | "guide"

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("tweets")
  const contentRef = useRef<HTMLDivElement>(null)

  const handleViewChange = useCallback((view: ViewType) => {
    setActiveView(view)
    // Scroll to content area with a small delay to ensure view has changed
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Updated as per suggestion */}
      <section className="relative w-full h-[43vw] min-h-[400px] max-h-[960px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/bg.png"
          alt="Banner"
          fill
          className="object-cover w-full h-full z-0"
          priority
        />

        {/* Logo arriba a la izquierda */}
        <div className="absolute top-4 left-4 z-30 w-20 h-auto md:w-24 lg:w-28 sm:p-0 md:p-1 lg:p-2">
          <Image
            src="/tabilogo.png"
            alt="Tabi Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-contain"
            style={{ width: '100%', height: 'auto' }} // required
            priority
          />
        </div>

        {/* Contenido encima */}
        <div className="relative z-20 flex flex-col md:flex-row w-full items-stretch">
          {/* Texto a la izquierda, con margen negativo para acercarlo más al borde */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left py-8 md:py-0
            pl-4 md:pl-8 lg:pl-16 xl:pl-24 2xl:pl-32
            pr-4 md:pr-8 lg:pr-0">
            <h1
              className="text-4xl sm:text-left sm:text-5xl md:text-[5rem] lg:text-8xl xl:text-9xl font-bold mb-2 leading-tight"
              style={{
                fontFamily: "'Bebas Neue', 'Anton', Arial, sans-serif",
                background: "linear-gradient(90deg,rgb(190, 0, 0) 0%,rgb(255, 0, 0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hall of Fame
            </h1>
            <p
              className="mt-0 sm:mt-2 text-[0.54rem] sm:text-base md:text-[1.2rem] lg:text-[1.42rem] xl:text-3xl font-semibold"
              style={{
                fontFamily: "'DM Sans', 'Inter', 'Poppins', Arial, sans-serif",
                background: "linear-gradient(to right,rgb(226, 226, 226),rgb(255, 255, 255))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "rgba(255, 255, 255, 0.8)",
                letterSpacing: "0.01em",
              }}
            >
              CELEBRATING THE
        
              LEGENDS OF TABI
            </p>
          </div>
          {/* Puedes dejar la columna derecha vacía o poner algo más */}
          <div className="w-full md:w-1/2"></div>
        </div>
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-30">
          <ThemeToggle />
        </div>
      </section>

      {/* Toggle Section with improved aesthetics */}
      <section className="py-12 bg-background" ref={contentRef}>
        <div className="container mx-auto px-4">
          {/* Premium Box with 4 Separate Buttons */}
          <div className="flex justify-center mb-12">
            <Card className="p-3 shadow-lg border-border bg-muted/50 max-w-3xl w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <NavButton
                  icon={<Twitter className="h-4 w-4 mr-2" />}
                  label="Official Tweets"
                  isActive={activeView === "official"}
                  onClick={() => handleViewChange("official")}
                />
                <NavButton
                  icon={<Users className="h-4 w-4 mr-2" />}
                  label="Top Tweets"
                  isActive={activeView === "tweets"}
                  onClick={() => handleViewChange("tweets")}
                />
                <NavButton
                  icon={<Award className="h-4 w-4 mr-2" />}
                  label="Honor Roll"
                  isActive={activeView === "honor"}
                  onClick={() => handleViewChange("honor")}
                />
                <NavButton
                  icon={<BookOpen className="h-4 w-4 mr-2" />}
                  label="Tabizens Guide"
                  isActive={activeView === "guide"}
                  onClick={() => handleViewChange("guide")}
                />
              </div>
            </Card>
          </div>

          {/* Content based on active view with animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeView === "official" && <OfficialTweetsView />}
              {activeView === "tweets" && <TopTweetsView />}
              {activeView === "honor" && <HonorRollView />}
              {activeView === "guide" && <TabizensGuide />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={handleViewChange} />
    </main>
  )
}

// Navigation Button Component
const NavButton = memo(function NavButton({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center py-3 px-4 rounded-lg text-center transition-all duration-300 text-xs sm:text-sm font-medium overflow-hidden",
        isActive
          ? "bg-gradient-to-r from-[#d1102b] to-[#d1102b]/80 text-white shadow-md"
          : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground",
      )}
    >
      <span className="flex items-center">
        {icon}
        <span className="whitespace-nowrap">{label}</span>
      </span>
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  )
})

type TopTweet = {
  id: string | number
  author: string
  handle: string
  avatar?: string
  content: string
  hasImage?: boolean
  image?: string
}

const TopTweetsView = memo(function TopTweetsView() {
  const [topTweets, setTopTweets] = useState<TopTweet[]>(initialTopTweets)

  // Calculate the number of columns based on screen size
  // This helps us determine how to handle the last row
  const columnsCount = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 pl-4">
        <h2 className={cn("text-left", montserrat.className)} style={{ color: "#d1102b" }}>
          <span className="text-sm font-medium tracking-wider">TOP 10 TWEETS OF THE</span>
          <span className="block text-3xl md:text-4xl font-bold mt-1">WEEK</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topTweets.map((tweet, index) => {
          const isLast = index === topTweets.length - 1
          const isOnlyOneInLastRow = topTweets.length % 3 === 1 && isLast

          return (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                "w-full",
                !isOnlyOneInLastRow && "max-w-md",
                isOnlyOneInLastRow && "lg:col-span-3"
              )}
            >
              <Card
                className="p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border hover:border-[#d1102b]/30 cursor-pointer"
                onClick={() => window.open("https://x.com/tabizens", "_blank")}
                tabIndex={0}
                role="button"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={tweet.avatar || "/placeholder.svg"} alt={tweet.author} />
                    <AvatarFallback className="bg-[#d1102b]/20 text-[#d1102b]">{tweet.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">{tweet.author}</span>
                      <span className="text-muted-foreground text-sm">{tweet.handle}</span>
                    </div>
                  </div>
                </div>
                <p className="mb-4 flex-grow text-foreground/90">{tweet.content}</p>
                {tweet.hasImage && (
                  <div className="relative w-full h-40 mt-auto rounded-md overflow-hidden">
                    <Image
                      src={tweet.image || "/placeholder.svg"}
                      alt="Tweet image"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </Card>
            </motion.div>
          )
        })}
        {/* Si la última fila tiene 2 tarjetas, añade un div vacío al final para centrar */}
        {topTweets.length % 3 === 2 && <div className="hidden lg:block" />}
      </div>
    </div>
  )
})
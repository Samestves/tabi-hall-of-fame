"use client"

import { Analytics } from "@vercel/analytics/react";
import React, { useEffect, useState, useCallback, useRef, memo } from "react"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { TabizensGuide } from "@/components/tabizens-guide"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { OfficialTweetsView } from "@/components/official-tweets-view"
import { HonorRollView } from "@/components/honor-roll-view"
import { Twitter, Award, Users, BookOpen, Camera } from "lucide-react"
import { TabiTackView } from "@/components/tabi-tack-view"
import { TopTweetsView } from "@/components/top-tweets-view"
import { ThemeProvider } from "@/components/theme-provider" // <-- Importa tu ThemeProvider

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

type ViewType = "official" | "tweets" | "honor" | "guide" | "gallery"

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("official")
  const [mounted, setMounted] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleViewChange = useCallback((view: ViewType) => {
    setActiveView(view)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }, [])

  if (!mounted) {
    return <div style={{ visibility: "hidden" }} />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative w-full h-[43vw] min-h-[400px] max-h-[960px] flex items-center justify-center overflow-hidden">
          <Image
            src="/bg.png"
            alt="Banner"
            fill
            className="object-cover w-full h-full z-0"
            priority
          />
          <div className="absolute top-4 left-4 z-30 w-20 h-auto md:w-24 lg:w-28 sm:p-0 md:p-1 lg:p-2">
            <Image
              src="/tabilogo.png"
              alt="Tabi Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
          <div className="relative z-20 flex flex-col md:flex-row w-full items-stretch">
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
            <div className="w-full md:w-1/2"></div>
          </div>
          <div className="absolute top-4 right-4 z-30">
            <ThemeToggle />
          </div>
        </section>

        {/* Toggle Section */}
        <section className="py-12 bg-background" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <Card className="p-3 shadow-lg border-border bg-muted/50 max-w-3xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-2">
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
                  <NavButton
                    icon={<Camera className="h-4 w-4 mr-2" />}
                    label="Tabi Tack"
                    isActive={activeView === "gallery"}
                    onClick={() => handleViewChange("gallery")}
                  />
                </div>
              </Card>
            </div>

            {/* Content based on active view */}
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
                {activeView === "gallery" && <TabiTackView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Footer onNavigate={handleViewChange} />
        <Analytics />
      </main>
    </ThemeProvider>
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
        "w-full",
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
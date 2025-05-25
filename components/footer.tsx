"use client"

import type React from "react"

import { Montserrat, Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { Twitter, MessageCircle, Send, Heart, Sparkles } from "lucide-react"
import { useState, useRef, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

type ViewType = "official" | "tweets" | "honor" | "guide"

interface FooterProps {
  onNavigate: (view: ViewType) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const [showSupporters, setShowSupporters] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

  // Usar useLayoutEffect para actualizar la posición del tooltip antes de que se pinte
  useLayoutEffect(() => {
    function updateTooltipPosition() {
      if (buttonRef.current && tooltipRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect()
        setTooltipPosition({
          top: buttonRect.top,
          left: buttonRect.left + buttonRect.width / 2,
        })
      }
    }

    updateTooltipPosition()
    window.addEventListener("resize", updateTooltipPosition)
    window.addEventListener("scroll", updateTooltipPosition)

    return () => {
      window.removeEventListener("resize", updateTooltipPosition)
      window.removeEventListener("scroll", updateTooltipPosition)
    }
  }, [showSupporters])

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d1102b]/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3
              className={cn(
                "text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center",
                playfair.variable,
                "font-serif tracking-tight",
              )}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d1102b] to-[#d1102b]/80 drop-shadow-sm">
                Tabi – Hall of Fame
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Honoring those who make Tabi special. A community-driven platform to celebrate the best of Tabi.
            </p>
            <div className="flex space-x-5">
              <SocialLink
                href="https://twitter.com/Tabizens"
                icon={<Twitter className="h-5 w-5" />}
                label="Twitter"
                hoverColor="hover:text-[#1DA1F2]"
              />
              <SocialLink
                href="https://discord.com/invite/tabichain"
                icon={<MessageCircle className="h-5 w-5" />}
                label="Discord"
                hoverColor="hover:text-[#5865F2]"
              />
              <SocialLink
                href="https://t.me/+U-fX9trDA7dhZTBl"
                icon={<Send className="h-5 w-5" />}
                label="Telegram"
                hoverColor="hover:text-[#0088cc]"
              />
            </div>
          </div>

          <div>
            <h3 className={cn("text-base font-semibold mb-4 text-foreground/90", montserrat.className)}>Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink onClick={() => onNavigate("official")} label="Official Tweets" />
              <FooterLink onClick={() => onNavigate("tweets")} label="Top Tweets" />
              <FooterLink onClick={() => onNavigate("honor")} label="Honor Roll Board" />
              <FooterLink onClick={() => onNavigate("guide")} label="Tabizens Guide" />
            </ul>
          </div>

          <div>
            <h3 className={cn("text-base font-semibold mb-4 text-foreground/90", montserrat.className)}>Resources</h3>
            <ul className="space-y-3">
              <FooterLink
                href="https://mammoth-sodalite-d5e.notion.site/Tabipedia-1ebfa353b58e80d18633c7da8f1966fa"
                label="Tabipedia"
                external
              />
              <FooterLink href="#" label="Community Guidelines" />
              <FooterLink href="#" label="Volunteer Application" />
              <FooterLink href="https://t.me/+mZ7FoesXC9M4MDBh" label="Telegram Group" external />
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tabi – Hall of Fame. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative inline-block">
              <button
                ref={buttonRef}
                className="text-sm text-muted-foreground hover:text-[#d1102b] transition-colors flex items-center group px-3 py-2 rounded-lg hover:bg-muted/50"
                onMouseEnter={() => setShowSupporters(true)}
                onMouseLeave={() => setShowSupporters(false)}
                aria-label="Show special recognition"
              >
                <Sparkles className="h-3 w-3 mr-1.5 opacity-70 group-hover:opacity-100 group-hover:text-[#FFD700] transition-all duration-300" />
                <span className="group-hover:text-[#d1102b] font-medium">Special Recognition</span>
              </button>

              <AnimatePresence>
                {showSupporters && (
                  <motion.div
                    ref={tooltipRef}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed z-50 w-64 p-4 bg-card border border-border/50 rounded-lg shadow-lg"
                    style={{
                      bottom: `calc(100% - ${buttonRef.current?.getBoundingClientRect().top || 0}px + 10px)`,
                      left: `${buttonRef.current?.getBoundingClientRect().left || 0}px`,
                      transform: `translateX(calc(-50% + ${(buttonRef.current?.offsetWidth || 0) / 2}px))`,
                    }}
                  >
                    <div
                      className="absolute w-4 h-4 bg-card border-r border-b border-border/50 rotate-45"
                      style={{
                        bottom: "-2px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    ></div>
                    <h4 className={cn("text-sm font-medium mb-3 text-foreground", playfair.variable, "font-serif")}>
                      Community Champions
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <SupporterName name="Ricarfonso" />
                      <SupporterName name="Monirul" />
                      <SupporterName name="Tasniya" />
                      <SupporterName name="ZLoba" />
                      <SupporterName name="Awaq" />
                      <SupporterName name="Jane" />
                      <span className="text-xs text-muted-foreground col-span-2 mt-1 text-center italic">
                        and many others...
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-[#d1102b]" /> by{" "}
              <span className="ml-1 font-medium text-foreground/80">Samx</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon,
  label,
  hoverColor = "hover:text-[#d1102b]",
}: {
  href: string
  icon: React.ReactNode
  label: string
  hoverColor?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-muted-foreground transition-all duration-300 transform hover:-translate-y-1", hoverColor)}
      aria-label={label}
    >
      <div className="relative group">
        {icon}
        <span className="sr-only">{label}</span>
        <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-current transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
      </div>
    </a>
  )
}

function FooterLink({
  href,
  label,
  external = false,
  onClick,
}: {
  href?: string
  label: string
  external?: boolean
  onClick?: () => void
}) {
  if (onClick) {
    return (
      <li>
        <button
          onClick={onClick}
          className="text-muted-foreground hover:text-[#d1102b] transition-colors text-sm group flex items-center"
        >
          <span className="inline-block w-0 h-px bg-[#d1102b] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
          {label}
        </button>
      </li>
    )
  }

  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-muted-foreground hover:text-[#d1102b] transition-colors text-sm group flex items-center"
      >
        <span className="inline-block w-0 h-px bg-[#d1102b] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
        {label}
      </a>
    </li>
  )
}

function SupporterName({ name }: { name: string }) {
  return (
    <span className="text-xs font-medium text-foreground/90 hover:text-[#d1102b] transition-colors cursor-default">
      {name}
    </span>
  )
}

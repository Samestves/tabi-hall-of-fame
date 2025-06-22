"use client"

import type React from "react"

import { Montserrat, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, Crown, Star, Medal, Trophy, User } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export function HonorRollView() {
  type Member = {
    name: string
    tag: string
    extra?: string
    avatar?: string
  }

  const categories: {
    title: string
    members: Member[]
    size: "large" | "medium" | "small"
    icon: React.ReactNode
    color: string
    showBadge: boolean
  }[] = [
    {
      title: "BEST MODS",
      members: [
        { name: "MrBean", tag: "USDT", avatar: "/avatars/mrbean.jpg" },
        { name: "ChristianAdi", tag: "USDT", avatar: "/avatars/christian.jpg" },
      ],
      size: "large",
      icon: <Crown className="h-5 w-5" />,
      color: "#FFD700",
      showBadge: false,
    },
    {
      title: "BEST CANDIDATES",
      members: [
        { name: "Samx", tag: "USDT", avatar: "/avatars/sam.png" },
        { name: "Monirul", tag: "USDT", avatar: "/avatars/monirul.jpg" },
      ],
      size: "medium",
      icon: <Trophy className="h-4 w-4" />,
      color: "#4B9CD3",
      showBadge: false,
    },
    {
      title: "BEST VOLUNTEERS",
      members: [
        { name: "Uzain", tag: "NODO", avatar: "/avatars/uzaina.jpg" },
        { name: "Tarun", tag: "USDT", avatar: "/avatars/tarun.jpg" },
        { name: "Julius", tag: "USDT", avatar: "/avatars/julius.jpg" },
      ],
      size: "medium",
      icon: <Star className="h-4 w-4" />,
      color: "#d1102b",
      showBadge: false,
    },
    {
      title: "BEST WORKS",
      members: [
        { name: "Starix", tag: "NODO", avatar: "/avatars/starix.png" },
        { name: "Mohmeh", tag: "NODO", avatar: "/avatars/mohmeh.png" },
        { name: "NPolniuk", tag: "USDT", avatar: "/avatars/polniuk.jpg" },
        { name: "Sobix", tag: "USDT", avatar: "/avatars/sobix.jpg" },
        { name: "Farhana", tag: "USDT", avatar: "/avatars/farhana.jpg" },
      ],
      size: "small",
      icon: <Medal className="h-4 w-4" />,
      color: "#FF6B35",
      showBadge: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Trophy className="h-12 w-12 text-[#FFD700]" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-[#d1102b] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",
            inter.variable,
            "font-sans tracking-tight",
          )}
        >
          Honor Roll Board
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Celebrating the best contributions in the Tabizens community.
        </p>
      </motion.div>

      <Card className="p-6 md:p-12 border-border bg-gradient-to-b from-background to-muted/30 shadow-lg">
        <div className="space-y-16 md:space-y-20">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="relative mb-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <span
                    className={cn(
                      "px-6 py-2 bg-background text-lg font-bold flex items-center gap-2",
                      inter.variable,
                      "font-sans tracking-wide",
                    )}
                    style={{ color: category.color }}
                  >
                    {category.icon}
                    {category.title}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "flex flex-wrap justify-center gap-6 md:gap-8",
                  category.size === "small" && "gap-4 md:gap-6",
                )}
              >
                {category.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                    className="flex flex-col items-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div
                      className={cn(
                        "relative rounded-full overflow-hidden transition-all duration-300",
                        // BEST MODS (large)
                        category.size === "large" && "w-28 h-28 md:w-36 md:h-36",
                        // BEST CANDIDATES (custom: entre medium y large)
                        category.title === "BEST CANDIDATES"
                          ? "w-28 h-28 md:w-32 md:h-32"
                          : category.size === "medium" && "w-24 h-24 md:w-28 md:h-28",
                        // BEST WORKS (small, mejora responsividad)
                        category.size === "small" && "w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24",
                      )}
                    >

                      {/* Ring Animation */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 z-10"
                        style={{ borderColor: category.color }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />

                      <Avatar
                        className={cn(
                          "w-full h-full border-2 group-hover:border-4 transition-all duration-300",
                          "ring-2 ring-offset-2 ring-offset-background group-hover:ring-4",
                        )}
                        style={
                          {
                            borderColor: category.color,
                            "--tw-ring-color": `${category.color}40`,
                          } as React.CSSProperties
                        }
                      >
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback
                          className={cn(
                            "bg-muted/50 text-muted-foreground border-2 border-dashed",
                            category.size === "large" && "text-2xl",
                            category.size === "medium" && "text-xl",
                            category.size === "small" && "text-lg",
                          )}
                          style={{ borderColor: category.color }}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <User
                              className={cn(
                                category.size === "large" && "h-8 w-8",
                                category.size === "medium" && "h-6 w-6",
                                category.size === "small" && "h-5 w-5",
                              )}
                              style={{ color: category.color }}
                            />
                            <span
                              className={cn(
                                "text-xs font-medium",
                                category.size === "large" && "text-sm",
                                category.size === "small" && "text-xs",
                              )}
                              style={{ color: category.color }}
                            >
                              Profile
                            </span>
                          </div>
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <span
                      className={cn(
                        "mt-3 font-bold text-foreground text-center truncate w-20 sm:w-24 md:w-28",
                        inter.variable,
                        "font-sans",
                        category.size === "large" && "text-lg",
                        category.size === "medium" && "text-base",
                        category.size === "small" && "text-sm",
                      )}
                    >
                      {member.name}
                      {member.extra && (
                        <span className="block text-xs text-muted-foreground">{member.extra}</span>
                      )}
                    </span>
                    {/* Etiquetas */}
                    {member.tag === "USDT" && (
                      <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded bg-green-600/90 text-xs font-semibold text-white">
                        💵 USDT
                      </span>
                    )}
                    {member.tag === "NODO" && (
                      <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded bg-yellow-700/90 text-xs font-semibold text-white">
                        🥉 MININODE
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  )
}

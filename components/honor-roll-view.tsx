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
  const categories = [
    {
      title: "BEST MODS",
      members: [
        { name: "Alex Johnson", avatar: "/avatars/ricarfonso.jpg", level: "Elite" },
        { name: "Sarah Williams", avatar: "/avatars/tasniya.jpg", level: "Elite" },
      ],
      size: "large",
      icon: <Crown className="h-5 w-5" />,
      color: "#FFD700",
      showBadge: true,
    },
    {
      title: "BEST VOLUNTEERS",
      members: [
        { name: "Michael Brown", avatar: "/avatars/mori.jpg", level: "Pro" },
        { name: "Emily Davis", avatar: "/avatars/qim.jpg", level: "Pro" },
        { name: "David Wilson", avatar: "/avatars/sansa.jpg", level: "Pro" },
      ],
      size: "medium",
      icon: <Star className="h-4 w-4" />,
      color: "#d1102b",
      showBadge: true,
    },
    {
      title: "BEST WORKS",
      members: [
        { name: "Robert Miller", avatar: "/avatars/pfpt.jpg", level: "Rising" },
        { name: "Jennifer Moore", avatar: "/avatars/monirul.jpg", level: "Rising" },
        { name: "Thomas Anderson", avatar: "/avatars/sobix.jpg", level: "Rising" },
        { name: "Lisa Garcia", avatar: "/avatars/rifat.png", level: "Rising" },
        { name: "Kevin Martinez", avatar: "/avatars/mrbean.jpg", level: "Rising" },
      ],
      size: "small",
      icon: <Medal className="h-3 w-3" />,
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
                        category.size === "large" && "w-28 h-28 md:w-36 md:h-36",
                        category.size === "medium" && "w-24 h-24 md:w-28 md:h-28",
                        category.size === "small" && "w-20 h-20 md:w-24 md:h-24",
                      )}
                    >
                      {/* Level Badge - Only show if showBadge is true */}
                      {category.showBadge && (
                        <div
                          className="absolute -top-2 -right-2 z-20 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                          style={{ backgroundColor: category.color }}
                        >
                          {member.level}
                        </div>
                      )}

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
                        "mt-3 font-bold text-foreground text-center",
                        inter.variable,
                        "font-sans",
                        category.size === "large" && "text-lg",
                        category.size === "medium" && "text-base",
                        category.size === "small" && "text-sm",
                      )}
                    >
                      {member.name}
                    </span>
                    {category.size === "large" && (
                      <div className="mt-2 flex items-center text-[#FFD700]">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="text-xs font-medium">Top Contributor</span>
                      </div>
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

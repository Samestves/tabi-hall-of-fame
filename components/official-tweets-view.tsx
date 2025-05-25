"use client"

import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Twitter } from "lucide-react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export function OfficialTweetsView() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-foreground mb-3",
              montserrat.className
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <Twitter className="h-6 w-6 text-[#d1102b]" />
              <span>Official Tweets</span>
            </div>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow all the latest announcements and updates from the Tabizens
            team.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-8 shadow-lg border-border">
          <div className="twitter-embed min-h-[600px] flex items-center justify-center w-full">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Tabizens"
              options={{
                height: 600,
                theme: "dark",
              }}
              noHeader
              noBorders
              noFooter
              placeholder={<p className="text-muted-foreground">Loading tweets...</p>}
            />
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

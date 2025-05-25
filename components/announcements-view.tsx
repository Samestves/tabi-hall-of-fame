"use client"

import { useEffect } from "react"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Twitter } from "lucide-react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export function AnnouncementsView() {
  useEffect(() => {
    // Load the Twitter widget script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    // Clean up
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const announcements = [
    {
      id: 1,
      title: "New Tabipedia Version Released",
      date: "May 15, 2025",
      content:
        "A brand-new version of Tabipedia is now live! Make sure to read it carefully and reference it in your content.",
      link: "https://mammoth-sodalite-d5e.notion.site/Tabipedia-1ebfa353b58e80d18633c7da8f1966fa",
      linkText: "View Tabipedia",
      badge: "NEW",
    },
    {
      id: 2,
      title: "Weekly Honor Board Winners Announced",
      date: "May 12, 2025",
      content:
        "Congratulations to this week's Honor Board winners! Check out their amazing contributions and show them some love.",
      badge: "ANNOUNCEMENT",
    },
    {
      id: 3,
      title: "Upcoming Community Event",
      date: "May 10, 2025",
      content:
        "Join us for our next community event on May 20th. We'll be discussing the future of Tabi and hosting a Q&A session with the team.",
      badge: "EVENT",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h2 className={cn("text-left text-[#d1102b]", montserrat.className)}>
          <span className="text-sm font-medium tracking-wider text-muted-foreground">LATEST</span>
          <span className="block text-3xl md:text-4xl font-bold mt-1 text-foreground">Announcements</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-[#d1102b]/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-foreground">{announcement.title}</h3>
                  <Badge variant="outline" className="bg-[#d1102b]/10 text-[#d1102b] border-[#d1102b]/30 font-medium">
                    {announcement.badge}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{announcement.date}</span>
              </div>
              <p className="mb-4 text-foreground/90">{announcement.content}</p>
              {announcement.link && (
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d1102b] hover:text-[#d1102b]/80 font-medium flex items-center gap-1 transition-colors"
                >
                  {announcement.linkText} <span className="text-xs">→</span>
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <div className="text-center mb-8">
          <h3 className={cn("text-2xl font-bold text-foreground mb-3", montserrat.className)}>
            <div className="flex items-center justify-center gap-2">
              <Twitter className="h-5 w-5 text-[#d1102b]" />
              <span>Official Tweets</span>
            </div>
          </h3>
          <p className="text-muted-foreground">
            Follow all the latest announcements and updates from the Tabizens team.
          </p>
        </div>

        <Card className="p-8 shadow-lg border-border">
          <div className="twitter-embed min-h-[500px] flex items-center justify-center">
            <a
              className="twitter-timeline"
              data-height="500"
              data-theme="dark"
              data-chrome="transparent nofooter noborders"
              href="https://twitter.com/Tabizens"
            >
              Loading tweets from @Tabizens...
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

// Datos de los tweets oficiales
const officialTweets = [
  { id: 1, link: "https://x.com/Tabichain/status/1940666822744830440" },
  { id: 2, link: "https://x.com/Tabichain/status/1940649334829469703" },
  { id: 3, link: "https://x.com/Tabichain/status/1940380289374814601" },
  { id: 4, link: "https://x.com/Tabichain/status/1921822916045635834" },
  { id: 5, link: "https://x.com/Tabichain/status/1917911894805148095" },
  { id: 6, link: "https://x.com/Tabichain/status/1915684126860153313" },
  { id: 7, link: "https://x.com/Tabichain/status/1912364847460679898" },
]

export function OfficialTweetsEmbed() {
  useEffect(() => {
    // Cargar script oficial de Twitter/X solo una vez
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      {officialTweets.map((tweet, index) => (
        <motion.div
          key={tweet.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <blockquote className="twitter-tweet">
            <a href={tweet.link}></a>
          </blockquote>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import { useState, memo } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { motion } from "framer-motion"
import initialTopTweets from "@/data/top-tweets.json"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

type TopTweet = {
  id: string | number
  author: string
  handle: string
  avatar?: string
  content: string
  hasImage?: boolean
  image?: string | null
  link?: string
}

export const TopTweetsView = memo(function TopTweetsView() {
  const [topTweets] = useState<TopTweet[]>(initialTopTweets);

  return (
    <div className="w-full px-2 md:px-6 lg:px-12 xl:px-20 2xl:px-32">
      <div className="mb-10 pl-4">
        <h2 className={cn("text-left", montserrat.className)} style={{ color: "#d1102b" }}>
          <span className="text-sm font-medium tracking-wider">TOP 10 TWEETS OF THE</span>
          <span className="block text-3xl md:text-4xl font-bold mt-1">WEEK</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topTweets.map((tweet) => (
          <motion.div
            key={tweet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Card
              className="p-4 md:p-5 hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border hover:border-[#d1102b]/30 cursor-pointer min-h-[340px] md:min-h-[380px] lg:min-h-[420px]"
              onClick={() => tweet.link && window.open(tweet.link, "_blank")}
              tabIndex={0}
              role="button"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={tweet.avatar || "/placeholder.svg"} alt={tweet.author} />
                  <AvatarFallback className="bg-[#d1102b]/20 text-[#d1102b]">
                    {tweet.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">{tweet.author}</span>
                    <span className="text-muted-foreground text-sm">{tweet.handle}</span>
                  </div>
                </div>
              </div>
              <p
                lang="es"
                className="mb-4 flex-grow text-base sm:text-lg text-foreground/90 text-left break-words whitespace-pre-line leading-normal tracking-normal font-normal"
                style={{
                  wordBreak: "break-word",
                  fontFamily: "system-ui, Arial, sans-serif",
                  letterSpacing: "normal",
                  lineHeight: 1.6,
                  hyphens: "manual",
                }}
              >
                {tweet.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  /^https?:\/\//.test(part) ? (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d1102b] underline break-all hover:text-[#a00b20] transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      {part}
                    </a>
                  ) : (
                    part
                  )
                )}
              </p>
              {tweet.image ? (
                <div
                  className={cn(
                    "relative w-full mt-auto rounded-md overflow-hidden",
                    // Más altura en pantallas grandes
                    "aspect-[4/3] max-h-64",
                    "md:aspect-[16/11] md:max-h-[22rem]",
                    "lg:aspect-[16/13] lg:max-h-[28rem]",
                    "xl:aspect-[16/15] xl:max-h-[36rem]"
                  )}
                >
                  <Image
                    src={tweet.image}
                    alt="Tweet image"
                    fill
                    className="transition-all object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "relative w-full mt-auto rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#d1102b]/10 to-[#d1102b]/30",
                    "aspect-[4/3] max-h-64",
                    "md:aspect-[16/11] md:max-h-[22rem]",
                    "lg:aspect-[16/13] lg:max-h-[28rem]",
                    "xl:aspect-[16/15] xl:max-h-[36rem]"
                  )}
                >
                  <Image
                    src="/tabilogo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="object-contain opacity-70"
                    priority={false}
                  />
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
});
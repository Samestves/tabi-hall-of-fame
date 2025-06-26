"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Montserrat } from "next/font/google"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect } from "react"
import officialTweets from "@/data/official-tweets.json"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export function OfficialTweetsView() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
                {officialTweets.map((tweet, index) => {
                    const videoRef = useRef<HTMLVideoElement>(null);

                    useEffect(() => {
                        if (!tweet.hasVideo) return;
                        const video = videoRef.current;
                        if (!video) return;

                        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    video.play();
                                } else {
                                    video.pause();
                                    video.currentTime = 0;
                                }
                            });
                        };

                        const observer = new window.IntersectionObserver(handleIntersection, {
                            threshold: 0.5,
                        });

                        observer.observe(video);

                        return () => observer.disconnect();
                    }, [tweet.hasVideo]);

                    return (
                        <motion.div
                            key={tweet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Card
                                className="p-3 sm:p-5 md:p-8 flex flex-col border border-border hover:border-[#d1102b]/30 shadow-md bg-background/90 cursor-pointer transition-colors"
                                onClick={() => window.open(tweet.link || "#", "_blank")}
                                tabIndex={0}
                                role="button"
                            >
                                <div className="flex items-start gap-6 mb-4">
                                    <Avatar className="w-14 h-14">
                                        <AvatarImage src={tweet.avatar || "/placeholder.svg"} alt={tweet.author} />
                                        <AvatarFallback className="bg-[#d1102b]/20 text-[#d1102b] text-xl">
                                            {tweet.author.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-lg text-foreground">{tweet.author}</span>
                                            <span className="text-muted-foreground text-base">{tweet.handle}</span>
                                        </div>
                                    </div>
                                </div>
                                <p
                                  className="mb-4 text-base sm:text-lg text-foreground/90 text-left break-words whitespace-pre-line leading-relaxed tracking-normal font-normal"
                                  style={{
                                    wordBreak: "break-word",
                                    hyphens: "auto",
                                    letterSpacing: "normal",
                                    fontFamily: "system-ui, Arial, sans-serif",
                                    lineHeight: 1.6,
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
                                        onClick={e => e.stopPropagation()} // <-- Esto evita que el click en el link abra la Card completa
                                      >
                                        {part}
                                      </a>
                                    ) : (
                                      part
                                    )
                                  )}
                                </p>
                                {tweet.hasImage && tweet.image && (
                                  <div className="relative w-full h-56 sm:h-72 md:h-[28rem] md:max-w-3xl lg:h-[32rem] lg:max-w-4xl rounded-md overflow-hidden mx-auto">
                                    <Image
                                      src={tweet.image}
                                      alt="Tweet image"
                                      fill
                                      className="object-cover"
                                      loading="lazy"
                                    />
                                  </div>
                                )}
                                {tweet.hasVideo && tweet.video && (
                                  <div className="relative w-full h-56 sm:h-72 md:h-[28rem] md:max-w-3xl lg:h-[32rem] lg:max-w-4xl rounded-md overflow-hidden mx-auto">
                                    <video
                                      ref={videoRef}
                                      controls
                                      className="object-cover w-full h-full"
                                      preload="metadata"
                                      poster="/placeholder.svg"
                                    >
                                      <source src={tweet.video} type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                )}
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

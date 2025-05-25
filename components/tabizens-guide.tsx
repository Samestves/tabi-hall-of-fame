"use client"

import type React from "react"

import { Montserrat, Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { memo } from "react"

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

export const TabizensGuide = memo(function TabizensGuide() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3",
            playfair.variable,
            "font-serif tracking-tight",
          )}
        >
          Tabizen Volunteer Guide
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about being a Tabizen volunteer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 md:p-10 shadow-lg border-border bg-gradient-to-b from-background to-muted/30">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Section 1 */}
            <GuideSection title="1. HOW DOES TABIZEN OPERATE?" delay={0}>
              <p className="mb-4">To be part of this growing movement, we follow a few essential steps:</p>

              <div className="mb-4">
                <p className="flex items-start mb-2">
                  <span className="text-[#d1102b] font-bold mr-2">🔹</span>
                  <span>Use your Tabi identity: Set a Tabi-style [💢] profile picture and nickname.</span>
                </p>

                <p className="flex items-start">
                  <span className="text-[#d1102b] font-bold mr-2">🔹</span>
                  <span>Stay informed: Check these Telegram channels daily:</span>
                </p>
              </div>

              <ul className="list-none pl-8 mb-6 space-y-1">
                <li>Announcements</li>
                <li>Events</li>
                <li>Bug Reports & Suggestions</li>
                <li>About Tabizoo</li>
                <li>Tabizens / Tabi BD</li>
              </ul>

              <div className="bg-card p-6 rounded-lg mb-6 border border-border shadow-sm">
                <h4 className={cn("text-xl font-bold text-[#d1102b] mb-3", montserrat.className)}>
                  📢 Become an Official Tabizen Volunteer
                </h4>
                <p className="mb-3">Introduce yourself in the Tabizen Twitter Community with a simple message:</p>
                <p className="italic bg-muted p-3 rounded border border-border mb-3">
                  "I'm from [Your Country] and I just became a Tabizen volunteer ➕[Your Timezone]!"
                </p>
                <p>Once our moderators interact with your tweet, you're officially welcomed. 🎉</p>
              </div>

              <div className="bg-[#d1102b]/10 p-6 rounded-lg border border-[#d1102b]/20">
                <h4 className={cn("text-lg font-bold mb-2", montserrat.className)}>✅ Don't forget:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#d1102b] mr-2">•</span>
                    <span>Add the 💢 symbol at the end of your Twitter name</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d1102b] mr-2">•</span>
                    <span>Link to the Tabizens community in your Twitter bio</span>
                  </li>
                </ul>
                <p>👉 Then join the Activity Group to get your weekly missions.</p>
                <p className="mt-4">
                  Start participating — your tweets could land you a spot on the Honor Board and win you big rewards! 🏆
                </p>
              </div>
            </GuideSection>

            <Separator className="my-10 bg-border" />

            {/* Section 2 */}
            <GuideSection title="2. TABIZEN VOLUNTEERS: PASSION MEETS PURPOSE" delay={0.1}>
              <p className="mb-4">Our goal is to stay focused, creative, and united while building together.</p>

              <p className="flex items-start mb-4">
                <span className="text-[#d1102b] font-bold mr-2">💡</span>
                <span>
                  Every tweet, emotion, or slice of daily life you share — as long as it's Tabi-related — can be turned
                  into real value.
                </span>
              </p>

              <p className="flex items-start mb-4">
                <span className="text-[#d1102b] font-bold mr-2">🎯</span>
                <span>
                  Community rewards exist to recognize top contributors: whether through Mininode bonuses or USDT
                  rewards.
                </span>
              </p>

              <p className="mb-4">
                Being consistent doesn't just earn you crypto — it helps you grow, build experience, and deepen your
                bond with the community.
              </p>

              <p className="flex items-start mb-4">
                <span className="text-[#FFD700] font-bold mr-2">🌟</span>
                <span>You may even be invited to join the Tabi core team as a mod!</span>
              </p>

              <p className="font-medium text-center py-2 bg-gradient-to-r from-[#d1102b]/10 to-[#FFD700]/10 rounded-lg">
                We are Tabizens. We are family. 💫
              </p>
            </GuideSection>

            <Separator className="my-10 bg-border" />

            {/* Section 3 */}
            <GuideSection title="3. WHAT IS TABIZEN?" delay={0.2}>
              <p className="mb-4">
                Tabizen is a decentralized Twitter-native community powered by passionate users who believe in the Tabi
                project.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#d1102b] font-bold mr-2">🔗</span>
                  <span>Official account: @Tabizens on Twitter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1102b] font-bold mr-2">📣</span>
                  <span>Every member is encouraged to create regular Tabi-related content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1102b] font-bold mr-2">🤝</span>
                  <span>Open communication: anyone can engage with the core team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d1102b] font-bold mr-2">🎉</span>
                  <span>Weekly events and a bi-weekly Honor Board spotlight top creators</span>
                </li>
              </ul>

              <div className="bg-card p-6 rounded-lg mb-6 border border-border shadow-sm">
                <h4 className={cn("text-xl font-bold text-[#d1102b] mb-3", montserrat.className)}>
                  🏅 Honor Board Categories:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">•</span>
                    <span>
                      <strong>Top Creators</strong> – for exceptional content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">•</span>
                    <span>
                      <strong>Top Volunteers</strong> – for consistent engagement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">•</span>
                    <span>
                      <strong>Top Mods</strong> – for outstanding community leadership
                    </span>
                  </li>
                </ul>
              </div>

              <p className="flex items-start mb-4">
                <span className="text-[#d1102b] font-bold mr-2">🧭</span>
                <span>
                  Want to join? Simply say "I want to be a volunteer" in the group chat — an admin will invite you!
                </span>
              </p>

              <div className="bg-[#d1102b]/10 p-6 rounded-lg border border-[#d1102b]/20">
                <h4 className={cn("text-lg font-bold mb-2", montserrat.className)}>🔓 Mod Promotion Path:</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Volunteer (1-month trial)</li>
                  <li>Mods vote on new candidates</li>
                  <li>As a candidate, earn $100 in Mininode/month</li>
                  <li>After 1 month, full mod promotion possible (salary + bonus + top mod eligibility)</li>
                </ol>
              </div>
            </GuideSection>

            <Separator className="my-10 bg-border" />

            {/* Section 4 */}
            <GuideSection title="4. WHAT ARE THE VOLUNTEER ROLES?" delay={0.3}>
              <p className="mb-4">There are two main ways to contribute:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                  <h4 className={cn("text-xl font-bold text-[#d1102b] mb-3 flex items-center", montserrat.className)}>
                    <span className="mr-2">📢</span> Content Creation:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Join events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Post at least 3 Tabi-related tweets per week</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Inspire others and share your growth tips</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                  <h4 className={cn("text-xl font-bold text-[#d1102b] mb-3 flex items-center", montserrat.className)}>
                    <span className="mr-2">🤝</span> Community Support:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Be active in chats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Welcome and guide newcomers 1-on-1</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Engage with and support fellow Tabizens</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center font-medium">Pick the role that suits you — or do both! 💪✨</p>
            </GuideSection>

            <Separator className="my-10 bg-border" />

            {/* Section 5 */}
            <GuideSection title="5. REWARD SYSTEM & GROWTH PATH" delay={0.4}>
              <h3 className={cn("text-xl font-bold text-center mb-6", montserrat.className)}>
                💢 Volunteer Rewards 💢
              </h3>

              <div className="mb-8">
                <h4 className={cn("text-lg font-bold text-[#d1102b] mb-3", montserrat.className)}>
                  1. Content Creators (Top Creators)
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#d1102b]/10 text-[#d1102b] px-3 py-1 rounded-full text-sm font-medium">
                    💰 20–30 USDT per bi-weekly round
                  </span>
                  <span className="bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium">
                    ✨ Bonus Mininode rewards for top mentions
                  </span>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border shadow-sm mb-6">
                  <h5 className="font-bold mb-2">📌 How to Qualify:</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Post high-quality tweets (memes, threads, tutorials)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Rank in the Top 5 of the Honor Board</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Top 3 get USDT / Next 2 win Mininode</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className={cn("text-lg font-bold text-[#d1102b] mb-3", montserrat.className)}>
                  2. Become a MOD or Higher
                </h4>

                <p className="mb-3">🔓 Unlock more benefits as you grow:</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium">
                    🏅 Fixed monthly salary in USDT
                  </span>
                  <span className="bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium">
                    🗳 Voting rights in community decisions
                  </span>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border shadow-sm mb-6">
                  <h5 className="font-bold mb-2">📈 Ranking Up:</h5>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Stay consistent with creative content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Mentor and support new users</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d1102b] mr-2">•</span>
                      <span>Host or contribute to events</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#d1102b]/10 to-[#FFD700]/10 p-6 rounded-lg">
                <h4 className={cn("text-lg font-bold mb-3 text-center", montserrat.className)}>💡 Why Join?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start justify-center">
                    <span>Trade creativity for crypto 🧠 → 💵</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span>Your journey: Newbie → Volunteer → Mod Candidate → Mod → Community Manager 🌱 → 🌳</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <span>Be part of Tabi's success story</span>
                  </li>
                </ul>
              </div>
            </GuideSection>

            <Separator className="my-10 bg-border" />

            {/* Section 6 */}
            <GuideSection title="6. HONOR BOARD HIGHLIGHTS" delay={0.5}>
              <p className="mb-4">We regularly celebrate our most dedicated contributors.</p>

              <p className="mb-4">
                🎉 Past champions have helped shape the community — their content, energy, and support inspire us all.
              </p>

              <p className="text-center font-medium py-3 bg-gradient-to-r from-[#d1102b]/10 to-[#FFD700]/10 rounded-lg">
                Keep posting, keep showing up, and your name might be next!
              </p>
            </GuideSection>

            <Separator className="my-10 bg-border" />

            {/* Section 7 */}
            <GuideSection title="7. QUICK UPDATE: TABIPEDIA IS LIVE!" delay={0.6}>
              <p className="mb-4">The latest version of Tabipedia has launched.</p>

              <p className="mb-4">Make sure to read it and reference it in your posts to level up your content:</p>

              <div className="bg-card p-6 rounded-lg border border-border shadow-sm mb-6">
                <a
                  href="https://mammoth-sodalite-d5e.notion.site/Tabipedia-1ebfa353b58e80d18633c7da8f1966fa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[#d1102b] hover:text-[#d1102b]/80 font-medium transition-colors"
                >
                  🔗 Read now: Tabipedia on Notion <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <p className="text-center font-bold py-4 bg-gradient-to-r from-[#d1102b]/20 to-[#FFD700]/20 rounded-lg">
                💢 Let's keep building Tabi — together. The future is ours to shape. 💢
              </p>
            </GuideSection>
          </div>
        </Card>
      </motion.div>
    </div>
  )
})

// Helper component for each section
const GuideSection = memo(function GuideSection({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h3
        className={cn(
          "text-2xl font-bold mb-6 text-foreground border-b border-[#d1102b]/20 pb-2",
          playfair.variable,
          "font-serif tracking-tight",
        )}
      >
        {title}
      </h3>
      {children}
    </motion.section>
  )
})

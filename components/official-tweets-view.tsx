"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Montserrat } from "next/font/google"
import { motion } from "framer-motion"
import Image from "next/image"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const officialTweets = [
	{
		id: 1,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "Welcome to the Hall of Fame! 🚀 Stay tuned for more updates and community highlights.",
		hasImage: true,
		image: "/bg.png",
	},
	{
		id: 2,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "Big news coming soon! Are you ready? 🔥",
		hasImage: true,
		image: "/bg.png",
	},
	{
		id: 3,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "Thank you to our amazing community for all your support! 🙏",
		hasImage: true,
		image: "/bg.png",
	},
	{
		id: 4,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "Check out the new features we just launched! 🚀",
		hasImage: true,
		image: "/bg.png",
	},
	{
		id: 5,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "We love seeing your creativity with Tabi! Keep sharing. 💡",
		hasImage: true,
		image: "/bg.png",
	},
	{
		id: 6,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "Stay tuned for our next community event! 🎉",
		hasImage: true,
		image: "/bg.png",
	},
	{
		id: 7,
		author: "Tabi Official",
		handle: "@tabi_official",
		avatar: "/avatars/tb.jpg",
		content: "Remember to check Tabipedia for all the latest info! 📚",
		hasImage: true,
		image: "/bg.png",
	},
]

export function OfficialTweetsView() {
	return (
		<div className="max-w-4xl mx-auto"> {/* Cambiado a max-w-2xl para más ancho */}
			<div className="flex flex-col gap-8"> {/* gap más grande para separación */}
				{officialTweets.map((tweet, index) => (
					<motion.div
						key={tweet.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.05 }}
					>
						<Card
							className="p-8 flex flex-col border border-border hover:border-[#d1102b]/30 shadow-md bg-background/90 cursor-pointer transition-colors"
							onClick={() => window.open("https://x.com/tabizens", "_blank")}
							tabIndex={0}
							role="button"
						>
							<div className="flex items-start gap-6 mb-4"> {/* gap-6 y mb-4 para más espacio */}
								<Avatar className="w-14 h-14"> {/* Avatar más grande */}
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
							<p className="mb-4 text-lg text-foreground/90">{tweet.content}</p>
							{tweet.hasImage && tweet.image && (
								<div className="relative w-full h-96 rounded-md overflow-hidden"> {/* h-64 para imagen más grande */}
									<Image
										src={tweet.image}
										alt="Tweet image"
										fill
										className="object-cover"
										loading="lazy"
									/>
								</div>
							)}
						</Card>
					</motion.div>
				))}
			</div>
		</div>
	)
}

import React, { useState } from "react"

export function TabiTackView() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="w-full min-h-[70vh] md:min-h-[80vh] relative">
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 rounded-xl">
          <div className="w-16 h-16 border-4 border-[#d1102b] border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-[#d1102b] font-semibold text-lg animate-pulse">Loading</span>
        </div>
      )}
      <iframe
        src="https://tabi-tack.vercel.app/"
        title="Tabi Tack"
        className="w-full h-[70vh] md:h-[80vh] rounded-xl shadow-lg transition-shadow duration-300 border-0"
        allow="clipboard-write; clipboard-read"
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
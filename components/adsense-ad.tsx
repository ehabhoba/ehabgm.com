"use client"

import { useEffect } from "react"

interface AdSenseAdProps {
  slot: string
  format?: "horizontal" | "vertical" | "auto"
  responsive?: boolean
}

export default function AdSenseAd({ slot, format = "auto", responsive = true }: AdSenseAdProps) {
  useEffect(() => {
    try {
      // Push the ad to the page
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log("[v0] AdSense error:", error)
    }
  }, [slot])

  const getAdStyle = () => {
    switch (format) {
      case "horizontal":
        return { display: "block", textAlign: "center" as const, minHeight: "100px" }
      case "vertical":
        return { display: "block", textAlign: "center" as const, minHeight: "600px", maxWidth: "300px" }
      case "auto":
      default:
        return { display: "block", textAlign: "center" as const }
    }
  }

  return (
    <div className="flex justify-center my-8 px-4">
      <ins
        className="adsbygoogle"
        style={getAdStyle()}
        data-ad-client="ca-pub-4442626272315276"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  )
}

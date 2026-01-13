// Geographic footer navigation component

"use client"
import { GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function GeoFooterLinks() {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

  const regions = [
    {
      name: "القاهرة الكبرى",
      locations: CAIRO_AREAS,
    },
    {
      name: "الجيزة",
      locations: GIZA_AREAS,
    },
    {
      name: "المحافظات الأخرى",
      locations: GOVERNORATES.filter((g) => g.id !== "cairo" && g.id !== "giza"),
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {regions.map((region) => (
        <div key={region.name}>
          <button
            onClick={() => setExpandedRegion(expandedRegion === region.name ? null : region.name)}
            className="flex items-center justify-between w-full text-lg font-semibold text-foreground hover:text-primary transition-colors mb-4"
          >
            {region.name}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${expandedRegion === region.name ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`space-y-2 overflow-hidden transition-all duration-300 ${
              expandedRegion === region.name ? "max-h-96" : "max-h-0 md:max-h-96"
            }`}
          >
            {region.locations.slice(0, 10).map((location) => (
              <Link
                key={location.id}
                href={`/services/graphic-design/${location.id}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {location.nameAr}
              </Link>
            ))}
            {region.locations.length > 10 && (
              <button className="text-sm text-primary hover:underline">
                عرض المزيد ({region.locations.length - 10})
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

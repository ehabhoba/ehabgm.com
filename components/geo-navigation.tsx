// Geographic navigation component for service pages

"use client"

import type { Service, GeoLocation } from "@/lib/geo-data"
import { GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"
import Link from "next/link"
import { useState } from "react"
import { Search, MapPin } from "lucide-react"

interface GeoNavigationProps {
  currentService?: Service
  currentLocation?: GeoLocation
}

export default function GeoNavigation({ currentService, currentLocation }: GeoNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const allLocations = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]

  const filteredLocations = allLocations.filter(
    (loc) => loc.nameAr.includes(searchQuery) || loc.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{currentLocation?.nameAr || "اختر موقعاً"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن موقع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {filteredLocations.length > 0 ? (
              <div className="p-2">
                {filteredLocations.map((location) => (
                  <Link
                    key={location.id}
                    href={`/services/${currentService?.slug || "graphic-design"}/${location.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded hover:bg-primary/10 text-foreground hover:text-primary transition-colors text-sm"
                  >
                    {location.nameAr}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground text-sm">لم يتم العثور على نتائج</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

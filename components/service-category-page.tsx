// Component for service category pages with all geographic locations

"use client"

import type { Service, GeoLocation } from "@/lib/geo-data"
import Link from "next/link"
import { MapPin, ArrowLeft } from "lucide-react"
import { useState, useMemo } from "react"

interface ServiceCategoryPageProps {
  service: Service
  locations: GeoLocation[]
}

export default function ServiceCategoryPage({ service, locations }: ServiceCategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter locations based on search
  const filteredLocations = useMemo(() => {
    if (!searchQuery) return locations

    return locations.filter(
      (loc) => loc.nameAr.includes(searchQuery) || loc.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [locations, searchQuery])

  // Group locations by type
  const governorates = filteredLocations.filter((loc) => loc.type === "governorate")
  const neighborhoods = filteredLocations.filter((loc) => loc.type === "neighborhood")

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Breadcrumb */}
      <nav className="bg-background/50 backdrop-blur-sm border-b border-border sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-primary hover:underline">
            الرئيسية
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{service.nameAr}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {service.nameAr} في جميع محافظات مصر
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">{service.descriptionAr}</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-card/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن محافظة أو منطقة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">عدد النتائج: {filteredLocations.length} موقع</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Governorates Section */}
          {governorates.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">المحافظات</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {governorates.map((location) => (
                  <Link
                    key={location.id}
                    href={`/services/${service.slug}/${location.id}`}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {location.nameAr}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{service.nameAr}</p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Neighborhoods Section */}
          {neighborhoods.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">المناطق والأحياء</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.map((location) => (
                  <Link
                    key={location.id}
                    href={`/services/${service.slug}/${location.id}`}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {location.nameAr}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{service.nameAr}</p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">لم يتم العثور على نتائج</p>
            </div>
          )}
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">خدمات أخرى</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Links to other services would be generated here */}
            <p className="text-muted-foreground col-span-full">استكشف خدماتنا الأخرى</p>
          </div>
        </div>
      </section>
    </main>
  )
}

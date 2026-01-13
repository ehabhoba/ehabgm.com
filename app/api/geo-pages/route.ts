// API endpoint for geographic pages data (useful for frontend queries)

import { SERVICES, GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const service = searchParams.get("service")
  const location = searchParams.get("location")

  try {
    if (service && location) {
      // Get specific page data
      const svc = SERVICES.find((s) => s.slug === service)
      const loc = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS].find((l) => l.id === location)

      if (!svc || !loc) {
        return NextResponse.json({ error: "Not found" }, { status: 404 })
      }

      return NextResponse.json({
        service: svc,
        location: loc,
      })
    }

    if (service) {
      // Get all locations for a service
      const svc = SERVICES.find((s) => s.slug === service)
      if (!svc) {
        return NextResponse.json({ error: "Service not found" }, { status: 404 })
      }

      return NextResponse.json({
        service: svc,
        locations: [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS],
      })
    }

    // Get all services and locations
    return NextResponse.json({
      services: SERVICES,
      locations: [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS],
      totalPages: SERVICES.length * (GOVERNORATES.length + CAIRO_AREAS.length + GIZA_AREAS.length),
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

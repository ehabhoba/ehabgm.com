// Dynamic route generation for geographic pages

import { SERVICES, GOVERNORATES, CAIRO_AREAS, GIZA_AREAS, type GeoLocation } from "./geo-data"

export interface RouteParams {
  service: string
  location: string
}

// Get all possible route combinations
export function getAllGeoRoutes(): RouteParams[] {
  const routes: RouteParams[] = []
  const allLocations = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]

  for (const service of SERVICES) {
    for (const location of allLocations) {
      routes.push({
        service: service.slug,
        location: location.id,
      })
    }
  }

  return routes
}

// Get all locations for a specific service
export function getLocationsForService(serviceSlug: string): GeoLocation[] {
  return [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]
}

// Get all services
export function getAllServices() {
  return SERVICES
}

// Generate static params for Next.js
export function generateStaticParams() {
  return getAllGeoRoutes().map((route) => ({
    service: route.service,
    location: route.location,
  }))
}

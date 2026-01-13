// Internal linking strategy for geographic pages

import type { Service, GeoLocation } from "./geo-data"

export interface InternalLink {
  title: string
  url: string
  type: "service" | "location" | "related-service"
}

/**
 * Get related services for internal linking
 * Returns links to other services in the same location
 */
export function getRelatedServices(
  currentService: Service,
  currentLocation: GeoLocation,
  allServices: Service[],
): InternalLink[] {
  return allServices
    .filter((service) => service.id !== currentService.id)
    .slice(0, 4)
    .map((service) => ({
      title: `${service.nameAr} في ${currentLocation.nameAr}`,
      url: `/services/${service.slug}/${currentLocation.id}`,
      type: "related-service",
    }))
}

/**
 * Get related locations for internal linking
 * Returns links to the same service in nearby locations
 */
export function getRelatedLocations(
  currentService: Service,
  currentLocation: GeoLocation,
  allLocations: GeoLocation[],
): InternalLink[] {
  // Get locations in the same governorate or nearby governorates
  const relatedLocs = allLocations
    .filter((loc) => {
      if (loc.id === currentLocation.id) return false

      // Prioritize same governorate
      if (currentLocation.governorate && loc.governorate === currentLocation.governorate) {
        return true
      }

      // Then include other governorates
      return loc.type === "governorate"
    })
    .slice(0, 5)

  return relatedLocs.map((location) => ({
    title: `${currentService.nameAr} في ${location.nameAr}`,
    url: `/services/${currentService.slug}/${location.id}`,
    type: "location",
  }))
}

/**
 * Generate breadcrumb links
 */
export function generateBreadcrumbs(service: Service, location: GeoLocation): InternalLink[] {
  return [
    {
      title: "الرئيسية",
      url: "/",
      type: "service",
    },
    {
      title: service.nameAr,
      url: `/services/${service.slug}`,
      type: "service",
    },
    {
      title: location.nameAr,
      url: `/services/${service.slug}/${location.id}`,
      type: "location",
    },
  ]
}

/**
 * Generate footer links for geographic navigation
 */
export function generateGeoFooterLinks(allLocations: GeoLocation[]): Record<string, InternalLink[]> {
  const grouped: Record<string, InternalLink[]> = {}

  const governorates = allLocations.filter((loc) => loc.type === "governorate")

  for (const gov of governorates) {
    grouped[gov.nameAr] = [
      {
        title: gov.nameAr,
        url: `/services/graphic-design/${gov.id}`,
        type: "location",
      },
    ]
  }

  return grouped
}

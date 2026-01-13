// Schema markup generation for local SEO

import type { Service, GeoLocation } from "./geo-data"

export interface SchemaMarkup {
  "@context": string
  "@type": string
  [key: string]: unknown
}

/**
 * Generate LocalBusiness schema for geographic pages
 */
export function generateLocalBusinessSchema(
  service: Service,
  location: GeoLocation,
  baseUrl = "https://ehabgm.com",
): SchemaMarkup {
  const url = `${baseUrl}/services/${service.slug}/${location.id}`

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `EhabGM - ${service.nameAr}`,
    description: service.descriptionAr,
    url,
    telephone: "+201022679250",
    email: "info@ehabgm.com",
    image: "https://i.postimg.cc/TYyK2Rtv/logo.png",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: location.nameAr,
    },
    ...(location.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
    serviceArea: {
      "@type": "City",
      name: location.nameAr,
    },
    sameAs: ["https://wa.me/201022679250", "https://facebook.com/ehab.gm1"],
  }
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  service: Service,
  location: GeoLocation,
  baseUrl = "https://ehabgm.com",
): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.nameAr,
        item: `${baseUrl}/services/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.nameAr,
        item: `${baseUrl}/services/${service.slug}/${location.id}`,
      },
    ],
  }
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(service: Service, baseUrl = "https://ehabgm.com"): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.nameAr,
    description: service.descriptionAr,
    provider: {
      "@type": "Organization",
      name: "EhabGM",
      url: baseUrl,
      telephone: "+201022679250",
      email: "info@ehabgm.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    availableLanguage: ["ar", "en"],
  }
}

/**
 * Generate Organization schema with service area
 */
export function generateOrganizationSchema(baseUrl = "https://ehabgm.com"): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EhabGM",
    url: baseUrl,
    logo: "https://i.postimg.cc/TYyK2Rtv/logo.png",
    description: "وكالة التسويق الرقمي والتصميم الاحترافية في مصر",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201022679250",
      contactType: "customer service",
      areaServed: "EG",
      availableLanguage: ["ar", "en"],
    },
    sameAs: ["https://facebook.com/ehab.gm1", "https://wa.me/201022679250"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Helwan",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    serviceArea: {
      "@type": "Country",
      name: "Egypt",
    },
  }
}

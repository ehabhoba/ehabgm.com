// SEO metadata and content generation for geographic pages

import type { Metadata } from "next"
import type { Service, GeoLocation } from "./geo-data"
import { SERVICE_CONTENT_TEMPLATES } from "./geo-data"

export interface GeoPageMetadata {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogImage: string
  schema: Record<string, unknown>
}

export function generateGeoPageMetadata(
  service: Service,
  location: GeoLocation,
  baseUrl = "https://ehabgm.com",
): GeoPageMetadata {
  const slug = `services/${service.slug}/${location.id}`
  const canonical = `${baseUrl}/${slug}`

  // Get content template for this service
  const template = SERVICE_CONTENT_TEMPLATES[service.id]

  // Replace placeholders with actual location names
  const title = template
    ? template.titleTemplate
      .replace("[المنطقة]", location.nameAr)
      .replace("[المحافظة]", location.governorate ? location.governorate : location.nameAr)
    : `${service.nameAr} في ${location.nameAr} | EhabGM`

  const description = template
    ? template.metaDescriptionTemplate
      .replace("[المنطقة]", location.nameAr)
      .replace("[المحافظة]", location.governorate ? location.governorate : location.nameAr)
    : `احصل على أفضل خدمات ${service.nameAr} في ${location.nameAr} مع EhabGM – خبراء التصميم والتسويق الرقمي.`

  // Use template keywords or fallback to service keywords
  const keywords = template
    ? template.keywordsAr.map((kw) =>
      kw
        .replace("[المنطقة]", location.nameAr)
        .replace("[المحافظة]", location.governorate ? location.governorate : location.nameAr),
    )
    : [
      ...service.keywordsAr,
      `${service.nameAr} في ${location.nameAr}`,
      `أفضل ${service.nameAr} في ${location.nameAr}`,
      location.nameAr,
    ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${canonical}#localbusiness`,
    name: `EhabGM - ${service.nameAr} في ${location.nameAr}`,
    description: description,
    url: canonical,
    telephone: "+201022679250",
    email: "info@ehabgm.com",
    image: "https://i.postimg.cc/TYyK2Rtv/logo.png",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: location.nameAr,
      containedInPlace: {
        "@type": "Country",
        name: "Egypt",
      },
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
    parentOrganization: {
      "@type": "Organization",
      name: "ehabgm Digital Marketing Agency",
      url: "https://ehabgm.com",
    },
  }

  return {
    title,
    description,
    keywords,
    canonical,
    ogImage: "https://i.postimg.cc/TYyK2Rtv/logo.png",
    schema,
  }
}

export function generateGeoPageContent(service: Service, location: GeoLocation): string {
  const template = SERVICE_CONTENT_TEMPLATES[service.id]
  const governorateName = location.governorate || location.nameAr
  const locationType = location.type === "governorate" ? "محافظة" : location.type === "city" ? "مدينة" : "منطقة"

  if (!template) {
    // Enhanced fallback content with unique location-specific details
    return `هل تبحث عن ${service.nameAr} في ${locationType} ${location.nameAr}؟

في **EhabGM** نقدم حلول ${service.nameAr} متكاملة وعالية الجودة لعملائنا في ${location.nameAr}${location.governorate ? ` - ${governorateName}` : ""}.

${service.descriptionAr}

**لماذا نحن الخيار الأفضل في ${location.nameAr}؟**

* خبرة تتجاوز 10 سنوات في ${service.nameAr}
* فريق محترف من المتخصصين
* أسعار تنافسية تناسب السوق المحلي في ${location.nameAr}
* دعم فني متواصل 24/7
* نتائج مثبتة مع عملائنا في ${governorateName}

ابدأ الآن واطلب عرضك من [EhabGM.com](https://ehabgm.com).`
  }

  // Replace placeholders in main content with enhanced location context
  const mainContent = template.mainContent
    .replace(/\[المنطقة\]/g, location.nameAr)
    .replace(/\[المحافظة\]/g, governorateName)

  // Build services list
  const servicesListText = template.servicesList.map((svc) => `* ${svc}`).join("\n")

  // Build why choose us list
  const whyChooseUsText = template.whyChooseUs.map((reason) => `* ${reason}`).join("\n")

  // Add unique location-specific content
  const locationSpecificContent = `
**خدماتنا في ${locationType} ${location.nameAr}:**

نفخر بتقديم خدمات ${service.nameAr} لعملائنا في ${location.nameAr}${location.governorate ? ` التابعة لمحافظة ${governorateName}` : ""}. فريقنا يفهم احتياجات السوق المحلي ويقدم حلولاً مخصصة تناسب طبيعة الأعمال في المنطقة.`

  return `${mainContent}

${locationSpecificContent}

**خدمات ${service.nameAr} في EhabGM:**

${servicesListText}

**لماذا تختار EhabGM في ${location.nameAr}؟**

${whyChooseUsText}

**تواصل معنا الآن:**
* الهاتف: 01022679250
* الواتساب: [اضغط هنا](https://wa.me/201022679250)
* الموقع: [EhabGM.com](https://ehabgm.com)

ابدأ الآن واطلب عرضك المجاني!`
}

export function generateNextMetadata(
  service: Service,
  location: GeoLocation,
  baseUrl = "https://ehabgm.com",
): Metadata {
  const meta = generateGeoPageMetadata(service, location, baseUrl)

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(", "),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      type: "website",
      locale: "ar_EG",
      siteName: "ehabgm Digital Marketing",
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
    alternates: {
      canonical: meta.canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

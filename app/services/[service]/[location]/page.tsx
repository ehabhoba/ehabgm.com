// Dynamic geographic service pages
// This generates 700+ pages for all service + location combinations

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SERVICES, GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"
import { generateNextMetadata, generateGeoPageContent, generateGeoPageMetadata } from "@/lib/seo-generator"
import GeoServicePage from "@/components/geo-service-page"

interface PageProps {
  params: Promise<{
    service: string
    location: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, location: locationId } = await params

  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const location = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS].find((l) => l.id === locationId)

  if (!service || !location) {
    return {
      title: "الخدمة غير موجودة",
    }
  }

  return generateNextMetadata(service, location)
}

export async function generateStaticParams() {
  const allLocations = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]

  const params = []
  for (const service of SERVICES) {
    for (const location of allLocations) {
      params.push({
        service: service.slug,
        location: location.id,
      })
    }
  }

  return params
}

export default async function Page({ params }: PageProps) {
  const { service: serviceSlug, location: locationId } = await params

  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const location = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS].find((l) => l.id === locationId)

  if (!service || !location) {
    notFound()
  }

  const content = generateGeoPageContent(service, location)
  const metadata = generateGeoPageMetadata(service, location)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(metadata.schema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "الرئيسية",
                item: "https://ehabgm.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "الخدمات",
                item: "https://ehabgm.com/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.nameAr,
                item: `https://ehabgm.com/services/${service.slug}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: location.nameAr,
                item: `https://ehabgm.com/services/${service.slug}/${location.id}`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://ehabgm.com/services/${service.slug}/${location.id}#service`,
            name: `${service.nameAr} في ${location.nameAr}`,
            description: service.descriptionAr,
            provider: {
              "@type": "LocalBusiness",
              name: "ehabgm Digital Marketing Agency",
              url: "https://ehabgm.com",
            },
            areaServed: {
              "@type": "City",
              name: location.nameAr,
            },
            serviceType: service.nameAr,
          }),
        }}
      />
      <GeoServicePage service={service} location={location} content={content} />
    </>
  )
}

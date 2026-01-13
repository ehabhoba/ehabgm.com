// Layout for geographic service pages with schema markup

import type React from "react"
import { notFound } from "next/navigation"
import { SERVICES, GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema-markup"

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    service: string
    location: string
  }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { service: serviceSlug, location: locationId } = await params

  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const location = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS].find((l) => l.id === locationId)

  if (!service || !location) {
    notFound()
  }

  // Generate schema markup
  const localBusinessSchema = generateLocalBusinessSchema(service, location)
  const breadcrumbSchema = generateBreadcrumbSchema(service, location)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  )
}

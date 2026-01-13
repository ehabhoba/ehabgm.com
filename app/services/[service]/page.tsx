// Service category landing page showing all geographic locations

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SERVICES, GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"
import ServiceCategoryPage from "@/components/service-category-page"

interface PageProps {
  params: Promise<{
    service: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = SERVICES.find((s) => s.slug === serviceSlug)

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    }
  }

  const canonicalUrl = `https://ehabgm.com/services/${service.slug}`

  return {
    title: `${service.nameAr} في جميع محافظات مصر | EhabGM`,
    description: `${service.descriptionAr} - نقدم خدمات ${service.nameAr} في جميع محافظات مصر مع فريق متخصص وأسعار تنافسية. اتصل بنا الآن: 01022679250`,
    keywords: [...service.keywordsAr, "مصر", "جميع المحافظات", "خدمات احترافية"].join(", "),
    openGraph: {
      title: `${service.nameAr} في مصر | EhabGM`,
      description: `${service.descriptionAr} - خدمات احترافية في جميع محافظات مصر`,
      type: "website",
      locale: "ar_EG",
      url: canonicalUrl,
      siteName: "ehabgm Digital Marketing",
      images: [
        {
          url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
          width: 1200,
          height: 630,
          alt: `${service.nameAr} - ehabgm`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.nameAr} | EhabGM`,
      description: service.descriptionAr,
      images: ["https://i.postimg.cc/TYyK2Rtv/logo.png"],
    },
    alternates: {
      canonical: canonicalUrl,
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

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }))
}

export default async function Page({ params }: PageProps) {
  const { service: serviceSlug } = await params
  const service = SERVICES.find((s) => s.slug === serviceSlug)

  if (!service) {
    notFound()
  }

  const allLocations = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://ehabgm.com/services/${service.slug}#service`,
            name: service.nameAr,
            description: service.descriptionAr,
            provider: {
              "@type": "LocalBusiness",
              name: "ehabgm Digital Marketing Agency",
              url: "https://ehabgm.com",
              telephone: "+201022679250",
            },
            areaServed: {
              "@type": "Country",
              name: "Egypt",
            },
            serviceType: service.nameAr,
          }),
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
            ],
          }),
        }}
      />
      <ServiceCategoryPage service={service} locations={allLocations} />
    </>
  )
}

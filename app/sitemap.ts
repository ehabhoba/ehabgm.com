import type { MetadataRoute } from "next"
import { SERVICES, GOVERNORATES, CAIRO_AREAS, GIZA_AREAS } from "@/lib/geo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ehabgm.com"
  const lastMod = new Date()

  const geoPages: MetadataRoute.Sitemap = []
  const allLocations = [...GOVERNORATES, ...CAIRO_AREAS, ...GIZA_AREAS]

  for (const service of SERVICES) {
    geoPages.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    })

    // Sub-locations (neighborhoods) get lower priority to avoid duplicate content issues
    for (const location of GOVERNORATES) {
      geoPages.push({
        url: `${baseUrl}/services/${service.slug}/${location.id}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.6,
      })
    }

    // Cairo and Giza neighborhoods with lower priority
    for (const location of [...CAIRO_AREAS, ...GIZA_AREAS]) {
      geoPages.push({
        url: `${baseUrl}/services/${service.slug}/${location.id}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.5,
      })
    }
  }

  return [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastMod,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/ai-website-builder`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/url-shortener`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/qr-generator`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/ai-research`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/nft-certificate`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/logo-3d`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/whatsapp-link`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/invoice-generator`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/facebook-blog-importer`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/website-design`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ecommerce`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mobile-apps`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cms`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news-website`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/classified-ads`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/custom-solutions`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/social-media`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/seo`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/paid-ads`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/content-marketing`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/email-marketing`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing-consulting`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brand-identity`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/all-pages`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...geoPages,
  ]
}

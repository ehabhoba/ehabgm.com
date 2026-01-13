// Component for rendering geographic service pages

"use client"

import type { Service, GeoLocation } from "@/lib/geo-data"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react"

interface GeoServicePageProps {
  service: Service
  location: GeoLocation
  content: string
}

export default function GeoServicePage({ service, location, content }: GeoServicePageProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const contentSections = content.split("\n\n").filter((section) => section.trim())

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Breadcrumb Navigation */}
      <nav className="bg-background/50 backdrop-blur-sm border-b border-border sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm overflow-x-auto">
          <Link href="/" className="text-primary hover:underline whitespace-nowrap">
            الرئيسية
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <Link href={`/services/${service.slug}`} className="text-primary hover:underline whitespace-nowrap">
            {service.nameAr}
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-foreground whitespace-nowrap">{location.nameAr}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">{location.nameAr}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {service.nameAr} في {location.nameAr}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">{service.descriptionAr}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Content Card */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8 shadow-sm">
            <div className="prose prose-invert max-w-none space-y-6">
              {contentSections.map((section, idx) => {
                // Check if section is a list (starts with *)
                if (section.includes("*")) {
                  const lines = section.split("\n")
                  const title = lines[0].replace(/\*\*/g, "")
                  const items = lines.slice(1).filter((line) => line.trim().startsWith("*"))

                  return (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
                      <ul className="space-y-3">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-foreground">{item.replace("*", "").trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                // Regular paragraph
                return (
                  <p key={idx} className="text-foreground leading-relaxed">
                    {section}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">لماذا نختار EhabGM؟</h3>
              <ul className="space-y-3">
                {[
                  "فريق متخصص وذو خبرة عالية",
                  "خدمات مخصصة حسب احتياجاتك",
                  "أسعار تنافسية وجودة عالية",
                  "دعم فني متواصل",
                  "نتائج مثبتة وموثقة",
                  "التزام بالمواعيد والجودة",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">خدماتنا تشمل</h3>
              <ul className="space-y-3">
                {service.keywordsAr.map((keyword, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">{keyword}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">هل أنت مستعد للبدء؟</h2>
            <p className="text-muted-foreground mb-6">
              تواصل معنا اليوم واحصل على استشارة مجانية لخدمات {service.nameAr} في {location.nameAr}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/201022679250"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                تواصل عبر الواتساب
              </a>
              <a
                href="mailto:info@ehabgm.com"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                أرسل بريد إلكتروني
              </a>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">خدمات أخرى في {location.nameAr}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Links to other services in same location would go here */}
              <p className="text-muted-foreground col-span-full">استكشف خدماتنا الأخرى المتاحة في {location.nameAr}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="bg-card border-t border-border py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">الهاتف</h4>
                <a href="tel:+201022679250" className="text-primary hover:underline">
                  +201022679250
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h4>
                <a href="mailto:info@ehabgm.com" className="text-primary hover:underline">
                  info@ehabgm.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">الموقع</h4>
                <p className="text-foreground">حلوان، القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

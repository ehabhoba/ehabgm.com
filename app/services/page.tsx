// Main services listing page

import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES } from "@/lib/geo-data"

export const metadata: Metadata = {
  title: "خدماتنا | EhabGM - وكالة تسويق رقمي وتصميم",
  description:
    "اكتشف جميع خدمات EhabGM - تصميم جرافيك، تصميم مواقع، تسويق إلكتروني، إعلانات ممولة، حلول رقمية، أبحاث علمية، طباعة ودعاية.",
  keywords: ["خدمات تسويق رقمي", "تصميم جرافيك", "تصميم مواقع", "تسويق إلكتروني", "إعلانات ممولة", "حلول رقمية"].join(
    ", ",
  ),
  openGraph: {
    title: "خدماتنا | EhabGM",
    description: "جميع خدمات EhabGM في مجال التسويق الرقمي والتصميم",
    type: "website",
    locale: "ar_EG",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">خدماتنا</h1>
          <p className="text-lg text-muted-foreground">نقدم مجموعة شاملة من الخدمات الرقمية والتسويقية لتطوير مشروعك</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary">{service.nameAr}</h2>
              <p className="mb-4 text-sm text-muted-foreground">{service.descriptionAr}</p>
              <div className="flex items-center text-primary">
                <span className="text-sm font-semibold">اكتشف المزيد</span>
                <span className="mr-2">←</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">هل تحتاج إلى خدمة معينة؟</h2>
          <p className="mb-6 text-muted-foreground">تواصل معنا الآن واحصل على استشارة مجانية من فريقنا المتخصص</p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </main>
  )
}

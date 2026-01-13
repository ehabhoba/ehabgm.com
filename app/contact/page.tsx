import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "تواصل معنا - ehabgm | استشارة مجانية 24/7 - حلوان",
  description: "تواصل مع فريق ehabgm للحصول على استشارة مجانية. دعم 24/7، رد فوري، واتساب: 01022679250. نحن في خدمتك!",
  keywords: "تواصل معنا ehabgm، استشارة مجانية، دعم فني، واتساب 01022679250، حلوان",
  openGraph: {
    title: "تواصل معنا - ehabgm | استشارة مجانية 24/7",
    description: "استشارة مجانية، دعم 24/7، رد فوري. واتساب: 01022679250. نحن في خدمتك!",
    url: "https://ehabgm.com/contact",
    siteName: "ehabgm",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "تواصل معنا - ehabgm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا - ehabgm | استشارة مجانية 24/7",
    description: "استشارة مجانية، دعم 24/7. واتساب: 01022679250",
  },
  alternates: {
    canonical: "https://ehabgm.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "تواصل مع ehabgm",
            description: "تواصل معنا للحصول على استشارة مجانية",
            url: "https://ehabgm.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "ehabgm",
              telephone: "+201022679250",
              email: "info@ehabgm.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Helwan",
                addressRegion: "Cairo",
                addressCountry: "EG",
              },
            },
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
                name: "تواصل معنا",
                item: "https://ehabgm.com/contact",
              },
            ],
          }),
        }}
      />
      <ContactClientPage />
    </>
  )
}

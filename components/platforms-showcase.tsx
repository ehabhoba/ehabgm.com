"use client"

import Link from "next/link"
import { ExternalLink, Sparkles, ArrowLeft } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function PlatformsShowcase() {
  const platforms = [
    {
      name: "منصة حلوان أونلاين",
      description: "أكبر منصة متخصصة في الخدمات الإعلانية والربط التسويقي في حلوان والقاهرة.",
      image: "https://i.ibb.co/4Zrs42L/helwan-online.png",
      url: "https://helwan.online",
      color: "from-emerald-600 to-emerald-800",
      bg: "bg-emerald-50",
      badge: "منصة رائدة"
    },
    {
      name: "منصة إعلانات القاهرة",
      description: "حلول إعلانية وتقنية شاملة مدعومة بالذكاء الاصطناعي لخدمة الشركات في العاصمة.",
      image: "https://i.ibb.co/0jdNBDV/cairo-online.png",
      url: "https://cairoeg.online",
      color: "from-teal-600 to-teal-800",
      bg: "bg-teal-50",
      badge: "ذكاء اصطناعي"
    },
  ]

  return (
    <section id="other-platforms" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-black mb-6 border border-emerald-100">
              <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              شركاء النجاح
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              منصاتنا <span className="text-emerald-600">الشقيقة</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              نمتلك ونطور مجموعة من المنصات المتخصصة التي تساهم في بناء نظام تسويقي متكامل لعملائنا في مختلف القطاعات.
            </p>
          </ScrollReveal>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {platforms.map((platform, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Link
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative h-[400px] sm:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 hover:shadow-emerald-500/10 transition-all duration-500"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 bg-gradient-to-t ${platform.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 sm:p-12 text-white z-20">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest border border-white/20">
                      {platform.badge}
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">{platform.name}</h3>
                    <p className="text-white/80 text-lg sm:text-xl font-medium leading-relaxed max-w-lg mb-8">
                      {platform.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-black text-sm group-hover:gap-4 transition-all duration-300">
                      <span>زيارة المنصة الآن</span>
                      <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={500}>
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-6">
              <p className="text-gray-500 font-extrabold uppercase tracking-widest text-sm">لديك استفسار حول منصاتنا؟</p>
              <Link
                href="https://wa.me/201022679250"
                className="px-10 py-5 bg-gray-900 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-emerald-500/20"
              >
                تواصل مع فريق الدعم
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


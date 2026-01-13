"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Megaphone,
  Palette,
  Globe,
  Search,
  Share2,
  BarChart3,
  ArrowLeft,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Check
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

const services = [
  {
    icon: Megaphone,
    title: "إدارة الحملات الإعلانية",
    description: "حملات مدروسة على فيسبوك، إنستجرام، وجوجل تحقق أعلى عائد من ميزانيتك الإعلانية",
    features: ["تحليل السوق والمنافسين", "تصميم إعلانات جذابة", "متابعة مستمرة + تقارير أسبوعية"],
    color: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50/50 text-blue-600",
  },
  {
    icon: Palette,
    title: "تصميم الهوية البصرية",
    description: "شعار، ألوان، وبروفايل شركة يعكس شخصيتك التجارية ويميزك عن المنافسين",
    features: ["تصميم شعار احترافي", "دليل الهوية البصرية", "تطبيق الهوية على جميع المواد"],
    color: "from-purple-500 to-pink-500",
    lightBg: "bg-purple-50/50 text-purple-600",
  },
  {
    icon: Globe,
    title: "تصميم وتطوير المواقع",
    description: "مواقع حديثة وسريعة الاستجابة لجميع الأجهزة مع تحسين تجربة المستخدم",
    features: ["تصميم متجاوب", "سرعة تحميل عالية", "تحسين محركات البحث"],
    color: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50/50 text-emerald-600",
  },
  {
    icon: Search,
    title: "تحسين محركات البحث SEO",
    description: "رفع ترتيب موقعك في نتائج جوجل واستهداف العملاء المهتمين بخدماتك",
    features: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط الخارجية"],
    color: "from-orange-500 to-yellow-500",
    lightBg: "bg-orange-50/50 text-orange-600",
  },
  {
    icon: Share2,
    title: "إدارة السوشيال ميديا",
    description: "محتوى جذاب وتفاعل حقيقي مع جمهورك على جميع منصات التواصل الاجتماعي",
    features: ["إنشاء محتوى إبداعي", "جدولة المنشورات", "تحليل الأداء والتفاعل"],
    color: "from-pink-500 to-red-500",
    lightBg: "bg-pink-50/50 text-pink-600",
  },
  {
    icon: BarChart3,
    title: "التحليل والتقارير",
    description: "تقارير مفصلة وتحليل دقيق لأداء حملاتك التسويقية مع توصيات للتحسين",
    features: ["تقارير شهرية مفصلة", "تحليل ROI", "توصيات للتحسين"],
    color: "from-teal-500 to-cyan-500",
    lightBg: "bg-teal-50/50 text-teal-600",
  },
]

const socialMediaServices = [
  {
    icon: Facebook,
    title: "إدارة فيسبوك",
    description: "إدارة احترافية لصفحتك على فيسبوك مع محتوى جذاب وتفاعل مستمر",
    color: "text-blue-600",
    bg: "bg-blue-50/50"
  },
  {
    icon: Instagram,
    title: "إدارة انستجرام",
    description: "محتوى بصري مميز وستوريز تفاعلية لزيادة المتابعين والمبيعات",
    color: "text-pink-600",
    bg: "bg-pink-50/50"
  },
  {
    icon: Youtube,
    title: "إدارة يوتيوب",
    description: "إنتاج وتحرير فيديوهات احترافية مع تحسين القناة لزيادة المشاهدات",
    color: "text-red-600",
    bg: "bg-red-50/50"
  },
  {
    icon: Twitter,
    title: "إدارة لينكد إن",
    description: "محتوى احترافي وتفاعل مع المجتمع المهني لبناء سمعة قوية",
    color: "text-blue-700",
    bg: "bg-blue-50/50"
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-gray-50/30 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-bold mb-4 border border-emerald-100 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse ml-2"></span>
              خدماتنا المتميزة
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              حلول تسويق رقمي <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">متكاملة</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              نقدم لك استراتيجيات تسويقية ذكية وحلولاً رقمية مبتكرة مصممة خصيصاً لتنمية مشروعك وزيادة مبيعاتك في السوق المصري والعربي.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 sm:mb-32">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="group relative h-full bg-white hover:bg-white border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden rounded-[2rem] p-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <CardHeader className="pb-4 pt-6 px-6">
                  <div className={`w-16 h-16 rounded-2xl ${service.lightBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                    <service.icon className="w-8 h-8 relative z-10" />
                  </div>

                  <CardTitle className="text-2xl font-black text-gray-900 mb-3 transition-colors group-hover:text-emerald-700">{service.title}</CardTitle>

                  <CardDescription className="text-gray-600 leading-relaxed font-bold text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2 px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm font-bold text-gray-500 group-hover:text-gray-700 transition-colors">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full ml-3 flex-shrink-0 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full rounded-xl py-6 border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 font-bold transition-all duration-300"
                    asChild
                  >
                    <Link href="/pricing" className="flex items-center justify-center gap-2">
                      تفاصيل الخدمة والأسعار
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Media Mini-Section */}
        <div className="mb-20 sm:mb-32">
          <div className="text-right sm:text-center mb-12 sm:mb-16">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mb-4">
                متخصصون في <span className="text-emerald-600">إدارة المنصات</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-lg font-bold max-w-2xl mx-auto">
                نبني حضوراً قوياً لعلامتك التجارية على مختلف منصات التواصل الاجتماعي بأعلى معايير الجودة والتفاعل.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {socialMediaServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`group p-4 sm:p-6 rounded-[1.5rem] ${service.bg} border border-transparent hover:border-white hover:shadow-lg transition-all duration-300 text-right`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <ScrollReveal>
          <div className="relative rounded-[2.5rem] bg-gray-900 p-8 sm:p-16 overflow-hidden text-center sm:text-right">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-right sm:text-right">
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">هل تبحث عن شريك نجاح رقمي؟</h3>
                <p className="text-gray-300 text-base sm:text-xl font-medium leading-relaxed mb-0">
                  دعنا نساعدك في بناء استراتيجية تسويقية متكاملة تحقق لك النتائج التي تطمح إليها. استشر خبراءنا الآن مجاناً.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="px-10 py-8 h-auto rounded-2xl text-lg group shadow-xl shadow-emerald-500/20" asChild>
                  <Link href="https://wa.me/201022679250" className="flex items-center gap-3">
                    ابدأ استشارتك المجانية
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-8 h-auto rounded-2xl text-lg border-gray-700 bg-transparent text-white hover:bg-gray-800 transition-all font-bold" asChild>
                  <Link href="/pricing">
                    اطلع على باقاتنا
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


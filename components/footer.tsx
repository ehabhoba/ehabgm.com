"use client"
import Link from "next/link"
import type React from "react"
import AdSenseAd from "@/components/AdSenseAd"
import { Facebook, Instagram, Youtube, Send, CheckCircle, Phone, Mail, MapPin, Clock, Zap, ArrowRight, Award } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
    setEmail("")
  }

  const webServices = [
    { name: "تصميم المواقع", href: "/website-design" },
    { name: "المتاجر الإلكترونية", href: "/ecommerce" },
    { name: "تطبيقات الجوال", href: "/mobile-apps" },
    { name: "أنظمة إدارة المحتوى", href: "/cms" },
    { name: "تطوير واجهات المستخدم", href: "/ui-development" },
    { name: "تطوير الباك إند", href: "/backend-development" },
  ]

  const marketingServices = [
    { name: "إدارة السوشيال ميديا", href: "/social-media" },
    { name: "تحسين محركات البحث", href: "/seo" },
    { name: "الإعلانات الممولة", href: "/paid-ads" },
    { name: "التسويق بالمحتوى", href: "/content-marketing" },
    { name: "التسويق عبر البريد الإلكتروني", href: "/email-marketing" },
    { name: "التسويق بالفيديو", href: "/video-marketing" },
  ]

  const designServices = [
    { name: "تصميم الهوية البصرية", href: "/branding" },
    { name: "تصميم الشعارات", href: "/logo-design" },
    { name: "تصميم السوشيال ميديا", href: "/social-media-design" },
    { name: "تصميم البروشورات", href: "/brochure-design" },
    { name: "تصميم الإعلانات", href: "/ad-design" },
    { name: "تصميم الموشن جرافيك", href: "/motion-graphics" },
  ]

  const tools = [
    { name: "منشئ المواقع بالذكاء الاصطناعي", href: "/tools/ai-website-builder" },
    { name: "اختصار الروابط", href: "/tools/url-shortener" },
    { name: "مولد رموز QR", href: "/tools/qr-generator" },
    { name: "مولد الأبحاث", href: "/tools/ai-research" },
    { name: "شهادات NFT", href: "/tools/nft-certificate" },
    { name: "محول الشعارات 3D", href: "/tools/logo-3d" },
    { name: "روابط واتساب", href: "/tools/whatsapp-link" },
    { name: "مولد الفواتير", href: "/tools/invoice-generator" },
    { name: "استيراد منشورات فيسبوك", href: "/tools/facebook-blog-importer" },
  ]

  const resources = [
    { name: "المدونة", href: "/blog" },
    { name: "دليل التسويق الرقمي", href: "/guides/digital-marketing" },
    { name: "دليل SEO", href: "/guides/seo" },
    { name: "دليل الإعلانات الممولة", href: "/guides/paid-ads" },
    { name: "قوالب التصميم", href: "/templates" },
    { name: "دراسات الحالة", href: "/case-studies" },
  ]

  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "أعمالنا", href: "/portfolio" },
    { name: "الأسعار", href: "/pricing" },
    { name: "المدونة", href: "/blog" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "تواصل معنا", href: "/contact" },
    { name: "الوظائف", href: "/careers" },
    { name: "الشركاء", href: "/partners" },
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "شروط الاستخدام", href: "/terms" },
  ]

  const companyPages = [
    { name: "قصتنا", href: "/about/story" },
    { name: "فريق العمل", href: "/about/team" },
    { name: "شهادات العملاء", href: "/testimonials" },
    { name: "الجوائز والإنجازات", href: "/achievements" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">EG</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ehabgm</h3>
                  <p className="text-xs text-emerald-400">منصة التسويق الرقمي</p>
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              منصة ehabgm هي وكالة تسويق رقمي متخصصة في تقديم حلول متكاملة للشركات والأفراد. نقدم خدمات التصميم
              الجرافيكي، إدارة السوشيال ميديا، الإعلانات الممولة، وتطوير المواقع الإلكترونية بأعلى جودة وأفضل الأسعار في
              السوق المصري.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">100+</div>
                <div className="text-xs text-gray-400">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">200+</div>
                <div className="text-xs text-gray-400">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">5+</div>
                <div className="text-xs text-gray-400">سنوات خبرة</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+201022679250"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span dir="ltr">+20 102 267 9250</span>
              </a>
              <a
                href="mailto:info@ehabgm.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <span>info@ehabgm.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span>حلوان، القاهرة، مصر</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <span>السبت - الخميس: 9 صباحاً - 6 مساءً</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/ehab.gm1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/201022679250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ehab.gm1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ehab.gm1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@ehabgm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-emerald-500 rounded-full mr-2"></span>
              خدمات الويب
            </h4>
            <ul className="space-y-2">
              {webServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-emerald-500 rounded-full mr-2"></span>
              خدمات التسويق
            </h4>
            <ul className="space-y-2">
              {marketingServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-emerald-500 rounded-full mr-2"></span>
              خدمات التصميم
            </h4>
            <ul className="space-y-2">
              {designServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-emerald-500 rounded-full mr-2"></span>
              الموارد
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-sm text-gray-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-base font-bold text-white mt-6 mb-4 flex items-center">
              <span className="w-1 h-5 bg-emerald-500 rounded-full mr-2"></span>
              الشركة
            </h4>
            <ul className="space-y-2">
              {companyPages.map((page, index) => (
                <li key={index}>
                  <Link
                    href={page.href}
                    className="text-sm text-gray-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-bold text-white mb-6 flex items-center">
            <span className="w-1 h-6 bg-emerald-500 rounded-full mr-2"></span>
            أدوات مجانية - استخدمها الآن
          </h4>
          <div className="mb-8 bg-gray-800/30 p-4 rounded-lg">
            <AdSenseAd slot="7777777777" format="auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 group-hover:text-emerald-400 transition-colors">
                    {tool.name}
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/tools"
              className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-all group"
            >
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm text-emerald-400 font-bold">عرض جميع الأدوات</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">اشترك في نشرتنا الإخبارية</h4>
              <p className="text-sm text-gray-300">احصل على آخر الأخبار والعروض الحصرية مباشرة في بريدك</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-bold hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center gap-2"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    تم الاشتراك
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    اشترك
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-sm font-bold text-white mb-4">شركاء النجاح</h5>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="text-blue-600 font-bold text-lg">Meta</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-4">طرق الدفع</h5>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-white px-3 py-2 rounded">
                  <span className="text-blue-600 font-bold text-xs">Visa</span>
                </div>
                <div className="bg-white px-3 py-2 rounded">
                  <span className="text-orange-600 font-bold text-xs">Mastercard</span>
                </div>
                <div className="bg-white px-3 py-2 rounded">
                  <span className="text-blue-700 font-bold text-xs">PayPal</span>
                </div>
                <div className="bg-white px-3 py-2 rounded">
                  <span className="text-purple-600 font-bold text-xs">Vodafone Cash</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-4">الشهادات والأمان</h5>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-bold">Meta Certified</span>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-blue-400 font-bold">Google Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-emerald-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ehabgm. جميع الحقوق محفوظة. تم التطوير بواسطة{" "}
              <span className="text-emerald-400 font-bold">إيهاب محمد</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              منصة ehabgm - وكالة التسويق الرقمي الرائدة في حلوان، القاهرة، مصر
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

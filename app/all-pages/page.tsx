import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "جميع الصفحات | ehabgm - خريطة الموقع الشاملة",
  description:
    "دليل شامل لجميع صفحات موقع ehabgm. اكتشف جميع الخدمات والأدوات والموارد المتاحة. 50+ صفحة رئيسية و 300+ صفحة محلية.",
  keywords: "خريطة الموقع، جميع الصفحات، دليل الموقع، ehabgm، صفحات الخدمات، الأدوات المجانية",
  openGraph: {
    title: "جميع الصفحات | ehabgm",
    description: "دليل شامل لجميع صفحات موقع ehabgm - 350+ صفحة",
    url: "https://ehabgm.com/all-pages",
  },
}

const allPages = [
  {
    category: "الصفحات الرئيسية",
    icon: "🏠",
    pages: [
      { title: "الرئيسية", path: "/", description: "الصفحة الرئيسية للموقع" },
      { title: "من نحن", path: "/about", description: "معلومات عن ehabgm والفريق" },
      { title: "اتصل بنا", path: "/contact", description: "نموذج التواصل والبيانات" },
      { title: "الأسعار", path: "/pricing", description: "قائمة الأسعار والباقات" },
      { title: "المحفظة", path: "/portfolio", description: "أعمالنا السابقة والمشاريع" },
      { title: "الإنجازات", path: "/achievements", description: "إنجازاتنا والشهادات" },
    ],
  },
  {
    category: "الخدمات الأساسية",
    icon: "💼",
    pages: [
      { title: "جميع الخدمات", path: "/services", description: "قائمة جميع الخدمات المتاحة" },
      { title: "تصميم المواقع", path: "/website-design", description: "تصميم وتطوير مواقع احترافية" },
      { title: "التجارة الإلكترونية", path: "/ecommerce", description: "حلول المتاجر الإلكترونية المتكاملة" },
      { title: "تطبيقات الهاتف", path: "/mobile-apps", description: "تطوير تطبيقات iOS و Android" },
      { title: "نظام إدارة المحتوى", path: "/cms", description: "أنظمة CMS احترافية وسهلة الاستخدام" },
      { title: "المواقع الإخبارية", path: "/news-website", description: "مواقع إخبارية متقدمة وديناميكية" },
      { title: "الإعلانات المبوبة", path: "/classified-ads", description: "منصات الإعلانات المبوبة المتطورة" },
      { title: "الحلول المخصصة", path: "/custom-solutions", description: "حلول مخصصة حسب احتياجاتك الفريدة" },
    ],
  },
  {
    category: "التسويق الرقمي",
    icon: "📱",
    pages: [
      { title: "التسويق الرقمي", path: "/social-media", description: "إدارة وسائل التواصل الاجتماعي" },
      { title: "تحسين محركات البحث", path: "/seo", description: "خدمات SEO المتقدمة والمحلية" },
      { title: "الإعلانات الممولة", path: "/paid-ads", description: "إدارة الحملات الإعلانية الممولة" },
      { title: "تسويق المحتوى", path: "/content-marketing", description: "استراتيجيات تسويق المحتوى الفعالة" },
      { title: "البريد الإلكتروني", path: "/email-marketing", description: "حملات البريد الإلكتروني المتقدمة" },
      { title: "استشارات التسويق", path: "/marketing-consulting", description: "استشارات تسويقية احترافية وشاملة" },
      { title: "الهوية البصرية", path: "/brand-identity", description: "تصميم الهوية البصرية الاحترافية" },
    ],
  },
  {
    category: "الأدوات والموارد",
    icon: "🛠️",
    pages: [
      { title: "جميع الأدوات", path: "/tools", description: "قائمة جميع الأدوات المتاحة" },
      { title: "منشئ المواقع بـ AI", path: "/tools/ai-website-builder", description: "بناء مواقع بالذكاء الاصطناعي" },
      { title: "مختصر الروابط", path: "/tools/url-shortener", description: "تقصير الروابط الطويلة" },
      { title: "مولد رموز QR", path: "/tools/qr-generator", description: "إنشاء رموز QR احترافية" },
      { title: "أداة البحث العلمي", path: "/tools/ai-research", description: "بحث علمي متقدم بـ AI" },
      { title: "شهادات NFT", path: "/tools/nft-certificate", description: "إنشاء شهادات NFT رقمية" },
      { title: "تحويل الشعار 3D", path: "/tools/logo-3d", description: "تحويل الشعارات لـ 3D احترافي" },
      { title: "رابط واتساب", path: "/tools/whatsapp-link", description: "إنشاء روابط واتساب مباشرة" },
      { title: "مولد الفواتير", path: "/tools/invoice-generator", description: "إنشاء فواتير احترافية وسهلة" },
      { title: "استيراد المدونات", path: "/tools/facebook-blog-importer", description: "استيراد مقالات من فيسبوك" },
    ],
  },
  {
    category: "المحتوى والدعم",
    icon: "📚",
    pages: [
      { title: "المدونة", path: "/blog", description: "مقالات ونصائح تسويقية 2025-2026" },
      { title: "الأسئلة الشائعة", path: "/faq", description: "إجابات على الأسئلة الشائعة" },
      { title: "الدعم الفني", path: "/support", description: "خدمات الدعم الفني 24/7" },
      { title: "المتجر", path: "/store", description: "متجر المنتجات والخدمات" },
    ],
  },
  {
    category: "الصفحات المحلية",
    icon: "🗺️",
    pages: [
      { title: "الخدمات المحلية", path: "/services", description: "300+ صفحة محلية لكل محافظة ومدينة" },
      { title: "تصميم جرافيك محلي", path: "/services/graphic-design", description: "خدمات التصميم الجرافيك المحلية" },
      { title: "تصميم مواقع محلي", path: "/services/web-design", description: "تصميم المواقع في كل المحافظات" },
      { title: "تسويق رقمي محلي", path: "/services/digital-marketing", description: "التسويق الرقمي المحلي المتخصص" },
    ],
  },
  {
    category: "القانونية والسياسات",
    icon: "⚖️",
    pages: [
      { title: "سياسة الخصوصية", path: "/privacy", description: "سياسة حماية البيانات الشخصية" },
      { title: "شروط الاستخدام", path: "/terms", description: "شروط وأحكام الاستخدام الكاملة" },
    ],
  },
]

export default function AllPagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">خريطة الموقع الشاملة</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              جميع صفحات الموقع
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              دليل شامل لجميع الصفحات والخدمات والأدوات المتاحة على موقع ehabgm. اكتشف 350+ صفحة محسّنة للـ SEO
            </p>
          </div>
        </div>
      </section>

      {/* Pages Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {allPages.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 ml-4 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, pageIdx) => (
                    <Link key={pageIdx} href={page.path}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-bold text-gray-900 flex-1">{page.title}</h3>
                            <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 ml-2" />
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{page.description}</p>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <span className="text-xs text-gray-500 font-mono">{page.path}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-blue-100">صفحة رئيسية</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">300+</div>
                <p className="text-purple-100">صفحة محلية</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-green-100">أدوات مجانية</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-600 to-orange-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-orange-100">دعم فني</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import Link from "next/link"
import {
  Bot,
  Link as LinkIcon,
  QrCode,
  BookOpen,
  Palette,
  Boxes,
  MessageCircle,
  FileText,
  ArrowLeft,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ToolsSection() {
  const tools = [
    {
      name: "منشئ المواقع والذكاء الاصطناعي",
      description: "أنشئ موقعك الإلكتروني الاحترافي في دقائق باستخدام الذكاء الاصطناعي مع شهادة توثيق",
      icon: Bot,
      href: "/tools/ai-website-builder",
      color: "from-blue-500 to-cyan-500",
      lightBg: "bg-blue-50",
      badge: "جديد",
    },
    {
      name: "اختصار الروابط",
      description: "اختصر روابطك الطويلة وتتبع النقرات والإحصائيات بسهولة",
      icon: LinkIcon,
      href: "/tools/url-shortener",
      color: "from-purple-500 to-pink-500",
      lightBg: "bg-purple-50",
    },
    {
      name: "مولد رموز QR",
      description: "أنشئ رموز استجابة سريعة احترافية لموقعك أو منتجاتك",
      icon: QrCode,
      href: "/tools/qr-generator",
      color: "from-emerald-500 to-teal-500",
      lightBg: "bg-emerald-50",
    },
    {
      name: "مولد الأبحاث بالذكاء الاصطناعي",
      description: "أنشئ أبحاث أكاديمية احترافية للطلاب بالذكاء الاصطناعي",
      icon: BookOpen,
      href: "/tools/ai-research",
      color: "from-orange-500 to-red-500",
      lightBg: "bg-orange-50",
      badge: "شائع",
    },
    {
      name: "مولد شهادات NFT",
      description: "أنشئ بطاقات NFT مع شهادات توثيق رقمية على البلوكشين",
      icon: Boxes,
      href: "/tools/nft-certificate",
      color: "from-indigo-500 to-purple-500",
      lightBg: "bg-indigo-50",
      badge: "مميز",
    },
    {
      name: "محول الشعارات إلى 3D",
      description: "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي بدقة عالية",
      icon: Palette,
      href: "/tools/logo-3d",
      color: "from-pink-500 to-rose-500",
      lightBg: "bg-pink-50",
    },
    {
      name: "مولد روابط واتساب",
      description: "أنشئ روابط واتساب مباشرة للمحادثة مع رسائل مخصصة",
      icon: MessageCircle,
      href: "/tools/whatsapp-link",
      color: "from-green-600 to-green-500",
      lightBg: "bg-green-50",
    },
    {
      name: "مولد الفواتير",
      description: "صمم وأنشئ فواتير احترافية وقم بتنزيلها بصيغة PDF",
      icon: FileText,
      href: "/tools/invoice-generator",
      color: "from-blue-600 to-blue-500",
      lightBg: "bg-blue-50",
    },
  ]

  return (
    <section id="tools" className="py-20 sm:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-black mb-6 border border-emerald-100 shadow-sm">
              <Zap className="w-4 h-4 ml-2 animate-pulse" />
              أدوات رقمية مجانية
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              أدوات احترافية <span className="text-emerald-600 italic">مدعومة</span> بالذكاء الاصطناعي
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              نضع بين يديك مجموعة مبتكرة من الأدوات التي تسهل أعمالك اليومية وتوفر عليك الوقت والجهد، مجاناً وحصرياً من ehabgm.
            </p>
          </ScrollReveal>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <Link
                href={tool.href}
                className="group relative h-full bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden flex flex-col"
              >
                {/* Tool Gradient Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${tool.lightBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                      <tool.icon className={`w-8 h-8 bg-gradient-to-br ${tool.color} bg-clip-text text-transparent`} />
                      {/* Fallback for icons that don't support text-transparent/bg-clip-text properly */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <tool.icon className={`w-8 h-8 ${tool.color.includes('emerald') ? 'text-emerald-600' :
                          tool.color.includes('blue') ? 'text-blue-600' :
                            tool.color.includes('purple') ? 'text-purple-600' :
                              tool.color.includes('orange') ? 'text-orange-600' :
                                tool.color.includes('pink') ? 'text-pink-600' : 'text-gray-600'}`} />
                      </div>
                    </div>

                    {tool.badge && (
                      <div className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                        {tool.badge}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8 flex-grow">
                    {tool.description}
                  </p>

                  <div className="flex items-center text-emerald-600 font-black text-sm group-hover:gap-4 transition-all duration-300 border-t border-gray-50 pt-6">
                    <span>ابدأ الآن</span>
                    <ArrowLeft className="w-5 h-5 mr-auto transform group-hover:-translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer Link */}
        <ScrollReveal delay={400}>
          <div className="mt-16 sm:mt-24 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-4 bg-gray-900 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/30 group"
            >
              <span>استكشف جميع الأدوات الذكية</span>
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


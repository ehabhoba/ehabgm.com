"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    MessageCircle,
    Globe,
    ShoppingCart,
    Smartphone,
    Settings,
    Newspaper,
    MessageSquare,
    Share2,
    Search,
    Zap,
    TrendingUp,
    Mail,
    Briefcase,
    Palette
} from "lucide-react"

export default function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [toolsOpen, setToolsOpen] = useState(false)
    const [allPagesOpen, setAllPagesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [mobileMenuOpen])

    const services = {
        webDevelopment: [
            {
                name: "تصميم المواقع الإلكترونية",
                href: "/website-design",
                desc: "مواقع احترافية متجاوبة مع جميع الأجهزة",
                icon: Globe,
                badge: "شائع",
            },
            {
                name: "المتاجر الإلكترونية",
                href: "/ecommerce",
                desc: "حلول تجارة إلكترونية متكاملة مع بوابات دفع",
                icon: ShoppingCart,
                badge: "جديد",
            },
            { name: "تطبيقات الجوال", href: "/mobile-apps", desc: "تطبيقات iOS و Android احترافية", icon: Smartphone },
            { name: "أنظمة إدارة المحتوى CMS", href: "/cms", desc: "أنظمة إدارة محتوى مخصصة وسهلة الاستخدام", icon: Settings },
            { name: "مواقع الأخبار والمجلات", href: "/news-website", desc: "منصات إخبارية متطورة وسريعة", icon: Newspaper },
            { name: "مواقع الإعلانات المبوبة", href: "/classified-ads", desc: "منصات إعلانات مبوبة متكاملة", icon: MessageSquare },
            { name: "حلول برمجية مخصصة", href: "/custom-solutions", desc: "حلول برمجية مصممة خصيصاً لاحتياجاتك", icon: Settings },
        ],
        marketing: [
            {
                name: "إدارة السوشيال ميديا",
                href: "/social-media",
                desc: "إدارة شاملة لجميع منصات التواصل الاجتماعي",
                icon: Share2,
                badge: "شائع",
            },
            { name: "تحسين محركات البحث SEO", href: "/seo", desc: "تصدر نتائج البحث وزيادة الزيارات العضوية", icon: Search },
            { name: "الإعلانات الممولة", href: "/paid-ads", desc: "حملات إعلانية فعالة على جميع المنصات", icon: Zap, badge: "مميز" },
            { name: "التسويق بالمحتوى", href: "/content-marketing", desc: "محتوى جذاب ومؤثر يحقق أهدافك التسويقية", icon: TrendingUp },
            {
                name: "التسويق عبر البريد الإلكتروني",
                href: "/email-marketing",
                desc: "حملات بريدية احترافية بمعدلات تحويل عالية",
                icon: Mail,
            },
            { name: "استشارات تسويقية", href: "/marketing-consulting", desc: "استراتيجيات تسويقية متقدمة من خبراء المجال", icon: Briefcase },
        ],
        design: [
            {
                name: "تصميم الهوية البصرية",
                href: "/brand-identity",
                desc: "تصميم هوية مميزة تعكس قيم علامتك التجارية",
                icon: Palette,
                badge: "مميز",
            },
        ],
    }

    const tools = [
        {
            name: "منشئ المواقع بالذكاء الاصطناعي",
            href: "/tools/ai-website-builder",
            desc: "أنشئ موقعك الاحترافي بالذكاء الاصطناعي مع شهادة توثيق",
            badge: "جديد",
        },
        {
            name: "اختصار الروابط",
            href: "/tools/url-shortener",
            desc: "اختصر روابطك وتتبع الإحصائيات بسهولة",
            badge: "شائع",
        },
        { name: "مولد رموز QR", href: "/tools/qr-generator", desc: "أنشئ رموز QR احترافية قابلة للتخصيص", badge: "شائع" },
        { name: "مولد الأبحاث بالذكاء الاصطناعي", href: "/tools/ai-research", desc: "أنشئ أبحاث أكاديمية احترافية للطلاب" },
        { name: "شهادات NFT", href: "/tools/nft-certificate", desc: "أنشئ شهادات NFT موثقة على البلوكشين" },
        { name: "محول الشعارات إلى 3D", href: "/tools/logo-3d", desc: "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي" },
        { name: "مولد روابط واتساب", href: "/tools/whatsapp-link", desc: "أنشئ روابط واتساب مباشرة للمحادثة" },
        { name: "مولد الفواتير", href: "/tools/invoice-generator", desc: "صمم وأنشئ فواتير احترافية وحملها فوراً" },
        {
            name: "استيراد منشورات فيسبوك",
            href: "/tools/facebook-blog-importer",
            desc: "حول منشورات فيسبوك إلى مقالات مدونة احترافية",
            badge: "جديد",
        },
    ]

    const allPages = [
        { name: "الرئيسية", href: "/" },
        { name: "من نحن", href: "/about" },
        { name: "الخدمات", href: "/services" },
        { name: "الأسعار", href: "/pricing" },
        { name: "المحفظة", href: "/portfolio" },
        { name: "الإنجازات", href: "/achievements" },
        { name: "المدونة", href: "/blog" },
        { name: "الأسئلة الشائعة", href: "/faq" },
        { name: "الدعم الفني", href: "/support" },
        { name: "المتجر", href: "/store" },
        { name: "جميع الصفحات", href: "/all-pages" },
        { name: "اتصل بنا", href: "/contact" },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-lg border-b border-gray-200"
                : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
                }`}
            role="banner"
        >
            <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity flex-shrink-0"
                        aria-label="الصفحة الرئيسية - ehabgm وكالة التسويق الرقمي"
                    >
                        <Image
                            src="/images/design-mode/logo.png"
                            alt="ehabgm - وكالة التسويق الرقمي في حلوان"
                            width={40}
                            height={40}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-sm"
                            priority
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                                ehabgm
                            </span>
                            <span className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 font-semibold tracking-wide hidden xs:block">
                                التسويق الرقمي • حلوان
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="القائمة الرئيسية">
                        <Link
                            href="/"
                            className="text-sm xl:text-[15px] text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold relative group py-2"
                            aria-label="الصفحة الرئيسية"
                        >
                            الرئيسية
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </Link>

                        <div className="relative group">
                            <button
                                className="text-sm xl:text-[15px] text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold flex items-center gap-1.5 py-2"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                خدماتنا
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>

                            <div
                                className="absolute top-full right-0 mt-3 w-[95vw] max-w-[850px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden"
                                role="menu"
                            >
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-0">
                                    <div className="p-5 xl:p-7 bg-gradient-to-br from-emerald-50/50 via-white to-white border-b xl:border-b-0 xl:border-l border-gray-100">
                                        <div className="flex items-center gap-3 mb-4 xl:mb-5">
                                            <div className="w-1 h-8 xl:h-10 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full"></div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-base xl:text-lg leading-tight">تطوير الويب</h3>
                                                <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 font-medium">
                                                    {services.webDevelopment.length} خدمات متاحة
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-1 xl:space-y-1.5">
                                            {services.webDevelopment.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    href={service.href}
                                                    className="block px-3 xl:px-4 py-2.5 xl:py-3.5 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                                                    role="menuitem"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover/item:from-emerald-500/5 group-hover/item:to-teal-500/5 transition-all duration-300"></div>
                                                    <div className="relative flex items-start gap-2 xl:gap-3">
                                                        <div className="text-emerald-600 group-hover/item:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                                                            <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="font-bold text-[13px] xl:text-[15px] text-gray-900 group-hover/item:text-emerald-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-0.5 xl:mb-1">
                                                                <span className="line-clamp-1">{service.name}</span>
                                                                {service.badge && (
                                                                    <span className="text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold flex-shrink-0">
                                                                        {service.badge}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="text-[11px] xl:text-xs text-gray-500 leading-relaxed line-clamp-2">
                                                                {service.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-5 xl:p-7 bg-gradient-to-br from-teal-50/50 via-white to-white border-b xl:border-b-0 xl:border-l border-gray-100">
                                        <div className="flex items-center gap-3 mb-4 xl:mb-5">
                                            <div className="w-1 h-8 xl:h-10 bg-gradient-to-b from-teal-600 to-teal-400 rounded-full"></div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-base xl:text-lg leading-tight">التسويق الرقمي</h3>
                                                <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 font-medium">
                                                    {services.marketing.length} خدمات متاحة
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-1 xl:space-y-1.5">
                                            {services.marketing.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    href={service.href}
                                                    className="block px-3 xl:px-4 py-2.5 xl:py-3.5 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                                                    role="menuitem"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-teal-500/0 group-hover/item:from-teal-500/5 group-hover/item:to-emerald-500/5 transition-all duration-300"></div>
                                                    <div className="relative flex items-start gap-2 xl:gap-3">
                                                        <div className="text-teal-600 group-hover/item:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                                                            <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="font-bold text-[13px] xl:text-[15px] text-gray-900 group-hover/item:text-teal-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-0.5 xl:mb-1">
                                                                <span className="line-clamp-1">{service.name}</span>
                                                                {service.badge && (
                                                                    <span className="text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full font-bold flex-shrink-0">
                                                                        {service.badge}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="text-[11px] xl:text-xs text-gray-500 leading-relaxed line-clamp-2">
                                                                {service.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-5 xl:p-7 bg-gradient-to-br from-emerald-50/50 via-white to-white">
                                        <div className="flex items-center gap-3 mb-4 xl:mb-5">
                                            <div className="w-1 h-8 xl:h-10 bg-gradient-to-b from-emerald-600 to-teal-400 rounded-full"></div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-base xl:text-lg leading-tight">التصميم</h3>
                                                <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 font-medium">
                                                    {services.design.length} خدمة متاحة
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-1 xl:space-y-1.5 mb-4 xl:mb-6">
                                            {services.design.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    href={service.href}
                                                    className="block px-3 xl:px-4 py-2.5 xl:py-3.5 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                                                    role="menuitem"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover/item:from-emerald-500/5 group-hover/item:to-teal-500/5 transition-all duration-300"></div>
                                                    <div className="relative flex items-start gap-2 xl:gap-3">
                                                        <div className="text-emerald-600 group-hover/item:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                                                            <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="font-bold text-[13px] xl:text-[15px] text-gray-900 group-hover/item:text-emerald-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-0.5 xl:mb-1">
                                                                <span className="line-clamp-1">{service.name}</span>
                                                                {service.badge && (
                                                                    <span className="text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold flex-shrink-0">
                                                                        {service.badge}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="text-[11px] xl:text-xs text-gray-500 leading-relaxed line-clamp-2">
                                                                {service.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="mt-auto p-4 xl:p-6 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg text-white">
                                            <div className="flex items-center gap-2 mb-2 xl:mb-3">
                                                <Zap className="w-4 h-4 xl:w-5 xl:h-5" />
                                                <p className="font-bold text-sm xl:text-base leading-tight">استشارة مجانية</p>
                                            </div>
                                            <p className="text-[11px] xl:text-[13px] opacity-95 mb-3 xl:mb-4 leading-relaxed">
                                                احصل على استشارة مجانية من خبرائنا لتحديد أفضل الحلول لمشروعك
                                            </p>
                                            <Link
                                                href="/contact"
                                                className="block text-center bg-white text-emerald-600 px-4 xl:px-5 py-2.5 xl:py-3 rounded-lg text-xs xl:text-sm font-bold hover:bg-emerald-50 transition-all duration-200 shadow-md hover:shadow-lg"
                                            >
                                                تواصل معنا الآن
                                            </Link>
                                        </div>

                                        <div className="mt-3 xl:mt-4 grid grid-cols-2 gap-2 xl:gap-3">
                                            <div className="bg-white p-3 xl:p-4 rounded-xl border border-gray-100 text-center shadow-sm">
                                                <div className="text-2xl xl:text-3xl font-bold text-emerald-600 leading-none mb-1">500+</div>
                                                <div className="text-[10px] xl:text-xs text-gray-600 font-semibold">مشروع ناجح</div>
                                            </div>
                                            <div className="bg-white p-3 xl:p-4 rounded-xl border border-gray-100 text-center shadow-sm">
                                                <div className="text-2xl xl:text-3xl font-bold text-teal-600 leading-none mb-1">98%</div>
                                                <div className="text-[10px] xl:text-xs text-gray-600 font-semibold">رضا العملاء</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/pricing"
                            className="text-sm xl:text-[15px] text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold relative group py-2"
                        >
                            الأسعار
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm xl:text-[15px] text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold relative group py-2"
                        >
                            من نحن
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm xl:text-[15px] text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold relative group py-2"
                        >
                            المدونة
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm xl:text-[15px] text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold relative group py-2"
                        >
                            تواصل معنا
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                        </Link>
                    </nav>

                    <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                        <a
                            href="tel:+201022679250"
                            className="hidden md:flex items-center gap-1.5 lg:gap-2 text-gray-700 hover:text-emerald-600 transition-all duration-200 font-semibold text-sm lg:text-[15px] px-2 lg:px-3 py-2 rounded-lg hover:bg-gray-50"
                            aria-label="اتصل بنا"
                        >
                            <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span className="hidden xl:inline">اتصل بنا</span>
                        </a>

                        <a
                            href="https://wa.me/201022679250?text=مرحباً، أريد الاستفسار عن خدماتكم"
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg lg:rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-bold text-xs sm:text-sm lg:text-[15px] shadow-md hover:shadow-lg flex items-center gap-1.5 lg:gap-2 active:scale-95 min-h-[44px]"
                            aria-label="تواصل عبر واتساب"
                        >
                            <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                            <span className="hidden sm:inline">واتساب</span>
                        </a>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-gray-700 p-2 sm:p-2.5 hover:bg-gray-100 rounded-lg lg:rounded-xl transition-all duration-200 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
                            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 top-[65px] sm:top-[73px] bg-white z-40 overflow-y-auto overscroll-contain">
                        <nav
                            className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-1.5 sm:space-y-2"
                            role="navigation"
                            aria-label="القائمة المحمولة"
                        >
                            <Link
                                href="/"
                                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px] flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                الرئيسية
                            </Link>

                            <div className="space-y-1">
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px]"
                                >
                                    <span>خدماتنا</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {servicesOpen && (
                                    <div className="pr-4 sm:pr-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="py-2 space-y-3">
                                            <div>
                                                <h4 className="text-[10px] uppercase tracking-wider text-gray-400 font-bold px-4 mb-2">تطوير الويب</h4>
                                                {services.webDevelopment.map((s, i) => (
                                                    <Link key={i} href={s.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 font-medium">
                                                        {s.name}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] uppercase tracking-wider text-gray-400 font-bold px-4 mb-2">التسويق الرقمي</h4>
                                                {services.marketing.map((s, i) => (
                                                    <Link key={i} href={s.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 font-medium">
                                                        {s.name}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] uppercase tracking-wider text-gray-400 font-bold px-4 mb-2">التصميم</h4>
                                                {services.design.map((s, i) => (
                                                    <Link key={i} href={s.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 font-medium">
                                                        {s.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-1">
                                <button
                                    onClick={() => setToolsOpen(!toolsOpen)}
                                    className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px]"
                                >
                                    <span>أدوات مجانية</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${toolsOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {toolsOpen && (
                                    <div className="pr-4 sm:pr-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="py-2 grid grid-cols-1 gap-1">
                                            {tools.map((t, i) => (
                                                <Link key={i} href={t.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {t.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/pricing"
                                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px] flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                الأسعار
                            </Link>
                            <Link
                                href="/portfolio"
                                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px] flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                أعمالنا
                            </Link>
                            <Link
                                href="/about"
                                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px] flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                من نحن
                            </Link>
                            <Link
                                href="/blog"
                                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px] flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                المدونة
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98 min-h-[44px] flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                تواصل معنا
                            </Link>

                            <div className="pt-6 pb-8 px-4">
                                <a
                                    href="https://wa.me/201022679250"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    تواصل معنا مباشرة
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

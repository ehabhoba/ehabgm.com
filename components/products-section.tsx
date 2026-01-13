"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Clock, ArrowLeft, Package, Sparkles, TrendingUp, Palette, Megaphone } from "lucide-react"
import Link from "next/link"

const products = [
  // Marketing & Paid Ads Services
  {
    title: "الترويج لمنشور 30 يوم (فيسبوك)",
    description: "حملة ترويجية متكاملة لمنشورك على فيسبوك لمدة شهر كامل مع استهداف دقيق للجمهور المناسب",
    price: "6,999 جنيه",
    originalPrice: "8,999 جنيه",
    image: "/facebook-ads-templates.jpg",
    rating: 4.9,
    reviews: 127,
    category: "إعلانات ممولة",
    duration: "30 يوم",
    features: ["استهداف دقيق للجمهور", "تقارير أداء يومية", "تحسين مستمر للحملة", "دعم فني طوال المدة"],
    icon: Megaphone,
  },
  {
    title: "إعلان خرائط جوجل 30 يوم",
    description: "إنشاء وإدارة حملة إعلانية على خرائط جوجل لزيادة ظهور نشاطك التجاري للعملاء المحليين",
    price: "9,000 جنيه",
    originalPrice: "11,500 جنيه",
    image: "/seo-tools-dashboard.png",
    rating: 4.8,
    reviews: 89,
    category: "إعلانات ممولة",
    duration: "30 يوم",
    features: ["ظهور في نتائج البحث المحلية", "استهداف جغرافي دقيق", "تقارير تفصيلية", "زيادة الزيارات للموقع"],
    icon: TrendingUp,
  },
  {
    title: "إنشاء متجر إلكتروني كامل",
    description: "تصميم وبرمجة متجر إلكتروني احترافي متكامل مع بوابة دفع وإدارة المنتجات والطلبات",
    price: "6,000 جنيه",
    originalPrice: "9,000 جنيه",
    image: "/professional-business-website-template.png",
    rating: 5.0,
    reviews: 156,
    category: "تطوير مواقع",
    duration: "7-10 أيام",
    features: ["تصميم احترافي متجاوب", "بوابة دفع آمنة", "لوحة تحكم كاملة", "تدريب مجاني"],
    icon: Package,
  },
  {
    title: "الترويج لمنشور 15 يوم (فيسبوك)",
    description: "حملة ترويجية مركزة لمدة أسبوعين لزيادة التفاعل والوصول لمنشورك على فيسبوك",
    price: "2,800 جنيه",
    originalPrice: "3,500 جنيه",
    image: "/facebook-ads-templates.jpg",
    rating: 4.7,
    reviews: 203,
    category: "إعلانات ممولة",
    duration: "15 يوم",
    features: ["استهداف محدد", "تقارير أسبوعية", "تحسين الأداء", "دعم مباشر"],
    icon: Megaphone,
  },
  {
    title: "توثيق النشاط التجاري على جوجل ماب",
    description: "إنشاء وتوثيق حساب جوجل للأعمال وتفعيل نشاطك التجاري على خرائط جوجل بشكل احترافي",
    price: "2,500 جنيه",
    originalPrice: "3,500 جنيه",
    image: "/seo-tools-dashboard.png",
    rating: 4.9,
    reviews: 178,
    category: "خدمات SEO",
    duration: "2-3 أيام",
    features: ["توثيق رسمي", "تحسين الظهور المحلي", "إضافة معلومات كاملة", "ربط بالموقع والسوشيال"],
    icon: TrendingUp,
  },
  {
    title: "إعلان ممول على فيسبوك 7 أيام",
    description: "حملة إعلانية سريعة ومركزة لمدة أسبوع لتحقيق أهداف تسويقية محددة",
    price: "1,280 جنيه",
    originalPrice: "1,800 جنيه",
    image: "/facebook-ads-templates.jpg",
    rating: 4.6,
    reviews: 245,
    category: "إعلانات ممولة",
    duration: "7 أيام",
    features: ["إطلاق سريع", "استهداف فعال", "تقرير نهائي شامل", "مناسب للعروض السريعة"],
    icon: Megaphone,
  },
  {
    title: "حملة ترويجية 5 أيام (فيسبوك)",
    description: "حملة ترويجية مكثفة لمدة 5 أيام مثالية للعروض الخاصة والإطلاقات السريعة",
    price: "750 جنيه",
    originalPrice: "1,200 جنيه",
    image: "/facebook-ads-templates.jpg",
    rating: 4.5,
    reviews: 189,
    category: "إعلانات ممولة",
    duration: "5 أيام",
    features: ["مثالي للعروض القصيرة", "استهداف سريع", "تقرير يومي", "سعر اقتصادي"],
    icon: Megaphone,
  },
  {
    title: "إنشاء حسابات Meta Business",
    description: "إنشاء وإعداد حسابات مجموعة أعمال Meta الاحترافية لاستقبال العملاء وإدارة الإعلانات",
    price: "250 جنيه",
    originalPrice: "500 جنيه",
    image: "/social-media-design-templates-bundle.jpg",
    rating: 4.8,
    reviews: 312,
    category: "إعداد حسابات",
    duration: "1-2 يوم",
    features: ["إعداد احترافي", "ربط جميع الحسابات", "تدريب على الاستخدام", "دعم فني"],
    icon: Package,
  },

  // Graphic Design Services
  {
    title: "تصميم سيرة ذاتية احترافية",
    description: "تصميم CV احترافي وجذاب يبرز مهاراتك وخبراتك بشكل مميز ويزيد فرص قبولك",
    price: "250 جنيه",
    originalPrice: "400 جنيه",
    image: "/social-media-design-templates-bundle.jpg",
    rating: 4.9,
    reviews: 421,
    category: "تصميم جرافيك",
    duration: "1-2 يوم",
    features: ["تصميم عصري", "2 نسخة (عربي وإنجليزي)", "ملف قابل للتعديل", "مراجعات مجانية"],
    icon: Palette,
  },
  {
    title: "تصميم غلاف مجلة أو كتاب A4",
    description: "تصميم غلاف احترافي لمجلتك أو كتابك بمقاس A4 مع تصميم الوجه والظهر",
    price: "200 جنيه",
    originalPrice: "350 جنيه",
    image: "/social-media-design-templates-bundle.jpg",
    rating: 4.7,
    reviews: 167,
    category: "تصميم جرافيك",
    duration: "2-3 أيام",
    features: ["تصميم الوجه والظهر", "جودة طباعة عالية", "ملفات جاهزة للطباعة", "مراجعة مجانية"],
    icon: Palette,
  },
  {
    title: "تصميم بانر لليافطات والإعلانات",
    description: "تصميم بانر احترافي بمقاسات مختلفة مناسب للطباعة واليافطات الخارجية",
    price: "175 جنيه",
    originalPrice: "300 جنيه",
    image: "/social-media-design-templates-bundle.jpg",
    rating: 4.8,
    reviews: 289,
    category: "تصميم جرافيك",
    duration: "1-2 يوم",
    features: ["جميع المقاسات", "جودة طباعة عالية", "تصميم جذاب", "تعديلات مجانية"],
    icon: Palette,
  },
  {
    title: "تصميم ليترهيد للشركات",
    description: "تصميم ترويسة رسمية احترافية لشركتك تعكس هويتك التجارية بشكل مميز",
    price: "150 جنيه",
    originalPrice: "250 جنيه",
    image: "/social-media-design-templates-bundle.jpg",
    rating: 4.6,
    reviews: 198,
    category: "تصميم جرافيك",
    duration: "1 يوم",
    features: ["تصميم احترافي", "ملف قابل للتعديل", "جاهز للطباعة", "صيغ متعددة"],
    icon: Palette,
  },
  {
    title: "تصميم إعلان للسوشيال ميديا",
    description: "تصميم إعلان احترافي وجذاب لمنصات التواصل الاجتماعي يحقق أعلى معدلات التفاعل",
    price: "100 جنيه",
    originalPrice: "200 جنيه",
    image: "/social-media-design-templates-bundle.jpg",
    rating: 4.9,
    reviews: 567,
    category: "تصميم جرافيك",
    duration: "نفس اليوم",
    features: ["تصميم جذاب", "مقاسات جميع المنصات", "نصوص تسويقية", "تسليم سريع"],
    icon: Palette,
  },
]

export default function ProductsSection() {
  // Group products by category
  const categories = [
    { name: "إعلانات ممولة", icon: Megaphone, color: "from-blue-500 to-cyan-500" },
    { name: "تصميم جرافيك", icon: Palette, color: "from-purple-500 to-pink-500" },
    { name: "خدمات SEO", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { name: "تطوير مواقع", icon: Package, color: "from-orange-500 to-red-500" },
  ]

  return (
    <section id="products" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary/20">
            <Package className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 text-secondary animate-pulse" />
            خدمات ehabgm الاحترافية
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            خدمات <span className="gradient-text">تسويقية وتصميمية</span> متكاملة
          </h2>

          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            اكتشف باقة شاملة من الخدمات الاحترافية من منصة <strong className="text-primary">ehabgm</strong> - إعلانات
            ممولة، تصميم جرافيك، تطوير مواقع، وخدمات SEO بأسعار تنافسية للسوق المصري
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={index}
                className="group flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-card hover:bg-primary/10 border-2 border-border hover:border-primary rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-card overflow-hidden hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {product.category}
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      وفر{" "}
                      {Math.round(
                        ((Number.parseFloat(product.originalPrice.replace(/[^\d]/g, "")) -
                          Number.parseFloat(product.price.replace(/[^\d]/g, ""))) /
                          Number.parseFloat(product.originalPrice.replace(/[^\d]/g, ""))) *
                          100,
                      )}
                      %
                    </div>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {product.duration}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground mb-1 line-clamp-2 leading-tight">
                        {product.title}
                      </CardTitle>
                    </div>
                  </div>

                  <CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {product.description}
                  </CardDescription>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} تقييم)</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full ml-2 mt-1.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground text-left">
                      <div>السعر شامل</div>
                      <div>جميع المميزات</div>
                    </div>
                  </div>

                  {/* CTA Button - Updated to send WhatsApp message with service details */}
                  <Button
                    onClick={() => {
                      const message = `مرحباً، أريد طلب الخدمة التالية:\n\n📌 ${product.title}\n💰 السعر: ${product.price}\n⏱️ المدة: ${product.duration}\n\nالتفاصيل:\n${product.features.join("\n")}`
                      const whatsappUrl = `https://wa.me/201022679250?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, "_blank")
                    }}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary group-hover:shadow-lg transition-all"
                  >
                    <ShoppingCart className="w-4 h-4 ml-2" />
                    اطلب الخدمة الآن
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Store CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                هل تحتاج خدمة مخصصة؟ تواصل مع <span className="gradient-text">ehabgm</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                نقدم حلول تسويقية وتصميمية مخصصة تناسب احتياجاتك وميزانيتك - تواصل معنا الآن للحصول على استشارة مجانية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg" asChild>
                  <Link href="/contact">
                    تواصل معنا الآن
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 bg-transparent" asChild>
                  <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                    واتساب مباشر
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

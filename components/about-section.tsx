import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Eye, Heart, MapPin, Award, Users, TrendingUp, Sparkles, Zap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "رؤيتنا الرقمية",
      description: "أن نكون الوكالة الرائـدة في صـناعة النجـاح الرقمـي في مصـر والوطن العربي، من خلال تقديم حلول تتجاوز التوقعات.",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Eye,
      title: "رسالتنا الإبداعية",
      description: "تمكين الشركات من خلال استراتيجيات تسويق ذكية، تجمع بين الإبداع الفني والبيانات الدقيقة لتحقيق نمو ملموس.",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: Heart,
      title: "قيمنا الأساسية",
      description: "الشفافية المطلقة، الجودة التي لا تساوم، والالتزام العميق بتحقيق عائد حقيقي على استثمارات عملائنا.",
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
  ]

  const achievements = [
    { icon: Award, number: "+100", label: "مشروع متكامل", color: "text-emerald-600" },
    { icon: Users, number: "+300", label: "عميل سعيد", color: "text-teal-600" },
    { icon: TrendingUp, number: "10+", label: "سنوات خبرة", color: "text-blue-600" },
    { icon: Zap, number: "24/7", label: "دعم فني", color: "text-amber-500" },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -skew-x-6 transform origin-top translate-x-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 items-center">
          {/* Content Section */}
          <div className="space-y-10 sm:space-y-12">
            <ScrollReveal>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-black mb-6 border border-emerald-100">
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                قصتنا وهويتنا
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                <span className="text-emerald-600">ehabgm</span> – حيث يلتقي
                <br />
                الإبداع بالنتائج الحقيقية
              </h2>

              <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  نحن وكالة تسويق رقمية رائدة متجذرة في قلب <strong className="text-gray-900 font-black">حلوان – القاهرة</strong>. منذ انطلاقنا، كرسنا أنفسنا لمهمة واحدة: دفع الشركات للنمو في العصر الرقمي.
                </p>

                <p className="opacity-80">
                  نحن لا نقدم مجرد خدمات، بل نبني <strong className="text-emerald-600">شراكات نجاح</strong>. نجمع بين أحدث تقنيات البرمجيات وأذكى استراتيجيات الإعلان لنخلق لعلامتك التجارية حضوراً لا ينسى.
                </p>
              </div>
            </ScrollReveal>

            {/* Why Choose Us */}
            <ScrollReveal delay={200}>
              <div className="bg-gray-50 rounded-[2.5rem] p-8 sm:p-10 border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 transition-all duration-300 group-hover:w-4"></div>
                <h3 className="text-2xl font-black text-gray-900 mb-8">لماذا يثق بنا كبار العملاء؟</h3>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    "تحقيق عائد حقيقي على الاستثمار",
                    "دعم فني متخصص على مدار الساعة",
                    "تقارير أداء دورية في منتهى الوضوح",
                    "حلول مخصصة تناسب أهدافك تماماً",
                    "خبرة معمقة في السوق المصري والخليجي",
                    "فريق تقني وإبداعي على أعلى مستوى",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-bold text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Achievements Mini Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 border-t border-gray-100 pt-10">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center sm:text-right group">
                    <achievement.icon className={`w-8 h-8 ${achievement.color} mb-3 group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-extrabold uppercase tracking-wider">{achievement.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Visual/Value Cards Section */}
          <div className="space-y-8 relative">
            {/* Values Cards */}
            <div className="space-y-6 sm:space-y-8 z-10 relative">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <Card className="border-0 bg-white/80 backdrop-blur-md shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 rounded-[2rem] overflow-hidden group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-black/5`}>
                          <value.icon className={`w-7 h-7 ${value.color}`} />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed font-bold text-sm sm:text-base">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Location/Team Visual */}
            <ScrollReveal delay={600}>
              <div className="relative mt-12 group overflow-hidden rounded-[2.5rem] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img
                  src="/images/design-mode/office.jpg"
                  alt="مقر ehabgm - حلوان، القاهرة"
                  className="w-full h-72 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200';
                  }}
                />

                <div className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-emerald-100 font-bold">تفضل بزيارتنا في</p>
                      <p className="text-sm sm:text-base font-black text-white">حلوان، القاهرة - مصر</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Floating elements */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import {
  Award,
  Sparkles,
  ArrowLeft,
  Play,
  TrendingUp,
  Users,
  CheckCircle,
  X,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50/30"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-100/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-teal-100/50 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Content */}
          <ScrollReveal>
            <div className="space-y-6 sm:space-y-8 text-right sm:text-right">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-50 rounded-full text-emerald-700 text-xs sm:text-sm font-bold border border-emerald-100 shadow-sm transition-transform hover:scale-105 duration-300">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 text-emerald-600" />
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1 text-teal-500 animate-pulse" />
                  <span>الوكالة الرقمية الأولى في مصر</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 leading-[1.2] sm:leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ehabgm</span> - منصتك الشاملة
                  <br />
                  <span className="relative inline-block mt-2">
                    للتسويق والمنتجات الرقمية
                    <div className="absolute -bottom-2 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60"></div>
                  </span>
                </h1>

                <div className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
                  <p className="mb-3">
                    <strong className="text-emerald-600">ehabgm</strong> - وكالة متخصصة تجمع بين الإبداع التقني
                    والحلول التسويقية الذكية لمساعدة علامتك التجارية على النمو.
                  </p>
                  <p className="text-sm sm:text-base opacity-80">نحول أفكارك إلى واقع رقمي ملموس من خلال خبرتنا الواسعة.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  variant="gradient"
                  className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto rounded-xl sm:rounded-2xl group w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ابدأ مشروعك الآن
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-8 py-6 sm:py-7 h-auto rounded-xl sm:rounded-2xl border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all font-bold w-full sm:w-auto flex items-center justify-center gap-2"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="w-5 h-5 fill-emerald-600" />
                  شاهد أعمالنا
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-8 pt-6 border-t border-emerald-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-xl font-black text-gray-900">+500</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold">مشروع ناجح</p>
                </div>
                <div className="space-y-1 border-x border-emerald-50 px-2 sm:px-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-xl font-black text-gray-900">+300</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold">عميل سعيد</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-xl font-black text-gray-900">10+</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold">سنوات خبرة</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Image/Visual Section */}
          <ScrollReveal delay={300}>
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>

              <div className="relative bg-white/40 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-10 border border-white/50 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center space-y-6 sm:space-y-8">
                  {/* Logo */}
                  <div className="w-32 h-32 sm:w-44 sm:h-44 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl animate-ping opacity-20"></div>
                    <img
                      src="/images/design-mode/logo.png"
                      alt="شعار ehabgm"
                      className="w-24 h-24 sm:w-36 sm:h-36 object-contain relative z-10"
                    />
                  </div>

                  <div>
                    <h2 className="text-4xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-2">ehabgm</h2>
                    <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
                    <p className="text-sm sm:text-base text-gray-600 font-bold max-w-xs mx-auto leading-relaxed">
                      نحن نبني مستقبلاً رقمياً أفضل لعلامتك التجارية
                    </p>
                  </div>

                  {/* Floating stats badges */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50 flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 font-bold">بسرعة</div>
                        <div className="text-sm sm:text-base font-black text-gray-900">البرق</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-50 flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 font-bold">بأعلى</div>
                        <div className="text-sm sm:text-base font-black text-gray-900">جودة</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white p-3 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                <div className="flex -space-x-3 rtl:space-x-reverse">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-400 font-bold">موثوق من</div>
                  <div className="text-xs font-black text-gray-900">+100 عميل</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-gray-900/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden ring-4 ring-white/10"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/80 rounded-full transition-all text-white scale-90 sm:scale-100"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}


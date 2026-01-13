"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "الرئيسية", nameEn: "Home", href: "/" },
    {
      name: "من نحن",
      nameEn: "About",
      href: "#about",
      dropdown: [
        { name: "قصتنا", nameEn: "Our Story", href: "#our-story" },
        { name: "رؤيتنا ورسالتنا", nameEn: "Vision & Mission", href: "#vision-mission" },
        { name: "فريق العمل", nameEn: "Team", href: "#team" },
        { name: "شركاؤنا", nameEn: "Partners", href: "#partners" },
      ],
    },
    {
      name: "البرمجة والتطوير",
      nameEn: "Development",
      href: "#development",
      dropdown: [
        { name: "تصميم موقع إلكتروني", nameEn: "Website Design", href: "/website-design" },
        { name: "تصميم متجر إلكتروني", nameEn: "E-commerce", href: "/ecommerce" },
        { name: "تصميم جريدة إلكترونية", nameEn: "News Website", href: "/news-website" },
        { name: "تصميم موقع مبوبة إعلانية", nameEn: "Classifieds", href: "/classified-ads" },
        { name: "تطوير تطبيقات الموبايل", nameEn: "Mobile Apps", href: "/mobile-apps" },
        { name: "أنظمة إدارة المحتوى", nameEn: "CMS", href: "/cms" },
        { name: "حلول برمجية مخصصة", nameEn: "Custom Solutions", href: "/custom-solutions" },
      ],
    },
    {
      name: "التسويق الإلكتروني",
      nameEn: "Digital Marketing",
      href: "#digital-marketing",
      dropdown: [
        { name: "إدارة حملات السوشيال ميديا", nameEn: "Social Media", href: "/social-media" },
        { name: "تحسين محركات البحث (SEO)", nameEn: "SEO", href: "/seo" },
        { name: "الإعلانات الممولة", nameEn: "Paid Ads", href: "/paid-ads" },
        { name: "التسويق عبر البريد الإلكتروني", nameEn: "Email Marketing", href: "/email-marketing" },
        { name: "التسويق بالمحتوى", nameEn: "Content Marketing", href: "/content-marketing" },
        { name: "إدارة فيسبوك وانستجرام", nameEn: "Facebook & Instagram", href: "/facebook-instagram" },
        { name: "إدارة تيك توك ويوتيوب", nameEn: "TikTok & YouTube", href: "/tiktok-youtube" },
        { name: "إدارة تويتر ولينكد إن", nameEn: "Twitter & LinkedIn", href: "/twitter-linkedin" },
      ],
    },
    {
      name: "تصميم الجرافيك",
      nameEn: "Graphic Design",
      href: "#graphic-design",
      dropdown: [
        { name: "تصميم الهوية البصرية", nameEn: "Brand Identity", href: "/brand-identity" },
        { name: "تصميم بروفايل الشركات", nameEn: "Company Profile", href: "/company-profile" },
        { name: "تصميمات سوشيال ميديا", nameEn: "Social Designs", href: "/social-designs" },
        { name: "تصميم المطبوعات والإعلانات", nameEn: "Print Design", href: "/print-design" },
      ],
    },
    {
      name: "حلول الأعمال",
      nameEn: "Business Solutions",
      href: "#business-solutions",
      dropdown: [
        { name: "الاستشارات التسويقية", nameEn: "Marketing Consulting", href: "/marketing-consulting" },
        { name: "خطط النمو وزيادة المبيعات", nameEn: "Growth Plans", href: "/growth-plans" },
        { name: "التحول الرقمي للشركات", nameEn: "Digital Transformation", href: "/digital-transformation" },
        { name: "الأتمتة وتحسين العمليات", nameEn: "Automation", href: "/automation" },
      ],
    },
    { name: "سابقة الأعمال", nameEn: "Portfolio", href: "#portfolio" },
    { name: "المدونة", nameEn: "Blog", href: "#blog" },
    { name: "الأسعار", nameEn: "Pricing", href: "/pricing" },
    { name: "الأسئلة الشائعة", nameEn: "FAQ", href: "#faq" },
    { name: "تواصل معنا", nameEn: "Contact", href: "#contact" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 touch-manipulation">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform active:scale-95">
              <Image
                src="/images/design-mode/logo.png"
                alt="ehabgm Logo - إيهاب جرافيك"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">ehabgm</h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground hidden xs:block">
                إيهاب جرافيك | Digital Marketing
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-foreground hover:text-primary transition-colors duration-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      {item.name}
                      <Icons.ChevronDown className="w-4 h-4 mr-1" />
                    </button>
                    <div
                      className={`absolute top-full right-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg transition-all duration-200 ${
                        activeDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="text-foreground hover:text-primary transition-colors duration-200">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                <Icons.Phone className="w-4 h-4 ml-2" />
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-3 hover:bg-muted rounded-xl transition-all active:scale-95 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40 top-[60px]"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            {/* Menu */}
            <nav className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-background z-50 overflow-y-auto overscroll-contain animate-in slide-in-from-top-2 duration-300 pb-safe">
              <div className="flex flex-col space-y-1 p-4 pb-32">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation min-h-[52px]"
                          onClick={() => handleDropdownToggle(item.name)}
                        >
                          <div className="flex flex-col items-start">
                            <span>{item.name}</span>
                            <span className="text-xs text-muted-foreground">{item.nameEn}</span>
                          </div>
                          <Icons.ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pr-4 space-y-1 mt-1 mb-2 animate-in slide-in-from-top-1 duration-200">
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-3 px-4 rounded-lg touch-manipulation min-h-[44px] flex flex-col justify-center"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <span>{subItem.name}</span>
                                <span className="text-xs opacity-70">{subItem.nameEn}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation min-h-[52px]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex flex-col">
                          <span>{item.name}</span>
                          <span className="text-xs text-muted-foreground">{item.nameEn}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 active:scale-95 w-full mt-6 h-14 text-base font-bold shadow-lg touch-manipulation transition-transform"
                >
                  <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                    <Icons.Phone className="w-5 h-5 ml-2" />
                    احجز استشارتك المجانية
                  </Link>
                </Button>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

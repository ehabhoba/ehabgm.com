"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, Trash2, Copy, CheckCircle, Code, Eye, Monitor, Smartphone, Tablet } from "lucide-react"
import JSZip from "jszip"
import { saveAs } from "file-saver"
import { Button } from "@/components/ui/button"

interface GeneratedFile {
  path: string
  content: string
}

interface SavedWebsite {
  id: string
  businessName: string
  businessType: string
  description: string
  colors: string
  pages: string[]
  files: GeneratedFile[]
  createdAt: string
  certificateId: string
}

export default function AIWebsiteBuilderClient() {
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [description, setDescription] = useState("")
  const [colors, setColors] = useState("#3B82F6")
  const [pages, setPages] = useState<string[]>(["home"])
  const [generating, setGenerating] = useState(false)
  const [websiteGenerated, setWebsiteGenerated] = useState(false)
  const [certificateId, setCertificateId] = useState("")
  const [files, setFiles] = useState<GeneratedFile[]>([])
  const [savedWebsites, setSavedWebsites] = useState<SavedWebsite[]>([])
  const [sequenceNumber, setSequenceNumber] = useState(1)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("savedWebsites")
    if (saved) {
      const websites = JSON.parse(saved)
      setSavedWebsites(websites)
      setSequenceNumber(websites.length + 1)
    }
  }, [])

  const autoSaveWebsite = (website: SavedWebsite) => {
    const updated = [...savedWebsites, website]
    setSavedWebsites(updated)
    localStorage.setItem("savedWebsites", JSON.stringify(updated))
    setSequenceNumber(updated.length + 1)
  }

  const pageOptions = [
    { value: "home", label: "الصفحة الرئيسية" },
    { value: "about", label: "من نحن" },
    { value: "services", label: "الخدمات" },
    { value: "portfolio", label: "أعمالنا" },
    { value: "contact", label: "تواصل معنا" },
    { value: "blog", label: "المدونة" },
  ]

  const togglePage = (page: string) => {
    if (pages.includes(page)) {
      setPages(pages.filter((p) => p !== page))
    } else {
      setPages([...pages, page])
    }
  }

  const generateWebsite = async () => {
    if (!businessName || !businessType || !description) return

    setGenerating(true)
    setWebsiteGenerated(false)
    setFiles([])

    try {
      const response = await fetch("/api/generate-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          businessType,
          description,
          colors: [colors],
          pages: pages.map((p) => pageOptions.find((opt) => opt.value === p)?.label || p),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setWebsiteGenerated(true)
        setCertificateId(data.certificateId)
        setFiles(data.files)
        setSelectedFile(data.files[0]?.path || null)

        const newWebsite: SavedWebsite = {
          id: `website-${sequenceNumber}-${Date.now()}`,
          businessName,
          businessType,
          description,
          colors,
          pages,
          files: data.files,
          createdAt: new Date().toISOString(),
          certificateId: data.certificateId,
        }
        autoSaveWebsite(newWebsite)
      } else {
        alert(`حدث خطأ: ${data.error}`)
      }
    } catch (error) {
      console.error("[v0] Error generating website:", error)
      alert("حدث خطأ أثناء إنشاء الموقع. يرجى المحاولة مرة أخرى.")
    } finally {
      setGenerating(false)
    }
  }

  const downloadZip = async () => {
    if (files.length === 0) return

    const zip = new JSZip()
    files.forEach((file) => {
      zip.file(file.path, file.content)
    })

    const content = await zip.generateAsync({ type: "blob" })
    saveAs(content, `${businessName.replace(/\s+/g, "-")}-website.zip`)
  }

  const deleteWebsite = (id: string) => {
    const updated = savedWebsites.filter((w) => w.id !== id)
    setSavedWebsites(updated)
    localStorage.setItem("savedWebsites", JSON.stringify(updated))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            تحديث جديد: يدعم التحميل المباشر
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">منشئ المواقع بالذكاء الاصطناعي</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            أنشئ موقعك الإلكتروني كاملاً مع الأكواد المصدرية في دقائق
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Input Section (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card rounded-2xl shadow-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">بيانات المشروع</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">اسم المشروع</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="مثال: مطعم الأهرام"
                    className="w-full px-3 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">نوع النشاط</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                  >
                    <option value="">اختر النوع</option>
                    <option value="restaurant">مطعم</option>
                    <option value="corporate">شركة</option>
                    <option value="ecommerce">متجر إلكتروني</option>
                    <option value="portfolio">معرض أعمال</option>
                    <option value="landing">صفحة هبوط</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">الوصف</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="وصف مختصر للمشروع وما يقدمه..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">اللون الرئيسي</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={colors}
                      onChange={(e) => setColors(e.target.value)}
                      className="h-10 w-16 rounded cursor-pointer border"
                    />
                    <div className="flex-1 bg-muted rounded flex items-center px-3 font-mono text-sm">
                      {colors}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">الصفحات</label>
                  <div className="flex flex-wrap gap-2">
                    {pageOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => togglePage(opt.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${pages.includes(opt.value)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted hover:bg-muted/80 border-transparent text-muted-foreground"
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={generateWebsite}
                  disabled={!businessName || !businessType || !description || generating}
                  className="w-full py-6 text-lg"
                >
                  {generating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      جاري البناء...
                    </div>
                  ) : (
                    "بناء الموقع الآن"
                  )}
                </Button>
              </div>
            </div>

            {/* Saved Websites List */}
            {savedWebsites.length > 0 && (
              <div className="bg-card rounded-2xl shadow-sm p-6 border border-border">
                <h3 className="font-bold mb-4">المشاريع السابقة</h3>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {savedWebsites.map((w) => (
                    <div key={w.id} className="p-3 rounded-lg bg-muted/50 border flex justify-between items-center group">
                      <div>
                        <p className="font-medium text-sm">{w.businessName}</p>
                        <p className="text-xs text-muted-foreground">{new Date(w.createdAt).toLocaleDateString("ar-EG")}</p>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            setFiles(w.files)
                            setBusinessName(w.businessName)
                            setWebsiteGenerated(true)
                            setCertificateId(w.certificateId)
                          }}
                          className="p-1.5 hover:bg-primary/10 text-primary rounded"
                          title="تحميل"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteWebsite(w.id)}
                          className="p-1.5 hover:bg-destructive/10 text-destructive rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Output Section (8 columns) */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl shadow-xl min-h-[600px] border border-border flex flex-col">
              {!websiteGenerated ? (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6">
                    {generating ? (
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Code className="w-10 h-10 opacity-50" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {generating ? "يقوم الذكاء الاصطناعي بكتابة الأكواد..." : "جاهز للبدء"}
                  </h3>
                  <p className="max-w-md mx-auto">
                    {generating
                      ? "جاري إنشاء هيكل المشروع، وكتابة ملفات React، وتنسيق CSS..."
                      : "املأ البيانات واضغط على زر الإنشاء لتبدأ رحلة موقعك الجديد"}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-full h-[800px]">
                  {/* Toolbar */}
                  <div className="border-b px-4 py-3 flex items-center justify-between bg-muted/20">
                    <div className="flex items-center gap-2 bg-background p-1 rounded-lg border">
                      <button
                        onClick={() => setActiveTab("preview")}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === "preview" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>معاينة حية</span>
                        </div>
                      </button>
                      <button
                        onClick={() => setActiveTab("code")}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === "code" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          <span>الأكواد المصدرية</span>
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full text-xs font-mono border border-green-500/20 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3" />
                        Generated Successfully
                      </div>
                      <Button onClick={downloadZip} variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        تحميل ZIP
                      </Button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 flex overflow-hidden">
                    {/* File Explorer (Visible always or just in code mode? Let's keep it in both for context) */}
                    <div className="w-64 border-l bg-muted/10 flex flex-col">
                      <div className="p-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">Project Files</div>
                      <div className="flex-1 overflow-y-auto">
                        {files.map((file) => (
                          <button
                            key={file.path}
                            onClick={() => setSelectedFile(file.path)}
                            className={`w-full text-right px-4 py-2 text-sm font-mono truncate hover:bg-muted transition-colors ${selectedFile === file.path ? "bg-primary/10 text-primary border-r-2 border-primary" : "text-foreground/80"
                              }`}
                          >
                            {file.path}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Main View */}
                    <div className="flex-1 bg-background overflow-hidden flex flex-col">
                      {activeTab === "code" ? (
                        <div className="flex-1 overflow-auto p-4">
                          <pre className="text-sm font-mono bg-slate-950 text-slate-50 p-4 rounded-lg min-h-full">
                            <code>{files.find((f) => f.path === selectedFile)?.content || "// Select a file"}</code>
                          </pre>
                        </div>
                      ) : (
                        <div className="flex-1 flex flex-col bg-slate-100 dark:bg-slate-900">
                          {/* Device Toolbar */}
                          <div className="flex justify-center p-2 gap-2 border-b bg-background">
                            <button onClick={() => setPreviewDevice("desktop")} className={`p-2 rounded ${previewDevice === "desktop" ? "bg-muted" : ""}`}><Monitor className="w-4 h-4" /></button>
                            <button onClick={() => setPreviewDevice("tablet")} className={`p-2 rounded ${previewDevice === "tablet" ? "bg-muted" : ""}`}><Tablet className="w-4 h-4" /></button>
                            <button onClick={() => setPreviewDevice("mobile")} className={`p-2 rounded ${previewDevice === "mobile" ? "bg-muted" : ""}`}><Smartphone className="w-4 h-4" /></button>
                          </div>

                          {/* Disclaimer for Preview */}
                          <div className="flex-1 flex items-center justify-center p-8 text-center">
                            <div className="max-w-md space-y-4">
                              <p className="text-muted-foreground">
                                ملاحظة: هذه المعاينة تقريبية. للحصول على التجربة الكاملة، قم بتحميل المشروع وتشغيله على جهازك.
                              </p>
                              <div className="bg-card p-4 rounded border text-left font-mono text-sm" dir="ltr">
                                npm install<br />
                                npm run dev
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

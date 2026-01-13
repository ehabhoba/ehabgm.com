"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"

interface GalleryItem {
    src: string
    alt: string
    category: string
}

const CATEGORIES = [
    { id: "all", label: "الكل" },
    { id: "logo", label: "شعارات" },
    { id: "branding", label: "هوية بصرية" },
    { id: "social", label: "سوشيال ميديا" },
    { id: "web", label: "مواقع إلكترونية" },
]

// Simple heuristic to categorize images based on filename
const categorize = (filename: string): string => {
    const lower = filename.toLowerCase()
    if (lower.includes("logo")) return "logo"
    if (lower.includes("brand") || lower.includes("identity")) return "branding"
    if (lower.includes("social") || lower.includes("post") || lower.includes("ads")) return "social"
    if (lower.includes("web") || lower.includes("site") || lower.includes("cms")) return "web"
    return "other"
}

export function SmartGallery({ images }: { images: string[] }) {
    const [filter, setFilter] = useState("all")
    const [search, setSearch] = useState("")

    const items: GalleryItem[] = images.map((img) => ({
        src: img.startsWith("/") ? img : `/${img}`,
        alt: img.split("/").pop()?.replace(/[-_]/g, " ").replace(/\.\w+$/, "") || "صورة معرض",
        category: categorize(img),
    }))

    const filteredItems = items.filter((item) => {
        const matchesFilter = filter === "all" || item.category === filter
        const matchesSearch = item.alt.toLowerCase().includes(search.toLowerCase())
        return matchesFilter && matchesSearch
    })

    return (
        <div className="space-y-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-xl border shadow-sm">
                <div className="flex flex-wrap gap-2 justify-center">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.id
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="بحث في الأعمال..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pr-10 pl-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                </div>
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredItems.map((item, idx) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={item.src}
                            className="group relative aspect-video bg-muted rounded-xl overflow-hidden border shadow-sm hover:shadow-xl transition-all"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-bold text-lg truncate">{item.alt}</p>
                                <p className="text-white/80 text-sm">{CATEGORIES.find(c => c.id === item.category)?.label || "أخرى"}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    <p>لا توجد نتائج مطابقة لبحثك</p>
                </div>
            )}
        </div>
    )
}

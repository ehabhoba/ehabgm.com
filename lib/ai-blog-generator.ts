import { generateText } from "ai"
import { blogKeywords } from "./blog-keywords"

export async function generateBlogPost(category: string, keyword: string) {
  try {
    const categoryData = blogKeywords[category as keyof typeof blogKeywords]

    const prompt = `
أنت كاتب محتوى متخصص في التسويق الرقمي والتصميم الجرافيكي. اكتب مقالة بلوج احترافية وفريدة عن: "${keyword}"

المتطلبات:
- العنوان: جذاب وفريد ويحتوي على الكلمة المفتاحية (2025-2026)
- المحتوى: 800-1000 كلمة
- الأسلوب: احترافي وسهل الفهم مع نصائح عملية
- تضمين: فوائد حقيقية وأمثلة عملية
- الخاتمة: دعوة للعمل مع ehabgm - مصمم جرافيك محترف في حلوان يعمل أونلاين
- SEO: تضمين الكلمات المفتاحية بشكل طبيعي

الصيغة (JSON):
{
  "title": "العنوان",
  "slug": "slug-بالإنجليزية",
  "excerpt": "ملخص قصير",
  "content": "المحتوى الكامل",
  "keywords": ["كلمة1", "كلمة2", "كلمة3"],
  "category": "${category}",
  "author": "ehabgm",
  "readTime": "8-12",
  "year": "2025"
}
    `

    const { text } = await generateText({
      model: "google/gemini-2.0-flash",
      prompt,
      temperature: 0.7,
      maxTokens: 2000,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("[v0] Error generating blog post:", error)
    throw error
  }
}

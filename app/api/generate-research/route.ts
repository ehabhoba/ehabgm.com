
import { type NextRequest, NextResponse } from "next/server"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: NextRequest) {
  try {
    const { topic, pages, level, language } = await request.json()

    if (!topic) {
      return NextResponse.json({ error: "موضوع البحث مطلوب" }, { status: 400 })
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
    })

    const prompt = `
      أنت مساعد أكاديمي متخصص. قم بإعداد بحث أكاديمي متكامل حول موضوع: "${topic}".
      
      المواصفات المطلوبة:
      - عدد الصفحات التقريبي: ${pages}
      - المستوى الأكاديمي: ${level}
      - لغة البحث: ${language}
      
      هيكل البحث يجب أن يتضمن:
      1. عنوان البحث (جذاب واحترافي)
      2. مقدمة شاملة
      3. عدة فصول أو مباحث رئيسية تغطي الموضوع من جوانب مختلفة
      4. خاتمة تلخص النتائج
      5. قائمة المراجع (وهمية ولكن تبدو واقعية)
      
      التنسيق:
      - استخدم Markdown لتنسيق العناوين والفقرات.
      - كن موضوعياً وعلمياً في الطرح.
      - إذا كان المستوى "جامعي" أو أعلى، استخدم مصطلحات تخصصية.
    `

    const { text } = await generateText({
      model: google("gemini-2.0-flash-exp"),
      prompt,
      maxTokens: 3000,
    })

    return NextResponse.json({ research: text })
  } catch (error) {
    console.error("Research generation error:", error)
    return NextResponse.json(
      { error: "حدث خطأ أثناء توليد البحث. يرجى المحاولة لاحقاً." },
      { status: 500 }
    )
  }
}

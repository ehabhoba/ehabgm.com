import { type NextRequest, NextResponse } from "next/server"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { generateText } from "ai"
import { supabase } from "@/lib/supabase"
import { SERVICES, GOVERNORATES } from "@/lib/geo-data"

export async function POST(request: NextRequest) {
  try {
    const { message, history, userId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "الرسالة مطلوبة" }, { status: 400 })
    }

    // 1. Save User Message to Supabase
    if (userId) {
      await supabase.from('messages').insert({
        content: message,
        sender: 'user',
        user_id: userId,
        created_at: new Date().toISOString()
      })
    }

    // 2. Prepare Context from Geo Data
    const servicesList = SERVICES.map(s => `- ${s.nameAr}:تبدأ من ${s.descriptionAr}`).join('\n')

    // 3. Construct Prompt
    const conversationHistory = history
      ?.map((msg: any) => `${msg.type === "user" ? "المستخدم" : "المساعد"}: ${msg.content}`)
      .join("\n")

    const prompt = `أنت مساعد ذكي لشركة ehabgm المتخصصة في التسويق الرقمي وتصميم المواقع في مصر.

معلومات الخدمات الحقيقية:
${servicesList}

أسعار تقريبية (للاسترشاد):
- تصميم المواقع: يبدأ من 4000 جنيه
- المتاجر الإلكترونية: تبدأ من 8000 جنيه
- إدارة السوشيال ميديا: باقات تبدأ من 2500 جنيه شهرياً

تعليمات:
- كن ودوداً ومحترفاً.
- تحدث باللهجة المصرية الراقية أو العربية الفصحى المبسطة.
- هدفك هو إقناع العميل بطلب الخدمة أو حجز استشارة.
- لا تخترع خدمات غير موجودة.

${conversationHistory ? `المحادثة السابقة:\n${conversationHistory}\n` : ""}

المستخدم: ${message}

الرد:`

    // 4. Generate AI Response
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const { text } = await generateText({
      model: google("gemini-2.0-flash-exp"),
      prompt,
      maxTokens: 500,
    })

    // 5. Save Bot Response to Supabase
    if (userId) {
      await supabase.from('messages').insert({
        content: text,
        sender: 'bot',
        user_id: userId,
        created_at: new Date().toISOString()
      })
    }

    return NextResponse.json({
      response: text,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[Chat API] Error:", error)
    return NextResponse.json(
      {
        response: "عذراً، حدث خطأ مؤقت. ممكن تكلمنا واتساب؟ 01022679250",
      },
      { status: 500 },
    )
  }
}

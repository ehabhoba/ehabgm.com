export async function POST(request: NextRequest) {
  try {
    const { businessName, businessType, description, colors, pages } = await request.json()

    if (!businessName || !businessType) {
      return NextResponse.json({ error: "اسم ونوع العمل مطلوبان" }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "لم يتم تكوين مفتاح API. يرجى إضافة GOOGLE_API_KEY في إعدادات المشروع.",
          needsSetup: true,
        },
        { status: 503 },
      )
    }

    const { generateText } = await import("ai")

    const systemPrompt = `You are an expert Full Stack Web Developer.
Your task is to generate a complete, functional Next.js 14 application based on the user's description.
Output strictly valid JSON. The JSON structure must be:
{
  "files": [
    {
      "path": "app/page.tsx",
      "content": "..."
    },
    {
      "path": "components/header.tsx",
      "content": "..."
    }
  ]
}
Do not include any text outside the JSON object.
Use Tailwind CSS for styling.
Ensure "use client" is added where necessary (e.g., hooks, interactivity).`

    const userPrompt = `Create a website for:
Name: ${businessName}
Type: ${businessType}
Description: ${description}
Colors: ${colors.join(", ")}
Pages: ${Array.isArray(pages) ? pages.join(", ") : "Home, About, Contact"}

Requirements:
1. Use Next.js 14 App Router conventions.
2. Use "lucide-react" for icons.
3. Use Tailwind CSS with arbitrary values or standard classes (e.g. bg-[${colors[0] || '#000'}]).
4. Content must be in Arabic (Right-to-Left direction).
5. Generate the following files:
   - app/layout.tsx (Includes HTML lang="ar" dir="rtl")
   - app/page.tsx (Landing page)
   - components/navbar.tsx
   - components/footer.tsx
   - app/not-found.tsx
   ${Array.isArray(pages) ? pages.map((p: string) => `- app/${p.toLowerCase().replace(/\s+/g, '-')}/page.tsx`).join('\n') : ''}
`

    const { text } = await generateText({
      model: "google/gemini-2.0-flash-exp", // Updated to latest available or fall back
      system: systemPrompt,
      prompt: userPrompt,
      maxTokens: 8000, // Increased for full code
      temperature: 0.2, // Lower temperature for more deterministic code
    })

    // Robust JSON parsing
    let jsonResponse
    try {
      const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim()
      jsonResponse = JSON.parse(cleanText)
    } catch (e) {
      console.error("JSON Parse Error:", e)
      // Fallback: try to extract JSON if mixed with text
      const match = text.match(/\{[\s\S]*\}/)
      if (match) {
        jsonResponse = JSON.parse(match[0])
      } else {
        throw new Error("Failed to generate valid JSON structure")
      }
    }

    const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

    return NextResponse.json({
      success: true,
      files: jsonResponse.files,
      certificateId,
      metadata: {
        businessName,
        businessType,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error: any) {
    console.error("[v0] Error generating website:", error)

    if (error?.message?.includes("API key")) {
      return NextResponse.json(
        { error: "Invalid API Key", needsSetup: true },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { error: error.message || "Failed to generate website" },
      { status: 500 }
    )
  }
}

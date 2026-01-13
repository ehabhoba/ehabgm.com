
import { type NextRequest, NextResponse } from "next/server"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { generateText } from "ai"

export async function POST(request: NextRequest) {
  try {
    const { prompt: userPrompt } = await request.json()

    if (!userPrompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 })
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
    })

    const systemPrompt = `
      You are an expert web developer. Your goal is to generate modern, responsive, and beautiful HTML/Tailwind CSS code based on the user's description.
      
      User Description: "${userPrompt}"
      
      Requirements:
      - Return ONLY the HTML code. Do not include markdown backticks or explanations.
      - Use Tailwind CSS via CDN or style tags if necessary, but assume standard Tailwind classes work.
      - Make it a single file solution (internal styles/scripts if needed).
      - Ensure high aesthetic quality (premium look).
    `

    const { text } = await generateText({
      model: google("gemini-2.0-flash-exp"),
      prompt: systemPrompt,
      maxTokens: 4000, 
    })

    // Clean up code if it has backticks
    const cleanCode = text.replace(/```html/g, "").replace(/```/g, "")

    return NextResponse.json({ code: cleanCode })
  } catch (error) {
    console.error("Website builder error:", error)
    return NextResponse.json(
      { error: "Failed to generate website code." },
      { status: 500 }
    )
  }
}

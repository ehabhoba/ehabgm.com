
import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { nanoid } from "nanoid"

export async function POST(request: NextRequest) {
  try {
    const { url, custom_alias } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    let short_code = custom_alias && custom_alias.trim() !== "" ? custom_alias : nanoid(6)

    // Check if short_code exists
    const { data: existing } = await supabase
      .from('short_urls')
      .select('id')
      .or(`short_code.eq.${short_code},custom_alias.eq.${short_code}`)
      .single()

    if (existing) {
      if (custom_alias) {
        return NextResponse.json({ error: "This custom name is already taken" }, { status: 409 })
      }
      // If auto-generated collision, generate new one (simple retry)
      short_code = nanoid(6)
    }

    // Insert
    const { error } = await supabase
      .from('short_urls')
      .insert({
        original_url: url,
        short_code: short_code,
        custom_alias: custom_alias || null,
      })

    if (error) {
      console.error("Supabase error:", error)
      throw error
    }

    const shortUrl = `${request.headers.get("origin")}/s/${short_code}`
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(shortUrl)}`

    return NextResponse.json({
      shortUrl,
      originalUrl: url,
      slug: short_code,
      qrCode
    })

  } catch (error) {
    console.error("Shortener error:", error)
    return NextResponse.json(
      { error: "Failed to create short URL" },
      { status: 500 }
    )
  }
}

import { redirect, notFound } from "next/navigation"
import { supabase } from "@/lib/supabase"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function ShortUrlRedirect({ params }: PageProps) {
    const { slug } = await params

    // Fetch original URL
    const { data } = await supabase
        .from("short_urls")
        .select("original_url, clicks")
        .eq("short_code", slug)
        .single()

    if (data?.original_url) {
        // Increment clicks (fire and forget, don't await blocking)
        await supabase.from("short_urls").update({ clicks: (data.clicks || 0) + 1 }).eq("short_code", slug)

        redirect(data.original_url)
    }

    return notFound()
}

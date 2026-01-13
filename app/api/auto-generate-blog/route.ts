import { generateBlogPost } from "@/lib/ai-blog-generator"
import { blogKeywords } from "@/lib/blog-keywords"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const { category, keyword } = body

    let selectedCategory = category
    let selectedKeyword = keyword

    // If no category provided, select random one
    if (!selectedCategory) {
      const categories = Object.entries(blogKeywords)
      const [categoryKey] = categories[Math.floor(Math.random() * categories.length)]
      selectedCategory = categoryKey
    }

    const categoryData = blogKeywords[selectedCategory as keyof typeof blogKeywords]
    if (!categoryData) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 })
    }

    // If no keyword provided, select random one from category
    if (!selectedKeyword) {
      selectedKeyword = categoryData.keywords[Math.floor(Math.random() * categoryData.keywords.length)]
    }

    console.log(`[v0] Generating blog post for category: ${selectedCategory}, keyword: ${selectedKeyword}`)

    // Generate blog post using AI
    const post = await generateBlogPost(selectedCategory, selectedKeyword)

    // Add additional metadata
    const enrichedPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      views: 0,
      comments: 0,
      year: new Date().getFullYear(),
    }

    console.log("[v0] Blog post generated successfully:", enrichedPost.title)

    return NextResponse.json(
      {
        success: true,
        message: "Blog post generated successfully",
        post: enrichedPost,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error in auto-generate-blog:", error)
    return NextResponse.json({ error: "Failed to generate blog post" }, { status: 500 })
  }
}

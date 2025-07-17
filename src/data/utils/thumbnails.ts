// data/utils/thumbnails.ts
import {
  RESOURCE_CONFIGS,
  type ResourceProvider,
} from "@/data/resources-config"

/* Thumbnail retrieval logic */
export async function fetchThumbnailUrl(
  url: string,
  creator_id: ResourceProvider,
): Promise<string | null> {
  const config = RESOURCE_CONFIGS[creator_id]
  if (!config) return null

  switch (config.type) {
    case "youtube_api":
      return extractYouTubeThumbnail(url)
    case "open_graph":
      return await fetchOpenGraphImage(url)
    case "css_background":
      return await fetchCSSBackgroundImage(url)
    case "manual":
      return `/thumbnails/manual/${creator_id}.jpg`
    case "none":
    default:
      return null
  }
}

function extractYouTubeThumbnail(url: string): string | null {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
  )
  const videoId = videoIdMatch?.[1]
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null
}

async function fetchOpenGraphImage(url: string): Promise<string | null> {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const ogImageMatch = html.match(/property="og:image"[^>]*content="([^"]*)"/)
    return ogImageMatch?.[1] || null
  } catch {
    return null
  }
}

async function fetchCSSBackgroundImage(url: string): Promise<string | null> {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const bgImageMatch = html.match(
      /article-header-image[^>]*background-image:url\(([^)]*)\)/,
    )
    return bgImageMatch?.[1] || null
  } catch {
    return null
  }
}

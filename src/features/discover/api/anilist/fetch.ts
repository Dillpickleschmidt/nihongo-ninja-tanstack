import { print } from "graphql"
import { DiscoverSearch } from "./queries"
import type { DiscoverPage } from "./types"
import { generateBannerIndices } from "../../utils/banner-utils"

export type DiscoverSectionData = DiscoverPage & { bannerIndices: number[] }

interface AnizipImage {
  coverType: string
  url: string
}

export function hqImageQueryKey(anilistId: number) {
  return ["hq-image", anilistId] as const
}

export async function fetchHqImage(
  anilistId: number,
): Promise<string | null> {
  const res = await fetch(
    `https://api.ani.zip/mappings?anilist_id=${anilistId}`,
  )
  if (!res.ok) return null
  const data: { images?: AnizipImage[] } = await res.json()
  const images = data?.images ?? []
  return (
    images.find((i) => i.coverType === "Fanart")?.url ||
    images.find((i) => i.coverType === "Poster")?.url ||
    null
  )
}

export async function fetchDiscoverSection(
  variables: Record<string, unknown>,
  { withBannerIndices = false } = {},
): Promise<DiscoverSectionData> {
  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query: print(DiscoverSearch), variables }),
  })
  if (!response.ok) throw new Error(`AniList error: ${response.status}`)
  const result = await response.json()
  if (result.errors)
    throw new Error(result.errors[0]?.message || "Fetch failed")

  const page: DiscoverPage = result.data.Page
  const media = page.media?.filter(
    (m): m is NonNullable<typeof m> => m != null,
  )
  return {
    ...page,
    bannerIndices:
      withBannerIndices && media ? generateBannerIndices(media) : [],
  }
}

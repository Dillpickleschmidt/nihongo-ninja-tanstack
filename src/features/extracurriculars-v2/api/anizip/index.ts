import type { EpisodesResponse } from "./types"

export * from "./types"

/**
 * Fetch AniZip episode metadata for a given AniList ID
 * @param id AniList media ID
 * @returns Episode metadata with image information, or null if fetch fails
 */
export async function fetchEpisodes(
  id: number,
): Promise<EpisodesResponse | null> {
  try {
    const url = `https://hayase.ani.zip/v1/episodes?anilist_id=${id}`

    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) hayase/6.4.34 Chrome/140.0.7339.41 Electron/38.0.0 Safari/537.36",
        Referer: "http://localhost:7344/",
      },
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(
        "[AniZip] Failed to fetch episodes for ID",
        id,
        "- Status:",
        res.status,
        res.statusText,
      )
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(
      "[AniZip] Fetch error for ID",
      id,
      ":",
      error instanceof Error ? error.message : String(error),
    )
    return null
  }
}

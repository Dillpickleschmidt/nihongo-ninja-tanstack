/**
 * Section configuration helpers for generating Search query variables
 * Used for homepage sections with different filters and sorting
 */

export interface SectionConfig {
  type?: "popular-season" | "trending" | "all-time-popular" | "genre" // Optional for personalized sections
  title: string
  params?: { genre?: string; season?: string; year?: number } // For genre sections and seasonal sections
  queryVars?: Record<string, any> // For personalized sections (Continue Watching, etc.)
  viewMoreLink?: string
  _key?: string // Stable key for SolidJS For loop
}

export function getCurrentSeason(): {
  season: "WINTER" | "SPRING" | "SUMMER" | "FALL"
  year: number
} {
  const now = new Date()
  const month = now.getMonth() + 1
  const year = now.getFullYear()

  let season: "WINTER" | "SPRING" | "SUMMER" | "FALL"
  if (month >= 1 && month <= 3) {
    season = "WINTER"
  } else if (month >= 4 && month <= 6) {
    season = "SPRING"
  } else if (month >= 7 && month <= 9) {
    season = "SUMMER"
  } else {
    season = "FALL"
  }

  return { season, year }
}

export function getPopularSeasonConfig(
  season: string,
  year: number,
): SectionConfig {
  return {
    type: "popular-season",
    title: "Popular This Season",
    params: { season, year },
    queryVars: {
      page: 1,
      perPage: 10,
      sort: ["POPULARITY_DESC"],
      season,
      seasonYear: year,
    },
    viewMoreLink: "/explore/season",
  }
}

export function getTrendingConfig(season: string, year: number): SectionConfig {
  return {
    type: "trending",
    title: "Trending Now",
    params: { season, year },
    queryVars: {
      page: 1,
      perPage: 15,
      sort: ["POPULARITY_DESC"],
      season,
      seasonYear: year,
      statusNot: ["NOT_YET_RELEASED"],
    },
    viewMoreLink: "/explore/trending",
  }
}

export function getAllTimePopularConfig(): SectionConfig {
  return {
    type: "all-time-popular",
    title: "All Time Popular",
    queryVars: {
      page: 1,
      perPage: 10,
      sort: ["POPULARITY_DESC"],
    },
    viewMoreLink: "/explore/popular",
  }
}

export function getGenreConfig(
  genre: string,
  sort: "TRENDING_DESC" | "POPULARITY_DESC" = "TRENDING_DESC",
): SectionConfig {
  return {
    type: "genre",
    title: `${genre} Anime`,
    params: { genre },
    queryVars: {
      page: 1,
      perPage: 10,
      genre: [genre],
      sort: [sort],
    },
    viewMoreLink: `/explore/genre/${genre.toLowerCase()}`,
  }
}

export function getGenericSections(
  season: string,
  year: number,
): SectionConfig[] {
  const sections: SectionConfig[] = []
  let keyIndex = 0

  const genericConfigs = [
    getPopularSeasonConfig(season, year),
    getTrendingConfig(season, year),
    getAllTimePopularConfig(),
    getGenreConfig("Romance"),
    getGenreConfig("Action"),
    getGenreConfig("Adventure"),
    getGenreConfig("Fantasy"),
  ]

  genericConfigs.forEach((section) => {
    section._key = `generic-${keyIndex++}`
    sections.push(section)
  })

  return sections
}

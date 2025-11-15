/**
 * Section configuration helpers for generating Search query variables
 * Used for homepage sections with different filters and sorting
 */

export interface SectionConfig {
  title: string
  queryVars: Record<string, any>
  viewMoreLink?: string
}

/**
 * Get current anime season and year
 */
export function getCurrentSeason(): {
  season: string
  year: number
} {
  const now = new Date()
  const month = now.getMonth() + 1
  const year = now.getFullYear()

  let season: string
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

/**
 * Banner section: Popular anime from current season with trailers/banners
 */
export function getBannerConfig(): SectionConfig {
  const { season, year } = getCurrentSeason()
  return {
    title: "Featured",
    queryVars: {
      page: 1,
      perPage: 15,
      sort: ["POPULARITY_DESC"],
      season,
      seasonYear: year,
      statusNot: ["NOT_YET_RELEASED"],
    },
  }
}

/**
 * Popular This Season section
 */
export function getPopularSeasonConfig(): SectionConfig {
  const { season, year } = getCurrentSeason()
  return {
    title: "Popular This Season",
    queryVars: {
      page: 1,
      perPage: 10,
      sort: ["POPULARITY_DESC"],
      season,
      seasonYear: year,
    },
    viewMoreLink: "/extracurriculars-v2/season",
  }
}

/**
 * Trending Now section
 */
export function getTrendingConfig(): SectionConfig {
  return {
    title: "Trending Now",
    queryVars: {
      page: 1,
      perPage: 10,
      sort: ["TRENDING_DESC"],
    },
    viewMoreLink: "/extracurriculars-v2/trending",
  }
}

/**
 * All Time Popular section
 */
export function getAllTimePopularConfig(): SectionConfig {
  return {
    title: "All Time Popular",
    queryVars: {
      page: 1,
      perPage: 10,
      sort: ["POPULARITY_DESC"],
    },
    viewMoreLink: "/extracurriculars-v2/popular",
  }
}

/**
 * Genre section factory
 */
export function getGenreConfig(
  genre: string,
  sort: "TRENDING_DESC" | "POPULARITY_DESC" = "TRENDING_DESC",
): SectionConfig {
  return {
    title: `${genre} Anime`,
    queryVars: {
      page: 1,
      perPage: 10,
      genre: [genre],
      sort: [sort],
    },
    viewMoreLink: `/extracurriculars-v2/genre/${genre.toLowerCase()}`,
  }
}

/**
 * All homepage sections in order
 */
export function getHomepageSections() {
  return [
    getBannerConfig(),
    getPopularSeasonConfig(),
    getTrendingConfig(),
    getAllTimePopularConfig(),
    getGenreConfig("Romance"),
    getGenreConfig("Action"),
    getGenreConfig("Adventure"),
    getGenreConfig("Fantasy"),
  ]
}

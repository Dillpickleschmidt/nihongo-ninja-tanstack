/**
 * Section configuration helpers for generating Search query variables
 * Used for homepage sections with different filters and sorting
 */

import type { UserListIDs } from "./id-extractors"

export interface SectionConfig {
  title: string
  queryVars: Record<string, any>
  viewMoreLink?: string
  _key?: string // Stable key for SolidJS For loop
}

/**
 * Get current anime season and year
 */
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
    viewMoreLink: "/explore/season",
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
    viewMoreLink: "/explore/trending",
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
    viewMoreLink: "/explore/popular",
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
    viewMoreLink: `/explore/genre/${genre.toLowerCase()}`,
  }
}

/**
 * Continue Watching section - anime user is currently watching/rewatching
 */
export function getContinueWatchingConfig(
  userListIds: UserListIDs | null,
): SectionConfig {
  return {
    title: "Continue Watching",
    queryVars: {
      ...(userListIds?.continueIDs ? { ids: userListIds.continueIDs.slice(0, 50) } : {}),
      sort: ["UPDATED_AT_DESC"],
    },
  }
}

/**
 * Planning to Watch section - anime user plans to watch
 */
export function getPlanningWatchConfig(
  userListIds: UserListIDs | null,
): SectionConfig {
  return {
    title: "Planning to Watch",
    queryVars: {
      ...(userListIds?.planningIDs ? { ids: userListIds.planningIDs } : {}),
      status: ["FINISHED", "RELEASING"],
      sort: ["START_DATE_DESC"],
    },
  }
}

/**
 * Sequels You Missed section - sequels to completed anime
 */
export function getSequelsYouMissedConfig(
  userListIds: UserListIDs | null,
): SectionConfig {
  return {
    title: "Sequels You Missed",
    queryVars: {
      ...(userListIds?.sequelIDs ? { ids: userListIds.sequelIDs } : {}),
      status: ["FINISHED", "RELEASING"],
      onList: false, // Show even if not on user's list
    },
  }
}

/**
 * Get generic (non-personalized) sections
 * These are always available and don't need user data
 */
export function getGenericSections(): SectionConfig[] {
  const sections: SectionConfig[] = []
  let keyIndex = 0

  const genericConfigs = [
    getPopularSeasonConfig(),
    getTrendingConfig(),
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

/**
 * Get personalized sections (Continue Watching, Planning to Watch, Sequels You Missed)
 * Only call this for authenticated users
 * Pass userListIds = null to show as "loading" (skeleton), or actual data to populate
 */
export function getPersonalizedSections(
  userListIds: UserListIDs | null,
): SectionConfig[] {
  const sections: SectionConfig[] = []

  const continueWatching = getContinueWatchingConfig(userListIds)
  continueWatching._key = `personalized-0`
  sections.push(continueWatching)

  const planningWatch = getPlanningWatchConfig(userListIds)
  planningWatch._key = `personalized-1`
  sections.push(planningWatch)

  const sequelsMissed = getSequelsYouMissedConfig(userListIds)
  sequelsMissed._key = `personalized-2`
  sections.push(sequelsMissed)

  return sections
}

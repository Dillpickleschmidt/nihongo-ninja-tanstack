/**
 * Utility functions to extract user list IDs from AniList MediaListCollection
 * Mirrors the exact logic from Hayase's AnilistClient
 */

import type { ResultOf } from "gql.tada"
import type { UserLists } from "@/features/explore/api/anilist/queries"

export interface UserListIDs {
  continueIDs: number[]
  planningIDs: number[]
  sequelIDs: number[]
}

/**
 * Extracts user list IDs from AniList MediaListCollection
 * Determines which anime should appear in each user-specific section
 *
 * Continue Watching: Currently watching or rewatching anime where user hasn't completed
 * Planning to Watch: Anime marked as "Planning to Watch"
 * Sequels You Missed: Sequels to completed anime that aren't on the user's list
 */
export function extractUserListIds(
  mediaListCollection: ResultOf<typeof UserLists> | null | undefined,
): UserListIDs {
  if (!mediaListCollection?.MediaListCollection?.lists) {
    return { continueIDs: [], planningIDs: [], sequelIDs: [] }
  }

  const lists = mediaListCollection.MediaListCollection.lists

  // ============================================================================
  // CONTINUE WATCHING: CURRENT or REPEATING status
  // ============================================================================
  // Filter to entries where user is actively watching or rewatching
  const mediaList = lists.reduce<any[]>((filtered, list) => {
    return ["CURRENT", "REPEATING"].includes(list?.status ?? "")
      ? filtered.concat(list?.entries ?? [])
      : filtered
  }, [])

  // Keep only anime that are still airing or anime user hasn't finished watching
  const continueIDs = mediaList
    .filter((entry) => {
      if (entry?.media?.status === "FINISHED") return true
      const progress = entry?.media?.mediaListEntry?.progress ?? 0
      // +2 is for series that don't have the next airing episode scheduled, but are still airing
      // -1 is because we care about the latest aired available episode, not the next aired episode
      return progress < (entry?.media?.nextAiringEpisode?.episode ?? (progress + 2)) - 1
    })
    .map((entry) => entry?.media?.id)
    .filter(Boolean) as number[]

  // ============================================================================
  // PLANNING TO WATCH: PLANNING status
  // ============================================================================
  const planningMediaList =
    lists.find((list) => list?.status === "PLANNING")?.entries ?? []
  const planningIDs = planningMediaList
    .map((entry) => entry?.media?.id)
    .filter(Boolean) as number[]

  // ============================================================================
  // SEQUELS YOU MISSED: Sequels to COMPLETED anime
  // ============================================================================
  // Get all anime from completed list and find their sequels
  const completedMediaList =
    lists.find((list) => list?.status === "COMPLETED")?.entries ?? []
  const sequelIDs = [
    ...new Set(
      completedMediaList
        .flatMap((entry) => entry?.media?.relations?.edges ?? [])
        .filter((edge) => edge?.relationType === "SEQUEL")
        .map((edge) => edge?.node?.id)
        .filter(Boolean),
    ),
  ] as number[]

  return { continueIDs, planningIDs, sequelIDs }
}

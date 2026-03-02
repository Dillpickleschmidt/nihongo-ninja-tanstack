import type { ResultOf } from "gql.tada"
import type { ActionCtx, MutationCtx, QueryCtx } from "../_generated/server"
import type { Doc } from "../_generated/dataModel"
import type { UserLists } from "../../src/features/discover/api/anilist/queries"
import { internal } from "../_generated/api"

type AnimeService = Doc<"userServiceTokens">["service"]

export async function getConnectionStatus(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return { anilist: false, kitsu: false, mal: false }

  const tokens = await ctx.db
    .query("userServiceTokens")
    .withIndex("by_user_service", (q) => q.eq("userId", identity.subject))
    .collect()

  const connected = new Set(tokens.map((t) => t.service))
  return {
    anilist: connected.has("anilist"),
    kitsu: connected.has("kitsu"),
    mal: connected.has("mal"),
  }
}

export async function storeToken(
  ctx: MutationCtx,
  args: {
    userId: string
    service: AnimeService
    accessToken: string
    refreshToken?: string
    expiresAt?: number
  },
) {
  const existing = await ctx.db
    .query("userServiceTokens")
    .withIndex("by_user_service", (q) =>
      q.eq("userId", args.userId).eq("service", args.service),
    )
    .first()

  if (existing) {
    await ctx.db.patch(existing._id, {
      accessToken: args.accessToken,
      refreshToken: args.refreshToken,
      expiresAt: args.expiresAt,
    })
  } else {
    await ctx.db.insert("userServiceTokens", {
      userId: args.userId,
      service: args.service,
      accessToken: args.accessToken,
      refreshToken: args.refreshToken,
      expiresAt: args.expiresAt,
    })
  }
}

export async function disconnectService(
  ctx: MutationCtx,
  service: AnimeService,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const token = await ctx.db
    .query("userServiceTokens")
    .withIndex("by_user_service", (q) =>
      q.eq("userId", identity.subject).eq("service", service),
    )
    .first()

  if (token) {
    await ctx.db.delete(token._id)
  }
}

export async function getToken(
  ctx: QueryCtx,
  userId: string,
  service: AnimeService,
) {
  const token = await ctx.db
    .query("userServiceTokens")
    .withIndex("by_user_service", (q) =>
      q.eq("userId", userId).eq("service", service),
    )
    .first()
  return token?.accessToken ?? null
}

export async function exchangeAniListToken(
  ctx: ActionCtx,
  code: string,
  redirectUri: string,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const clientId = process.env.ANILIST_CLIENT_ID
  const clientSecret = process.env.ANILIST_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    throw new Error("AniList not configured")
  }

  const response = await fetch("https://anilist.co/api/v2/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code,
    }),
  })

  if (!response.ok) {
    throw new Error("Token exchange failed")
  }

  const data = await response.json()
  const expiresIn = data.expires_in || 2592000 // 30 days default

  await ctx.runMutation(internal.api.animeAuth.storeToken, {
    userId: identity.subject,
    service: "anilist",
    accessToken: data.access_token,
    refreshToken: "",
    expiresAt: Date.now() + expiresIn * 1000,
  })

  return { success: true }
}

// AniList authenticated API helpers

const VIEWER_QUERY = `query { Viewer { id, options { titleLanguage } } }`

const USER_LISTS_QUERY = `query UserLists($id: Int) {
  MediaListCollection(userId: $id, type: ANIME, forceSingleCompletedList: true, sort: UPDATED_TIME_DESC) {
    user { id }
    lists {
      status,
      entries {
        id,
        media {
          id,
          status,
          mediaListEntry {
            id, status, progress, repeat, score(format: POINT_10), customLists(asArray: true)
          },
          nextAiringEpisode { episode },
          relations {
            edges {
              relationType(version:2)
              node { id }
            }
          }
        }
      }
    }
  }
}`

async function anilistRequest(
  query: string,
  variables: Record<string, unknown>,
  token: string,
) {
  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  })
  if (!response.ok) throw new Error(`AniList error: ${response.status}`)
  const result = await response.json()
  if (result.errors)
    throw new Error(result.errors[0]?.message || "AniList query failed")
  return result.data
}

export type UserListsResponse = ResultOf<typeof UserLists>

export interface FetchUserListsResult {
  lists: UserListsResponse
  titleLanguage: string | null
}

export async function fetchUserLists(
  ctx: ActionCtx,
): Promise<FetchUserListsResult> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const token = await ctx.runQuery(internal.api.animeAuth.getToken, {
    userId: identity.subject,
    service: "anilist",
  })
  if (!token) throw new Error("AniList not connected")

  const viewerData = await anilistRequest(VIEWER_QUERY, {}, token)
  const viewerId = viewerData?.Viewer?.id
  if (!viewerId) throw new Error("Could not fetch AniList viewer")

  const titleLanguage: string | null =
    viewerData?.Viewer?.options?.titleLanguage ?? null

  const lists = await anilistRequest(USER_LISTS_QUERY, { id: viewerId }, token)
  return { lists, titleLanguage }
}

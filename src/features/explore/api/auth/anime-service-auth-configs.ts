/**
 * Anime Service OAuth Configuration
 * Defines token exchange logic for each anime tracking service (AniList, Kitsu, MyAnimeList)
 */

import { Resource } from "sst"
import type { AnimeServiceType } from "@/features/main-cookies/schemas/user-settings"

export interface AnimeOAuthTokenRequest {
  code?: string
  codeChallenge?: string
  email?: string
  password?: string
}

export interface AnimeOAuthTokenResponse {
  accessToken: string
  refreshToken: string
  expiresAt: string
}

export interface AnimeServiceAuthConfig {
  service: AnimeServiceType
  validateRequest: (body: any) => { error?: string }
  exchangeToken: (
    request: AnimeOAuthTokenRequest,
    redirectUri: string,
  ) => Promise<AnimeOAuthTokenResponse>
}

/**
 * AniList OAuth Configuration
 * Uses authorization code grant with client secret
 */
const anilistConfig: AnimeServiceAuthConfig = {
  service: "anilist",

  validateRequest: (body) => {
    if (!body?.code || typeof body.code !== "string") {
      return { error: "No authorization code provided" }
    }
    return {}
  },

  exchangeToken: async (request, redirectUri) => {
    const { code } = request

    const clientId = Resource.ANILIST_CLIENT_ID.value
    const clientSecret = Resource.ANILIST_CLIENT_SECRET.value

    if (!clientId || !clientSecret) {
      throw new Error("AniList not configured")
    }

    const tokenResponse = await fetch("https://anilist.co/api/v2/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code,
      }),
    })

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text()
      throw new Error("Token exchange failed")
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token
    const expiresIn = tokenData.expires_in || 2592000 // 30 days default
    const expiresAt = new Date(Date.now() + expiresIn * 1000).toISOString()

    return {
      accessToken,
      refreshToken: "", // AniList doesn't provide refresh tokens
      expiresAt,
    }
  },
}

/**
 * Kitsu OAuth Configuration
 * Uses password grant (username/password)
 */
const kitsuConfig: AnimeServiceAuthConfig = {
  service: "kitsu",

  validateRequest: (body) => {
    if (!body?.email || typeof body.email !== "string") {
      return { error: "Email is required" }
    }
    if (!body?.password || typeof body.password !== "string") {
      return { error: "Password is required" }
    }
    return {}
  },

  exchangeToken: async (request) => {
    const { email, password } = request

    const tokenResponse = await fetch("https://kitsu.io/api/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "password",
        username: email,
        password: password,
      }),
    })

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text()
      throw new Error("Invalid credentials")
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token
    const refreshToken = tokenData.refresh_token || ""
    const expiresIn = tokenData.expires_in || 2592000 // 30 days default
    const expiresAt = new Date(Date.now() + expiresIn * 1000).toISOString()

    return {
      accessToken,
      refreshToken,
      expiresAt,
    }
  },
}

/**
 * MyAnimeList (MAL) OAuth Configuration
 * Uses PKCE (Proof Key for Code Exchange) flow
 */
const malConfig: AnimeServiceAuthConfig = {
  service: "mal",

  validateRequest: (body) => {
    if (!body?.code || typeof body.code !== "string") {
      return { error: "Authorization code is required" }
    }
    if (!body?.codeChallenge || typeof body.codeChallenge !== "string") {
      return { error: "Code challenge is required" }
    }
    return {}
  },

  exchangeToken: async (request, redirectUri) => {
    const { code, codeChallenge } = request

    const clientId = Resource.MAL_CLIENT_ID.value

    if (!clientId) {
      throw new Error("MAL not configured")
    }

    const tokenResponse = await fetch(
      "https://myanimelist.net/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: "authorization_code",
          code: code || "",
          code_verifier: codeChallenge || "",
          redirect_uri: redirectUri,
        } as Record<string, string>).toString(),
      },
    )

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text()
      throw new Error("Token exchange failed")
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token
    const refreshToken = tokenData.refresh_token || ""
    const expiresIn = tokenData.expires_in || 2592000 // 30 days default
    const expiresAt = new Date(Date.now() + expiresIn * 1000).toISOString()

    return {
      accessToken,
      refreshToken,
      expiresAt,
    }
  },
}

/**
 * Map of all anime service OAuth configurations
 */
export const animeServiceAuthConfigs: Record<
  AnimeServiceType,
  AnimeServiceAuthConfig
> = {
  anilist: anilistConfig,
  kitsu: kitsuConfig,
  mal: malConfig,
}

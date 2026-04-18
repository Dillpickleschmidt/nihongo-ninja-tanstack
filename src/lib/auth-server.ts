import { ConvexHttpClient } from "convex/browser"
import { getToken as getConvexToken } from "@convex-dev/better-auth/utils"
import { getRequestHeaders } from "@tanstack/solid-start/server"
import type {
  FunctionReference,
  FunctionReturnType,
  OptionalRestArgs,
} from "convex/server"
import type { GetTokenOptions } from "@convex-dev/better-auth/utils"

const CONVEX_URL = process.env.VITE_CONVEX_URL
if (!CONVEX_URL) {
  throw new Error("VITE_CONVEX_URL is not set")
}
const convexUrl: string = CONVEX_URL

const CONVEX_SITE_URL = process.env.VITE_CONVEX_SITE_URL
if (!CONVEX_SITE_URL) {
  throw new Error("VITE_CONVEX_SITE_URL is not set")
}
const convexSiteUrl: string = CONVEX_SITE_URL

function createClient(token?: string) {
  const client = new ConvexHttpClient(convexUrl)

  if (token) {
    client.setAuth(token)
  }

  return client
}

function getForwardableRequestHeaders() {
  const headers = new Headers(getRequestHeaders())
  headers.delete("content-length")
  headers.delete("transfer-encoding")
  headers.set("accept-encoding", "identity")
  return headers
}

async function getTokenResult(opts?: GetTokenOptions) {
  return getConvexToken(convexSiteUrl, getForwardableRequestHeaders(), opts)
}

export async function fetchSession(request: Request) {
  const response = await fetch(`${convexSiteUrl}/api/auth/get-session`, {
    headers: {
      cookie: request.headers.get("cookie") ?? "",
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch auth session: ${response.status}`)
  }

  return {
    session: await response.json(),
  }
}

async function callWithToken<T>(
  fn: (token: string | undefined) => Promise<T>,
  opts?: GetTokenOptions,
) {
  const token = await getTokenResult(opts)
  try {
    return await fn(token.token)
  } catch (error) {
    if (
      !opts?.jwtCache?.enabled ||
      token.isFresh ||
      opts.jwtCache.isAuthError(error)
    ) {
      throw error
    }

    const newToken = await getTokenResult({ ...opts, forceRefresh: true })
    return await fn(newToken.token)
  }
}

export const getToken = async () => {
  const token = await getTokenResult()
  return token.token
}

export const handler = (request: Request) => {
  const requestUrl = new URL(request.url)
  const nextUrl = `${convexSiteUrl}${requestUrl.pathname}${requestUrl.search}`
  const headers = new Headers(request.headers)
  headers.set("accept-encoding", "application/json")
  headers.set("host", new URL(convexSiteUrl).host)

  return fetch(nextUrl, {
    method: request.method,
    headers,
    redirect: "manual",
    body: request.body,
    // @ts-expect-error - duplex is required for streaming request bodies.
    duplex: "half",
  })
}

export async function fetchAuthQuery<Query extends FunctionReference<"query">>(
  query: Query,
  ...args: OptionalRestArgs<Query>
): Promise<FunctionReturnType<Query>> {
  return callWithToken((token) => createClient(token).query(query, ...args))
}

export async function fetchAuthMutation<
  Mutation extends FunctionReference<"mutation">,
>(
  mutation: Mutation,
  ...args: OptionalRestArgs<Mutation>
): Promise<FunctionReturnType<Mutation>> {
  return callWithToken((token) => createClient(token).mutation(mutation, ...args))
}

export async function fetchAuthAction<Action extends FunctionReference<"action">>(
  action: Action,
  ...args: OptionalRestArgs<Action>
): Promise<FunctionReturnType<Action>> {
  return callWithToken((token) => createClient(token).action(action, ...args))
}

export const fetchQuery = fetchAuthQuery
export const fetchMutation = fetchAuthMutation
export const fetchAction = fetchAuthAction

// src/utils/cookie-utils.ts
import { getRequestHeader } from "@tanstack/solid-start/server"
import { isServer } from "solid-js/web"
import { serverOnly } from "@tanstack/solid-start"

/**
 * Parse cookie string into key-value pairs
 */
function parseCookieString(
  cookieString: string,
): Array<{ name: string; value: string }> {
  if (!cookieString) return []

  return cookieString
    .split(";")
    .map((cookie) => {
      const [name, ...valueParts] = cookie.trim().split("=")
      return { name: name.trim(), value: valueParts.join("=") }
    })
    .filter((cookie) => cookie.name && cookie.value)
}

/**
 * Get specific cookie value (works on server and client)
 */
export function getCookie(name: string): string | null {
  let cookieString: string

  if (isServer) {
    cookieString = serverOnly(() => getRequestHeader("Cookie"))() ?? ""
  } else {
    cookieString = document.cookie
  }

  const cookies = parseCookieString(cookieString)
  const cookie = cookies.find((c) => c.name === name)
  return cookie?.value || null
}

/**
 * Create Set-Cookie header string with sensible defaults
 */
export function createSetCookieHeader(
  name: string,
  value: string,
  options?: {
    httpOnly?: boolean
    maxAge?: number
    secure?: boolean
    sameSite?: "strict" | "lax" | "none"
  },
): string {
  const opts = {
    httpOnly: true,
    secure: true,
    sameSite: "none" as const,
    ...options,
  }

  let cookieString = `${name}=${value}; Path=/`

  if (opts.httpOnly) cookieString += `; HttpOnly`
  if (opts.secure) cookieString += `; Secure`
  if (opts.sameSite) cookieString += `; SameSite=${opts.sameSite}`
  if (opts.maxAge !== undefined) cookieString += `; Max-Age=${opts.maxAge}`

  return cookieString
}

/**
 * Unified cookie setting function that works on both server and client
 */
export function setCookie(
  name: string,
  value: string,
  options?: {
    httpOnly?: boolean
    maxAge?: number
    secure?: boolean
    sameSite?: "strict" | "lax" | "none"
    response?: Response
  },
): void {
  const encodedValue = encodeURIComponent(value)

  if (isServer) {
    serverOnly(() => {
      const opts = {
        httpOnly: true,
        secure: true,
        sameSite: "lax" as const,
        maxAge: 60 * 60 * 24 * 365, // 1 year default
        ...options,
      }
      
      const cookieHeader = createSetCookieHeader(name, encodedValue, opts)
      
      if (options?.response) {
        options.response.headers.append("Set-Cookie", cookieHeader)
      }
    })()
  } else {
    // Client-side cookie setting
    const opts = {
      secure: true,
      sameSite: "lax" as const,
      maxAge: 60 * 60 * 24 * 365, // 1 year default
      ...options,
    }

    let cookieString = `${name}=${encodedValue}; Path=/`
    
    if (opts.secure) cookieString += `; Secure`
    if (opts.sameSite) cookieString += `; SameSite=${opts.sameSite}`
    if (opts.maxAge !== undefined) cookieString += `; Max-Age=${opts.maxAge}`

    document.cookie = cookieString
  }
}

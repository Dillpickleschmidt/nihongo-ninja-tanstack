import { createIsomorphicFn } from '@tanstack/solid-start'
import {
  getCookie as serverGetCookie,
  setCookie as serverSetCookie,
  deleteCookie as serverDeleteCookie,
} from '@tanstack/solid-start/server'

type CookieOptions = {
  maxAge?: number
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

export const getCookie = createIsomorphicFn()
  .server((name: string) => {
    return serverGetCookie(name) ?? null
  })
  .client((name: string) => {
    const cookies = document.cookie.split(';').map((c) => {
      const [n, ...v] = c.trim().split('=')
      return { name: n.trim(), value: v.join('=') }
    })
    return cookies.find((c) => c.name === name)?.value || null
  })

export const setCookie = createIsomorphicFn()
  .server((name: string, value: string, options?: CookieOptions) => {
    serverSetCookie(name, value, {
      path: '/',
      secure: options?.secure ?? true,
      sameSite: options?.sameSite ?? 'lax',
      maxAge: options?.maxAge ?? 60 * 60 * 24 * 365,
    })
  })
  .client((name: string, value: string, options?: CookieOptions) => {
    const opts = {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax' as const,
      ...options,
    }
    const isHttps = window.location.protocol === 'https:'

    let cookieString = `${name}=${value}; Path=/`
    if (isHttps) cookieString += '; Secure'
    if (opts.sameSite) cookieString += `; SameSite=${opts.sameSite}`
    if (opts.maxAge) cookieString += `; Max-Age=${opts.maxAge}`

    document.cookie = cookieString
  })

export const deleteCookie = createIsomorphicFn()
  .server((name: string) => {
    serverDeleteCookie(name, { path: '/' })
  })
  .client((name: string) => {
    document.cookie = `${name}=; Path=/; Max-Age=0`
  })

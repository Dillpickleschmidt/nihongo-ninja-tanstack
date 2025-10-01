// features/main-cookies/service-credentials.ts
import { createServerFn } from "@tanstack/solid-start"
import { zodValidator } from "@tanstack/zod-adapter"
import { getCookie, setCookie } from "@/utils/cookie-utils"
import { SERVICE_CREDENTIALS_COOKIE } from "../types"
import {
  ServiceCredentialsSchema,
  type ServiceCredentials,
} from "../schemas/service-credentials"

/**
 * Server-only function to read service credentials from HttpOnly cookie
 * This ensures API keys are never exposed to client-side JavaScript
 */
export const getServiceCredentials = createServerFn({
  method: "GET",
}).handler(async (): Promise<ServiceCredentials> => {
  const cookieValue = getCookie(SERVICE_CREDENTIALS_COOKIE)

  if (!cookieValue) {
    return ServiceCredentialsSchema.parse({})
  }

  try {
    const parsed = JSON.parse(cookieValue)
    return ServiceCredentialsSchema.parse(parsed)
  } catch {
    return ServiceCredentialsSchema.parse({})
  }
})

/**
 * Server-only function to update service credentials in HttpOnly cookie
 * This ensures API keys are never exposed to client-side JavaScript
 */
export const updateServiceCredentials = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(ServiceCredentialsSchema))
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    setCookie(SERVICE_CREDENTIALS_COOKIE, JSON.stringify(data), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    return { success: true }
  })

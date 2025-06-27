// features/service-config/server/server-functions.ts

import { createServerFn } from "@tanstack/solid-start"
import { z } from "zod"
import { getUserSSR } from "@/features/supabase/getUserSSR"
import {
  validateServiceCredentials,
  updateServiceAuth,
  removeServiceAuth,
  getAuthDataFromCookie,
  validateAllStoredCredentials,
} from "./service-manager"
import type {
  ServiceResponse,
  OperationResult,
  ServiceAuthData,
  AllServiceAuthData,
} from "../types"

// === Input Validation Schemas ===

const serviceConnectionSchema = z.object({
  service: z.enum(["jpdb", "wanikani", "anki"]),
  credentials: z.object({
    api_key: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
  }),
})

const serviceAuthUpdateSchema = z.object({
  service: z.enum(["jpdb", "wanikani", "anki"]),
  authData: z.object({
    api_key: z.string().optional(),
    is_api_key_valid: z.boolean().optional(),
  }),
})

const serviceTypeSchema = z.object({
  service: z.enum(["jpdb", "wanikani", "anki"]),
})

// === Server Functions ===

export const connectService = createServerFn()
  .validator(serviceConnectionSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      const validationResult = await validateServiceCredentials(
        data.service,
        data.credentials,
      )

      const authDataToUpdate: Partial<ServiceAuthData> = {
        api_key: data.credentials.api_key,
        is_api_key_valid: validationResult.success,
      }

      if (!validationResult.success) {
        updateServiceAuth(data.service, authDataToUpdate)
        return {
          success: false,
          error: validationResult.error || "Credential validation failed",
        }
      }

      updateServiceAuth(data.service, authDataToUpdate)
      return { success: true }
    } catch (error) {
      console.error(`Error connecting to ${data.service}:`, error)
      return { success: false, error: `Failed to connect to ${data.service}` }
    }
  })

export const disconnectService = createServerFn()
  .validator(serviceTypeSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      removeServiceAuth(data.service)
      return { success: true }
    } catch (error) {
      console.error(`Error disconnecting from ${data.service}:`, error)
      return {
        success: false,
        error: `Failed to disconnect from ${data.service}`,
      }
    }
  })

export const updateServiceAuthServerFn = createServerFn()
  .validator(serviceAuthUpdateSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      updateServiceAuth(data.service, data.authData)
      return { success: true }
    } catch (error) {
      console.error(`Error updating ${data.service} auth data:`, error)
      return {
        success: false,
        error: `Failed to update ${data.service} auth data`,
      }
    }
  })

export const getServiceAuthState = createServerFn().handler(
  async (): Promise<ServiceResponse<AllServiceAuthData>> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      const authData = getAuthDataFromCookie()
      return { success: true, data: authData }
    } catch (error) {
      console.error("Error getting service auth state:", error)
      return { success: false, error: "Failed to get service auth state" }
    }
  },
)

export const validateStoredCredentials = createServerFn().handler(
  async (): Promise<ServiceResponse> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      await validateAllStoredCredentials()
      return { success: true }
    } catch (error) {
      console.error("Error validating stored credentials:", error)
      return { success: false, error: "Failed to validate stored credentials" }
    }
  },
)

export const importServiceData = createServerFn()
  .validator(serviceTypeSchema)
  .handler(async ({ data }): Promise<ServiceResponse<OperationResult>> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      // This is where you would add the real import logic.
      // For now, we'll simulate a successful import.

      return { success: true, data: { success: true, cards_imported: 123 } }
    } catch (error) {
      console.error(`Error importing data from ${data.service}:`, error)
      return {
        success: false,
        error: `Failed to import data from ${data.service}`,
      }
    }
  })

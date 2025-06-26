// features/service-auth/server-functions.ts

import { createServerFn } from "@tanstack/solid-start"
import { z } from "zod"
import { getUserSSR } from "@/features/supabase/getUserSSR"
import {
  validateServiceCredentials,
  updateServiceSettings,
  removeService,
  getAllServicesState,
  validateAllStoredCredentials,
} from "./service-manager"
import type {
  ServiceResponse,
  AllServicesState,
  OperationResult,
  ServiceSettings,
} from "./types"

// === Input Validation Schemas ===

const serviceConnectionSchema = z.object({
  service: z.enum(["jpdb", "wanikani", "anki"]),
  credentials: z.object({
    api_key: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
  }),
})

const serviceSettingsSchema = z.object({
  service: z.enum(["jpdb", "wanikani", "anki"]),
  settings: z.object({
    mode: z.enum(["disabled", "live", "imported"]).optional(),
    api_key: z.string().optional(),
    is_api_key_valid: z.boolean().optional(),
    data_imported: z.boolean().optional(),
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

      const settingsToUpdate: Partial<ServiceSettings> = {
        api_key: data.credentials.api_key, // Always store the key they entered
        is_api_key_valid: validationResult.success,
      }

      if (!validationResult.success) {
        updateServiceSettings(data.service, settingsToUpdate) // Save the invalid key and status
        return {
          success: false,
          error: validationResult.error || "Credential validation failed",
        }
      }

      // On success, also update the mode to live
      settingsToUpdate.mode = "live"
      updateServiceSettings(data.service, settingsToUpdate)

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
      removeService(data.service)
      return { success: true }
    } catch (error) {
      console.error(`Error disconnecting from ${data.service}:`, error)
      return {
        success: false,
        error: `Failed to disconnect from ${data.service}`,
      }
    }
  })

export const updateServiceSettingsServerFn = createServerFn()
  .validator(serviceSettingsSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      updateServiceSettings(data.service, data.settings)
      return { success: true }
    } catch (error) {
      console.error(`Error updating ${data.service} settings:`, error)
      return {
        success: false,
        error: `Failed to update ${data.service} settings`,
      }
    }
  })

export const getServiceState = createServerFn().handler(
  async (): Promise<ServiceResponse<AllServicesState>> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      const serviceState = getAllServicesState()
      return { success: true, data: serviceState }
    } catch (error) {
      console.error("Error getting service state:", error)
      return { success: false, error: "Failed to get service state" }
    }
  },
)

export const validateStoredCredentials = createServerFn().handler(
  async (): Promise<ServiceResponse<AllServicesState>> => {
    const { user } = await getUserSSR()
    if (!user) return { success: false, error: "User not authenticated" }

    try {
      const validatedState = await validateAllStoredCredentials()
      return { success: true, data: validatedState }
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
      updateServiceSettings(data.service, { data_imported: true })

      return { success: true, data: { success: true, cards_imported: 123 } } // Example data
    } catch (error) {
      console.error(`Error importing data from ${data.service}:`, error)
      return {
        success: false,
        error: `Failed to import data from ${data.service}`,
      }
    }
  })

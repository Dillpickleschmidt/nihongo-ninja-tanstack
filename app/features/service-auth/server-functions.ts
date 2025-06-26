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
    enabled: z.boolean().optional(),
    use_imported_data: z.boolean().optional(),
  }),
})

const serviceTypeSchema = z.object({
  service: z.enum(["jpdb", "wanikani", "anki"]),
})

// === Server Functions ===

/**
 * Connect to a service by validating credentials and saving them
 */
export const connectService = createServerFn()
  .validator(serviceConnectionSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    // Check user authentication
    const { user } = await getUserSSR()
    if (!user) {
      return { success: false, error: "User not authenticated" }
    }

    try {
      // Validate credentials with external service
      const validationResult = await validateServiceCredentials(
        data.service,
        data.credentials,
      )

      if (!validationResult.success) {
        return {
          success: false,
          error: validationResult.error || "Credential validation failed",
        }
      }

      // Save credentials to cookie
      updateServiceSettings(data.service, {
        api_key: validationResult.api_key!,
        enabled: true,
        use_imported_data: false,
      })

      return { success: true }
    } catch (error) {
      console.error(`Error connecting to ${data.service}:`, error)
      return {
        success: false,
        error: `Failed to connect to ${data.service}`,
      }
    }
  })

/**
 * Disconnect from a service by removing its credentials
 */
export const disconnectService = createServerFn()
  .validator(serviceTypeSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    // Check user authentication
    const { user } = await getUserSSR()
    if (!user) {
      return { success: false, error: "User not authenticated" }
    }

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

/**
 * Update service settings (enabled, use_imported_data)
 */
export const updateServiceSettingsServerFn = createServerFn()
  .validator(serviceSettingsSchema)
  .handler(async ({ data }): Promise<ServiceResponse> => {
    // Check user authentication
    const { user } = await getUserSSR()
    if (!user) {
      return { success: false, error: "User not authenticated" }
    }

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

/**
 * Get current state of all services
 */
export const getServiceState = createServerFn().handler(
  async (): Promise<ServiceResponse<AllServicesState>> => {
    // Check user authentication
    const { user } = await getUserSSR()
    if (!user) {
      return {
        success: false,
        error: "User not authenticated",
      }
    }

    try {
      // Get basic service state
      const serviceState = getAllServicesState()
      return {
        success: true,
        data: serviceState,
      }
    } catch (error) {
      console.error("Error getting service state:", error)
      return {
        success: false,
        error: "Failed to get service state",
      }
    }
  },
)

/**
 * Validate all stored credentials against external APIs
 */
export const validateStoredCredentials = createServerFn().handler(
  async (): Promise<ServiceResponse<AllServicesState>> => {
    // Check user authentication
    const { user } = await getUserSSR()
    if (!user) {
      return {
        success: false,
        error: "User not authenticated",
      }
    }

    try {
      // Test all stored credentials
      const validatedState = await validateAllStoredCredentials()
      return {
        success: true,
        data: validatedState,
      }
    } catch (error) {
      console.error("Error validating stored credentials:", error)
      return {
        success: false,
        error: "Failed to validate stored credentials",
      }
    }
  },
)

/**
 * Import data from a connected service
 */
export const importServiceData = createServerFn()
  .validator(serviceTypeSchema)
  .handler(async ({ data }): Promise<ServiceResponse<OperationResult>> => {
    // Check user authentication
    const { user } = await getUserSSR()
    if (!user) {
      return { success: false, error: "User not authenticated" }
    }

    try {
      // TODO: Implement actual data import logic
      // This will be implemented in the next file (data-importers.ts)

      // For now, return a placeholder
      const importResult: OperationResult = {
        success: false,
        error: "Import functionality not yet implemented",
      }

      return {
        success: importResult.success,
        data: importResult,
        error: importResult.error,
      }
    } catch (error) {
      console.error(`Error importing data from ${data.service}:`, error)
      return {
        success: false,
        error: `Failed to import data from ${data.service}`,
      }
    }
  })

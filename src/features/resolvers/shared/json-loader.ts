// src/features/resolvers/shared/json-loader.ts
import type { Stack } from "@/features/resolvers/types"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

// Constants
const SIGNED_URL_EXPIRY_HOURS = 24
const USER_OVERRIDES_PREFIX = "user_overrides_json/"

async function resolveSourceUrl(sourceId: string): Promise<string> {
  if (sourceId.startsWith(USER_OVERRIDES_PREFIX)) {
    // Private file - generate signed URL
    const filePath = sourceId.replace(USER_OVERRIDES_PREFIX, "")
    const supabase = createSupabaseClient()
    const { data: signedUrlData, error: signedUrlError } =
      await supabase.storage
        .from("user_overrides_json")
        .createSignedUrl(filePath, SIGNED_URL_EXPIRY_HOURS * 60 * 60)

    if (signedUrlError || !signedUrlData.signedUrl) {
      throw new Error(
        `Failed to generate signed URL for ${sourceId}: ${signedUrlError?.message || "Unknown error"}`,
      )
    }

    return signedUrlData.signedUrl
  } else {
    // Public URL - use directly
    return sourceId
  }
}

function transformJsonToMap<TJsonItem, TProperties>(
  jsonData: TJsonItem[],
  transformer: (item: TJsonItem) => TProperties,
  keyExtractor: (item: TJsonItem) => string,
): Map<string, TProperties> {
  const keyToPropertiesMap = new Map<string, TProperties>()

  jsonData.forEach((item: TJsonItem) => {
    const key = keyExtractor(item)
    const properties = transformer(item)
    keyToPropertiesMap.set(key, properties)
  })

  return keyToPropertiesMap
}

/**
 * Generic JSON data loader that can be used by both vocabulary and kanji stacking systems
 * @param stacks Array of stacks to load JSON sources for
 * @param transformer Function to transform each JSON item to the desired format
 * @param keyExtractor Function to extract the map key from each JSON item
 * @returns Map of sourceId to Map of key to transformed properties
 */
export async function loadJsonSources<TJsonItem, TProperties>(
  stacks: Stack[],
  transformer: (item: TJsonItem) => TProperties,
  keyExtractor: (item: TJsonItem) => string,
): Promise<Map<string, Map<string, TProperties>>> {
  const sourceToDataMap = new Map<string, Map<string, TProperties>>()

  const jsonSourceIds = [
    ...new Set(
      stacks.filter((s) => s.sourceId.endsWith(".json")).map((s) => s.sourceId),
    ),
  ]

  await Promise.all(
    jsonSourceIds.map(async (sourceId) => {
      try {
        const resolvedUrl = await resolveSourceUrl(sourceId)

        const response = await fetch(resolvedUrl)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        const jsonData: TJsonItem[] = await response.json()

        const transformedData = transformJsonToMap(
          jsonData,
          transformer,
          keyExtractor,
        )
        sourceToDataMap.set(sourceId, transformedData)
      } catch (error) {
        console.error(`Failed to load JSON source ${sourceId}:`, error)
        // Set empty map on failure so other sources can still work
        sourceToDataMap.set(sourceId, new Map())
      }
    }),
  )

  return sourceToDataMap
}

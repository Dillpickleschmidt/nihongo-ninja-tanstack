// src/features/resolvers/shared/json-loader.ts
import type { Stack } from "@/features/resolvers/types"

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
  const jsonCaches = new Map<string, Map<string, TProperties>>()
  const jsonSources = [
    ...new Set(
      stacks.filter((s) => s.sourceId.endsWith(".json")).map((s) => s.sourceId),
    ),
  ]

  await Promise.all(
    jsonSources.map(async (sourceId) => {
      try {
        // Fetch JSON data from URL
        const response = await fetch(sourceId)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        const jsonData: TJsonItem[] = await response.json()

        const itemMap = new Map<string, TProperties>()
        jsonData.forEach((item: TJsonItem) => {
          const key = keyExtractor(item)
          const properties = transformer(item)
          itemMap.set(key, properties)
        })
        jsonCaches.set(sourceId, itemMap)
      } catch (error) {
        console.error(`Failed to load JSON source ${sourceId}:`, error)
        jsonCaches.set(sourceId, new Map())
      }
    }),
  )

  return jsonCaches
}

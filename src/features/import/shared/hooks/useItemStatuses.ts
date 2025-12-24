import { createMemo, type Accessor } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { calculateItemStatus, type ItemStatus } from "../status"

/**
 * Hook to fetch and derive item statuses from FSRS data.
 * Returns a function to get the status for any given key.
 * Statuses are pre-computed once when data changes for better performance.
 */
export function useItemStatuses(keys: Accessor<string[]>) {
  const user = getUser()

  const statusesQuery = useConvexQuery(
    api.api.fsrs.getItemStatuses,
    () => ({ keys: keys() }),
    () => ({ enabled: !!user() && keys().length > 0 })
  )

  const statusMap = createMemo(() => {
    const data = statusesQuery.data()
    if (!data) return new Map<string, ItemStatus>()

    const map = new Map<string, ItemStatus>()
    for (const key of keys()) {
      const item = data[encodeURIComponent(key)]
      if (item) map.set(key, calculateItemStatus(item))
    }
    return map
  })

  const getStatus = (key: string): ItemStatus => statusMap().get(key) ?? null

  return getStatus
}

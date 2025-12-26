import { createMemo, type Accessor } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { calculateItemStatus, type ItemStatus } from "../status"
import type { PracticeItemType } from "convex/validators"

export interface StatusItem {
  key: string
  type: PracticeItemType
}

export function useItemStatuses(items: Accessor<StatusItem[]>) {
  const user = getUser()

  const statusesQuery = useConvexQuery(
    api.api.fsrs.getItemStatuses,
    () => ({ items: items() }),
    () => ({ enabled: !!user() && items().length > 0 }),
  )

  const statusMap = createMemo(() => {
    const data = statusesQuery.data()
    if (!data)
      return { vocabulary: {}, kanji: {}, radical: {} } as Record<
        PracticeItemType,
        Record<string, ItemStatus>
      >

    const map: Record<PracticeItemType, Record<string, ItemStatus>> = {
      vocabulary: {},
      kanji: {},
      radical: {},
    }
    for (const item of items()) {
      const status = data[item.type]?.[encodeURIComponent(item.key)]
      if (status) map[item.type][item.key] = calculateItemStatus(status)
    }
    return map
  })

  const getStatus = (key: string, type: PracticeItemType): ItemStatus =>
    statusMap()[type][key] ?? null

  return getStatus
}

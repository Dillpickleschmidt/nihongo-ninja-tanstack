import { createMemo, type Accessor } from "solid-js"
import { useItemStatuses, type StatusItem } from "./useItemStatuses"
import type { PracticeItemType } from "convex/validators"

interface UseSectionItemsOptions<T> {
  items: Accessor<T[] | undefined>
  getKey: (item: T) => string
  type: PracticeItemType
  isSelected: (key: string) => boolean
}

export function useSectionItems<T>(options: UseSectionItemsOptions<T>) {
  const allKeys = createMemo(() => options.items()?.map(options.getKey) ?? [])

  const statusItems = createMemo<StatusItem[]>(() =>
    allKeys().map((key) => ({ key, type: options.type })),
  )

  const getStoredStatus = useItemStatuses(statusItems)

  const allSelected = () => {
    const list = options.items()
    return (
      list !== undefined &&
      list.length > 0 &&
      list.every((i) => options.isSelected(options.getKey(i)))
    )
  }

  const selectedCount = () =>
    options.items()?.filter((i) => options.isSelected(options.getKey(i)))
      .length ?? 0

  return { allKeys, getStoredStatus, allSelected, selectedCount }
}

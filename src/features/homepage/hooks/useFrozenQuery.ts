import { createSignal, createMemo, type Accessor } from "solid-js"
import type { UseQueryResult } from "@tanstack/solid-query"

/**
 * Freezes a query object during navigation to prevent UI updates.
 * When isNavigating is true, returns the last known data instead of reactive updates.
 * Useful for preventing content flashing during route transitions.
 */
export function useFrozenQuery<TData, TError>(
  query: UseQueryResult<TData, TError>,
  isNavigating: Accessor<boolean>,
): Accessor<UseQueryResult<TData, TError>> {
  const [frozenData, setFrozenData] = createSignal<TData | undefined>(
    query.data,
  )

  // Update frozen data when not navigating
  const currentData = createMemo(() => {
    if (!isNavigating()) {
      const data = query.data
      setFrozenData(() => data) // Use function form to avoid SolidJS treating functions as updaters
      return data
    }
    return frozenData()
  })

  return createMemo(
    () =>
      ({
        ...query,
        data: currentData(),
      }) as UseQueryResult<TData, TError>,
  )
}

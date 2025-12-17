import type { FilterFormat, SearchFilters } from "./types"

export function filterEmpty(s: SearchFilters) {
  const result: Record<string, any> = {}
  Object.entries(s).forEach(([k, v]) => {
    if (typeof v === "boolean") {
      result[k] = v
    } else if (v?.length) {
      result[k] = v
    }
  })
  return result
}

export function buildSearchQuery(filter: Record<string, any>, page: number) {
  return {
    page,
    perPage: 20,
    ids: filter.ids,
    search: filter.name,
    onList:
      filter.onList?.[0]?.value === "true"
        ? true
        : filter.onList?.[0]?.value === "false"
          ? false
          : undefined,
    genre: filter.genres?.map((g: FilterFormat) => g.value),
    seasonYear: filter.years?.length
      ? parseInt(filter.years[0]!.value)
      : undefined,
    season: filter.seasons?.[0]?.value,
    format: filter.formats?.map((f: FilterFormat) => f.value),
    status: filter.status?.map((s: FilterFormat) => s.value),
    sort: [filter.sort?.[0]?.value ?? "SEARCH_MATCH"],
  }
}

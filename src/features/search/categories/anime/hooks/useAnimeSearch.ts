import { createSignal, createMemo } from "solid-js"
import type { FilterFormat, SearchFilters } from "../types"
import { debounce } from "@/features/explore/utils/search-utils"

export function useAnimeSearch() {
  const [search, setSearch] = createSignal<SearchFilters>({
    name: "",
    genres: [],
    years: [],
    seasons: [],
    formats: [],
    status: [],
    sort: [{ value: "TRENDING_DESC", label: "Trending" }],
    ids: undefined,
    onList: [],
  })

  const [inputText, setInputText] = createSignal("")
  const [mobileFiltersOpen, setMobileFiltersOpen] = createSignal(false)

  // Compute filter badges (excluding "Trending" sort)
  const filterList = createMemo(() => {
    const s = search()
    return Object.values(s)
      .flatMap((val) => {
        if (Array.isArray(val)) {
          if (typeof val[0] === "number") return "IDs"
          return val.map((v) => (v as FilterFormat).label)
        }
        return val
      })
      .filter((a) => a && a !== "Trending")
  })

  // Remove a specific filter
  const removeFilter = (label: string) => {
    const currentSearch = search()
    if (label === "IDs") {
      setSearch((s) => ({ ...s, ids: undefined }))
      return
    }

    const updated = { ...currentSearch }
    Object.entries(updated).forEach(([key, value]) => {
      const nk = key as keyof typeof updated
      if (Array.isArray(value)) {
        ;(updated[nk] as FilterFormat[]) = value.filter(
          (v) => (v as FilterFormat).label !== label,
        ) as FilterFormat[]
      } else if (value === label) {
        ;(updated[nk] as string) = ""
      }
    })
    setSearch(updated)
  }

  // Clear all filters
  const clear = () => {
    setSearch({
      name: "",
      genres: [],
      years: [],
      seasons: [],
      formats: [],
      status: [],
      sort: [{ value: "TRENDING_DESC", label: "Trending" }],
      ids: undefined,
      onList: [],
    })
    setInputText("")
  }

  // Debounced search update
  const debouncedUpdateSearch = debounce((value: string) => {
    setSearch((s) => ({ ...s, name: value }))
  }, 200)

  const updateText = (value: string) => {
    setInputText(value)
    debouncedUpdateSearch(value)
  }

  return {
    search,
    setSearch,
    inputText,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    filterList,
    removeFilter,
    clear,
    updateText,
  }
}

// routes/_home/explore/search.tsx
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  on,
  onMount,
  Show,
} from "solid-js"
import { createFileRoute, ClientOnly } from "@tanstack/solid-router"
import { Search as SearchIcon, X, SlidersHorizontal } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { MultiCombobox } from "@/features/explore/components/ui/combobox/multicombo"
import { SingleCombobox } from "@/features/explore/components/ui/combobox/singlecombo"
import {
  genres,
  years,
  seasons,
  formats,
  status,
  sort,
  onlist,
} from "@/features/explore/utils/values"
import { debounce } from "@/features/explore/utils/search-utils"
import { SmallAnimeCard } from "@/features/explore/components/ui/cards/small-card"
import { SkeletonAnimeCard } from "@/features/explore/components/ui/cards/skeleton-card"
import { Search } from "@/features/explore/api/anilist/queries"
import { queryAniList } from "@/features/explore/api/anilist/query-wrapper"
import { Portal } from "solid-js/web"

// ============================================================================
// Types
// ============================================================================

interface FilterFormat {
  value: string
  label: string
}

interface SearchFilters {
  name: string
  genres: FilterFormat[]
  years: FilterFormat[]
  seasons: FilterFormat[]
  formats: FilterFormat[]
  status: FilterFormat[]
  sort: FilterFormat[]
  ids?: number[]
  onList: FilterFormat[]
}

export const Route = createFileRoute("/_home/explore/search")({
  component: SearchPage,
})

// ============================================================================
// LoadingSkeletons
// ============================================================================

function LoadingSkeletons() {
  return (
    <div class="flex flex-wrap justify-center gap-4 pb-10">
      <For each={Array.from({ length: 20 })}>{() => <SkeletonAnimeCard />}</For>
    </div>
  )
}

// ============================================================================
// SearchPage - Main Layout & Logic
// ============================================================================

function SearchPage() {
  const { urqlClient, user } = Route.useRouteContext()()

  // State
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

  // Computed
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

  // Logic
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

  const debouncedUpdateSearch = debounce((value: string) => {
    setSearch((s) => ({ ...s, name: value }))
  }, 200)

  const updateText = (value: string) => {
    setInputText(value)
    debouncedUpdateSearch(value)
  }

  return (
    <div class="relative flex min-h-[calc(100vh-4rem)] w-full flex-col md:flex-row">
      {/* ================= Desktop Sidebar ================= */}
      <aside class="hidden w-64 shrink-0 flex-col gap-6 border-r border-white/5 p-6 md:flex lg:w-72">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={clear}
            class="text-muted-foreground hover:text-foreground h-auto px-2 py-1 text-xs"
          >
            Reset
          </Button>
        </div>

        <FilterGroups
          search={search}
          setSearch={setSearch}
          user={user}
          isMobile={false}
        />
      </aside>

      {/* ================= Main Content Area ================= */}
      <div class="flex min-w-0 flex-1 flex-col">
        {/* Sticky Header */}
        <header class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30 flex flex-col gap-4 border-b border-white/5 p-4 backdrop-blur md:px-8 md:py-5">
          <div class="flex items-center gap-3">
            {/* Mobile: Filter Trigger */}
            <Button
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal class="size-4" />
            </Button>

            {/* Search Input */}
            <TextField
              value={inputText()}
              onChange={updateText}
              class="relative max-w-2xl flex-1"
            >
              <SearchIcon class="text-muted-foreground absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2" />
              <TextFieldInput placeholder="Search anime..." class="pl-9" />
            </TextField>

            {/* Sort Dropdown (Visible on Desktop & Mobile Header) */}
            <div class="hidden w-[140px] shrink-0 sm:block">
              <SingleCombobox
                items={sort as any}
                value={search().sort}
                onChange={(value) => setSearch((s) => ({ ...s, sort: value }))}
                placeholder="Sort"
                class="bg-background/50"
              />
            </div>
          </div>

          {/* Active Filter Badges */}
          <Show when={filterList().length > 0}>
            <div class="flex flex-wrap gap-2">
              <For each={filterList()}>
                {(item) => (
                  <button
                    class="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
                    onClick={() => removeFilter(item as string)}
                  >
                    {item}
                    <X class="size-3 opacity-70" />
                  </button>
                )}
              </For>
            </div>
          </Show>
        </header>

        {/* Scrollable Results */}
        <div class="flex-1 p-4 md:p-8">
          <ClientOnly fallback={<LoadingSkeletons />}>
            <SearchResults urqlClient={urqlClient} search={search} />
          </ClientOnly>
        </div>
      </div>

      {/* ================= Mobile Filters Drawer ================= */}
      <Show when={mobileFiltersOpen()}>
        <Portal>
          <div class="animate-in slide-in-from-bottom-10 fade-in bg-background fixed inset-0 z-50 flex flex-col duration-200 md:hidden">
            <div class="flex items-center justify-between border-b border-white/10 p-4">
              <div class="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <X class="size-5" />
                </Button>
                <span class="text-lg font-bold">Filters</span>
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  clear()
                  setMobileFiltersOpen(false)
                }}
                class="text-primary hover:text-primary/80"
              >
                Reset
              </Button>
            </div>

            <div class="flex-1 overflow-y-auto p-6">
              <div class="mb-6">
                <div class="text-muted-foreground mb-2 text-sm font-medium">
                  Sort By
                </div>
                <SingleCombobox
                  items={sort as any}
                  value={search().sort}
                  onChange={(value) =>
                    setSearch((s) => ({ ...s, sort: value }))
                  }
                />
              </div>
              <FilterGroups
                search={search}
                setSearch={setSearch}
                user={user}
                isMobile={true}
              />
            </div>

            <div class="border-t border-white/10 p-4">
              <Button
                class="w-full"
                onClick={() => setMobileFiltersOpen(false)}
              >
                View Results
              </Button>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  )
}

// ============================================================================
// FilterGroups - Reusable logic for Sidebar & Mobile
// ============================================================================

interface FilterGroupsProps {
  search: () => SearchFilters
  setSearch: (
    s: SearchFilters | ((prev: SearchFilters) => SearchFilters),
  ) => void
  user: any
  isMobile: boolean
}

function FilterGroups(props: FilterGroupsProps) {
  const Label = (p: { children: any }) => (
    <div class="text-muted-foreground mb-2 text-sm font-medium">
      {p.children}
    </div>
  )

  return (
    <div class="flex flex-col gap-6">
      {/* My List */}
      <Show when={props.user?.id}>
        <div>
          <Label>My List</Label>
          <SingleCombobox
            items={onlist as any}
            value={props.search().onList}
            onChange={(value) =>
              props.setSearch((s) => ({ ...s, onList: value }))
            }
            placeholder="Select list..."
          />
        </div>
      </Show>

      {/* Genres */}
      <div>
        <Label>Genres</Label>
        <MultiCombobox
          items={genres as any}
          value={props.search().genres}
          onChange={(value) =>
            props.setSearch((s) => ({ ...s, genres: value }))
          }
          placeholder="Select genres..."
        />
      </div>

      {/* Season & Year Grid */}
      <div class="grid grid-cols-2 gap-3">
        <div>
          <Label>Season</Label>
          <SingleCombobox
            items={seasons as any}
            value={props.search().seasons}
            onChange={(value) =>
              props.setSearch((s) => ({ ...s, seasons: value }))
            }
            placeholder="Any"
          />
        </div>
        <div>
          <Label>Year</Label>
          <SingleCombobox
            items={years as any}
            value={props.search().years}
            onChange={(value) =>
              props.setSearch((s) => ({ ...s, years: value }))
            }
            placeholder="Any"
          />
        </div>
      </div>

      {/* Formats */}
      <div>
        <Label>Format</Label>
        <MultiCombobox
          items={formats as any}
          value={props.search().formats}
          onChange={(value) =>
            props.setSearch((s) => ({ ...s, formats: value }))
          }
          placeholder="Any format"
        />
      </div>

      {/* Status */}
      <div>
        <Label>Status</Label>
        <MultiCombobox
          items={status as any}
          value={props.search().status}
          onChange={(value) =>
            props.setSearch((s) => ({ ...s, status: value }))
          }
          placeholder="Any status"
        />
      </div>
    </div>
  )
}

// ============================================================================
// SearchResults - Logic
// ============================================================================

interface SearchResultsProps {
  urqlClient: any
  search: () => SearchFilters
}

function SearchResults(props: SearchResultsProps) {
  const [results, setResults] = createSignal<any[]>([])
  const [isLoading, setIsLoading] = createSignal(false)
  const [hasMore, setHasMore] = createSignal(true)
  const [error, setError] = createSignal<string | null>(null)
  const [currentPage, setCurrentPage] = createSignal(1)

  let sentinelRef: HTMLDivElement | undefined

  // Serialization for change detection
  const filtersKey = createMemo(() => JSON.stringify(props.search()))

  // Helpers
  const filterEmpty = (s: SearchFilters) => {
    const result: Record<string, any> = {}
    Object.entries(s).forEach(([k, v]) => {
      if (typeof v === "boolean") result[k] = v
      else if (v?.length) result[k] = v
    })
    return result
  }

  const buildSearchQuery = (filter: Record<string, any>, page: number) => {
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

  const loadPage = async (page: number) => {
    if (isLoading() || (page > 1 && !hasMore())) return
    setIsLoading(true)
    setError(null)

    try {
      const filtered = filterEmpty(props.search())
      const vars = buildSearchQuery(filtered, page)
      const result = await queryAniList(
        props.urqlClient,
        undefined,
        Search,
        vars,
      )

      if (result.error) {
        setError(result.error.message || "Failed to fetch results")
        return
      }

      const media = result.data?.Page?.media || []
      if (page === 1) setResults(media)
      else setResults((prev) => [...prev, ...media])

      setHasMore(result.data?.Page?.pageInfo?.hasNextPage ?? false)
      setCurrentPage(page)
    } catch (err) {
      console.error(err)
      setError(String(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Effects
  createEffect(
    on(filtersKey, () => {
      setResults([])
      setCurrentPage(1)
      setHasMore(true)
      loadPage(1)
    }),
  )

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore() && !isLoading()) {
          loadPage(currentPage() + 1)
        }
      },
      { threshold: 0.1 },
    )

    if (sentinelRef) observer.observe(sentinelRef)
    return () => observer.disconnect()
  })

  return (
    <>
      <Show
        when={results().length > 0}
        fallback={
          <Show when={!isLoading()} fallback={<LoadingSkeletons />}>
            <div class="flex h-60 w-full flex-col items-center justify-center text-center">
              <div class="text-2xl font-bold">No results found</div>
              <div class="text-muted-foreground">
                Try adjusting your filters
              </div>
            </div>
          </Show>
        }
      >
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <For each={results()}>
            {(anime) => <SmallAnimeCard media={anime} />}
          </For>
        </div>
      </Show>

      <Show when={isLoading() && results().length > 0}>
        <div class="text-muted-foreground flex justify-center p-8 text-sm">
          Loading more...
        </div>
      </Show>

      <div ref={sentinelRef} class="h-4 w-full" />
    </>
  )
}

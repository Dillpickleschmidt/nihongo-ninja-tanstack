import { For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ClientOnly } from "@tanstack/solid-router"
import { SkeletonAnimeCard } from "@/features/explore/components/ui/cards/skeleton-card"
import { useAnimeSearch } from "./hooks/useAnimeSearch"
import { AnimeFilters } from "./AnimeFilters"
import { AnimeResults } from "./AnimeResults"
import { MobileFiltersDrawer } from "../../components/MobileFiltersDrawer"
import { SearchHeader } from "../../components/SearchHeader"
import { CategoryLayout } from "../../components/CategoryLayout"
import type { FilterFormat } from "./types"
import { sort } from "@/features/explore/utils/values"

interface AnimeContentProps {
  activeCategory: () => string
  onCategoryChange: (category: string) => void
  urqlClient: any
  user: any
}

export function AnimeContent(props: AnimeContentProps) {
  const {
    search,
    setSearch,
    inputText,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    filterList,
    removeFilter,
    clear,
    updateText,
  } = useAnimeSearch()

  return (
    <CategoryLayout
      sidebar={
        <div class="flex w-full flex-col gap-6">
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

          <AnimeFilters
            search={search}
            setSearch={setSearch}
            user={props.user}
            isMobile={false}
          />
        </div>
      }
    >
      {/* Sticky Header */}
      <SearchHeader
        activeCategory={props.activeCategory}
        onCategoryChange={props.onCategoryChange}
        searchValue={inputText}
        onSearchChange={updateText}
        sortValue={() => search().sort}
        onSortChange={(value) => setSearch((s) => ({ ...s, sort: value }))}
        sortItems={sort}
        filterBadges={filterList}
        onRemoveFilter={removeFilter}
        onMobileFiltersOpen={() => setMobileFiltersOpen(true)}
      />

      {/* Scrollable Results */}
      <div class="flex-1 p-4 md:p-8">
        <ClientOnly
          fallback={
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              <For each={Array.from({ length: 50 })}>
                {() => <SkeletonAnimeCard />}
              </For>
            </div>
          }
        >
          <AnimeResults urqlClient={props.urqlClient} search={search} />
        </ClientOnly>
      </div>

      {/* Mobile Filters Drawer */}
      <MobileFiltersDrawer
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        onReset={clear}
      >
        <AnimeFilters
          search={search}
          setSearch={setSearch}
          user={props.user}
          isMobile={true}
        />
      </MobileFiltersDrawer>
    </CategoryLayout>
  )
}

import { Search as SearchIcon, SlidersHorizontal } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { SingleCombobox } from "@/features/explore/components/ui/combobox/singlecombo"
import type { FilterFormat } from "../categories/anime/types"
import { CategoryTabs } from "./CategoryTabs"
import { FilterBadges } from "./FilterBadges"

interface SearchHeaderProps {
  activeCategory: () => string
  onCategoryChange: (category: string) => void
  searchValue: () => string
  onSearchChange: (value: string) => void
  sortValue: () => FilterFormat[]
  onSortChange: (value: FilterFormat[]) => void
  sortItems: readonly FilterFormat[]
  filterBadges: () => (string | number)[]
  onRemoveFilter: (label: string) => void
  onMobileFiltersOpen: () => void
}

export function SearchHeader(props: SearchHeaderProps) {
  const getPlaceholder = () => {
    const category = props.activeCategory()
    const placeholders: Record<string, string> = {
      Anime: "Search anime...",
      "Live Action": "Search live action...",
      YouTube: "Search YouTube...",
      Books: "Search books...",
      "Nihongo Ninja": "Search Nihongo Ninja...",
    }
    return placeholders[category] || "Search..."
  }

  return (
    <header class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30 flex flex-col gap-4 border-b border-white/5 p-4 backdrop-blur md:px-8 md:py-5">
      <div class="flex items-center justify-between gap-3">
        {/* Category Tabs */}
        <CategoryTabs
          activeCategory={props.activeCategory}
          onClick={props.onCategoryChange}
        />
        <div class="flex w-full items-center justify-end gap-3">
          {/* Mobile: Filter Trigger */}
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
            onClick={props.onMobileFiltersOpen}
          >
            <SlidersHorizontal class="size-4" />
          </Button>

          {/* Sort Dropdown (Visible on Desktop & Mobile Header) */}
          <div class="hidden w-[140px] shrink-0 sm:block">
            <SingleCombobox
              items={props.sortItems}
              value={props.sortValue()}
              onChange={props.onSortChange}
              placeholder="Sort"
              class="bg-background/50"
            />
          </div>

          {/* Search Input */}
          <TextField
            value={props.searchValue()}
            onChange={props.onSearchChange}
            class="relative max-w-lg flex-1"
          >
            <SearchIcon class="text-muted-foreground absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2" />
            <TextFieldInput placeholder={getPlaceholder()} class="pl-9" />
          </TextField>
        </div>
      </div>

      {/* Active Filter Badges */}
      <FilterBadges
        badges={props.filterBadges}
        onRemove={props.onRemoveFilter}
      />
    </header>
  )
}

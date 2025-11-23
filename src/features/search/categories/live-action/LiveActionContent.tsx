import { SearchHeader } from "../../components/SearchHeader"
import { CategoryLayout } from "../../components/CategoryLayout"

interface LiveActionContentProps {
  activeCategory: () => string
  onCategoryChange: (category: string) => void
}

export function LiveActionContent(props: LiveActionContentProps) {
  return (
    <CategoryLayout sidebar={<div />}>
      {/* Sticky Header */}
      <SearchHeader
        activeCategory={props.activeCategory}
        onCategoryChange={props.onCategoryChange}
        searchValue={() => ""}
        onSearchChange={() => {}}
        sortValue={() => []}
        onSortChange={() => {}}
        sortItems={[]}
        filterBadges={() => []}
        onRemoveFilter={() => {}}
        onMobileFiltersOpen={() => {}}
      />

      {/* Content */}
      <div class="flex flex-1 items-center justify-center p-4">
        <div class="text-center">
          <div class="mb-2 text-4xl font-bold">Coming Soon</div>
          <div class="text-muted-foreground text-lg">
            Live Action search is not yet available
          </div>
        </div>
      </div>
    </CategoryLayout>
  )
}

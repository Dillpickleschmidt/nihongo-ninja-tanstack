import { For } from "solid-js"
import { CATEGORIES } from "../types"
import { CategoryButton } from "./CategoryButton"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

interface CategoryTabsProps {
  activeCategory: () => string
  onClick: (category: string) => void
}

export function CategoryTabs(props: CategoryTabsProps) {
  return (
    <>
      {/* Desktop: Category Tabs */}
      <SSRMediaQuery showFrom="lg">
        <div class="flex gap-2">
          <For each={CATEGORIES}>
            {(category) => (
              <CategoryButton
                category={category}
                activeCategory={props.activeCategory}
                onClick={props.onClick}
              />
            )}
          </For>
        </div>
      </SSRMediaQuery>

      {/* Mobile: Category Select */}
      <SSRMediaQuery hideFrom="lg">
        <Select
          value={props.activeCategory()}
          onChange={props.onClick}
          options={CATEGORIES}
          itemComponent={(itemProps) => (
            <SelectItem item={itemProps.item}>
              {itemProps.item.rawValue}
            </SelectItem>
          )}
        >
          <SelectTrigger class="w-auto min-w-32">
            <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </SSRMediaQuery>
    </>
  )
}

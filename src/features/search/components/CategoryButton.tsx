import { Button } from "@/components/ui/button"
import type { CategoryType } from "../types"

interface CategoryButtonProps {
  category: CategoryType
  activeCategory: () => CategoryType
  onClick: (category: CategoryType) => void
}

export function CategoryButton(props: CategoryButtonProps) {
  const isActive = () => props.activeCategory() === props.category

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => props.onClick(props.category)}
      class="group relative text-sm hover:bg-transparent"
    >
      <span class="flex flex-col items-center gap-1">
        <span
          class={`ease-instant-hover-100 ${isActive() ? "font-semibold" : "group-hover:opacity-40"}`}
        >
          {props.category}
        </span>
        <div class="absolute bottom-0 w-full px-2.5">
          <div
            class={`h-[1.5px] w-full bg-current transition-all ${
              isActive() ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </span>
    </Button>
  )
}

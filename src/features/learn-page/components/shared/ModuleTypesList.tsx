import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { cn } from "@/utils"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/features/learn-page/utils/loader-helpers"

interface ModuleTypesListProps {
  variant?: "desktop" | "mobile"
}

const moduleTypes = [
  { id: "grammar-notes", label: "Grammar Notes" },
  { id: "kanji", label: "Jpdb.io (Kanji)" },
  { id: "sentence-practice", label: "Sentence Practice" },
  { id: "conjugation-practice", label: "Conjugation" },
  { id: "counter-practice", label: "Counters" },
  { id: "vocab-list", label: "Vocab List" },
  { id: "vocab-practice", label: "Vocab Practice" },
  { id: "listening-material", label: "Listening Material" },
  { id: "misc", label: "Misc" },
]

export function ModuleTypesList(props: ModuleTypesListProps) {
  return (
    <div class={props.variant === "mobile" ? "space-y-1" : "space-y-2"}>
      <For each={moduleTypes}>
        {(moduleType) => {
          const Icon = getModuleIcon(moduleType.id)
          const iconClasses = getModuleIconClasses(moduleType.id)

          return (
            <SheetClose
              as={Button}
              variant="ghost"
              class={cn(
                "w-full justify-start gap-3",
                props.variant === "mobile"
                  ? "h-12"
                  : "border-card-foreground/70 bg-card text-muted-foreground flex h-12 w-full justify-between rounded-md border bg-gradient-to-br text-sm whitespace-nowrap backdrop-blur-sm transition-all duration-200 dark:from-neutral-600/10 dark:to-gray-600/5",
              )}
            >
              <Icon
                class={cn(
                  iconClasses,
                  props.variant === "mobile" ? "size-4!" : "size-4.5!",
                )}
              />
              <span class="text-sm">{moduleType.label}</span>
              <div />
            </SheetClose>
          )
        }}
      </For>
    </div>
  )
}

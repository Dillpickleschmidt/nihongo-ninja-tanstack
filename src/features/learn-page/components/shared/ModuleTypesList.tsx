import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { cn } from "@/utils"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/features/learn-page/utils/loader-helpers"

interface ModuleTypesListProps {
  fromSheet?: boolean
}

const moduleTypes = [
  { id: "video", label: "Video" },
  { id: "guides", label: "Guides" },
  { id: "lesson", label: "Lessons" },
  { id: "vocab-list", label: "Vocab List" },
  { id: "vocab-practice", label: "Vocab Practice" },
  { id: "sentence-practice", label: "Sentence Practice" },
  { id: "conjugation-practice", label: "Conjugation" },
  { id: "grammar-cheatsheet", label: "Cheatsheets" },
  { id: "counter-practice", label: "Counters" },
  { id: "misc", label: "Misc" },
]

// Override specific colors for this component
function getOverriddenIconClasses(moduleType: string): string {
  if (moduleType === "video") {
    return "text-rose-600 dark:text-rose-500"
  }
  return getModuleIconClasses(moduleType)
}

export function ModuleTypesList(props: ModuleTypesListProps) {
  const fromSheet = () => props.fromSheet ?? false
  return (
    <div class="space-y-1">
      <For each={moduleTypes}>
        {(moduleType) => {
          const Icon = getModuleIcon(moduleType.id)
          const iconClasses = getOverriddenIconClasses(moduleType.id)

          const buttonClass = cn(
            "w-full justify-start gap-3",
            fromSheet() ? "h-12" : "h-11",
          )

          const buttonContent = (
            <>
              <Icon class={cn(iconClasses, "size-4!")} />
              <span class="text-sm">{moduleType.label}</span>
              <div />
            </>
          )

          return fromSheet() ? (
            <SheetClose as={Button} variant="ghost" class={buttonClass}>
              {buttonContent}
            </SheetClose>
          ) : (
            <Button variant="ghost" class={buttonClass}>
              {buttonContent}
            </Button>
          )
        }}
      </For>
    </div>
  )
}

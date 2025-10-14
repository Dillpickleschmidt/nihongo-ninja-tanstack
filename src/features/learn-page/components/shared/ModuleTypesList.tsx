import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
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
  { id: "video", label: "Video", href: "/video" },
  { id: "extension", label: "Extension", href: "/extension" },
  { id: "guides", label: "Guides", href: "/guides" },
  { id: "lesson", label: "Lessons", href: "/lessons" },
  { id: "vocab-list", label: "Vocab List", href: "/vocab-list" },
  { id: "vocab-practice", label: "Vocab Practice", href: "/vocab" },
  {
    id: "sentence-practice",
    label: "Sentence Practice",
    href: "/sentence-practice",
  },
  {
    id: "conjugation-practice",
    label: "Conjugation",
    href: "/conjugation",
  },
  {
    id: "grammar-cheatsheet",
    label: "Cheatsheets",
    href: "/cheatsheets",
  },
  { id: "counter-practice", label: "Counters", href: "/counters" },
  { id: "misc", label: "Misc", href: "/misc" },
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
            "w-full justify-start gap-3 hover:bg-transparent hover:text-muted-foreground transition-all ease-instant-hover-200 origin-left",
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
            <SheetClose>
              <Link to={moduleType.href}>
                <Button variant="ghost" class={buttonClass}>
                  {buttonContent}
                </Button>
              </Link>
            </SheetClose>
          ) : (
            <Link to={moduleType.href}>
              <Button variant="ghost" class={buttonClass}>
                {buttonContent}
              </Button>
            </Link>
          )
        }}
      </For>
    </div>
  )
}

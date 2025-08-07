// features/vocab-page/center-panel/CenterNavBar.tsx
import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { Plus, Search, Settings } from "lucide-solid"
import { cn } from "@/utils"

// Custom Card/Deck Icon Component
const CardDeckIcon = (props: { class?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={props.class}
  >
    {/* Back cards (offset outlines) */}
    <path d="M5 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5" />
    <path d="M3 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3" />
    {/* Front card (complete outline) */}
    <rect x="1" y="3" width="16" height="12" rx="2" />
    {/* Lines representing text on front card */}
    <line x1="4" y1="7" x2="12" y2="7" />
    <line x1="4" y1="10" x2="10" y2="10" />
  </svg>
)

export type NavTabId =
  | "vocab-cards"
  | "deck-builder"
  | "browse-decks"
  | "overrides"

interface NavItem {
  id: NavTabId
  label: string
  icon: any
}

interface CenterNavBarProps {
  activeTab: NavTabId
  onTabChange: (tabId: NavTabId) => void
}

const navItems: NavItem[] = [
  { id: "vocab-cards", label: "Vocab Cards", icon: CardDeckIcon },
  { id: "deck-builder", label: "Create Decks", icon: Plus },
  { id: "browse-decks", label: "Browse Decks", icon: Search },
  { id: "overrides", label: "Overrides", icon: Settings },
]

export function CenterNavBar(props: CenterNavBarProps) {
  return (
    <div class="sticky top-0 z-10 flex items-center justify-center px-4 py-3">
      <div class="bg-background/50 border-card-foreground/70 flex rounded-[10px] border p-1 shadow-md backdrop-blur-md">
        <For each={navItems}>
          {(item) => {
            const isActive = () => props.activeTab === item.id
            const IconComponent = item.icon

            return (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => props.onTabChange(item.id)}
                class={cn(
                  "flex h-8 items-center gap-2 rounded-md px-3 transition-all duration-200",
                  isActive()
                    ? "bg-background/70 text-foreground font-medium shadow backdrop-blur-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                )}
              >
                <IconComponent class="h-3.5 w-3.5" />
                <span class="text-xs">{item.label}</span>
              </Button>
            )
          }}
        </For>
      </div>
    </div>
  )
}

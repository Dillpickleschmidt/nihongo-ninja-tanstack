import { Component, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import type { MobileContentView } from "@/features/learn-page/context/LearnPageContext"
import {
  BookOpen,
  Star,
  TrendingUp,
  AlertTriangle,
  History,
} from "lucide-solid"
import { ModuleTypesList } from "../shared/ModuleTypesList"

interface NavigationSheetProps {
  activeView: MobileContentView
  setActiveView?: (view: MobileContentView) => void
  variant?: "mobile" | "desktop"
}

export const NavigationSheet: Component<NavigationSheetProps> = (props) => {
  return (
    <nav class="mt-4 flex flex-col space-y-1">
      <Show when={props.variant === "mobile"}>
        <div class="space-y-1">
          <Button
            variant="ghost"
            onClick={() => props.setActiveView?.("learning-path")}
            class={cn(
              "hover:bg-accent/50 h-12 w-full justify-start rounded-lg text-left font-medium",
              props.activeView === "learning-path" &&
                "bg-accent text-accent-foreground",
            )}
          >
            <BookOpen
              class={cn(
                "mr-3 h-5 w-5",
                props.activeView === "learning-path"
                  ? "text-accent-foreground"
                  : "text-muted-foreground",
              )}
            />
            <span>Learning Path</span>
          </Button>

          <Button
            variant="ghost"
            onClick={() => props.setActiveView?.("featured-content")}
            class={cn(
              "hover:bg-accent/50 h-12 w-full justify-start rounded-lg text-left font-medium",
              props.activeView === "featured-content" &&
                "bg-accent text-accent-foreground",
            )}
          >
            <Star
              class={cn(
                "mr-3 h-5 w-5",
                props.activeView === "featured-content"
                  ? "text-accent-foreground"
                  : "text-muted-foreground",
              )}
            />
            <span>Featured Content</span>
          </Button>
        </div>

        <div class="border-border/50 space-y-1 border-t pt-2">
          <Button
            variant="ghost"
            onClick={() => props.setActiveView?.("your-progress")}
            class={cn(
              "hover:bg-accent/50 h-12 w-full justify-start rounded-lg text-left font-medium",
              props.activeView === "your-progress" &&
                "bg-accent text-accent-foreground",
            )}
          >
            <TrendingUp
              class={cn(
                "mr-3 h-5 w-5",
                props.activeView === "your-progress"
                  ? "text-accent-foreground"
                  : "text-muted-foreground",
              )}
            />
            <span>Your Progress</span>
          </Button>

          <Button
            variant="ghost"
            onClick={() => props.setActiveView?.("your-struggles")}
            class={cn(
              "hover:bg-accent/50 h-12 w-full justify-start rounded-lg text-left font-medium",
              props.activeView === "your-struggles" &&
                "bg-accent text-accent-foreground",
            )}
          >
            <AlertTriangle
              class={cn(
                "mr-3 h-5 w-5",
                props.activeView === "your-struggles"
                  ? "text-accent-foreground"
                  : "text-muted-foreground",
              )}
            />
            <span>Your Struggles</span>
          </Button>

          <Button
            variant="ghost"
            onClick={() => props.setActiveView?.("your-history")}
            class={cn(
              "hover:bg-accent/50 h-12 w-full justify-start rounded-lg text-left font-medium",
              props.activeView === "your-history" &&
                "bg-accent text-accent-foreground",
            )}
          >
            <History
              class={cn(
                "mr-3 h-5 w-5",
                props.activeView === "your-history"
                  ? "text-accent-foreground"
                  : "text-muted-foreground",
              )}
            />
            <span>Your History</span>
          </Button>
        </div>

        <div class="border-border/50 space-y-1 border-t pt-2">
          <div class="text-muted-foreground mb-2 px-2 text-xs tracking-wider uppercase">
            Module Types
          </div>
          <ModuleTypesList variant="mobile" />
        </div>
      </Show>

      <Show when={props.variant === "desktop"}>
        <div class="space-y-1">
          <div class="text-muted-foreground mb-2 px-2 text-xs tracking-wider uppercase">
            Module Types
          </div>
          <ModuleTypesList variant="mobile" />
        </div>
      </Show>
    </nav>
  )
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-solid"

interface DeckHeaderProps {
  confirmClearOpen: () => boolean
  setConfirmClearOpen: (open: boolean) => void
  onClear: () => void
}

export function DeckHeader(props: DeckHeaderProps) {
  return (
    <div class="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 -mx-2 px-2 py-2 backdrop-blur">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl leading-tight font-semibold">
            Create a Custom Deck
          </h1>
          <p class="text-muted-foreground text-sm">
            Build vocabulary with translations, examples, and more.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <Dialog
            open={props.confirmClearOpen()}
            onOpenChange={props.setConfirmClearOpen}
          >
            <DialogTrigger>
              <Button variant="ghost" size="sm" class="hover:cursor-pointer">
                Clear
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Clear draft?</DialogTitle>
                <DialogDescription>
                  This removes all fields and vocabulary items.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="ghost"
                  onClick={() => props.setConfirmClearOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    props.onClear()
                    props.setConfirmClearOpen(false)
                  }}
                >
                  Clear
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="sm" class="cursor-pointer">
                <MoreHorizontal class="mr-2 size-4" />
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => {}}>
                Import CSV…
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>
                Import JSON…
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>
                Export JSON
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" class="cursor-pointer">
            Save Deck
          </Button>
        </div>
      </div>
    </div>
  )
}

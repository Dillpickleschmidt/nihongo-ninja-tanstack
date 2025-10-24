import { createSignal, For, type JSX } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getMinifiedTextbookEntries } from "@/data/utils/core"
import type { TextbookIDEnum } from "@/data/types"

interface TextbookSelectionDialogProps {
  children: JSX.Element
  onNavigationStart?: () => void
}

export default function TextbookSelectionDialog(
  props: TextbookSelectionDialogProps,
) {
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const navigate = useNavigate()

  const textbookEntries = getMinifiedTextbookEntries()
  const otherTextbooks = () =>
    textbookEntries.filter(([id]) => id !== "getting_started")

  const handleTextbookSelect = (textbookId: TextbookIDEnum) => {
    // Get first chapter of selected textbook
    const textbook = textbookEntries.find(([id]) => id === textbookId)?.[1]
    const firstChapterSlug = textbook?.chapters[0]?.slug

    if (!firstChapterSlug) return
    setIsDialogOpen(false)
    props.onNavigationStart?.()

    // let the route loader handle settings update
    navigate({
      to: "/learn/$textbookId/$chapterSlug",
      params: { textbookId, chapterSlug: firstChapterSlug },
    })
  }

  return (
    <Dialog open={isDialogOpen()} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a textbook</DialogTitle>
        </DialogHeader>
        <div class="grid grid-cols-2 gap-4">
          <For each={otherTextbooks()}>
            {([textbookId, textbook]) => (
              <Button
                variant="outline"
                class="w-full"
                onClick={() => handleTextbookSelect(textbookId)}
              >
                {textbook.short_name || textbook.name}
              </Button>
            )}
          </For>
        </div>
      </DialogContent>
    </Dialog>
  )
}

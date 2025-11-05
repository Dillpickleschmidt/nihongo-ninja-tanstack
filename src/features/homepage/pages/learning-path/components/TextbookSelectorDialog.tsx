import { createSignal, For, type JSX } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
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
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"

interface TextbookSelectorDialogProps {
  children: JSX.Element
  link?: string
  userId: string | null
}

export default function TextbookSelectorDialog(
  props: TextbookSelectorDialogProps,
) {
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const textbookEntries = getMinifiedTextbookEntries()
  const otherTextbooks = () =>
    textbookEntries.filter(([id]) => id !== "getting_started")

  const handleLearningPathSelect = async (textbookId: TextbookIDEnum) => {
    // Get first chapter of selected textbook
    const textbook = textbookEntries.find(([id]) => id === textbookId)?.[1]
    const firstChapterSlug = textbook?.chapters[0]?.slug

    if (!firstChapterSlug) return

    setIsDialogOpen(false)

    if (props.link) {
      // Navigate - route loader will handle settings update
      navigate({
        to: props.link as any,
        params: { textbookId, chapterSlug: firstChapterSlug },
      })
    } else {
      // No navigation - manually update settings cache
      await applyUserSettingsUpdate(
        props.userId,
        queryClient,
        {
          "active-learning-path": textbookId,
          "active-chapter": firstChapterSlug,
        },
        { awaitDb: false },
      )

      // Scroll to top after DOM updates - use double RAF for reliability
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        })
      })
    }
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
                onClick={() => handleLearningPathSelect(textbookId)}
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

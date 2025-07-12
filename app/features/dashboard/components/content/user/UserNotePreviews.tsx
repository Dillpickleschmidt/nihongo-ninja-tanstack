// features/dashboard/components/content/user/UserNotePreviews.tsx
import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ArrowRight, Plus, Edit } from "lucide-solid"
import { cn } from "@/utils"

interface UserNotePreviewsProps {
  notes: Array<{
    id: string
    title: string
    content: string
    color: string
    createdAt: string
  }>
  variant: "mobile" | "desktop"
}

export function UserNotePreviews(props: UserNotePreviewsProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "yellow":
        return "from-yellow-500/20 to-amber-500/10 border-yellow-500/20"
      case "blue":
        return "from-blue-500/20 to-cyan-500/10 border-blue-500/20"
      case "green":
        return "from-green-500/20 to-emerald-500/10 border-green-500/20"
      case "purple":
        return "from-purple-500/20 to-indigo-500/10 border-purple-500/20"
      case "pink":
        return "from-pink-500/20 to-rose-500/10 border-pink-500/20"
      default:
        return "from-gray-500/20 to-slate-500/10 border-gray-500/20"
    }
  }

  if (props.variant === "mobile") {
    return (
      <div class="mt-6">
        <div class="mb-4 flex items-center justify-between pl-8">
          <div class="flex items-end">
            <h2 class="text-xl">Notes</h2>
            <p class="text-muted-foreground pb-1 pl-2 text-xs">
              Your Study Notes
            </p>
          </div>
          <ArrowRight class="mr-5 h-5 w-5" />
        </div>

        <div class="scrollbar-hide mb-5 flex gap-4 overflow-x-auto pr-4 pl-8">
          {/* Add new note card */}
          <Link to="/notes/new" class="flex-shrink-0">
            <div class="bg-background border-primary/30 flex h-40 w-48 items-center justify-center rounded-2xl border-2 border-dashed">
              <Plus class="text-primary/30 h-6 w-6" />
            </div>
          </Link>

          <For each={props.notes}>
            {(note) => (
              <div class="flex-shrink-0">
                <MobileNoteCard
                  note={note}
                  colorClasses={getColorClasses(note.color)}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-3">
      <div class="flex items-center justify-between px-8">
        <div>
          <h2 class="text-2xl font-bold">Study Notes</h2>
          <p class="text-muted-foreground">Your personal notes and reminders</p>
        </div>
        <Link
          to="/notes/new"
          class="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-2 rounded-lg px-4 py-2 transition-colors"
        >
          <Plus class="h-4 w-4" />
          <span class="text-sm font-medium">New Note</span>
        </Link>
      </div>

      {/* Horizontal scrolling list of notes */}
      <div class="mx-7 flex gap-6 overflow-x-auto px-1 pt-3 pb-3">
        <For each={props.notes}>
          {(note) => (
            <div class="flex-shrink-0">
              <DesktopNoteCard
                note={note}
                colorClasses={getColorClasses(note.color)}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

function DesktopNoteCard(props: {
  note: {
    id: string
    title: string
    content: string
    color: string
    createdAt: string
  }
  colorClasses: string
}) {
  const truncateContent = (content: string, maxLength: number) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Link
      to={`/notes/${props.note.id}`}
      class="group block transition-transform hover:scale-[1.02]"
    >
      <div
        class={cn(
          "relative h-48 w-[260px] overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-xl",
          "bg-gradient-to-br",
          props.colorClasses,
        )}
      >
        <div class="relative flex h-full flex-col justify-between p-6">
          <div class="flex items-start justify-between">
            <div class="min-w-0 flex-1">
              <h3 class="line-clamp-2 text-lg font-semibold text-white drop-shadow-md">
                {props.note.title}
              </h3>
            </div>
            <Edit class="h-5 w-5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div class="space-y-3">
            <p class="line-clamp-4 text-sm text-white/90 drop-shadow-sm">
              {truncateContent(props.note.content, 120)}
            </p>
            <div class="flex items-center justify-between">
              <span class="rounded-full bg-white/20 px-2 py-1 text-xs text-white/80 backdrop-blur-sm">
                {formatDate(props.note.createdAt)}
              </span>
              <div
                class={cn(
                  "h-3 w-3 rounded-full",
                  props.note.color === "yellow" && "bg-yellow-400",
                  props.note.color === "blue" && "bg-blue-400",
                  props.note.color === "green" && "bg-green-400",
                  props.note.color === "purple" && "bg-purple-400",
                  props.note.color === "pink" && "bg-pink-400",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function MobileNoteCard(props: {
  note: {
    id: string
    title: string
    content: string
    color: string
    createdAt: string
  }
  colorClasses: string
}) {
  const truncateContent = (content: string, maxLength: number) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Link
      to={`/notes/${props.note.id}`}
      class="transition-transform hover:scale-[99%]"
    >
      <div
        class={cn(
          "relative h-40 w-48 overflow-hidden rounded-2xl border backdrop-blur-sm",
          "bg-gradient-to-br",
          props.colorClasses,
        )}
      >
        <div class="relative z-10 flex h-full flex-col justify-between p-4">
          <div>
            <h3 class="line-clamp-2 text-sm font-semibold text-white drop-shadow-md">
              {props.note.title}
            </h3>
            <p class="mt-2 line-clamp-3 text-xs text-white/90 drop-shadow-sm">
              {truncateContent(props.note.content, 80)}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-white/80 drop-shadow-sm">
              {formatDate(props.note.createdAt)}
            </span>
            <div
              class={cn(
                "h-2 w-2 rounded-full",
                props.note.color === "yellow" && "bg-yellow-400",
                props.note.color === "blue" && "bg-blue-400",
                props.note.color === "green" && "bg-green-400",
                props.note.color === "purple" && "bg-purple-400",
                props.note.color === "pink" && "bg-pink-400",
              )}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

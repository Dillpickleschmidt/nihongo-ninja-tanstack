import { Link } from "@tanstack/solid-router"
import { ChevronLeft } from "lucide-solid"

interface ImportHeaderProps {
  title: string
  backLabel?: string
  backTo?: string
}

export function ImportHeader(props: ImportHeaderProps) {
  return (
    <div class="w-full">
      <div class="flex w-full items-center justify-between">
        <Link
          to={props.backTo || ".."}
          class="text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
        >
          <ChevronLeft class="size-4" />
          {props.backLabel || "Back"}
        </Link>

        <div class="text-muted-foreground hidden text-sm font-medium md:block">
          {props.title}
        </div>
      </div>
    </div>
  )
}


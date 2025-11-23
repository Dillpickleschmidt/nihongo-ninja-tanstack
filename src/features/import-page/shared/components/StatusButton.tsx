// src/features/import-page/components/StatusButton.tsx
import { createSignal } from "solid-js"
import { HelpCircle } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/utils"
import { getStatusConfig } from "../constants/status-config"
import type { ItemStatus } from "../types"

interface StatusButtonProps {
  status: Exclude<ItemStatus, null>
  onClick: () => void
  showIcon?: boolean
  class?: string
}

export function StatusButton(props: StatusButtonProps) {
  const [isOpen, setIsOpen] = createSignal(false)
  const config = getStatusConfig(props.status)

  if (!config) return null

  const Icon = config.icon

  return (
    <Button
      variant="secondary"
      class={cn(
        "h-9 gap-2",
        `border ${config.borderColor} ${config.bgColor} ${config.textColor}`,
        `${config.hoverBgColor} ${config.hoverTextColor}`,
        props.class,
      )}
      onClick={props.onClick}
    >
      {props.showIcon !== false && <Icon class="hidden size-4 sm:inline" />}
      <span>{config.label}</span>
      <Tooltip placement="top" open={isOpen()}>
        <TooltipTrigger
          as="div"
          class="ml-1 cursor-help opacity-50 hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen())
          }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <HelpCircle class="size-3.5" />
        </TooltipTrigger>
        <TooltipContent class="max-w-xs">
          <p>{config.tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </Button>
  )
}

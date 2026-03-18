import { createSignal, type JSX } from "solid-js"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

type ClickableTooltipProps = {
  children: JSX.Element
  content: JSX.Element
  placement?: "top" | "bottom" | "left" | "right"
  class?: string
}

export function ClickableTooltip(props: ClickableTooltipProps) {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Tooltip placement={props.placement ?? "top"} open={isOpen()}>
      <TooltipTrigger
        as="span"
        class={props.class ?? "cursor-pointer"}
        onClick={(e: MouseEvent) => {
          e.stopPropagation()
          setIsOpen(!isOpen())
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {props.children}
      </TooltipTrigger>
      <TooltipContent>{props.content}</TooltipContent>
    </Tooltip>
  )
}

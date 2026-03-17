import type { ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { cn } from "@/utils"

const Skeleton = (props: ComponentProps<"div">) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn("animate-pulse bg-primary/10", local.class)}
      {...others}
    />
  )
}

export { Skeleton }

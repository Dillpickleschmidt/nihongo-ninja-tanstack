import type { JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import * as CollapsiblePrimitive from "@kobalte/core/collapsible"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import { ChevronRight } from "lucide-solid"

import { cn } from "@/utils"

// Root Collapsible Component
type CollapsibleRootProps<T extends ValidComponent = "div"> =
  CollapsiblePrimitive.CollapsibleRootProps<T> & {
    class?: string | undefined
  }

const CollapsibleRoot = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsibleRootProps<T>>,
) => {
  const [local, others] = splitProps(props as CollapsibleRootProps, ["class"])
  return <CollapsiblePrimitive.Root class={cn("", local.class)} {...others} />
}

// Collapsible Trigger Component
type CollapsibleTriggerProps<T extends ValidComponent = "button"> =
  CollapsiblePrimitive.CollapsibleTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const CollapsibleTriggerImpl = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, CollapsibleTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as CollapsibleTriggerProps, [
    "class",
    "children",
  ])

  return (
    <CollapsiblePrimitive.Trigger
      class={cn(
        "inline-flex w-full items-center justify-start gap-2 rounded-md text-sm font-medium transition-colors",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground",
        local.class,
      )}
      {...others}
    >
      <ChevronRight class="h-4 w-4 shrink-0 transition-transform duration-200 [button[aria-expanded=true]_&]:rotate-90" />
      {local.children}
    </CollapsiblePrimitive.Trigger>
  )
}

// Collapsible Content Component
type CollapsibleContentProps<T extends ValidComponent = "div"> =
  CollapsiblePrimitive.CollapsibleContentProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const CollapsibleContentImpl = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsibleContentProps<T>>,
) => {
  const [local, others] = splitProps(props as CollapsibleContentProps, [
    "class",
    "children",
  ])

  return (
    <CollapsiblePrimitive.Content class={cn("", local.class)} {...others}>
      {local.children}
    </CollapsiblePrimitive.Content>
  )
}

// Exports
export const Collapsible = CollapsibleRoot
export const CollapsibleTrigger = CollapsibleTriggerImpl
export const CollapsibleContent = CollapsibleContentImpl

export type {
  CollapsibleRootProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
}


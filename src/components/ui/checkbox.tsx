import type { ValidComponent } from "solid-js"
import { Match, splitProps, Switch } from "solid-js"

import * as CheckboxPrimitive from "@kobalte/core/checkbox"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "@/utils"

const Checkbox = CheckboxPrimitive.Root

type CheckboxInputProps = {
  class?: string | undefined
  size?: number
}

const CheckboxInput = (props: CheckboxInputProps) => {
  const [local] = splitProps(props, ["class", "size"])
  return (
    <>
      <CheckboxPrimitive.Input class="peer" />
      <CheckboxPrimitive.Control
        class={cn(
          "border-primary ring-offset-background peer-focus-visible:ring-ring data-[checked]:bg-primary data-[indeterminate]:bg-primary data-[checked]:text-primary-foreground data-[indeterminate]:text-primary-foreground shrink-0 rounded-sm border peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-none data-[indeterminate]:border-none",
          local.size ? `size-${local.size}` : "size-4",
          local.class,
        )}
      >
        <CheckboxPrimitive.Indicator>
          <Switch>
            <Match when={true}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={local.size ? `size-${local.size}` : "size-4"}
              >
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </Match>
          </Switch>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </>
  )
}

type CheckboxControlProps<T extends ValidComponent = "div"> =
  CheckboxPrimitive.CheckboxControlProps<T> & {
    class?: string | undefined
    size?: number
  }

const CheckboxControl = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CheckboxControlProps<T>>,
) => {
  const [local, others] = splitProps(props as CheckboxControlProps, [
    "class",
    "size",
  ])
  return (
    <CheckboxPrimitive.Control
      class={cn(
        "border-primary ring-offset-background peer-focus-visible:ring-ring data-[checked]:bg-primary data-[indeterminate]:bg-primary data-[checked]:text-primary-foreground data-[indeterminate]:text-primary-foreground shrink-0 rounded-sm border peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-none data-[indeterminate]:border-none",
        local.size ? `size-${local.size}` : "size-4",
        local.class,
      )}
      {...others}
    />
  )
}

type CheckboxIndicatorProps<T extends ValidComponent = "div"> =
  CheckboxPrimitive.CheckboxIndicatorProps<T> & {
    class?: string | undefined
    size?: number
    children?: never // We'll provide our own SVG icons
  }

const CheckboxIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CheckboxIndicatorProps<T>>,
) => {
  const [local, others] = splitProps(props as CheckboxIndicatorProps, [
    "class",
    "size",
  ])
  return (
    <CheckboxPrimitive.Indicator class={local.class} {...others}>
      <Switch>
        <Match when={!others.indeterminate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={local.size ? `size-${local.size}` : "size-4"}
          >
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </Match>
        <Match when={others.indeterminate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={local.size ? `size-${local.size}` : "size-4"}
          >
            <path d="M5 12l14 0" />
          </svg>
        </Match>
      </Switch>
    </CheckboxPrimitive.Indicator>
  )
}

type CheckboxLabelProps<T extends ValidComponent = "label"> =
  CheckboxPrimitive.CheckboxLabelProps<T> & {
    class?: string | undefined
  }

const CheckboxLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, CheckboxLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as CheckboxLabelProps, ["class"])
  return (
    <CheckboxPrimitive.Label
      class={cn(
        "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class,
      )}
      {...others}
    />
  )
}

export { Checkbox, CheckboxInput, CheckboxLabel }

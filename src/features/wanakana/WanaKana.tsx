// src/features/wanakana/WanaKana.tsx
import { createEffect, onCleanup, children, JSX, on } from "solid-js"
import * as wanakana from "wanakana"

const findInputOrTextAreaElement = (
  element: any,
): HTMLInputElement | HTMLTextAreaElement | null => {
  if (!element) return null

  if (
    element.tagName &&
    (element.tagName.toUpperCase() === "TEXTAREA" ||
      element.tagName.toUpperCase() === "INPUT")
  ) {
    return element
  }

  if (element.children) {
    for (const child of element.children) {
      const found = findInputOrTextAreaElement(child)
      if (found) return found
    }
  }

  return null
}

type WanaKanaWrapperProps = {
  children: JSX.Element
  enabled: boolean
  watch: any
}

const WanaKanaWrapper = (props: WanaKanaWrapperProps) => {
  const resolvedChildren = children(() => props.children)
  let wanakanaBoundElement: HTMLInputElement | HTMLTextAreaElement | null = null

  // Use `on` to explicitly track the `watch` prop.
  createEffect(
    on(
      () => props.watch,
      () => {
        // Clean up the previous binding first.
        if (wanakanaBoundElement) {
          try {
            wanakana.unbind(wanakanaBoundElement)
          } catch (e) {}
          wanakanaBoundElement = null
        }

        if (!props.enabled) {
          return
        }

        const element = resolvedChildren.toArray()[0] as HTMLElement
        if (!element) return

        const inputElement = findInputOrTextAreaElement(element)
        if (inputElement) {
          wanakana.bind(inputElement)
          wanakanaBoundElement = inputElement
        }
      },
    ),
  )

  onCleanup(() => {
    if (wanakanaBoundElement) {
      try {
        wanakana.unbind(wanakanaBoundElement)
      } catch (e) {}
    }
  })

  return <>{resolvedChildren()}</>
}

export default WanaKanaWrapper

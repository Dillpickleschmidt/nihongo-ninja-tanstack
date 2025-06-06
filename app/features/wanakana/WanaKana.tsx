// app/features/wanakana/WanaKana.tsx
import { onMount, onCleanup, children, JSX } from "solid-js"
import { isServer } from "solid-js/web"
import * as wanakana from "wanakana"

type WanakanaWrapperProps = {
  children: JSX.Element
  to?: "romaji" | "hiragana" | "katakana" | "kana"
  IMEMode?: boolean | "toHiragana" | "toKatakana"
}

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

  if (element.querySelector) {
    const found = element.querySelector(
      'textarea, input[type="text"], input[type="email"]',
    )
    if (found) return found
  }

  if (element.children) {
    for (let child of element.children) {
      const found = findInputOrTextAreaElement(child)
      if (found) return found
    }
  }

  return null
}

const WanakanaWrapper = (props: WanakanaWrapperProps) => {
  const resolvedChildren = children(() => props.children)
  let targetElement: HTMLInputElement | HTMLTextAreaElement | null = null

  onMount(() => {
    if (isServer) return

    const child = resolvedChildren.toArray()[0] as any
    targetElement = findInputOrTextAreaElement(child)

    if (targetElement) {
      wanakana.bind(targetElement, {
        IMEMode:
          props.IMEMode ||
          (props.to === "hiragana"
            ? "toHiragana"
            : props.to === "katakana"
              ? "toKatakana"
              : true),
      })
    }
  })

  onCleanup(() => {
    if (isServer || !targetElement) return

    wanakana.unbind(targetElement)
  })

  return <>{resolvedChildren()}</>
}

export default WanakanaWrapper

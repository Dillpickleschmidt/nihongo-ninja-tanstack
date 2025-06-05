import type { JSX } from "solid-js"

type BackgroundImageProps = JSX.HTMLAttributes<HTMLDivElement> & {
  class?: string
  backgroundImage?: string
  backgroundImageSize: string
  backgroundImageOpacity: number
}

export function BackgroundImage({
  class: className,
  backgroundImage,
  backgroundImageSize,
  backgroundImageOpacity,
}: BackgroundImageProps) {
  if (!backgroundImage) return null

  return (
    <div
      class={`pointer-events-none absolute inset-0 bg-repeat print:hidden ${className}`}
      style={{
        "background-image": `url(${backgroundImage})`,
        "background-size": backgroundImageSize,
        "background-blend-mode": "multiply",
        opacity: backgroundImageOpacity / 100,
        "z-index": -1,
      }}
    />
  )
}

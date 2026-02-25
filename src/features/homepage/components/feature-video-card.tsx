import { onMount, type JSX } from "solid-js"
import { cn } from "@/utils"
import { VideoShowcase } from "./video-showcase"
import {
  animateElementIn,
  getInitialAnimationStyles,
} from "@/utils/animations"

export function FeatureVideoCard(props: {
  title: string
  description: string | JSX.Element
  videoTitle: string
  videoSrc?: string
  flipped?: boolean
  index: number
}) {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(
            () =>
              animateElementIn(ref!, "down", {
                duration: 700,
                distance: 48,
              }),
            props.index * 100,
          )
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "-50px" },
    )
    observer.observe(ref)
  })

  return (
    <div
      ref={ref}
      class={cn(
        "grid gap-8 lg:gap-12 items-center",
        props.flipped ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]",
      )}
      style={getInitialAnimationStyles("down", true, 48)}
    >
      <div class={cn(props.flipped && "lg:order-2")}>
        <div class="mb-4 flex items-center gap-3">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-(--landing-accent)/20 to-(--landing-accent-end)/20 text-sm font-bold text-(--landing-accent)">
            {String(props.index + 1).padStart(2, "0")}
          </span>
          <div class="h-px flex-1 bg-linear-to-r from-(--landing-accent)/20 to-transparent" />
        </div>
        <h3 class="mb-3 text-2xl font-bold text-white lg:text-3xl">
          {props.title}
        </h3>
        <p class="text-base text-white/60 leading-relaxed lg:text-lg">
          {props.description}
        </p>
      </div>
      <div class={cn(props.flipped && "lg:order-1")}>
        <VideoShowcase
          title={props.videoTitle}
          subtitle="Click to play"
          videoSrc={props.videoSrc}
        />
      </div>
    </div>
  )
}

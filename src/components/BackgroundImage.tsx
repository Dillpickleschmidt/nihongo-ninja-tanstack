import type { JSX } from "solid-js"
import { createSignal, onMount } from "solid-js"

export type BackgroundMediaItem = {
  source_type: "img" | "video"
  src: string
  layout: "vertical" | "horizontal"
  position: "static" | "relative" | "absolute" | "fixed"
  opacity: number
  y_offset_desktop?: string
  y_offset_mobile?: string
}

type PatternBackgroundProps = {
  variant: "pattern"
  backgroundImage: string
  backgroundImageSize: string
  backgroundImageOpacity: number
  class?: string
}

type MediaBackgroundProps = {
  variant: "media"
  backgroundItem: BackgroundMediaItem
  showGradient?: boolean
  blur?: string | (() => string)
  class?: string
}

type BackgroundImageProps = JSX.HTMLAttributes<HTMLDivElement> &
  (PatternBackgroundProps | MediaBackgroundProps)

export function BackgroundImage(props: BackgroundImageProps) {
  if (props.variant === "pattern") {
    const {
      backgroundImage,
      backgroundImageSize,
      backgroundImageOpacity,
      class: className,
    } = props

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

  // Media variant
  const {
    backgroundItem,
    showGradient = true,
    blur = "0px",
    class: className,
  } = props

  const blurValue = () => (typeof blur === "function" ? blur() : blur || "0px")

  const {
    source_type,
    src,
    layout,
    position,
    opacity,
    y_offset_desktop = "-64px",
    y_offset_mobile = "-64px",
  } = backgroundItem

  const [isVerticalDesktop, setIsVerticalDesktop] = createSignal(false)

  onMount(() => {
    const handleResize = () => {
      setIsVerticalDesktop(layout === "vertical" && window.innerWidth > 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const gradientPosition = () => (isVerticalDesktop() ? "fixed" : "absolute")
  const gradientZIndex = -1
  const mediaZIndex = -2

  return (
    <div class={className}>
      <style>
        {`
          .background-media {
            position: ${position};
            top: ${y_offset_desktop};
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            min-height: 100vh;
            height: auto;
            object-fit: cover;
            object-position: ${layout === "vertical" ? "top" : "center"};
            z-index: ${mediaZIndex};
            pointer-events: none;
            opacity: ${opacity};
            transition: filter 500ms ease;
          }
          
          .background-media.horizontal {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
          }
          
          .gradient-overlay {
            position: ${gradientPosition()}; 
            top: ${gradientPosition() === "fixed" ? "0" : y_offset_desktop};            
            left: ${gradientPosition() === "fixed" ? "0" : "50%"};
            ${
              gradientPosition() === "absolute"
                ? "transform: translateX(-50%);"
                : ""
            }
            width: 100vw;
            height: ${gradientPosition() === "fixed" ? "100vh" : "100vh"};
            z-index: ${gradientZIndex};
            pointer-events: none;
            background-color: var(--color-background);
            mask-image: linear-gradient(to bottom,
              rgba(0, 0, 0, 0) 0%,  
              rgba(0, 0, 0, 1) 100% 
            );
            -webkit-mask-image: linear-gradient(to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 100%
            );
          }
          
          @media (max-width: 768px) {
            .background-media {
              top: ${y_offset_mobile};
            }

            .gradient-overlay {
              position: absolute;
              top: ${y_offset_mobile};
              left: 50%;
              transform: translateX(-50%);
              height: 100vh;
            }
          }
        `}
      </style>

      {source_type === "img" ? (
        <img
          src={src}
          class={`background-media ${layout}`}
          alt="Background"
          style={{ filter: `blur(${blurValue()})` }}
        />
      ) : (
        <video
          src={src}
          class={`background-media ${layout}`}
          autoplay
          loop
          muted
          plays-inline
          preload="auto"
          style={{ filter: `blur(${blurValue()})` }}
        />
      )}

      {showGradient && <div class="gradient-overlay" />}
    </div>
  )
}

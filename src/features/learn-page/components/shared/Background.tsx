// features/dashboard/components/shared/Background.tsx
import { createSignal, onMount } from "solid-js"

export type BackgroundItem = {
  source_type: "img" | "video"
  src: string
  layout: "vertical" | "horizontal"
  position: "static" | "relative" | "absolute" | "fixed"
  opacity: number
  y_offset_desktop?: string
  y_offset_mobile?: string
}

export function Background(props: { backgroundItem: BackgroundItem }) {
  const { backgroundItem } = props
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
    <>
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
        <img src={src} class={`background-media ${layout}`} alt="Background" />
      ) : (
        <video
          src={src}
          class={`background-media ${layout}`}
          autoplay
          loop
          muted
          plays-inline
          preload="auto"
        />
      )}

      <div class="gradient-overlay" />
    </>
  )
}

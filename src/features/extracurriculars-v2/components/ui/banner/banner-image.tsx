import { Show } from "solid-js"
import { LoadImage } from "../img/load-image"

interface BannerImageProps {
  src: string | null | undefined
  alt: string
  color?: string | null
}

export function BannerImage(props: BannerImageProps) {
  return (
    <>
      {/* Background Image Layer */}
      <Show when={props.src}>
        <LoadImage
          src={props.src!}
          alt={props.alt}
          color={props.color}
          class="absolute inset-0 object-cover opacity-70"
        />
      </Show>

      {/* Overlay: 40% black */}
      <div class="absolute inset-0 bg-black/40" />

      {/* Gradient Overlay: Bottom fade (300px) */}
      <div
        class="absolute right-0 bottom-0 left-0"
        style={{
          height: "300px",
          background:
            "linear-gradient(to top, rgb(3, 3, 3) 8.98%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </>
  )
}

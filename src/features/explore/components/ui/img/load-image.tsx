import { createSignal, type JSX } from "solid-js"

interface LoadImageProps {
  src: string
  alt: string
  class?: string
  color?: string | null
  onLoad?: JSX.EventHandler<HTMLImageElement, Event>
}

export function LoadImage(props: LoadImageProps) {
  const [loaded, setLoaded] = createSignal(false)

  const handleLoad = async (e: Event) => {
    const target = e.currentTarget as HTMLImageElement
    await target.decode()
    setLoaded(true)
    props.onLoad?.(e as any)
  }

  const bgColor = props.color ?? "#1890ff"

  return (
    <div style={{ background: bgColor }} class={`${props.class} h-full w-full`}>
      <img
        src={props.src}
        alt={props.alt}
        onLoad={handleLoad}
        class={`${props.class} h-full w-full opacity-0 transition-opacity duration-300 ease-out ${loaded() ? "!opacity-100" : ""}`}
        decoding="async"
        loading="lazy"
        style={{ background: bgColor }}
      />
    </div>
  )
}

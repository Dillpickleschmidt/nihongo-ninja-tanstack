import type { JSX } from "solid-js"
import { Show, splitProps } from "solid-js"
import { GENERATED_IMAGES } from "@/features/images/generated-images"

type ImageProps = Omit<
  JSX.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcset" | "srcSet"
> & {
  src: string
  alt: string
  fill?: boolean
  widths?: readonly number[]
  priority?: boolean
}

export function Image(props: ImageProps) {
  const [local, rest] = splitProps(props, [
    "src",
    "alt",
    "fill",
    "widths",
    "priority",
    "sizes",
    "loading",
    "decoding",
    "class",
  ])
  const generated = () => GENERATED_IMAGES[local.src as keyof typeof GENERATED_IMAGES]
  const sizes = () => local.sizes ?? (local.fill ? "100vw" : undefined)
  const className = () => local.fill ? `absolute inset-0 size-full ${local.class ?? ""}` : local.class
  const loading = () => local.loading ?? (local.priority ? "eager" : "lazy")
  const fetchPriority = () => local.priority ? "high" : rest.fetchpriority

  return (
    <Show
      when={generated()}
      fallback={
        <img
          {...rest}
          src={local.src}
          srcset={local.widths ? srcset(local.src, local.widths) : undefined}
          sizes={sizes()}
          alt={local.alt}
          loading={loading()}
          decoding={local.decoding ?? "async"}
          fetchpriority={fetchPriority()}
          class={className()}
        />
      }
    >
      {(image) => (
        <picture>
          <source
            type="image/avif"
            srcset={variantSrcset(image().outputBasePath, image().widths, "avif")}
            sizes={sizes()}
          />
          <source
            type="image/webp"
            srcset={variantSrcset(image().outputBasePath, image().widths, "webp")}
            sizes={sizes()}
          />
          <img
            {...rest}
            src={`${image().outputBasePath}/${image().widths[0]}.webp`}
            srcset={variantSrcset(image().outputBasePath, image().widths, "webp")}
            sizes={sizes()}
            alt={local.alt}
            loading={loading()}
            decoding={local.decoding ?? "async"}
            fetchpriority={fetchPriority()}
            class={className()}
          />
        </picture>
      )}
    </Show>
  )
}

function variantSrcset(basePath: string, widths: readonly number[], format: string) {
  return widths.map((width) => `${basePath}/${width}.${format} ${width}w`).join(", ")
}

function srcset(src: string, widths: readonly number[]) {
  return widths.map((width) => `${withWidthParam(src, width)} ${width}w`).join(", ")
}

function withWidthParam(src: string, width: number) {
  const separator = src.includes("?") ? "&" : "?"
  return `${src}${separator}w=${width}`
}

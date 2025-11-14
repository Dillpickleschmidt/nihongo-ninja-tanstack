import { Component, JSX, createEffect, createSignal, createResource, Show } from 'solid-js'
import Load from './load'
import type { Media } from '../../../api/anilist'
import { banner, cover, title } from '../../../api/anilist'
import { episodes } from '../../../api/anizip'
import { cn } from '../../../utils'

interface BannerProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
  media: Media
  class?: string
}

const Banner: Component<BannerProps> = (props) => {
  const { media, class: className, ...rest } = props
  const [src, setSrc] = createSignal<string>('')
  const [isYoutube, setIsYoutube] = createSignal(false)
  const [sizeAttempt, setSizeAttempt] = createSignal(0)
  const [isMd, setIsMd] = createSignal(typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches)

  // Create resource for episodes data
  const [episodesData] = createResource(() => media.id, episodes)

  // Monitor media query
  createEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = () => setIsMd(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  })

  // Update src based on responsive breakpoint
  createEffect(() => {
    const newSrc = isMd() ? banner(media) : cover(media)
    setSrc(newSrc ?? '')
    setIsYoutube(newSrc?.startsWith('https://i.ytimg.com/') ?? false)
  })

  const sizes = ['sddefault', 'hqdefault', 'mqdefault', 'default']

  const verifyThumbnail = (e: Event) => {
    if (!isYoutube()) return
    const img = e.currentTarget as HTMLImageElement
    if (img.naturalWidth === 120 && img.naturalHeight === 90) {
      img.src = `https://i.ytimg.com/vi/${media.trailer?.id}/${sizes[sizeAttempt()]}.jpg`
      setSizeAttempt((prev) => prev + 1)
    }
  }

  return (
    <Show when={isMd()}>
      <Show
        when={episodesData()}
        fallback={
          <Show when={src()}>
            <Load
              src={src()}
              alt={title(media)}
              class={className}
              onLoad={verifyThumbnail}
              {...rest}
            />
          </Show>
        }
      >
        {(metadata) => {
          const bannerUrl = metadata()?.images?.find((i) => i.coverType === 'Fanart')?.url
          const coverUrl = metadata()?.images?.find((i) => i.coverType === 'Poster')?.url
          const fallback = bannerUrl || coverUrl

          return (
            <Show
              when={fallback}
              fallback={
                <Show when={src()}>
                  <Load
                    src={src()}
                    alt={title(media)}
                    class={className}
                    onLoad={verifyThumbnail}
                    {...rest}
                  />
                </Show>
              }
            >
              {(fb) => <Load src={fb()} alt={title(media)} class={className} {...rest} />}
            </Show>
          )
        }}
      </Show>
    </Show>
  )
}

export { Banner }
export type { BannerProps }

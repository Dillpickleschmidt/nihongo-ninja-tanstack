import { Component, JSX, Show, createSignal } from 'solid-js'
import Banner from '../img/banner'
import type { Media } from '../../../api/anilist'
import { cn } from '../../../utils'

// Module-level stores for global banner state
export const [bannerSrc, setBannerSrc] = createSignal<Media | null>(null)
export const [hideBanner, setHideBanner] = createSignal(false)

interface BannerImageProps extends JSX.HTMLAttributes<HTMLImageElement> {
  class?: string
}

const BannerImage: Component<BannerImageProps> = (props) => {
  const { class: className, ...rest } = props
  const [isBig, setIsBig] = createSignal(true)

  // Detect if we're on the homepage (when needed)
  // This could be set externally based on route
  if (typeof window !== 'undefined') {
    const isHomePage = window.location.pathname === '/extracurriculars'
    setIsBig(isHomePage)
  }

  return (
    <Show when={bannerSrc()}>
      {(media) => (
        <div
          class={cn(
            'object-cover w-screen absolute top-0 left-0 h-full overflow-hidden pointer-events-none bg-black banner',
            className
          )}
          {...rest}
        >
          <Banner
            media={media()}
            class={cn(
              'min-w-[100vw] w-screen object-cover transition-opacity duration-500 banner-gr relative',
              isBig()
                ? 'h-[70vh] md:h-[80vh]'
                : 'h-[23rem]',
              hideBanner() ? 'opacity-10' : 'opacity-70'
            )}
          />
        </div>
      )}
    </Show>
  )
}

// Inject global styles for banner gradient
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    :global(div.banner-gr::after) {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 300px;
      background: linear-gradient(1turn, rgb(3, 3, 3) 8.98%, rgba(0, 0, 0, 0) 100%);
    }

    .banner::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80vh;
      z-index: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  `
  document.head.appendChild(style)
}

export default BannerImage
export { BannerImage }
export type { BannerImageProps }

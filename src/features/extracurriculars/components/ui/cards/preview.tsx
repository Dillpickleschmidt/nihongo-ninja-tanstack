import { Component, JSX, Show, createSignal } from 'solid-js'
import PlayButton from '../button/play'
import FavoriteButton from '../button/favorite'
import BookmarkButton from '../button/bookmark'
import Banner from '../img/banner'
import Load from '../img/load'
import YoutubeIframe from './YoutubeIframe'
import Videoframe from './videoframe'
import type { Media } from '../../../api/anilist'
import { desc, duration, format, season, title } from '../../../api/anilist'
import { of } from '../../../api/auth'
import { SUPPORTS } from '../../../modules/settings'
import { cn } from '../../../utils'

export interface TraceAnime {
  anilist: number
  filename: string
  episode: number
  from: number
  to: number
  similarity: number
  video: string
  image: string
}

interface PreviewCardProps {
  media: Media
  trace?: TraceAnime
}

const PreviewCard: Component<PreviewCardProps> = (props) => {
  const [hideFrame, setHideFrame] = createSignal<boolean | null>(null)

  return (
    <div class="!absolute w-[17.5rem] h-80 left-1/2 right-1/2 top-0 bottom-0 m-auto bg-neutral-950 z-30 rounded cursor-pointer absolute-container">
      <div class="h-[45%] banner relative bg-black rounded-t">
        <Show
          when={props.trace}
          fallback={
            <>
              <Show when={!SUPPORTS.isUnderPowered}>
                <Banner
                  media={props.media}
                  class={cn(
                    'object-cover w-full h-full blur-2xl saturate-200 absolute -z-10',
                    hideFrame() === false && 'hidden'
                  )}
                />
              </Show>
              <Banner media={props.media} class="object-cover w-full h-full rounded-t" />
              <Show when={props.media.trailer?.id && !hideFrame() && !SUPPORTS.isUnderPowered}>
                <YoutubeIframe
                  id={props.media.trailer!.id}
                  onHide={(hidden) => setHideFrame(hidden)}
                />
              </Show>
            </>
          }
        >
          {(trace) => (
            <>
              <Show when={!SUPPORTS.isUnderPowered}>
                <Load
                  src={trace().image}
                  alt={props.media.title?.english}
                  class={cn(
                    'object-cover w-full h-full blur-2xl saturate-200 absolute -z-10',
                    hideFrame() === false && 'hidden'
                  )}
                />
              </Show>
              <Load
                src={trace().image}
                alt={props.media.title?.english}
                class="object-cover w-full h-full rounded-t"
              />
              <Videoframe src={trace().video} onHide={(hidden) => setHideFrame(hidden)} />
            </>
          )}
        </Show>
      </div>
      <div class="w-full px-4 bg-neutral-950">
        <div
          class="text-lg font-bold truncate inline-block w-full text-white pt-2"
          title={title(props.media)}
        >
          {title(props.media)}
        </div>
        <div class="flex flex-row">
          <PlayButton media={props.media} class="grow" />
          <FavoriteButton media={props.media} class="ml-2" />
          <BookmarkButton media={props.media} class="ml-2" />
        </div>
        <div class="details text-white capitalize pt-3 pb-2 flex text-[11px] overflow-clip text-ellipsis text-nowrap">
          <span class="text-nowrap flex items-center">{format(props.media)}</span>
          <span class="text-nowrap flex items-center">
            {of(props.media) ?? duration(props.media) ?? 'N/A'}
          </span>
          <span class="text-nowrap flex items-center">{season(props.media)}</span>
          <Show when={props.media.averageScore}>
            {(score) => <span class="text-nowrap flex items-center text-ellipsis">{score()}%</span>}
          </Show>
        </div>
        <div class="w-full h-full overflow-clip text-[.7rem] text-muted-foreground line-clamp-4">
          {desc(props.media)}
        </div>
      </div>

      <style>{`
        .banner::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          margin-bottom: -2px;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #0000 0%, #0a0a0a00 80%, #0a0a0ae3 95%, #0a0a0a 100%);
        }

        .absolute-container {
          animation: 0.3s ease 0s 1 load-in;
          transform: translate3d(-50%, 0, 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1) scaleY(1);
          opacity: 1;
        }

        @keyframes load-in {
          from {
            opacity: 0;
            transform: translate3d(-50%, 1.2rem, 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(0.95) scaleY(0.95);
          }
        }
      `}</style>
    </div>
  )
}

export default PreviewCard
export { PreviewCard }
export type { PreviewCardProps }

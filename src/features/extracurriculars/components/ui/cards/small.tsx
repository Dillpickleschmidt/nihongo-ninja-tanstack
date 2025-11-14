import { Component, createSignal, Show } from 'solid-js'
import { CalendarDays, Tv } from 'lucide-solid'
import { useNavigate } from '@tanstack/solid-router'
import StatusDot from '../../StatusDot'
import Load from '../img/load'
import PreviewCard from './preview'
import type { Media } from '../../../api/anilist'
import { coverMedium, format, title } from '../../../api/anilist/util'
import { list } from '../../../api/auth'
import { hover } from '../../../utils/navigate'

interface SmallCardProps {
  media: Media
}

const SmallCard: Component<SmallCardProps> = (props) => {
  const navigate = useNavigate()
  const [hidden, setHidden] = createSignal(true)
  const status = () => list(props.media)

  const onclick = () => {
    navigate(`/app/anime/${props.media.id}`)
  }

  const onhover = (state: boolean) => {
    setHidden(!state)
  }

  let containerRef: HTMLDivElement | undefined

  return (
    <div
      ref={containerRef}
      class="text-white p-4 cursor-pointer shrink-0 relative pointer-events-auto [content-visibility:auto] [contain-intrinsic-size:auto_152px_auto_290.4px]"
      classList={{
        '[content-visibility:visible]': !hidden(),
        'z-40': !hidden()
      }}
      onClick={onclick}
      onMouseEnter={() => onhover(true)}
      onMouseLeave={() => onhover(false)}
      onTouchStart={() => onhover(true)}
      onTouchEnd={() => onhover(false)}
    >
      <Show when={!hidden()}>
        <PreviewCard media={props.media} />
      </Show>

      <div class="item w-[9.5rem] flex flex-col">
        <div class="h-[13.5rem]">
          <Load
            src={coverMedium(props.media)}
            alt="cover"
            class="object-cover w-full h-full rounded"
            color={props.media.coverImage?.color}
          />
        </div>
        <div class="pt-3 font-black text-[.8rem] line-clamp-2">
          <Show when={status()}>
            {(s) => <StatusDot variant={s()} />}
          </Show>
          {title(props.media)}
        </div>
        <div class="flex text-neutral-500 mt-auto pt-2 justify-between">
          <div class="flex text-xs font-medium">
            <CalendarDays class="w-[1rem] h-[1rem] mr-1 -ml-0.5" />
            {props.media.seasonYear ?? 'TBA'}
          </div>
          <div class="flex text-xs font-medium">
            {format(props.media)}
            <Tv class="w-[1rem] h-[1rem] ml-1 -mr-0.5" />
          </div>
        </div>
      </div>

      <style>{`
        .item {
          animation: 0.3s ease 0s 1 load-in;
          aspect-ratio: 152/290;
        }

        @keyframes load-in {
          from {
            opacity: 0;
            transform: translate3d(-50%, 1.2rem, 0) scale(0.95);
          }
        }
      `}</style>
    </div>
  )
}

export default SmallCard
export { SmallCard }
export type { SmallCardProps }

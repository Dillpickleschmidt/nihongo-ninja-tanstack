import { Component, For, Show, createEffect, createSignal, onCleanup } from 'solid-js'
import { isServer } from 'solid-js/web'
import { useNavigate } from '@tanstack/solid-router'
import { Button } from '../button'
import PlayButton from '../button/play'
import FavoriteButton from '../button/favorite'
import BookmarkButton from '../button/bookmark'
import { useBanner } from './BannerContext'
import { desc, duration, format, getTextColorForRating, season, status, title, type Media } from '../../../api/anilist'
import { of } from '../../../api/auth'
import { colors } from '../../../utils'

interface FullBannerProps {
  mediaList: Array<Media | null>
}

function shuffle<T extends unknown[]>(array: T): T {
  const arr = [...array]
  let currentIndex = arr.length
  let randomIndex

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex--)
    ;[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }

  return arr as T
}

function shuffleAndFilter(media: Array<Media | null>): Media[] {
  return shuffle(media)
    .filter((m) => m?.bannerImage ?? m?.trailer?.id)
    .slice(0, 5) as Media[]
}

const FullBanner: Component<FullBannerProps> = (props) => {
  const navigate = useNavigate()
  const { setBannerSrc } = useBanner()
  const shuffled = shuffleAndFilter(props.mediaList)

  if (shuffled.length === 0) {
    return null
  }

  const [current, setCurrent] = createSignal<Media>(shuffled[0]!)
  const [timeoutId, setTimeoutId] = createSignal<ReturnType<typeof setTimeout> | null>(null)
  const [cssVars, setCssVars] = createSignal({
    '--custom': current().coverImage?.color ?? '#fff',
    '--red': 0,
    '--green': 0,
    '--blue': 0
  })

  // Only run carousel logic on client to avoid serialization of Timeout objects
  if (isServer) {
    return (
      <div class="md:pl-5 pb-2 grid grid-cols-1 md:grid-cols-2 mt-auto w-full max-h-full" style={cssVars()}>
        <div class="w-full flex flex-col items-center text-center md:items-start md:text-left">
          <a
            href={`/app/anime/${current().id}`}
            onClick={(e) => {
              e.preventDefault()
              navigate(`/app/anime/${current().id}`)
            }}
            class="text-white font-black text-3xl md:text-4xl line-clamp-2 w-[900px] max-w-[85%] leading-tight text-balance fade-in hover:text-neutral-300 hover:underline cursor-pointer"
          >
            {title(current())}
          </a>
        </div>
      </div>
    )
  }

  // Update banner source
  createEffect(() => {
    setBannerSrc(current())
  })

  // Update CSS color variables
  createEffect(() => {
    const { r, g, b } = colors(current().coverImage?.color ?? undefined)
    setCssVars({
      '--custom': current().coverImage?.color ?? '#fff',
      '--red': r,
      '--green': g,
      '--blue': b
    })
  })

  const currentIndex = () => shuffled.indexOf(current())

  const schedule = (index: number) => {
    return setTimeout(() => {
      setCurrent(shuffled[index % shuffled.length]!)
      setTimeoutId(schedule(index + 1))
    }, 15000)
  }

  // Initial schedule
  createEffect(() => {
    const timeout = schedule(currentIndex() + 1)
    setTimeoutId(timeout)

    onCleanup(() => {
      if (timeout) clearTimeout(timeout)
    })
  })

  const setCurrentBanner = (media: Media) => {
    if (current() === media) return
    const timeout = timeoutId()
    if (timeout) clearTimeout(timeout)
    setCurrent(media)
    setTimeoutId(schedule(currentIndex() + 1))
  }

  return (
    <div class="md:pl-5 pb-2 grid grid-cols-1 md:grid-cols-2 mt-auto w-full max-h-full" style={cssVars()}>
      <div class="w-full flex flex-col items-center text-center md:items-start md:text-left">
        <a
          href={`/app/anime/${current().id}`}
          onClick={(e) => {
            e.preventDefault()
            navigate(`/app/anime/${current().id}`)
          }}
          class="text-white font-black text-3xl md:text-4xl line-clamp-2 w-[900px] max-w-[85%] leading-tight text-balance fade-in hover:text-neutral-300 hover:underline cursor-pointer"
        >
          {title(current())}
        </a>

        <div class="flex gap-2 items-center md:self-start pt-4 flex-nowrap overflow-clip max-w-full md:place-content-start py-4 font-bold">
          <div class="rounded px-3.5 !text-custom h-7 text-nowrap bg-primary/5 text-sm inline-flex items-center">
            {of(current()) ?? duration(current()) ?? 'N/A'}
          </div>
          <Button
            class="!text-custom select:!text-primary h-7 text-nowrap bg-primary/5 font-bold"
            onClick={() =>
              navigate('/app/search', { state: { search: { format: [current().format] } } })
            }
          >
            {format(current())}
          </Button>
          <Button
            class="!text-custom select:!text-primary h-7 text-nowrap bg-primary/5 font-bold"
            onClick={() =>
              navigate('/app/search', { state: { search: { status: [current().status] } } })
            }
          >
            {status(current())}
          </Button>
          <Show when={season(current())}>
            {(s) => (
              <Button
                class="!text-custom select:!text-primary h-7 text-nowrap bg-primary/5 font-bold capitalize"
                onClick={() =>
                  navigate('/app/search', {
                    state: { search: { season: current().season, seasonYear: current().seasonYear } }
                  })
                }
              >
                {s()}
              </Button>
            )}
          </Show>
          <Show when={current().averageScore}>
            {(score) => (
              <Button
                class={`select:!text-primary h-7 text-nowrap bg-primary/5 font-bold ${getTextColorForRating(
                  score()
                )}`}
                onClick={() =>
                  navigate('/app/search', { state: { search: { sort: ['SCORE_DESC'] } } })
                }
              >
                {score()}%
              </Button>
            )}
          </Show>
        </div>

        <div class="flex flex-row w-[280px] max-w-full">
          <PlayButton
            media={current()}
            size="default"
            class="grow bg-custom select:!bg-custom-600 text-contrast mr-2"
          />
          <FavoriteButton
            media={current()}
            class="ml-2 select:!text-custom"
            variant="ghost"
            size="icon-sm"
          />
          <BookmarkButton
            media={current()}
            class="ml-2 select:!text-custom"
            variant="ghost"
            size="icon-sm"
          />
        </div>
      </div>

      <div class="flex flex-col self-end md:items-end items-center md:pr-5 w-full min-w-0">
        <div class="text-muted-foreground/80 line-clamp-2 md:line-clamp-3 text-balance max-w-[90%] md:max-w-[75%] text-xs md:text-sm text-center md:text-right fade-in pt-3">
          {desc(current())}
        </div>
        <div class="hidden md:flex gap-2 items-center md:self-end pt-4 flex-nowrap overflow-clip max-w-full md:place-content-end">
          <For each={current().genres ?? []}>
            {(genre) => (
              <Button
                variant="ghost"
                class="!text-custom select:!text-primary h-7 text-nowrap bg-primary/5 font-bold"
                onClick={() =>
                  navigate('/app/search', { state: { search: { genre: [genre] } } })
                }
              >
                {genre}
              </Button>
            )}
          </For>
        </div>
      </div>

      <div class="flex w-full justify-center flex-nowrap overflow-clip col-span-full">
        <For each={shuffled}>
          {(media) => {
            const active = () => current() === media
            return (
              <div
                class={`pt-2 pb-4 ${!active() ? 'cursor-pointer' : ''}`}
                onClick={() => setCurrentBanner(media)}
                tabindex={-1}
              >
                <div
                  class={`bg-neutral-800 mr-2 progress-badge overflow-clip rounded ${
                    active() ? 'active' : ''
                  }`}
                  style={{ height: '4px', width: active() ? '3rem' : '1.5rem' }}
                >
                  <div
                    class={`progress-content h-full transform-gpu w-full ${active() ? 'bg-custom' : ''}`}
                  />
                </div>
              </div>
            )
          }}
        </For>
      </div>

      <style>{`
        .progress-badge {
          transition: width 0.7s ease;
        }

        .progress-badge.active .progress-content {
          animation: fill 15s linear;
        }

        @keyframes fill {
          from {
            transform: translate3d(-100%, var(--tw-translate-y), 0);
          }
          to {
            transform: translate3d(0%, var(--tw-translate-y), 0);
          }
        }

        .fade-in {
          animation: fade-in ease 0.8s;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export { FullBanner }
export type { FullBannerProps }

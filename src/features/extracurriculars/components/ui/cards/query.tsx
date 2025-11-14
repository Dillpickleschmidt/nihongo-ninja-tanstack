import { Component, For, Show, createEffect, createSignal, onCleanup } from 'solid-js'
import Skeleton from './skeleton'
import SmallCard from './small'
import type { ResultOf } from 'gql.tada'
import type { Search } from '../../anilist/queries'

interface QueryCardProps {
  query: {
    fetching: () => boolean
    error?: { message: string } | null
    data?: ResultOf<typeof Search> | null
    isPaused?: () => boolean
    resume?: () => void
  }
}

const QueryCard: Component<QueryCardProps> = (props) => {
  const [shouldObserve, setShouldObserve] = createSignal(props.query.isPaused?.() ?? false)
  let observerDiv: HTMLDivElement | undefined

  // Setup lazy loading with IntersectionObserver
  createEffect(() => {
    if (!shouldObserve() || !observerDiv) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          props.query.resume?.()
          observer.unobserve(observerDiv!)
        }
      },
      { threshold: 0 }
    )

    observer.observe(observerDiv)

    onCleanup(() => observer.unobserve(observerDiv!))
  })

  return (
    <>
      <Show when={shouldObserve()}>
        <div ref={observerDiv} class="w-0 h-0" />
      </Show>

      <Show
        when={props.query.fetching()}
        fallback={
          <Show
            when={props.query.error}
            fallback={
              <Show
                when={props.query.data}
                fallback={
                  <For each={Array.from({ length: 50 })}>
                    {() => <Skeleton animate={false} />}
                  </For>
                }
              >
                {(data) => (
                  <Show
                    when={data().Page?.media && data().Page!.media!.length > 0}
                    fallback={
                      <div class="p-5 flex items-center justify-center w-full h-80">
                        <div>
                          <div class="mb-1 font-bold text-4xl text-center">Ooops!</div>
                          <div class="text-lg text-center text-muted-foreground">
                            Looks like there's nothing here.
                          </div>
                        </div>
                      </div>
                    }
                  >
                    {(mediaList) => (
                      <For each={mediaList()} fallback={<Skeleton />}>
                        {(media, i) => (
                          <Show when={media}>
                            {(m) => <SmallCard media={m()} />}
                          </Show>
                        )}
                      </For>
                    )}
                  </Show>
                )}
              </Show>
            }
          >
            {(error) => (
              <div class="p-5 flex items-center justify-center w-full h-80">
                <div>
                  <div class="mb-1 font-bold text-4xl text-center">Ooops!</div>
                  <div class="text-lg text-center text-muted-foreground">
                    Looks like something went wrong!
                  </div>
                  <div class="text-lg text-center text-muted-foreground">
                    {error().message}
                  </div>
                </div>
              </div>
            )}
          </Show>
        }
      >
        <For each={Array.from({ length: 50 })}>
          {() => <Skeleton />}
        </For>
      </Show>
    </>
  )
}

export default QueryCard
export { QueryCard }
export type { QueryCardProps }

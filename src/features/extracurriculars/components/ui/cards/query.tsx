import { Component, For, Show, createEffect, createSignal, onCleanup } from 'solid-js'
import Skeleton from './skeleton'
import SmallCard from './small'
import type { ResultOf } from 'gql.tada'
import type { Search } from '../../../api/anilist/queries'
import type { OperationResult } from '@urql/core'

interface QueryCardProps {
  query: OperationResult<ResultOf<typeof Search>>
}

const QueryCard: Component<QueryCardProps> = (props) => {
  let observerDiv: HTMLDivElement | undefined

  return (
    <>
      <Show
        when={props.query.fetching}
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
                    when={data.Page?.media && data.Page!.media!.length > 0}
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
                      <For each={mediaList} fallback={<Skeleton />}>
                        {(media, i) => (
                          <Show when={media}>
                            {(m) => <SmallCard media={m} />}
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
                    {error.message}
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

export { QueryCard }
export type { QueryCardProps }

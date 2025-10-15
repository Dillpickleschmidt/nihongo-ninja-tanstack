import { Show } from "solid-js"
import { Loader2 } from "lucide-solid"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

export default function ProfileCard() {
  const context = useLearnPageContext()

  return (
    <div class="flex w-full rounded-xl bg-neutral-600/5 px-4.5 py-3.5 backdrop-blur-md">
      <div class="flex size-12 items-center justify-center rounded-full bg-emerald-300/30 text-2xl leading-0 text-emerald-200/60">
        字
      </div>
      <div class="mt-0.5 ml-3">
        <h3 class="font-japanese text-xl text-neutral-200">キュズミック</h3>
        <div class="text-muted-foreground mt-0.5 text-xs">
          <Show
            when={
              !context.totalHours().isPending && !context.totalHours().isError
            }
            fallback={
              context.totalHours().isPending ? (
                <Loader2 class="inline h-3 w-3 animate-spin" />
              ) : (
                "0時間"
              )
            }
          >
            {context.totalHours().data}時間
          </Show>
        </div>
      </div>
    </div>
  )
}

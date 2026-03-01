import { Show } from "solid-js"
import { usePreferences } from "~/lib/preferences"
import { getUser } from "@/lib/auth"

export function JlptBadge() {
  const user = getUser()
  const { preferences } = usePreferences()

  const level = () => preferences().conjugationPractice.jlptLevel?.toUpperCase()

  return (
    <Show when={user() && level()}>
      <div class="flex items-center gap-1.5 rounded-lg border border-(--accent)/20 bg-(--accent)/10 px-2.5 py-1 backdrop-blur-sm">
        <span class="text-[0.7rem] font-bold tracking-wider text-(--accent)">
          {level()}
        </span>
      </div>
    </Show>
  )
}

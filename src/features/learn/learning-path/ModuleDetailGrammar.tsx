import { createSignal, For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ChevronDown, ChevronRight, PencilLine } from "lucide-solid"

interface TranscriptLine {
  line_id: number
  text: string
  english: string
  timestamp?: string
}

interface ModuleDetailGrammarProps {
  transcriptGroups: TranscriptLine[][]
  moduleId: string
  moduleDescription?: string
  linkTo: string
}

export function ModuleDetailGrammar(props: ModuleDetailGrammarProps) {
  const [expanded, setExpanded] = createSignal(false)

  const firstSentence = () => props.transcriptGroups?.[0]?.[0]

  return (
    <div class="space-y-6">
      {/* Featured sentence */}
      <Show when={firstSentence()}>
        {(sentence) => (
          <div>
            <p class="mb-2 text-sm font-medium text-white/40">Example</p>
            <div class="rounded-lg border border-card-foreground/70 bg-gradient-to-br backdrop-blur-sm dark:from-neutral-600/15 dark:to-gray-600/10 p-5">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <p class="font-japanese text-xl leading-relaxed text-white/90">
                    {sentence().text}
                  </p>
                  <p class="text-muted-foreground mt-2 text-sm">
                    {sentence().english || "[English translation]"}
                  </p>
                </div>
                <Link
                  to={props.linkTo}
                  class="flex items-center gap-1.5 shrink-0 rounded-lg bg-amber-500/15 px-3 py-1.5 text-sm font-medium text-amber-300 ring-1 ring-amber-400/25 transition-colors hover:bg-amber-500/25 hover:text-amber-200"
                >
                  Continue
                  <ChevronRight class="size-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Show>

      {/* Transcript */}
      <Show when={props.transcriptGroups.length > 0}>
        <button
          type="button"
          onClick={() => setExpanded(!expanded())}
          class="group flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/30 transition-colors hover:text-white/50"
        >
          <ChevronDown
            class={`size-3 transition-transform duration-200 ${expanded() ? "rotate-180" : ""}`}
          />
          {expanded() ? "Hide transcript" : "Full transcript"}
        </button>

        <Show when={expanded()}>
          <div class="max-h-[45vh] space-y-2 overflow-y-auto">
            <For each={props.transcriptGroups}>
              {(group) => (
                <For each={group}>
                  {(sentence) => (
                    <div class="rounded-lg border border-card-foreground/50 bg-card/40 px-4 py-3 backdrop-blur-sm">
                      <p class="font-japanese text-sm leading-relaxed text-white/70">
                        {sentence.text}
                      </p>
                      <p class="text-muted-foreground mt-1 text-xs">
                        {sentence.english || "[English translation]"}
                      </p>
                    </div>
                  )}
                </For>
              )}
            </For>
          </div>
        </Show>
      </Show>

      {/* Grammar note */}
      <div>
        <p class="mb-2 text-sm font-medium text-white/40">Notes</p>
        <div class="rounded-xl bg-amber-500/6 px-5 py-4">
          <div class="flex items-center gap-2.5">
            <PencilLine class="size-4 shrink-0 text-amber-400" />
            <span class="text-sm font-medium text-white/80">
              {props.moduleId}
            </span>
          </div>
          <p class="text-muted-foreground mt-2 text-sm leading-relaxed">
            {props.moduleDescription || "[Grammar description]"}
          </p>
        </div>
      </div>
    </div>
  )
}

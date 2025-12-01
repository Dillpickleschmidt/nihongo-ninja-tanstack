import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { createSignal, Show } from "solid-js"
import { Check, Copy, Monitor, Smartphone, ExternalLink } from "lucide-solid"
import { Timeline } from "@/components/ui/timeline"

export const Route = createFileRoute("/_home/import/_layout/anki/connect")({
  staticData: {
    headerConfig: {
      title: "Anki Integration",
      backLabel: "Back to Anki",
      backTo: "/import/anki",
    },
  },
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
  component: AnkiSetupPage,
})

const cardClass = "w-full rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 backdrop-blur-md p-6 md:p-10"
const tabTriggerClass = "rounded-full h-9 md:h-10 data-[selected]:bg-emerald-500/20 data-[selected]:text-emerald-200 data-[selected]:border-emerald-500/30 border border-transparent transition-colors flex items-center justify-center gap-2"

const StepTitle = (text: string) => <span class="text-base font-bold text-white">{text}</span>
const StepBullet = (n: number) => <div class="text-emerald-400 font-bold text-xs">{n}</div>

function AnkiSetupPage() {
  return (
    <div class="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center pt-12 pb-24 md:py-24">
      <div class="container flex max-w-3xl flex-col items-center px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 md:px-6">
        <h1 class="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          Connect to <span class="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Anki</span>
        </h1>
        <p class="text-muted-foreground mb-8 text-base md:text-lg">
          Sync your reviews seamlessly. Follow the steps below to enable the AnkiConnect add-on.
        </p>

        <Tabs defaultValue="pc" class="w-full">
          <TabsList class="grid w-full grid-cols-2 gap-1 bg-white/5 p-1 h-auto rounded-full border border-white/10">
            <TabsTrigger value="pc" class={tabTriggerClass}>
              <Monitor class="size-4" />
              PC / Mac
            </TabsTrigger>
            <TabsTrigger value="android" class={tabTriggerClass}>
              <Smartphone class="size-4" />
              Android
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pc" class="mt-6 text-left">
            <div class={cardClass}>
              <Timeline
                activeItem={-1}
                bulletSize={32}
                items={[
                  {
                    title: StepTitle("Install Add-on"),
                    bullet: StepBullet(1),
                    description: (
                      <div class="mt-2 text-sm">
                        <p class="mb-3 text-gray-300">
                          Open Anki Desktop and go to <span class="text-emerald-200 font-medium">Tools → Add-ons → Get Add-ons</span>.
                        </p>
                        <CopyableCode text="2055492159" label="Code">
                          <code class="-mb-0.5 text-emerald-300 text-base">2055492159</code>
                        </CopyableCode>
                      </div>
                    )
                  },
                  {
                    title: StepTitle("Update Configuration"),
                    bullet: StepBullet(2),
                    description: (
                      <div class="mt-2 text-sm">
                        <p class="mb-3 text-gray-300">
                          After restarting Anki, go to <span class="text-emerald-200 font-medium">Add-ons → AnkiConnect → Config</span> and add our domain to the whitelist.
                        </p>
                        <div class="rounded-lg bg-black/40 border border-white/10 relative">
                          <div class="overflow-x-auto p-4">
                            <pre class="text-xs md:text-sm text-emerald-100/90 font-mono leading-relaxed">{`"webCorsOriginList": [
  "http://localhost"`}<span class="text-amber-300">{`,
  "https://nihongoninja.io"`}</span>{`
]`}</pre>
                          </div>
                          <div class="absolute top-3 right-3 z-20">
                            <CopyButton text={`"webCorsOriginList": [\n  "http://localhost",\n  "https://nihongoninja.io"\n]`} />
                          </div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: StepTitle("Finalize"),
                    bullet: StepBullet(3),
                    description: (
                      <div class="mt-2 text-sm">
                        <p class="text-gray-300">
                          Restart Anki one last time. Keep the desktop app <span class="text-emerald-200 font-medium">running in the background</span> while you connect.
                        </p>
                      </div>
                    )
                  }
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="android" class="mt-6 text-left">
            <div class={cardClass}>
              <Timeline
                activeItem={-1}
                bulletSize={32}
                items={[
                  {
                    title: StepTitle("Install App"),
                    bullet: StepBullet(1),
                    description: (
                      <div class="mt-2 text-sm">
                        <p class="mb-3 text-gray-300">
                          Download <span class="text-emerald-200 font-medium">AnkiConnect Android</span>.
                        </p>
                        <div class="flex flex-wrap gap-3">
                          <ExternalLinkButton href="https://github.com/KamWithK/AnkiconnectAndroid/releases">
                            GitHub Releases
                          </ExternalLinkButton>
                          <ExternalLinkButton href="https://apt.izzysoft.de/fdroid/index/apk/com.kamwithk.ankiconnectandroid">
                            IzzyOnDroid
                          </ExternalLinkButton>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: StepTitle("Configure"),
                    bullet: StepBullet(2),
                    description: (
                      <div class="mt-2 text-sm">
                        <p class="mb-3 text-gray-300">
                          Open settings (gear icon) and update the <span class="text-emerald-200 font-medium">CORS Host</span> field.
                        </p>
                        <CopyableCode text="https://nihongoninja.io" />
                      </div>
                    )
                  },
                  {
                    title: StepTitle("Start Service"),
                    bullet: StepBullet(3),
                    description: (
                      <div class="mt-2 text-sm">
                        <p class="text-gray-300">
                          Save configuration, then tap <span class="text-emerald-200 font-medium">"Start Service"</span>. Keep the app running in the background.
                        </p>
                      </div>
                    )
                  }
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>

        <button disabled class="mt-6 w-full max-w-md flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-600/20 px-8 py-4 text-base font-bold text-emerald-100 transition-all duration-300 hover:bg-emerald-600/30 hover:border-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
          Connect Anki (Coming Soon)
        </button>
      </div>
    </div>
  )
}

function CopyButton(props: { text: string }) {
  const [copied, setCopied] = createSignal(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      class="relative flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors"
      title="Copy to clipboard"
    >
      <Show when={copied()}>
        <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded animate-in fade-in zoom-in duration-200 whitespace-nowrap">
          Copied!
        </span>
      </Show>
      {copied() ? <Check class="size-4 text-emerald-400" /> : <Copy class="size-4" />}
    </button>
  )
}

function CopyableCode(props: { text: string; label?: string; children?: any }) {
  return (
    <div class="flex items-center justify-between gap-3 rounded-lg bg-black/40 p-3 border border-white/10">
      <div class="flex items-center gap-3 overflow-hidden">
        <Show when={props.label}>
          <span class="text-xs text-muted-foreground whitespace-nowrap">{props.label}:</span>
        </Show>
        {props.children ?? <code class="font-mono text-emerald-300 text-sm truncate">{props.text}</code>}
      </div>
      <CopyButton text={props.text} />
    </div>
  )
}

function ExternalLinkButton(props: { href: string; children: any }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20 border border-emerald-500/20"
    >
      {props.children} <ExternalLink class="size-3" />
    </a>
  )
}

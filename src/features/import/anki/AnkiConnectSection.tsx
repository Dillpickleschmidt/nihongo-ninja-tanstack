import { createSignal, Show } from "solid-js"
import { Monitor, Smartphone, Copy, Check, ExternalLink } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Timeline } from "@/components/ui/timeline"
import { cn } from "@/utils"

type ConnectionStatus = "idle" | "testing" | "success" | "error"

const tabTriggerClass =
  "rounded-full h-9 px-4 data-[selected]:bg-(--accent)/20 data-[selected]:text-white border border-transparent transition-colors flex items-center justify-center gap-2"

const StepTitle = (text: string) => (
  <span class="text-base font-bold text-white">{text}</span>
)
const StepBullet = (n: number) => (
  <div class="text-background font-bold text-xs">{n}</div>
)

export function AnkiConnectSection() {
  const [status, setStatus] = createSignal<ConnectionStatus>("idle")

  const handleTestConnection = () => {
    setStatus("testing")
    setTimeout(() => {
      setStatus("error")
    }, 1500)
  }

  return (
    <>
      {/* Platform Tabs */}
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

        <TabsContent value="pc" class="mt-6">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <Timeline
              activeItem={-1}
              bulletSize={32}
              bulletClass="bg-neutral-500"
              items={[
                {
                  title: StepTitle("Install Anki Desktop"),
                  bullet: StepBullet(1),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="text-white/60">
                        Download and install Anki from{" "}
                        <a
                          href="https://apps.ankiweb.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-(--accent) underline underline-offset-2 hover:brightness-125"
                        >
                          ankiweb.net
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  title: StepTitle("Install AnkiConnect"),
                  bullet: StepBullet(2),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="text-white/60">
                        Open Anki →{" "}
                        <span class="text-white font-medium">
                          Tools → Add-ons → Get Add-ons
                        </span>{" "}
                        → Enter code:
                        <code class="ml-1 rounded bg-white/10 px-1.5 py-0.5 font-mono text-white">
                          2055492159
                        </code>
                      </p>
                    </div>
                  ),
                },
                {
                  title: StepTitle("Update Configuration"),
                  bullet: StepBullet(3),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="mb-3 text-white/60">
                        After restarting Anki, go to{" "}
                        <span class="text-white font-medium">
                          Add-ons → AnkiConnect → Config
                        </span>{" "}
                        and add our domain:
                      </p>
                      <div class="rounded-lg bg-black/40 border border-white/10 relative">
                        <div class="overflow-x-auto p-4">
                          <pre class="text-xs md:text-sm text-white/80 font-mono leading-relaxed">
                            {`"webCorsOriginList": [
  "http://localhost"`}
                            <span class="text-(--accent)">
                              {`,
  "https://nihongoninja.io"`}
                            </span>
                            {`
]`}
                          </pre>
                        </div>
                        <div class="absolute top-3 right-3">
                          <CopyButton
                            text={`"webCorsOriginList": [\n  "http://localhost",\n  "https://nihongoninja.io"\n]`}
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: StepTitle("Finalize"),
                  bullet: StepBullet(4),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="text-white/60">
                        Restart Anki one last time. Keep the app{" "}
                        <span class="text-white font-medium">
                          running in the background
                        </span>{" "}
                        while you connect.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="android" class="mt-6">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <Timeline
              activeItem={-1}
              bulletSize={32}
              bulletClass="bg-neutral-500"
              items={[
                {
                  title: StepTitle("Install App"),
                  bullet: StepBullet(1),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="mb-3 text-white/60">
                        Download{" "}
                        <span class="text-white font-medium">
                          AnkiConnect Android
                        </span>
                        .
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
                  ),
                },
                {
                  title: StepTitle("Configure"),
                  bullet: StepBullet(2),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="mb-3 text-white/60">
                        Open settings (gear icon) and update the{" "}
                        <span class="text-white font-medium">CORS Host</span>{" "}
                        field.
                      </p>
                      <CopyableCode text="https://nihongoninja.io" />
                    </div>
                  ),
                },
                {
                  title: StepTitle("Start Service"),
                  bullet: StepBullet(3),
                  description: (
                    <div class="mt-2 text-sm">
                      <p class="text-white/60">
                        Save configuration, then tap{" "}
                        <span class="text-white font-medium">
                          "Start Service"
                        </span>
                        . Keep the app running in the background.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Connection Status */}
      <div class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <StatusIndicator status={status()} />
            <div>
              <p class="font-medium text-white">Connection Status</p>
              <p class="text-sm text-white/50">
                {status() === "idle" && "Not tested yet"}
                {status() === "testing" && "Testing connection..."}
                {status() === "success" && "Connected to Anki"}
                {status() === "error" && "Could not connect to Anki"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleTestConnection}
            disabled={status() === "testing"}
            class={cn(
              "rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
              status() === "testing"
                ? "bg-white/10 text-white/50 cursor-wait"
                : "bg-(--accent) text-white hover:brightness-110",
            )}
          >
            {status() === "testing" ? "Testing..." : "Test Connection"}
          </button>
        </div>

        {status() === "error" && (
          <div class="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
            <p class="text-sm text-red-300">
              Make sure Anki is running and AnkiConnect is installed correctly.
              Check that no firewall is blocking the connection.
            </p>
          </div>
        )}

        {status() === "success" && (
          <div class="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
            <p class="text-sm text-emerald-300">
              Successfully connected to Anki. You can now sync your review
              progress.
            </p>
          </div>
        )}
      </div>

      {/* Sync Button */}
      <div class="mt-6 flex justify-end">
        <button
          type="button"
          disabled={status() !== "success"}
          class={cn(
            "rounded-xl px-6 py-3 font-medium transition-all",
            status() === "success"
              ? "bg-(--accent) text-white hover:brightness-110"
              : "bg-white/10 text-white/40 cursor-not-allowed",
          )}
        >
          Start Sync
        </button>
      </div>
    </>
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
      type="button"
      onClick={handleCopy}
      class="relative flex items-center justify-center rounded-md p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
      title="Copy to clipboard"
    >
      <Show when={copied()}>
        <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded animate-in fade-in zoom-in duration-200 whitespace-nowrap">
          Copied!
        </span>
      </Show>
      {copied() ? (
        <Check class="size-4 text-(--accent)" />
      ) : (
        <Copy class="size-4" />
      )}
    </button>
  )
}

function CopyableCode(props: { text: string; label?: string }) {
  return (
    <div class="flex items-center justify-between gap-3 rounded-lg bg-black/40 p-3 border border-white/10">
      <div class="flex items-center gap-3 overflow-hidden">
        <Show when={props.label}>
          <span class="text-xs text-white/40 whitespace-nowrap">
            {props.label}:
          </span>
        </Show>
        <code class="font-mono text-(--accent) text-sm truncate">
          {props.text}
        </code>
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
      class="inline-flex items-center gap-2 rounded-lg bg-(--accent)/10 px-4 py-2 text-sm font-medium text-(--accent) transition-colors hover:bg-(--accent)/20 border border-(--accent)/20"
    >
      {props.children} <ExternalLink class="size-3" />
    </a>
  )
}

function StatusIndicator(props: { status: ConnectionStatus }) {
  return (
    <div
      class={cn(
        "flex size-10 items-center justify-center rounded-xl",
        props.status === "idle" && "bg-white/10",
        props.status === "testing" && "bg-amber-500/20",
        props.status === "success" && "bg-emerald-500/20",
        props.status === "error" && "bg-red-500/20",
      )}
    >
      {props.status === "idle" && (
        <svg
          class="size-5 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      )}
      {props.status === "testing" && (
        <svg
          class="size-5 animate-spin text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {props.status === "success" && (
        <svg
          class="size-5 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
      {props.status === "error" && (
        <svg
          class="size-5 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  )
}

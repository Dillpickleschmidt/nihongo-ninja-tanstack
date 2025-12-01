import { createFileRoute } from "@tanstack/solid-router"
import { SmoothCard } from "@/components/SmoothCard"

export const Route = createFileRoute("/_home/import/_layout/anki/connect")({
  staticData: {
    headerConfig: {
      title: "Anki Integration",
      backLabel: "Back to Anki",
      backTo: "/import/anki",
    },
  },
  component: AnkiSetupPage,
})

function AnkiSetupPage() {
  return (
    <div class="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden pt-12 pb-24 md:py-24">
      <div class="relative container flex flex-col items-center text-center">
        <div class="mx-auto max-w-3xl px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Connect to <span class="text-purple-400">Anki</span>
          </h1>
          <p class="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg">
            To sync your reviews with Nihongo Ninja, you'll need to install the AnkiConnect add-on in your desktop Anki application.
          </p>

          <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <StepCard
              number={1}
              title="Install Anki"
              description="Make sure you have the Anki desktop application installed and running on your computer."
            />
            <StepCard
              number={2}
              title="Install Add-on"
              description="Install the AnkiConnect add-on (Code: 2055492159) via Tools > Add-ons in Anki."
            />
            <StepCard
              number={3}
              title="Connect"
              description="Once installed and Anki is restarted, you can connect Nihongo Ninja to your local Anki instance."
            />
          </div>

          <div class="mt-12">
            <div class="bg-purple-500/10 border-purple-500/20 text-purple-200 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              Placeholder: Connection logic will go here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepCard(props: { number: number; title: string; description: string }) {
  return (
    <SmoothCard
      width={280}
      height={220}
      cornerRadius={16}
      border={true}
      borderClass="border-white/10"
      class="bg-white/5 backdrop-blur-sm"
    >
      <div class="flex h-full flex-col p-6 text-left">
        <div class="mb-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
          {props.number}
        </div>
        <h3 class="mb-2 text-lg font-bold">{props.title}</h3>
        <p class="text-muted-foreground text-sm leading-relaxed">{props.description}</p>
      </div>
    </SmoothCard>
  )
}

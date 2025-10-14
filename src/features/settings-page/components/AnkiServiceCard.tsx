// features/settings-page/components/AnkiServiceCard.tsx
import { Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ServiceCard } from "./ServiceCard"
import { validateAnkiConnect } from "@/features/service-api-functions/anki/anki-connect-client"
import { useServiceManagement } from "../context/ServiceManagementContext"
import type { ServicePreference } from "@/features/main-cookies/schemas/user-settings"

type ServiceCardProps = {
  preference: () => ServicePreference
  updateServicePreference: (updates: Partial<ServicePreference>) => void
}

export const AnkiServiceCard = (props: ServiceCardProps) => {
  const { errors, isProcessing, setError, clearError, setIsProcessing } =
    useServiceManagement()

  const handleConnect = async () => {
    setIsProcessing(true)
    clearError("anki")

    const result = await validateAnkiConnect()

    if (result.success) {
      props.updateServicePreference({
        mode: "live",
        is_api_key_valid: true,
      })
    } else {
      props.updateServicePreference({
        is_api_key_valid: false,
      })
      setError("anki", result.error || "An unknown error occurred.")
    }
    setIsProcessing(false)
  }

  const handleImport = async () => {
    setIsProcessing(true)
    clearError("anki")

    // TODO: Implement Anki data import
    setError(
      "anki",
      "Anki data import not yet implemented with new settings system",
    )
    props.updateServicePreference({ data_imported: false })
    setIsProcessing(false)
  }

  return (
    <ServiceCard
      title="Anki Integration"
      gradient="from-blue-600/90 via-cyan-700/90 to-sky-800/90"
      borderColor="border-blue-400/30"
      iconColor="bg-blue-300"
      service="anki"
      selectedMode={props.preference().mode || "disabled"}
      onModeChange={(mode) => props.updateServicePreference({ mode })}
    >
      <Show when={props.preference().mode === "live"}>
        <Tabs defaultValue="pc" class="w-full">
          <TabsList class="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0">
            <TabsTrigger
              value="pc"
              class="rounded-lg border border-blue-400/30 data-[selected]:border-blue-400/50 data-[selected]:bg-blue-400/30 data-[selected]:text-blue-50"
            >
              PC
            </TabsTrigger>
            <TabsTrigger
              value="android"
              class="rounded-lg border border-blue-400/30 data-[selected]:border-blue-400/50 data-[selected]:bg-blue-400/30 data-[selected]:text-blue-50"
            >
              Android
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pc" class="space-y-4">
            <div class="rounded-lg border border-blue-400/30 bg-blue-500/20 p-4">
              <p class="mb-2 text-sm font-semibold text-blue-100">
                Setup Instructions:
              </p>
              <ol class="ml-4 list-decimal space-y-1 text-sm text-blue-100">
                <li>
                  Open Anki Desktop and install the AnkiConnect plugin
                  <div>
                    (Tools → Add-ons → Get Add-ons → code:{" "}
                    <code>2055492159</code>)
                  </div>
                </li>
                <li>Restart Anki after installation</li>
                <li>
                  Update CORS in AnkiConnect config (Tools → Add-ons →
                  AnkiConnect → Config)
                </li>
                <li>
                  Add{" "}
                  <code class="rounded bg-blue-900/30 px-1">
                    "https://nihongoninja.io"
                  </code>{" "}
                  to the{" "}
                  <code class="rounded bg-blue-900/30 px-1">
                    "webCorsOriginList"
                  </code>{" "}
                  array (you must also add a comma to the end of the previous
                  entry in the array or it will complain):
                </li>
              </ol>
              <pre class="mt-2 overflow-x-auto rounded bg-blue-900/30 p-2 text-xs text-blue-100">
                <code>
                  {`"webCorsOriginList": [
  "http://localhost",
  "https://nihongoninja.io"
]`}
                </code>
              </pre>
              <ol
                class="ml-4 list-decimal space-y-1 text-sm text-blue-100"
                start="6"
              >
                <li>Click OK and restart Anki</li>
                <li>Keep Anki desktop running while using live mode</li>
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="android" class="space-y-4">
            <div class="rounded-lg border border-blue-400/30 bg-blue-500/20 p-4">
              <p class="mb-2 text-sm font-semibold text-blue-100">
                Setup Instructions:
              </p>
              <ol class="ml-4 list-decimal space-y-1 text-sm text-blue-100">
                <li>Install AnkiDroid if not already installed</li>
                <li>
                  Install{" "}
                  <a
                    href="https://github.com/KamWithK/AnkiconnectAndroid/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline hover:text-blue-200"
                  >
                    AnkiConnect Android
                  </a>{" "}
                  from GitHub releases or{" "}
                  <a
                    href="https://apt.izzysoft.de/fdroid/index/apk/com.kamwithk.ankiconnectandroid"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline hover:text-blue-200"
                  >
                    IzzyOnDroid repo
                  </a>
                </li>
                <li>In the app settings (gear icon), update CORS Host</li>
                <li>
                  Enter{" "}
                  <code class="rounded bg-blue-900/30 px-1">
                    "https://nihongoninja.io"
                  </code>{" "}
                </li>
              </ol>
              <ol
                class="ml-4 list-decimal space-y-1 text-sm text-blue-100"
                start="7"
              >
                <li>Save the configuration</li>
                <li>Start AnkiConnect Android app and tap "Start Service"</li>
                <li>
                  Keep AnkiConnect Android service running in the background
                </li>
              </ol>
            </div>
          </TabsContent>

          <div class="mt-2 space-y-4">
            <Button
              onClick={handleConnect}
              disabled={isProcessing()}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to Anki
            </Button>
            <Show when={props.preference().is_api_key_valid}>
              <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                <p class="text-sm text-green-100">
                  ✓ Connected to Anki - Live access enabled
                </p>
              </div>
            </Show>
          </div>
        </Tabs>
      </Show>

      <Show when={props.preference().mode === "imported"}>
        <div class="space-y-4">
          <Show when={!props.preference().data_imported}>
            <Button
              onClick={handleImport}
              disabled={isProcessing()}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Import Anki Data
            </Button>
          </Show>
          <Show when={props.preference().data_imported}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Anki data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={errors().anki}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {errors().anki}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}

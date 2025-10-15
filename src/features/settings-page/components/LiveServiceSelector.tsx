// features/settings-page/components/LiveServiceSelector.tsx
import { Show, createSignal } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { validateAnkiConnect } from "@/features/service-api-functions/anki/anki-connect-client"
import { validateJpdbApiKey } from "@/features/service-api-functions/jpdb/validation"
import type {
  ServiceType,
  AllServicePreferences,
} from "@/features/main-cookies/schemas/user-settings"
import { getActiveLiveService } from "@/features/srs-services/utils"
import {
  getServiceCredentials,
  updateServiceCredentials,
} from "@/features/main-cookies/functions/service-credentials"

interface LiveServiceSelectorProps {
  preferences: AllServicePreferences
  onServiceChange: (service: "nihongo" | ServiceType) => Promise<void>
  isProcessing: boolean
  errors: Record<ServiceType, string | null>
  setError: (service: ServiceType, error: string) => void
  clearError: (service: ServiceType) => void
}

export const LiveServiceSelector = (props: LiveServiceSelectorProps) => {
  const [ankiApiKey, setAnkiApiKey] = createSignal("")
  const [wanikaniApiKey, setWanikaniApiKey] = createSignal("")
  const [jpdbApiKey, setJpdbApiKey] = createSignal("")

  const activeService = () =>
    getActiveLiveService(props.preferences) || "nihongo"

  const handleServiceSelect = async (value: string) => {
    await props.onServiceChange(value as "nihongo" | ServiceType)
  }

  const handleAnkiConnect = async () => {
    props.clearError("anki")
    const result = await validateAnkiConnect()

    if (!result.success) {
      props.setError("anki", result.error || "Connection failed")
    }
  }

  const handleWanikaniConnect = async () => {
    const apiKey = wanikaniApiKey()
    if (!apiKey) return

    props.clearError("wanikani")
    // TODO: Implement WaniKani API validation
    props.setError("wanikani", "WaniKani integration not yet fully implemented")
  }

  const handleJpdbConnect = async () => {
    const apiKey = jpdbApiKey()
    if (!apiKey) return

    props.clearError("jpdb")

    const result = await validateJpdbApiKey(apiKey)
    if (!result.success) {
      props.setError("jpdb", result.error || "Invalid API key")
      return
    }

    // Save API key to credentials
    const currentCredentials = await getServiceCredentials()
    await updateServiceCredentials({
      data: {
        ...currentCredentials,
        jpdb: { ...currentCredentials.jpdb, api_key: apiKey },
      },
    })
  }

  const services = [
    { value: "nihongo", label: "None (use Nihongo Ninja)" },
    { value: "anki", label: "Anki" },
    { value: "wanikani", label: "WaniKani" },
    { value: "jpdb", label: "JPDB" },
  ]

  return (
    <div class="space-y-4">
      <Select
        value={activeService()}
        onChange={handleServiceSelect}
        options={services.map((s) => s.value)}
        placeholder="Select service"
        disabled={props.isProcessing}
        itemComponent={(itemProps) => (
          <SelectItem item={itemProps.item}>
            {services.find((s) => s.value === itemProps.item.rawValue)?.label}
          </SelectItem>
        )}
      >
        <SelectTrigger class="w-full">
          <SelectValue>
            {(state) =>
              services.find((s) => s.value === state.selectedOption())?.label ??
              "Select service"
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent />
      </Select>

      {/* Anki Connection UI */}
      <Show when={activeService() === "anki"}>
        <div class="rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-600/90 via-cyan-700/90 to-sky-800/90 p-6 shadow-lg backdrop-blur-sm">
          <h4 class="mb-3 text-sm font-semibold">Anki Connection</h4>

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
          </Tabs>

          <div class="mt-2 space-y-4">
            <Button
              onClick={handleAnkiConnect}
              disabled={props.isProcessing}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to Anki
            </Button>

            <Show when={props.preferences.anki.is_api_key_valid}>
              <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                <p class="text-sm text-green-100">
                  ✓ Connected to Anki - Live access enabled
                </p>
              </div>
            </Show>
          </div>

          <Show when={props.errors.anki}>
            <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
              <p class="text-sm text-red-100">✗ {props.errors.anki}</p>
            </div>
          </Show>
        </div>
      </Show>

      {/* WaniKani Connection UI */}
      <Show when={activeService() === "wanikani"}>
        <div class="rounded-xl border border-green-400/30 bg-gradient-to-br from-green-600/90 via-emerald-700/90 to-teal-800/90 p-6 shadow-lg backdrop-blur-sm">
          <h4 class="mb-3 text-sm font-semibold">WaniKani Connection</h4>

          <form
            class="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              handleWanikaniConnect()
            }}
          >
            <TextField>
              <TextFieldLabel class="text-white">
                WaniKani API Key
              </TextFieldLabel>
              <TextFieldInput
                type="password"
                autocomplete="off"
                placeholder="Enter your WaniKani API key"
                class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                value={wanikaniApiKey()}
                onInput={(e) => setWanikaniApiKey(e.currentTarget.value)}
              />
            </TextField>
            <Button
              type="submit"
              disabled={!wanikaniApiKey() || props.isProcessing}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to WaniKani
            </Button>
            <Show when={props.preferences.wanikani.is_api_key_valid}>
              <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                <p class="text-sm text-green-100">
                  ✓ Connected to WaniKani - Live access enabled
                </p>
              </div>
            </Show>
          </form>

          <Show when={props.errors.wanikani}>
            <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
              <p class="text-sm text-red-100">✗ {props.errors.wanikani}</p>
            </div>
          </Show>
        </div>
      </Show>

      {/* JPDB Connection UI */}
      <Show when={activeService() === "jpdb"}>
        <div class="rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-indigo-800/90 p-6 shadow-lg backdrop-blur-sm">
          <h4 class="mb-3 text-sm font-semibold">JPDB Connection</h4>

          <form
            class="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              handleJpdbConnect()
            }}
          >
            <TextField>
              <TextFieldLabel class="text-white">jpdb API Key</TextFieldLabel>
              <TextFieldInput
                type="password"
                autocomplete="off"
                placeholder="Enter your jpdb API key"
                class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                value={jpdbApiKey()}
                onInput={(e) => setJpdbApiKey(e.currentTarget.value)}
              />
            </TextField>
            <Button
              type="submit"
              disabled={!jpdbApiKey() || props.isProcessing}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to jpdb
            </Button>
            <Show when={props.preferences.jpdb.is_api_key_valid}>
              <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                <p class="text-sm text-green-100">
                  ✓ Connected to jpdb - Live access enabled
                </p>
              </div>
            </Show>
          </form>

          <Show when={props.errors.jpdb}>
            <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
              <p class="text-sm text-red-100">✗ {props.errors.jpdb}</p>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  )
}

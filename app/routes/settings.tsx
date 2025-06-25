// routes/settings.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show, For } from "solid-js"
import { jpdbAdapter } from "@/features/fsrs-import/jpdbAdapter"
import { importReviewsServerFn } from "@/features/fsrs-import/importReviewsServerFn"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
})

type ServiceStatus = "disconnected" | "connected" | "connecting" | "error"
type ServiceMode = "live" | "imported" | "disabled"

interface ServiceState {
  status: ServiceStatus
  mode: ServiceMode
  apiKey?: string
  username?: string
  password?: string
  lastImportDate?: Date
  errorMessage?: string
}

function RouteComponent() {
  // Service states
  const [jpdbState, setJpdbState] = createSignal<ServiceState>({
    status: "disconnected",
    mode: "disabled",
  })
  const [wanikaniState, setWanikaniState] = createSignal<ServiceState>({
    status: "disconnected",
    mode: "disabled",
  })
  const [ankiState, setAnkiState] = createSignal<ServiceState>({
    status: "disconnected",
    mode: "disabled",
  })

  // UI states
  const [isProcessing, setIsProcessing] = createSignal(false)

  // Service connection handlers
  const handleJpdbConnect = async () => {
    const state = jpdbState()
    if (!state.apiKey) return

    setJpdbState({ ...state, status: "connecting" })
    try {
      // TODO: Validate API key with jpdb
      setJpdbState({ ...state, status: "connected" })
    } catch (error) {
      setJpdbState({
        ...state,
        status: "error",
        errorMessage: "Failed to connect to jpdb. Please check your API key.",
      })
    }
  }

  const handleWanikaniConnect = async () => {
    const state = wanikaniState()
    if (!state.apiKey) return

    setWanikaniState({ ...state, status: "connecting" })
    try {
      // TODO: Validate API key with WaniKani
      setWanikaniState({ ...state, status: "connected" })
    } catch (error) {
      setWanikaniState({
        ...state,
        status: "error",
        errorMessage:
          "Failed to connect to WaniKani. Please check your API key.",
      })
    }
  }

  const handleAnkiConnect = async () => {
    const state = ankiState()
    if (!state.username || !state.password) return

    setAnkiState({ ...state, status: "connecting" })
    try {
      // TODO: Convert username/password to API key
      setAnkiState({ ...state, status: "connected" })
    } catch (error) {
      setAnkiState({
        ...state,
        status: "error",
        errorMessage:
          "Failed to connect to Anki. Please check your credentials.",
      })
    }
  }

  // Import handlers
  const handleJpdbImport = async () => {
    setIsProcessing(true)
    try {
      // TODO: Import jpdb data using API
      setJpdbState({
        ...jpdbState(),
        lastImportDate: new Date(),
      })
    } catch (error) {
      setJpdbState({
        ...jpdbState(),
        status: "error",
        errorMessage: "Failed to import jpdb data.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const handleWanikaniImport = async () => {
    setIsProcessing(true)
    try {
      // TODO: Import WaniKani data using API
      setWanikaniState({
        ...wanikaniState(),
        lastImportDate: new Date(),
      })
    } catch (error) {
      setWanikaniState({
        ...wanikaniState(),
        status: "error",
        errorMessage: "Failed to import WaniKani data.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const handleAnkiImport = async () => {
    setIsProcessing(true)
    try {
      // TODO: Import Anki data using API
      setAnkiState({
        ...ankiState(),
        lastImportDate: new Date(),
      })
    } catch (error) {
      setAnkiState({
        ...ankiState(),
        status: "error",
        errorMessage: "Failed to import Anki data.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  // Legacy file upload handler (fallback for jpdb)
  const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (!file) return

    if (!file.name.endsWith(".json")) {
      setJpdbState({
        ...jpdbState(),
        status: "error",
        errorMessage: "Please select a JSON file",
      })
      return
    }

    setIsProcessing(true)

    try {
      const fileText = await file.text()
      const rawData = JSON.parse(fileText)

      if (!jpdbAdapter.validateInput(rawData)) {
        throw new Error(
          "Invalid JPDB JSON format. Please check your export file.",
        )
      }

      const normalizedCards = jpdbAdapter.transformCards(rawData)

      if (normalizedCards.length === 0) {
        throw new Error("No valid cards found in the JPDB export.")
      }

      const result = await importReviewsServerFn({
        data: {
          cards: normalizedCards,
          source: "jpdb",
        },
      })

      if (result.success) {
        setJpdbState({
          ...jpdbState(),
          lastImportDate: new Date(),
          status: "connected",
        })
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setJpdbState({
        ...jpdbState(),
        status: "error",
        errorMessage: `Import failed: ${errorMessage}`,
      })
    } finally {
      setIsProcessing(false)
      target.value = ""
    }
  }

  // Mode change handlers
  const handleModeChange = (
    service: "jpdb" | "wanikani" | "anki",
    newMode: ServiceMode,
  ) => {
    switch (service) {
      case "jpdb":
        setJpdbState({
          ...jpdbState(),
          mode: newMode,
          status: "disconnected",
          errorMessage: undefined,
        })
        break
      case "wanikani":
        setWanikaniState({
          ...wanikaniState(),
          mode: newMode,
          status: "disconnected",
          errorMessage: undefined,
        })
        break
      case "anki":
        setAnkiState({
          ...ankiState(),
          mode: newMode,
          status: "disconnected",
          errorMessage: undefined,
        })
        break
    }
  }

  const ServiceCard = (props: {
    title: string
    gradient: string
    borderColor: string
    iconColor: string
    state: ServiceState
    onModeChange: (mode: ServiceMode) => void
    children: any
  }) => (
    <div
      class={`relative rounded-xl border ${props.borderColor} bg-gradient-to-br ${props.gradient} p-6 shadow-lg backdrop-blur-sm`}
    >
      {/* Service Header with Mode Select */}
      <div class="mb-6 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class={`h-3 w-3 rounded-full ${props.iconColor}`}></div>
          <h2 class="text-xl font-bold text-white">{props.title}</h2>
        </div>

        <Select
          value={props.state.mode}
          onChange={props.onModeChange}
          options={["disabled", "live", "imported"]}
          placeholder="Select mode"
          itemComponent={(props) => (
            <SelectItem item={props.item}>
              {props.item.rawValue === "disabled"
                ? "Disabled"
                : props.item.rawValue === "live"
                  ? "Live Access"
                  : props.item.rawValue === "imported"
                    ? "Import Data"
                    : props.item.rawValue}
            </SelectItem>
          )}
          disabled={isProcessing()}
        >
          <SelectTrigger class="w-36 border-white/30 bg-white/10 text-white backdrop-blur-sm placeholder:text-white/70">
            <SelectValue<ServiceMode>>
              {(state) => {
                const mode = state.selectedOption()
                return mode === "disabled"
                  ? "Disabled"
                  : mode === "live"
                    ? "Live Access"
                    : mode === "imported"
                      ? "Import Data"
                      : "Select mode"
              }}
            </SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </div>

      {/* Mode Explanation */}
      <div class="mb-6 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
        <Show when={props.state.mode === "live"}>
          <div class="text-sm text-white/90">
            <p class="mb-1 font-medium">📡 Live Access Mode</p>
            <p>
              Connect to your account and access decks in real-time. Continue
              using your external SRS while browsing content here.
            </p>
          </div>
        </Show>
        <Show when={props.state.mode === "imported"}>
          <div class="text-sm text-white/90">
            <p class="mb-1 font-medium">📦 Import Data Mode</p>
            <p>
              Import your data once to switch to our SRS system. Your data
              becomes local and always available offline.
            </p>
          </div>
        </Show>
        <Show when={props.state.mode === "disabled"}>
          <div class="text-sm text-white/70">
            <p class="mb-1 font-medium">⏸️ Service Disabled</p>
            <p>
              This service integration is currently disabled. Select a mode
              above to get started.
            </p>
          </div>
        </Show>
      </div>

      {/* Service Content */}
      <Show when={props.state.mode !== "disabled"}>{props.children}</Show>
    </div>
  )

  return (
    <div class="min-h-screen">
      <div class="mx-auto max-w-7xl p-6">
        {/* Mobile Layout: Stacked */}
        <SSRMediaQuery hideFrom="lg">
          <div class="space-y-6">
            <h1 class="mb-8 text-3xl font-bold">Settings</h1>

            {/* General Settings - Mobile */}
            <div class="bg-card border-border rounded-xl border p-6 shadow-lg">
              <h2 class="mb-4 text-xl font-bold">General Settings</h2>
              <p class="text-muted-foreground">
                General application settings will be available here in the
                future.
              </p>
            </div>

            <h2 class="mb-6 text-2xl font-bold">Service Integrations</h2>

            {/* Anki Card */}
            <ServiceCard
              title="Anki Integration"
              gradient="from-blue-600/90 via-cyan-700/90 to-sky-800/90"
              borderColor="border-blue-400/30"
              iconColor="bg-blue-300"
              state={ankiState()}
              onModeChange={(mode) => handleModeChange("anki", mode)}
            >
              <Show when={ankiState().mode === "live"}>
                <div class="space-y-4">
                  <Show when={ankiState().status !== "connected"}>
                    <div class="space-y-4">
                      <TextField>
                        <TextFieldLabel class="text-white">
                          AnkiWeb Username
                        </TextFieldLabel>
                        <TextFieldInput
                          type="text"
                          placeholder="Enter your AnkiWeb username"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={ankiState().username || ""}
                          onInput={(e) =>
                            setAnkiState({
                              ...ankiState(),
                              username: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <TextField>
                        <TextFieldLabel class="text-white">
                          AnkiWeb Password
                        </TextFieldLabel>
                        <TextFieldInput
                          type="password"
                          placeholder="Enter your AnkiWeb password"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={ankiState().password || ""}
                          onInput={(e) =>
                            setAnkiState({
                              ...ankiState(),
                              password: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <Button
                        onClick={handleAnkiConnect}
                        disabled={
                          !ankiState().username ||
                          !ankiState().password ||
                          ankiState().status === "connecting"
                        }
                        class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                      >
                        Connect to Anki
                      </Button>
                    </div>
                  </Show>
                  <Show when={ankiState().status === "connected"}>
                    <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                      <p class="text-sm text-green-100">
                        ✓ Connected to AnkiWeb - Live access enabled
                      </p>
                    </div>
                  </Show>
                </div>
              </Show>

              <Show when={ankiState().mode === "imported"}>
                <div class="space-y-4">
                  <Show when={!ankiState().lastImportDate}>
                    <div class="space-y-4">
                      <TextField>
                        <TextFieldLabel class="text-white">
                          AnkiWeb Username
                        </TextFieldLabel>
                        <TextFieldInput
                          type="text"
                          placeholder="Enter your AnkiWeb username"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={ankiState().username || ""}
                          onInput={(e) =>
                            setAnkiState({
                              ...ankiState(),
                              username: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <TextField>
                        <TextFieldLabel class="text-white">
                          AnkiWeb Password
                        </TextFieldLabel>
                        <TextFieldInput
                          type="password"
                          placeholder="Enter your AnkiWeb password"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={ankiState().password || ""}
                          onInput={(e) =>
                            setAnkiState({
                              ...ankiState(),
                              password: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <Button
                        onClick={handleAnkiImport}
                        disabled={
                          !ankiState().username ||
                          !ankiState().password ||
                          isProcessing()
                        }
                        class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                      >
                        Import Anki Data
                      </Button>
                    </div>
                  </Show>
                  <Show when={ankiState().lastImportDate}>
                    <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                      <p class="text-sm text-green-100">
                        ✓ Anki data imported successfully
                        <span class="mt-1 block text-xs text-green-200">
                          Last imported:{" "}
                          {ankiState().lastImportDate!.toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </Show>
                </div>
              </Show>

              <Show when={ankiState().errorMessage}>
                <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                  <p class="text-sm text-red-100">
                    ✗ {ankiState().errorMessage}
                  </p>
                </div>
              </Show>
            </ServiceCard>

            {/* WaniKani Card */}
            <ServiceCard
              title="WaniKani Integration"
              gradient="from-green-600/90 via-emerald-700/90 to-teal-800/90"
              borderColor="border-green-400/30"
              iconColor="bg-green-300"
              state={wanikaniState()}
              onModeChange={(mode) => handleModeChange("wanikani", mode)}
            >
              <Show when={wanikaniState().mode === "live"}>
                <div class="space-y-4">
                  <Show when={wanikaniState().status !== "connected"}>
                    <TextField>
                      <TextFieldLabel class="text-white">
                        WaniKani API Key
                      </TextFieldLabel>
                      <TextFieldInput
                        type="password"
                        placeholder="Enter your WaniKani API key"
                        class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                        value={wanikaniState().apiKey || ""}
                        onInput={(e) =>
                          setWanikaniState({
                            ...wanikaniState(),
                            apiKey: e.currentTarget.value,
                          })
                        }
                      />
                    </TextField>
                    <Button
                      onClick={handleWanikaniConnect}
                      disabled={
                        !wanikaniState().apiKey ||
                        wanikaniState().status === "connecting"
                      }
                      class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                    >
                      Connect to WaniKani
                    </Button>
                  </Show>
                  <Show when={wanikaniState().status === "connected"}>
                    <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                      <p class="text-sm text-green-100">
                        ✓ Connected to WaniKani - Live access enabled
                      </p>
                    </div>
                  </Show>
                </div>
              </Show>

              <Show when={wanikaniState().mode === "imported"}>
                <div class="space-y-4">
                  <Show when={!wanikaniState().lastImportDate}>
                    <TextField>
                      <TextFieldLabel class="text-white">
                        WaniKani API Key
                      </TextFieldLabel>
                      <TextFieldInput
                        type="password"
                        placeholder="Enter your WaniKani API key"
                        class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                        value={wanikaniState().apiKey || ""}
                        onInput={(e) =>
                          setWanikaniState({
                            ...wanikaniState(),
                            apiKey: e.currentTarget.value,
                          })
                        }
                      />
                    </TextField>
                    <Button
                      onClick={handleWanikaniImport}
                      disabled={!wanikaniState().apiKey || isProcessing()}
                      class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                    >
                      Import WaniKani Data
                    </Button>
                  </Show>
                  <Show when={wanikaniState().lastImportDate}>
                    <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                      <p class="text-sm text-green-100">
                        ✓ WaniKani data imported successfully
                        <span class="mt-1 block text-xs text-green-200">
                          Last imported:{" "}
                          {wanikaniState().lastImportDate!.toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </Show>
                </div>
              </Show>

              <Show when={wanikaniState().errorMessage}>
                <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                  <p class="text-sm text-red-100">
                    ✗ {wanikaniState().errorMessage}
                  </p>
                </div>
              </Show>
            </ServiceCard>

            {/* jpdb Card */}
            <ServiceCard
              title="jpdb Integration"
              gradient="from-purple-600/90 via-purple-700/90 to-indigo-800/90"
              borderColor="border-purple-400/30"
              iconColor="bg-purple-300"
              state={jpdbState()}
              onModeChange={(mode) => handleModeChange("jpdb", mode)}
            >
              <Show when={jpdbState().mode === "live"}>
                <div class="space-y-4">
                  <Show when={jpdbState().status !== "connected"}>
                    <TextField>
                      <TextFieldLabel class="text-white">
                        jpdb API Key
                      </TextFieldLabel>
                      <TextFieldInput
                        type="password"
                        placeholder="Enter your jpdb API key"
                        class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                        value={jpdbState().apiKey || ""}
                        onInput={(e) =>
                          setJpdbState({
                            ...jpdbState(),
                            apiKey: e.currentTarget.value,
                          })
                        }
                      />
                    </TextField>
                    <Button
                      onClick={handleJpdbConnect}
                      disabled={
                        !jpdbState().apiKey ||
                        jpdbState().status === "connecting"
                      }
                      class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                    >
                      Connect to jpdb
                    </Button>
                  </Show>
                  <Show when={jpdbState().status === "connected"}>
                    <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                      <p class="text-sm text-green-100">
                        ✓ Connected to jpdb - Live access enabled
                      </p>
                    </div>
                  </Show>
                </div>
              </Show>

              <Show when={jpdbState().mode === "imported"}>
                <div class="space-y-4">
                  <Show when={!jpdbState().lastImportDate}>
                    <div class="space-y-4">
                      <TextField>
                        <TextFieldLabel class="text-white">
                          jpdb API Key
                        </TextFieldLabel>
                        <TextFieldInput
                          type="password"
                          placeholder="Enter your jpdb API key"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={jpdbState().apiKey || ""}
                          onInput={(e) =>
                            setJpdbState({
                              ...jpdbState(),
                              apiKey: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <Button
                        onClick={handleJpdbImport}
                        disabled={!jpdbState().apiKey || isProcessing()}
                        class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                      >
                        Import jpdb Data
                      </Button>

                      <div class="border-t border-white/20 pt-4">
                        <p class="mb-2 text-sm text-white/80">
                          Alternative: Upload JSON File
                        </p>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleFileUpload}
                          disabled={isProcessing()}
                          class="block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </Show>
                  <Show when={jpdbState().lastImportDate}>
                    <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                      <p class="text-sm text-green-100">
                        ✓ jpdb data imported successfully
                        <span class="mt-1 block text-xs text-green-200">
                          Last imported:{" "}
                          {jpdbState().lastImportDate!.toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </Show>
                </div>
              </Show>

              <Show when={jpdbState().errorMessage}>
                <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                  <p class="text-sm text-red-100">
                    ✗ {jpdbState().errorMessage}
                  </p>
                </div>
              </Show>
            </ServiceCard>
          </div>
        </SSRMediaQuery>

        {/* Desktop Layout */}
        <SSRMediaQuery showFrom="lg">
          <div class="mt-12 grid grid-cols-[1fr_2fr] gap-8">
            {/* Left Column: General Settings */}
            <div class="space-y-6">
              <h1 class="mb-8 text-3xl font-bold">Settings</h1>
              <div class="bg-card border-border rounded-xl border p-6 shadow-lg">
                <h2 class="mb-4 text-xl font-bold">General Settings</h2>
                <p class="text-muted-foreground">
                  General application settings will be available here in the
                  future.
                </p>
              </div>
            </div>

            {/* Right Column: Service Integrations */}
            <div class="mt-4 space-y-6">
              <h2 class="mb-6 text-2xl font-bold">Service Integrations</h2>

              {/* Anki Card */}
              <ServiceCard
                title="Anki Integration"
                gradient="from-blue-600/90 via-cyan-700/90 to-sky-800/90"
                borderColor="border-blue-500/30"
                iconColor="bg-blue-300"
                state={ankiState()}
                onModeChange={(mode) => handleModeChange("anki", mode)}
              >
                <Show when={ankiState().mode === "live"}>
                  <div class="space-y-4">
                    <Show when={ankiState().status !== "connected"}>
                      <div class="space-y-4">
                        <TextField>
                          <TextFieldLabel class="text-white">
                            AnkiWeb Username
                          </TextFieldLabel>
                          <TextFieldInput
                            type="text"
                            placeholder="Enter your AnkiWeb username"
                            class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                            value={ankiState().username || ""}
                            onInput={(e) =>
                              setAnkiState({
                                ...ankiState(),
                                username: e.currentTarget.value,
                              })
                            }
                          />
                        </TextField>
                        <TextField>
                          <TextFieldLabel class="text-white">
                            AnkiWeb Password
                          </TextFieldLabel>
                          <TextFieldInput
                            type="password"
                            placeholder="Enter your AnkiWeb password"
                            class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                            value={ankiState().password || ""}
                            onInput={(e) =>
                              setAnkiState({
                                ...ankiState(),
                                password: e.currentTarget.value,
                              })
                            }
                          />
                        </TextField>
                        <Button
                          onClick={handleAnkiConnect}
                          disabled={
                            !ankiState().username ||
                            !ankiState().password ||
                            ankiState().status === "connecting"
                          }
                          class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                        >
                          Connect to Anki
                        </Button>
                      </div>
                    </Show>
                    <Show when={ankiState().status === "connected"}>
                      <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                        <p class="text-sm text-green-100">
                          ✓ Connected to AnkiWeb - Live access enabled
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>

                <Show when={ankiState().mode === "imported"}>
                  <div class="space-y-4">
                    <Show when={!ankiState().lastImportDate}>
                      <div class="space-y-4">
                        <TextField>
                          <TextFieldLabel class="text-white">
                            AnkiWeb Username
                          </TextFieldLabel>
                          <TextFieldInput
                            type="text"
                            placeholder="Enter your AnkiWeb username"
                            class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                            value={ankiState().username || ""}
                            onInput={(e) =>
                              setAnkiState({
                                ...ankiState(),
                                username: e.currentTarget.value,
                              })
                            }
                          />
                        </TextField>
                        <TextField>
                          <TextFieldLabel class="text-white">
                            AnkiWeb Password
                          </TextFieldLabel>
                          <TextFieldInput
                            type="password"
                            placeholder="Enter your AnkiWeb password"
                            class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                            value={ankiState().password || ""}
                            onInput={(e) =>
                              setAnkiState({
                                ...ankiState(),
                                password: e.currentTarget.value,
                              })
                            }
                          />
                        </TextField>
                        <Button
                          onClick={handleAnkiImport}
                          disabled={
                            !ankiState().username ||
                            !ankiState().password ||
                            isProcessing()
                          }
                          class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                        >
                          Import Anki Data
                        </Button>
                      </div>
                    </Show>
                    <Show when={ankiState().lastImportDate}>
                      <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                        <p class="text-sm text-green-100">
                          ✓ Anki data imported successfully
                          <span class="mt-1 block text-xs text-green-200">
                            Last imported:{" "}
                            {ankiState().lastImportDate!.toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>

                <Show when={ankiState().errorMessage}>
                  <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                    <p class="text-sm text-red-100">
                      ✗ {ankiState().errorMessage}
                    </p>
                  </div>
                </Show>
              </ServiceCard>

              {/* WaniKani Card */}
              <ServiceCard
                title="WaniKani Integration"
                gradient="from-green-600/90 via-emerald-700/90 to-teal-800/90"
                borderColor="border-green-500/30"
                iconColor="bg-green-300"
                state={wanikaniState()}
                onModeChange={(mode) => handleModeChange("wanikani", mode)}
              >
                <Show when={wanikaniState().mode === "live"}>
                  <div class="space-y-4">
                    <Show when={wanikaniState().status !== "connected"}>
                      <TextField>
                        <TextFieldLabel class="text-white">
                          WaniKani API Key
                        </TextFieldLabel>
                        <TextFieldInput
                          type="password"
                          placeholder="Enter your WaniKani API key"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={wanikaniState().apiKey || ""}
                          onInput={(e) =>
                            setWanikaniState({
                              ...wanikaniState(),
                              apiKey: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <Button
                        onClick={handleWanikaniConnect}
                        disabled={
                          !wanikaniState().apiKey ||
                          wanikaniState().status === "connecting"
                        }
                        class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                      >
                        Connect to WaniKani
                      </Button>
                    </Show>
                    <Show when={wanikaniState().status === "connected"}>
                      <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                        <p class="text-sm text-green-100">
                          ✓ Connected to WaniKani - Live access enabled
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>

                <Show when={wanikaniState().mode === "imported"}>
                  <div class="space-y-4">
                    <Show when={!wanikaniState().lastImportDate}>
                      <TextField>
                        <TextFieldLabel class="text-white">
                          WaniKani API Key
                        </TextFieldLabel>
                        <TextFieldInput
                          type="password"
                          placeholder="Enter your WaniKani API key"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={wanikaniState().apiKey || ""}
                          onInput={(e) =>
                            setWanikaniState({
                              ...wanikaniState(),
                              apiKey: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <Button
                        onClick={handleWanikaniImport}
                        disabled={!wanikaniState().apiKey || isProcessing()}
                        class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                      >
                        Import WaniKani Data
                      </Button>
                    </Show>
                    <Show when={wanikaniState().lastImportDate}>
                      <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                        <p class="text-sm text-green-100">
                          ✓ WaniKani data imported successfully
                          <span class="mt-1 block text-xs text-green-200">
                            Last imported:{" "}
                            {wanikaniState().lastImportDate!.toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>

                <Show when={wanikaniState().errorMessage}>
                  <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                    <p class="text-sm text-red-100">
                      ✗ {wanikaniState().errorMessage}
                    </p>
                  </div>
                </Show>
              </ServiceCard>

              {/* jpdb Card */}
              <ServiceCard
                title="jpdb Integration"
                gradient="from-purple-600/90 via-purple-700/90 to-indigo-800/90"
                borderColor="border-purple-500/30"
                iconColor="bg-purple-300"
                state={jpdbState()}
                onModeChange={(mode) => handleModeChange("jpdb", mode)}
              >
                <Show when={jpdbState().mode === "live"}>
                  <div class="space-y-4">
                    <Show when={jpdbState().status !== "connected"}>
                      <TextField>
                        <TextFieldLabel class="text-white">
                          jpdb API Key
                        </TextFieldLabel>
                        <TextFieldInput
                          type="password"
                          placeholder="Enter your jpdb API key"
                          class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                          value={jpdbState().apiKey || ""}
                          onInput={(e) =>
                            setJpdbState({
                              ...jpdbState(),
                              apiKey: e.currentTarget.value,
                            })
                          }
                        />
                      </TextField>
                      <Button
                        onClick={handleJpdbConnect}
                        disabled={
                          !jpdbState().apiKey ||
                          jpdbState().status === "connecting"
                        }
                        class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                      >
                        Connect to jpdb
                      </Button>
                    </Show>
                    <Show when={jpdbState().status === "connected"}>
                      <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                        <p class="text-sm text-green-100">
                          ✓ Connected to jpdb - Live access enabled
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>

                <Show when={jpdbState().mode === "imported"}>
                  <div class="space-y-4">
                    <Show when={!jpdbState().lastImportDate}>
                      <div class="space-y-4">
                        <TextField>
                          <TextFieldLabel class="text-white">
                            jpdb API Key
                          </TextFieldLabel>
                          <TextFieldInput
                            type="password"
                            placeholder="Enter your jpdb API key"
                            class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                            value={jpdbState().apiKey || ""}
                            onInput={(e) =>
                              setJpdbState({
                                ...jpdbState(),
                                apiKey: e.currentTarget.value,
                              })
                            }
                          />
                        </TextField>
                        <Button
                          onClick={handleJpdbImport}
                          disabled={!jpdbState().apiKey || isProcessing()}
                          class="border-white/30 bg-white/20 text-white hover:bg-white/30"
                        >
                          Import jpdb Data
                        </Button>

                        <div class="border-t border-white/20 pt-4">
                          <p class="mb-2 text-sm text-white/80">
                            Alternative: Upload JSON File
                          </p>
                          <input
                            type="file"
                            accept=".json"
                            onChange={handleFileUpload}
                            disabled={isProcessing()}
                            class="block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </Show>
                    <Show when={jpdbState().lastImportDate}>
                      <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                        <p class="text-sm text-green-100">
                          ✓ jpdb data imported successfully
                          <span class="mt-1 block text-xs text-green-200">
                            Last imported:{" "}
                            {jpdbState().lastImportDate!.toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    </Show>
                  </div>
                </Show>

                <Show when={jpdbState().errorMessage}>
                  <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                    <p class="text-sm text-red-100">
                      ✗ {jpdbState().errorMessage}
                    </p>
                  </div>
                </Show>
              </ServiceCard>
            </div>
          </div>
        </SSRMediaQuery>

        {/* Loading Overlay */}
        <Show when={isProcessing()}>
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div class="flex items-center space-x-4 rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800">
              <div class="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span class="text-lg font-medium">Processing data...</span>
            </div>
          </div>
        </Show>
      </div>
    </div>
  )
}

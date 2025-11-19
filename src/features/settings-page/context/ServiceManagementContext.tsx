import {
  createContext,
  useContext,
  createSignal,
  Component,
  ParentProps,
} from "solid-js"
import type {
  SRSServiceType,
  AnimeServiceType,
} from "@/features/main-cookies/schemas/user-settings"

interface ServiceManagementContextType {
  // SRS Service Errors (anki, wanikani, jpdb)
  srsErrors: () => Record<SRSServiceType, string>
  setSRSError: (service: SRSServiceType, error: string) => void
  clearSRSError: (service: SRSServiceType) => void

  // Anime Service Errors (anilist, kitsu, mal)
  animeErrors: () => Record<AnimeServiceType, string>
  setAnimeError: (service: AnimeServiceType, error: string) => void
  clearAnimeError: (service: AnimeServiceType) => void

  // Processing state
  isProcessing: () => boolean
  setIsProcessing: (processing: boolean) => void
}

const ServiceManagementContext = createContext<ServiceManagementContextType>()

export const ServiceManagementProvider: Component<ParentProps> = (props) => {
  const [srsErrors, setSRSErrors] = createSignal<
    Record<SRSServiceType, string>
  >({
    jpdb: "",
    wanikani: "",
    anki: "",
  })

  const [animeErrors, setAnimeErrors] = createSignal<
    Record<AnimeServiceType, string>
  >({
    anilist: "",
    kitsu: "",
    mal: "",
  })

  const [isProcessing, setIsProcessing] = createSignal(false)

  const setSRSError = (service: SRSServiceType, error: string) => {
    setSRSErrors((prev) => ({ ...prev, [service]: error }))
  }

  const clearSRSError = (service: SRSServiceType) => {
    setSRSErrors((prev) => ({ ...prev, [service]: "" }))
  }

  const setAnimeError = (service: AnimeServiceType, error: string) => {
    setAnimeErrors((prev) => ({ ...prev, [service]: error }))
  }

  const clearAnimeError = (service: AnimeServiceType) => {
    setAnimeErrors((prev) => ({ ...prev, [service]: "" }))
  }

  const value: ServiceManagementContextType = {
    srsErrors,
    setSRSError,
    clearSRSError,
    animeErrors,
    setAnimeError,
    clearAnimeError,
    isProcessing,
    setIsProcessing,
  }

  return (
    <ServiceManagementContext.Provider value={value}>
      {props.children}
    </ServiceManagementContext.Provider>
  )
}

export function useServiceManagement() {
  const context = useContext(ServiceManagementContext)
  if (context === undefined) {
    throw new Error(
      "useServiceManagement must be used within a ServiceManagementProvider",
    )
  }
  return context
}

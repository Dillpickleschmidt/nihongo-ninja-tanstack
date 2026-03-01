import { createSignal } from "solid-js"

export const STREAMING_SERVICES = [
  { id: "crunchyroll", name: "Crunchyroll", color: "#F47521" },
  { id: "netflix", name: "Netflix", color: "#E50914" },
  { id: "amazon", name: "Amazon Prime", color: "#00A8E1" },
  { id: "hidive", name: "HiDive", color: "#00BAAD" },
  { id: "funimation", name: "Funimation", color: "#5B0BB5" },
  { id: "other", name: "Other Sources", color: "#6B7280" },
] as const

const [hasSeenModal, setHasSeenModalRaw] = createSignal(false)
const [serviceOrder, setServiceOrderRaw] = createSignal<string[]>([])

export function savePrefs(order: string[]) {
  setServiceOrderRaw(order)
  setHasSeenModalRaw(true)
}

export function dismissModal() {
  setHasSeenModalRaw(true)
}

export { hasSeenModal, serviceOrder }

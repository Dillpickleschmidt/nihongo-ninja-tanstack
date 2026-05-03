export const queryKeys = {
  auth: () => ["auth"] as const,
  deviceSettings: () => ["device-settings"] as const,
  preferences: () => ["preferences"] as const,
  autumnCustomer: () => ["autumn-customer"] as const,
  kanjiSvg: (character: string) => ["kanji-svg", character] as const,

  // UI Settings
  backgroundSettings: () => ["background-settings"] as const,
  backgroundColor: () => ["background-color"] as const,
}

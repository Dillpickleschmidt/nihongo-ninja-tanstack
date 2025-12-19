export const queryKeys = {
  auth: () => ['auth'] as const,
  deviceSettings: () => ['device-settings'] as const,

  // UI Settings
  backgroundSettings: () => ["background-settings"] as const,
  backgroundColor: () => ["background-color"] as const,
}

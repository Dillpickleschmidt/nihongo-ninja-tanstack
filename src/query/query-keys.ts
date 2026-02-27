export const queryKeys = {
  auth: () => ["auth"] as const,
  deviceSettings: () => ["device-settings"] as const,
  preferences: () => ["preferences"] as const,

  // UI Settings
  backgroundSettings: () => ["background-settings"] as const,
  backgroundColor: () => ["background-color"] as const,

  // Progress / Stats
  dailyModuleStats: (dateKey: string) => ["daily-module-stats", dateKey] as const,
  dailyProgress: (dateKey: string) => ["daily-progress", dateKey] as const,
  recentModuleActivity: (limit: number) =>
    ["recent-module-activity", limit] as const,
  progressDistribution: (fromDateKey: string, toDateKey: string) =>
    ["progress-distribution", fromDateKey, toDateKey] as const,
}

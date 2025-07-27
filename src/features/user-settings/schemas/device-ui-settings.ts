// features/user-settings/schemas/device-ui-settings.ts
import { z } from "zod"

const VocabRouteSettingsSchema = z.object({
  leftSidebarExpand: z.boolean().default(true),
  rightSidebarExpand: z.boolean().default(true),
  lastOpenTextbook: z.string().default(""),
  lastOpenChapter: z.string().default(""),
})

const VocabPracticeSettingsSchema = z.object({
  "shuffle-answers": z.boolean().default(true),
  "enable-kanji-radical-prereqs": z.boolean().default(true),
  "flip-vocab-qa": z.boolean().default(false),
  "flip-kanji-radical-qa": z.boolean().default(true),
})

const RouteSettingsSchema = z.object({
  vocab: VocabRouteSettingsSchema.default({}),
  "vocab-practice": VocabPracticeSettingsSchema.default({}),
})

export const DeviceUISettingsSchema = z.object({
  routes: RouteSettingsSchema.default({}),
})

export type DeviceUISettingsCookieData = z.infer<typeof DeviceUISettingsSchema>

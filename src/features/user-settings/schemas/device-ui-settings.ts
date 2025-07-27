// features/user-settings/schemas/device-ui-settings.ts
import { z } from "zod"

const VocabRouteSettingsSchema = z.object({
  leftSidebarExpand: z.boolean().default(true),
  rightSidebarExpand: z.boolean().default(true),
  lastOpenTextbook: z.string().max(20).default(""),
  lastOpenChapter: z.string().max(20).default(""),
})

const VocabPracticeSettingsSchema = z.object({
  "shuffle-answers": z.boolean().default(true),
  "enable-kanji-radical-prereqs": z.boolean().default(true),
  "flip-vocab-qa": z.boolean().default(false),
  "flip-kanji-radical-qa": z.boolean().default(true),
})

const RouteSettingsSchema = z.object({
  vocab: VocabRouteSettingsSchema.default(VocabRouteSettingsSchema.parse({})),
  "vocab-practice": VocabPracticeSettingsSchema.default(
    VocabPracticeSettingsSchema.parse({}),
  ),
})

export const DeviceUISettingsSchema = z.object({
  routes: RouteSettingsSchema.default(RouteSettingsSchema.parse({})),
})

export type DeviceUISettingsCookieData = z.infer<typeof DeviceUISettingsSchema>

// features/user-settings/schemas/device-ui-settings.ts
import { z } from "zod"

const VocabRouteSettingsSchema = z.object({
  leftSidebarExpand: z.boolean().default(true),
  rightSidebarExpand: z.boolean().default(true),
})

const VocabPracticeSettingsSchema = z.object({
  "shuffle-answers": z.boolean().default(true),
  "enable-kanji-radical-prereqs": z.boolean().default(true),
  "flip-vocab-qa": z.boolean().default(false),
  "flip-kanji-radical-qa": z.boolean().default(true),
})

const TourSettingsSchema = z.object({
  currentTourId: z.string().nullable().default(null),
  currentTourStep: z.number().default(0), // -1 = dismissed, 0+ = active step
})

const RouteSettingsSchema = z.object({
  vocab: VocabRouteSettingsSchema.default(VocabRouteSettingsSchema.parse({})),
  "vocab-practice": VocabPracticeSettingsSchema.default(
    VocabPracticeSettingsSchema.parse({}),
  ),
})

export const DeviceUISettingsSchema = z.object({
  routes: RouteSettingsSchema.default(RouteSettingsSchema.parse({})),
  tour: TourSettingsSchema.default(TourSettingsSchema.parse({})),
})

export type DeviceUISettingsCookieData = z.infer<typeof DeviceUISettingsSchema>

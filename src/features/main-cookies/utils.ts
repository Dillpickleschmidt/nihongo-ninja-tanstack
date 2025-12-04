import {
  DbSyncedSettingsSchema,
  type UserSettings,
  type DbSyncedSettings,
} from "./schemas/user-settings"

/**
 * Check if updates contain any fields that sync to database.
 * Returns true only if at least one DB-synced field actually changed.
 */
export function hasDbSyncedChanges(
  updates: Partial<UserSettings>,
  currentSettings: UserSettings,
): boolean {
  const dbFields = Object.keys(
    DbSyncedSettingsSchema.shape,
  ) as (keyof DbSyncedSettings)[]

  return dbFields.some((field) => {
    if (!(field in updates)) return false

    const newValue = updates[field]
    const currentValue = currentSettings[field]

    return JSON.stringify(newValue) !== JSON.stringify(currentValue)
  })
}

/**
 * Extract only DB-synced fields from a UserSettings object.
 * Used to ensure only the correct fields are written to the database.
 */
export function extractDbSyncedFields(
  settings: UserSettings,
): DbSyncedSettings {
  return DbSyncedSettingsSchema.parse(settings)
}

// src/features/import-page/types.ts
export type ItemStatus = "learning" | "decent" | "mastered" | null

export interface ImportState {
  [itemId: string]: ItemStatus
}

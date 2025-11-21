// src/features/import-page/types.ts
export type ItemStatus = "decent" | "mastered" | null

export interface ImportState {
  [itemId: string]: ItemStatus
}

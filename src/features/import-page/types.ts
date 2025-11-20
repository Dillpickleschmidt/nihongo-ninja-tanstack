export type ItemStatus = "decent" | "mastered" | null

export interface ImportState {
  [itemId: string]: ItemStatus
}

import { textbooks, type Textbook } from '../textbooks'

// Return type uses string id for downstream compatibility
export function getAllTextbooks(): Array<Omit<Textbook, 'id'> & { id: string }> {
  return Object.entries(textbooks).map(([id, tb]) => ({ ...tb, id }))
}

export function isBuiltInTextbook(id: string): boolean {
  return id in textbooks
}

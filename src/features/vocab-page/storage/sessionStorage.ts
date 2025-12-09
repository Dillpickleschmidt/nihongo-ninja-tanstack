import { isServer } from 'solid-js/web'

const STORAGE_KEY = 'nihongo-ninja-vocab-data'

export interface GuestFolder {
  id: string
  folderName: string
  parentFolderId?: string
}

export interface GuestDeck {
  id: string
  deckName: string
  deckDescription?: string
  folderId?: string
}

export interface GuestVocabData {
  folders: GuestFolder[]
  decks: GuestDeck[]
}

const EMPTY_DATA: GuestVocabData = { folders: [], decks: [] }

export function saveGuestData(data: GuestVocabData): void {
  if (isServer) return
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('Failed to save guest data:', e)
  }
}

export function loadGuestData(): GuestVocabData {
  if (isServer) return EMPTY_DATA
  try {
    const data = sessionStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : EMPTY_DATA
  } catch (e) {
    console.warn('Failed to load guest data:', e)
    return EMPTY_DATA
  }
}

export function clearGuestData(): void {
  if (isServer) return
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    console.warn('Failed to clear guest data:', e)
  }
}

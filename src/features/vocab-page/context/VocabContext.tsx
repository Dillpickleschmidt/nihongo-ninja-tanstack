import {
  createContext,
  useContext,
  type ParentProps,
  createSignal,
  createMemo,
} from 'solid-js'
import { useMutation } from 'convex-solidjs'
import { useConvexQuery } from '@/lib/convex-query'
import { api } from 'convex/_generated/api'
import { getUser } from '@/lib/auth'
import type { Id } from 'convex/_generated/dataModel'
import {
  loadGuestData,
  saveGuestData,
  type GuestVocabData,
  type GuestFolder,
  type GuestDeck,
} from '../storage/sessionStorage'

// Unified types for the context
export type Source = 'user' | 'built-in'

export type Folder = {
  id: string
  folderName: string
  parentFolderId?: string
  source: Source
}

export type Deck = {
  id: string
  deckName: string
  deckDescription?: string
  folderId?: string
  source: Source
  vocabSetId?: string
}

interface VocabContextValue {
  // Data accessors
  folders: () => Folder[]
  decks: () => Deck[]
  isLoading: () => boolean

  // Selection state
  selectedDeckId: () => string | null
  setSelectedDeckId: (id: string | null) => void

  // Modal state for editing
  editingFolder: () => Folder | null
  setEditingFolder: (folder: Folder | null) => void
  copyingDeck: () => Deck | null
  setCopyingDeck: (deck: Deck | null) => void

  // Folder mutations
  createFolder: (name: string, parentId?: string) => Promise<void>
  updateFolder: (
    folderId: string,
    updates: { folderName?: string; parentFolderId?: string | null }
  ) => Promise<void>
  deleteFolder: (
    folderId: string,
    strategy: 'move-up' | 'delete-all'
  ) => Promise<void>

  // Deck mutations
  createDeck: (name: string, description?: string, folderId?: string) => Promise<void>
  updateDeck: (
    deckId: string,
    updates: {
      deckName?: string
      deckDescription?: string
      folderId?: string | null
    }
  ) => Promise<void>
  deleteDeck: (deckId: string) => Promise<void>
}

const VocabContext = createContext<VocabContextValue>()

// Convert guest folder to unified type
function normalizeGuestFolder(folder: GuestFolder): Folder {
  return {
    id: folder.id,
    folderName: folder.folderName,
    parentFolderId: folder.parentFolderId,
    source: 'user',
  }
}

// Convert guest deck to unified type
function normalizeGuestDeck(deck: GuestDeck): Deck {
  return {
    id: deck.id,
    deckName: deck.deckName,
    deckDescription: deck.deckDescription,
    folderId: deck.folderId,
    source: 'user',
  }
}

export function VocabProvider(props: ParentProps) {
  const user = getUser()

  // Convex query - getAllFoldersAndDecks returns unified built-in + user data
  // Works for both authenticated and unauthenticated users (returns built-in only when not logged in)
  const foldersAndDecksQuery = useConvexQuery(
    api.api.folders.getAllFoldersAndDecks,
    {}
  )

  // Guest data (local state for unauthenticated users)
  const [guestData, setGuestData] = createSignal<GuestVocabData>(loadGuestData())

  // Unified data accessors - merge Convex unified data with guest data
  const folders = createMemo((): Folder[] => {
    // Always get built-in + authenticated user folders from Convex
    const convexFolders = foldersAndDecksQuery.data()?.folders ?? []

    // For guest users, also include guest folders
    if (!user()) {
      const guestFolders = guestData().folders.map(normalizeGuestFolder)
      return [...convexFolders, ...guestFolders]
    }

    return convexFolders
  })

  const decks = createMemo((): Deck[] => {
    // Always get built-in + authenticated user decks from Convex
    const convexDecks = foldersAndDecksQuery.data()?.decks ?? []

    // For guest users, also include guest decks
    if (!user()) {
      const guestDecks = guestData().decks.map(normalizeGuestDeck)
      return [...convexDecks, ...guestDecks]
    }

    return convexDecks
  })

  const isLoading = () => foldersAndDecksQuery.isLoading()

  // Selection state
  const [selectedDeckId, setSelectedDeckId] = createSignal<string | null>(null)

  // Modal state for editing
  const [editingFolder, setEditingFolder] = createSignal<Folder | null>(null)
  const [copyingDeck, setCopyingDeck] = createSignal<Deck | null>(null)

  // Convex mutations
  const createFolderMutation = useMutation(api.api.folders.createFolder)
  const updateFolderMutation = useMutation(api.api.folders.updateFolder)
  const deleteFolderMutation = useMutation(api.api.folders.deleteFolder)
  const createDeckMutation = useMutation(api.api.decks.createDeck)
  const updateDeckMutation = useMutation(api.api.decks.updateDeck)
  const deleteDeckMutation = useMutation(api.api.decks.deleteDeck)

  // Folder mutations
  const createFolder = async (name: string, parentId?: string) => {
    if (user()) {
      await createFolderMutation.mutate({
        folderName: name,
        parentFolderId: parentId as Id<'userDeckFolders'> | undefined,
      })
    } else {
      const newFolder: GuestFolder = {
        id: crypto.randomUUID(),
        folderName: name,
        parentFolderId: parentId,
      }
      const updated = {
        ...guestData(),
        folders: [...guestData().folders, newFolder],
      }
      setGuestData(updated)
      saveGuestData(updated)
    }
  }

  const updateFolder = async (
    folderId: string,
    updates: { folderName?: string; parentFolderId?: string | null }
  ) => {
    if (user()) {
      await updateFolderMutation.mutate({
        folderId: folderId as Id<'userDeckFolders'>,
        folderName: updates.folderName,
        parentFolderId: updates.parentFolderId as
          | Id<'userDeckFolders'>
          | null
          | undefined,
      })
    } else {
      const updated = {
        ...guestData(),
        folders: guestData().folders.map((f) =>
          f.id === folderId
            ? {
              ...f,
              ...(updates.folderName && { folderName: updates.folderName }),
              ...(updates.parentFolderId !== undefined && {
                parentFolderId: updates.parentFolderId ?? undefined,
              }),
            }
            : f
        ),
      }
      setGuestData(updated)
      saveGuestData(updated)
    }
  }

  const deleteFolder = async (
    folderId: string,
    strategy: 'move-up' | 'delete-all'
  ) => {
    if (user()) {
      await deleteFolderMutation.mutate({
        folderId: folderId as Id<'userDeckFolders'>,
        strategy,
      })
    } else {
      // Guest mode: implement cascade delete locally
      const folder = guestData().folders.find((f) => f.id === folderId)
      if (!folder) return

      // Get all descendant folder IDs
      const getAllDescendantIds = (parentId: string): string[] => {
        const children = guestData().folders.filter(
          (f) => f.parentFolderId === parentId
        )
        return children.flatMap((c) => [c.id, ...getAllDescendantIds(c.id)])
      }
      const allFolderIds = new Set([folderId, ...getAllDescendantIds(folderId)])

      let newDecks = guestData().decks
      if (strategy === 'move-up') {
        newDecks = guestData().decks.map((d) =>
          d.folderId && allFolderIds.has(d.folderId)
            ? { ...d, folderId: folder.parentFolderId }
            : d
        )
      } else {
        newDecks = guestData().decks.filter(
          (d) => !d.folderId || !allFolderIds.has(d.folderId)
        )
      }

      const updated = {
        folders: guestData().folders.filter((f) => !allFolderIds.has(f.id)),
        decks: newDecks,
      }
      setGuestData(updated)
      saveGuestData(updated)
    }
  }

  // Deck mutations
  const createDeck = async (
    name: string,
    description?: string,
    folderId?: string
  ) => {
    if (user()) {
      await createDeckMutation.mutate({
        deckName: name,
        deckDescription: description,
        folderId: folderId as Id<'userDeckFolders'> | undefined,
      })
    } else {
      const newDeck: GuestDeck = {
        id: crypto.randomUUID(),
        deckName: name,
        deckDescription: description,
        folderId,
      }
      const updated = {
        ...guestData(),
        decks: [...guestData().decks, newDeck],
      }
      setGuestData(updated)
      saveGuestData(updated)
    }
  }

  const updateDeck = async (
    deckId: string,
    updates: {
      deckName?: string
      deckDescription?: string
      folderId?: string | null
    }
  ) => {
    if (user()) {
      await updateDeckMutation.mutate({
        deckId: deckId as Id<'userDecks'>,
        deckName: updates.deckName,
        deckDescription: updates.deckDescription,
        folderId: updates.folderId as Id<'userDeckFolders'> | null | undefined,
      })
    } else {
      const updated = {
        ...guestData(),
        decks: guestData().decks.map((d) =>
          d.id === deckId
            ? {
              ...d,
              ...(updates.deckName && { deckName: updates.deckName }),
              ...(updates.deckDescription !== undefined && {
                deckDescription: updates.deckDescription,
              }),
              ...(updates.folderId !== undefined && {
                folderId: updates.folderId ?? undefined,
              }),
            }
            : d
        ),
      }
      setGuestData(updated)
      saveGuestData(updated)
    }
  }

  const deleteDeck = async (deckId: string) => {
    if (user()) {
      await deleteDeckMutation.mutate({ deckId: deckId as Id<'userDecks'> })
    } else {
      const updated = {
        ...guestData(),
        decks: guestData().decks.filter((d) => d.id !== deckId),
      }
      setGuestData(updated)
      saveGuestData(updated)
    }
  }

  return (
    <VocabContext.Provider
      value={{
        folders,
        decks,
        isLoading,
        selectedDeckId,
        setSelectedDeckId,
        // CRUD
        createFolder,
        updateFolder,
        deleteFolder,
        createDeck,
        updateDeck,
        deleteDeck,
        // Modal states
        editingFolder,
        setEditingFolder,
        copyingDeck,
        setCopyingDeck,
      }}
    >
      {props.children}
    </VocabContext.Provider>
  )
}

export function useVocab() {
  const ctx = useContext(VocabContext)
  if (!ctx) throw new Error('useVocab must be used within VocabProvider')
  return ctx
}

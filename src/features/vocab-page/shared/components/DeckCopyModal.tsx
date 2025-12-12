import { createSignal, createMemo, createEffect, on, Show } from 'solid-js'
import { useMutation } from 'convex-solidjs'
import { api } from 'convex/_generated/api'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from '@/components/ui/text-field'
import {
  DeckNameSchema,
  DescriptionSchema,
  validateDeckNameUnique,
} from '../../validation/deck-folder-validation'
import { DECK_NAME_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from '../../validation/constants'
import { useFolderTree } from '../../hooks/useFolderTree'
import { LocationSelector } from './LocationSelector'
import { useVocab } from '../../context/VocabContext'
import type { Id } from 'convex/_generated/dataModel'

export function DeckCopyModal() {
  const ctx = useVocab()
  const copyDeckMutation = useMutation(api.api.decks.copyDeck)

  // Form state
  const [name, setName] = createSignal('')
  const [description, setDescription] = createSignal('')
  const [selectedFolderId, setSelectedFolderId] = createSignal<string>('root')
  const [showValidation, setShowValidation] = createSignal(false)
  const [isSaving, setIsSaving] = createSignal(false)

  // Derived state
  const deck = () => ctx.copyingDeck()
  const isOpen = () => !!deck()

  // Initialize form when deck changes
  const initializeForm = () => {
    const d = deck()
    if (!d) return

    // Suggest a copy name
    setName(`${d.deckName} (copy)`)
    setDescription(d.deckDescription || '')
    setSelectedFolderId(d.folderId || 'root')
    setShowValidation(false)
    setIsSaving(false)
  }

  // Initialize when modal opens
  createEffect(
    on(deck, (d) => {
      if (d) {
        initializeForm()
      }
    })
  )

  // Get user decks only for validation
  const userDecks = createMemo(() =>
    ctx.decks().filter((d) => d.source === 'user')
  )

  // Folder tree for location selector
  const { folderTreeNodes } = useFolderTree({
    folders: ctx.folders(),
    decks: ctx.decks(),
    item: null,
  })

  // Validation
  const nameValidation = createMemo(() => {
    // Check Zod schema first
    const schemaResult = DeckNameSchema.safeParse(name())
    if (!schemaResult.success) {
      return { isValid: false, error: schemaResult.error.errors[0].message }
    }

    // Check uniqueness
    const uniqueResult = validateDeckNameUnique(name(), userDecks())
    if (!uniqueResult.isValid) {
      return uniqueResult
    }

    return { isValid: true, error: '' }
  })

  const descriptionValidation = createMemo(() => {
    const schemaResult = DescriptionSchema.safeParse(description())
    if (!schemaResult.success) {
      return { isValid: false, error: schemaResult.error.errors[0].message }
    }
    return { isValid: true, error: '' }
  })

  const canSave = () =>
    nameValidation().isValid &&
    descriptionValidation().isValid &&
    name().trim().length > 0

  // Get selected folder display name
  const selectedFolderName = () => {
    const id = selectedFolderId()
    if (id === 'root') return 'Root'
    const f = ctx.folders().find((f) => f.id === id)
    return f?.folderName || 'Unknown'
  }

  // Event handlers
  const handleClose = () => {
    ctx.setCopyingDeck(null)
  }

  const handleSave = async () => {
    setShowValidation(true)

    if (!canSave()) return

    const d = deck()
    if (!d) return

    setIsSaving(true)

    try {
      await copyDeckMutation.mutate({
        deckId: d.id,
        deckSource: d.source,
        deckName: name().trim(),
        deckDescription: description().trim() || undefined,
        folderId:
          selectedFolderId() === 'root'
            ? undefined
            : (selectedFolderId() as Id<'userDeckFolders'>),
      })

      handleClose()
    } catch (error) {
      console.error('Failed to copy deck:', error)
      alert('Failed to copy deck. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const getTitle = () => {
    const d = deck()
    if (!d) return 'Copy Deck'
    return `Copy "${d.deckName}"`
  }

  return (
    <Dialog open={isOpen()} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>

        <div class="space-y-6">
          {/* Name Field */}
          <TextField
            validationState={
              showValidation() && !nameValidation().isValid ? 'invalid' : 'valid'
            }
          >
            <TextFieldLabel>Name</TextFieldLabel>
            <TextFieldInput
              value={name()}
              onInput={(e) => setName(e.currentTarget.value)}
              onBlur={() => setShowValidation(true)}
              placeholder="Deck name"
              maxLength={DECK_NAME_MAX_LENGTH}
              class="focus-visible:ring focus-visible:ring-amber-500"
            />
            <Show when={showValidation() && !nameValidation().isValid}>
              <p class="text-sm text-red-500">{nameValidation().error}</p>
            </Show>
          </TextField>

          {/* Description Field */}
          <TextField
            validationState={
              showValidation() && !descriptionValidation().isValid
                ? 'invalid'
                : 'valid'
            }
          >
            <TextFieldLabel>Description (optional)</TextFieldLabel>
            <TextFieldInput
              value={description()}
              onInput={(e) => setDescription(e.currentTarget.value)}
              placeholder="Add a description..."
              maxLength={DESCRIPTION_MAX_LENGTH}
              class="focus-visible:ring focus-visible:ring-amber-500"
            />
            <Show when={showValidation() && !descriptionValidation().isValid}>
              <p class="text-sm text-red-500">{descriptionValidation().error}</p>
            </Show>
          </TextField>

          {/* Location Field */}
          <div class="space-y-3">
            <label class="text-foreground text-sm font-medium">Location</label>

            <LocationSelector
              selectedFolderId={selectedFolderId()}
              selectedFolderName={selectedFolderName()}
              folderTreeNodes={folderTreeNodes()}
              editingType="deck"
              onSelect={setSelectedFolderId}
            />
          </div>

          {/* Info about copying */}
          <Show when={deck()?.source === 'built-in'}>
            <div class="bg-muted/20 border-card-foreground/70 rounded-lg border p-3 backdrop-blur-sm">
              <p class="text-muted-foreground text-xs">
                This will create a new deck that you can edit. The original
                built-in deck will remain unchanged.
              </p>
            </div>
          </Show>
        </div>

        <DialogFooter class="gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isSaving()}
            class="flex-1 hover:cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!canSave() || isSaving()}
            class="flex-1 hover:cursor-pointer"
          >
            {isSaving() ? 'Creating...' : 'Create Copy'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

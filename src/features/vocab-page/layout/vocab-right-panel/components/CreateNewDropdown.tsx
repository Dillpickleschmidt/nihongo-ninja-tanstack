import { Plus, FileText, Folder } from 'lucide-solid'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useVocab } from '../../../context/VocabContext'
import { useNavigate } from '@tanstack/solid-router'

export function CreateNewDropdown() {
  const ctx = useVocab()
  const navigate = useNavigate()

  const handleCreateDeck = () => {
    navigate({ to: '/vocab/create' })
  }

  const handleCreateFolder = () => {
    const name = window.prompt('Enter folder name:')
    if (name && name.trim()) {
      ctx.createFolder(name.trim())
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        as={Button}
        variant="outline"
        size="sm"
        class="w-full"
      >
        <Plus class="mr-2 h-4 w-4" />
        Create New
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-48">
        <DropdownMenuItem onSelect={handleCreateDeck}>
          <FileText class="mr-2 h-4 w-4" />
          New Deck
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleCreateFolder}>
          <Folder class="mr-2 h-4 w-4" />
          New Folder
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

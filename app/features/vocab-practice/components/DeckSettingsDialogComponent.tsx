// vocab-practice/components/DeckSettingsDialogComponent.tsx
import { createSignal, JSX } from "solid-js"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useVocabPracticeContext } from "../context/VocabPracticeContext"
import { Label } from "@/components/ui/label"

type DeckSettingsDialogProps = {
  children: JSX.Element
}

export default function DeckSettingsDialogComponent(
  props: DeckSettingsDialogProps,
) {
  const context = useVocabPracticeContext()
  const [open, setOpen] = createSignal(false)
  const [checked, setChecked] = createSignal(context.settings.shuffleInput)

  const handleCheckboxChange = (isChecked: boolean) => {
    setChecked(isChecked)
    context.setSettings({ shuffleInput: isChecked })
  }

  const handleOkClick = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open()} onOpenChange={setOpen}>
      <DialogTrigger as="div">{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deck Settings</DialogTitle>
          <DialogDescription>
            Configure your deck settings here.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="flex items-center space-x-2">
            <Checkbox checked={checked()} onChange={handleCheckboxChange} />
            <Label>Shuffle</Label>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleOkClick}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// routes/lessons/_chapter-2/components/DigitsPractice.tsx
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { For } from "solid-js"

export default function DigitsPractice() {
  const items = [
    "15",
    "37",
    "58",
    "79",
    "123",
    "256",
    "389",
    "612",
    "785",
    "941",
    "1,243",
    "2,589",
    "3,752",
    "5,981",
    "6,374",
    "8,895",
    "9,221",
    "12,345",
    "68,734",
    "95,678",
  ]

  return (
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <For each={items}>
        {(item) => (
          <div class="flex flex-col items-center">
            <label class="mb-1 text-center text-base">{item}</label>
            <TextField class="w-full max-w-xs">
              <TextFieldInput class="text-center text-xl" />
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}

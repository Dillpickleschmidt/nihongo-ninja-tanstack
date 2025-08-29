// routes/lessons/_chapter-2/components/NumbersKanjiPractice.tsx
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { For } from "solid-js"

export default function NumbersKanjiPractice() {
  const items = [
    "十五", // 15
    "四十二", // 42
    "七十五", // 75
    "百六", // 106
    "二百三十四", // 234
    "三百五十七", // 357
    "四百八十二", // 482
    "五百九十九", // 599
    "千三十四", // 1034
    "千八百五十", // 1850
    "二千四百二十", // 2420
    "三千六百七十五", // 3675
    "四千九百八十三", // 4983
    "六千五百七", // 6507
    "七千九百十二", // 7912
    "一万一千五百", // 11500
    "一万三千四百二十", // 13420
    "三万二千六百五十", // 32650
    "五万七千八百四十", // 57840
    "九万四千三百二十一", // 94321
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

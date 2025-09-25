import { For } from "solid-js"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanaKanaWrapper from "@/features/wanakana/WanaKana"

const verbs = ["行く", "飲む", "話す", "読む", "食べる", "見る"]

export default function IruEruPractice() {
  const randomizedVerbs = [...verbs].sort(() => Math.random() - 0.5)

  return (
    <div class="flex flex-col items-center text-2xl">
      <For each={randomizedVerbs}>
        {(verb) => (
          <div class="mb-4 flex items-center">
            <div class="font-japanese w-20">{verb}</div>
            <div class="mr-4">{"->"}</div>
            <TextField class="w-48">
              <WanaKanaWrapper enabled={true} watch={verb}>
                <TextFieldInput class="font-japanese text-xl" />
              </WanaKanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}

import { cn } from "@/utils"
import { createSignal, For, Show } from "solid-js"

type MultipleChoiceTextProps = {
  answer: string | string[]
  a?: string
  b?: string
  c?: string
  d?: string
  class?: string
}

export default function MultipleChoiceText(props: MultipleChoiceTextProps) {
  const options = { a: props.a, b: props.b, c: props.c, d: props.d }
  const [clicked, setClicked] = createSignal<{ [key: string]: boolean }>({})
  const [correct, setCorrect] = createSignal<{ [key: string]: boolean }>({})

  const handleClick = (option: string) => {
    setClicked((prev) => ({ ...prev, [option]: true }))
    const correctAnswers = Array.isArray(props.answer)
      ? props.answer
      : [props.answer]
    if (correctAnswers.includes(options[option as keyof typeof options]!)) {
      setCorrect((prev) => ({ ...prev, [option]: true }))
    }
  }

  const getTextColorClass = (option: string) => {
    if (correct()[option]) {
      return "dark:bg-green-500 bg-[#00F064] bg-opacity-[90%] rounded-md font-medium text-black"
    } else if (clicked()[option]) {
      return "dark:text-red-500 text-[#FF0000] rounded-md font-medium"
    } else {
      return ""
    }
  }

  const renderOption = (option: string, text?: string) => {
    if (!text) return null
    return (
      <div>
        <p
          class={`${getTextColorClass(option)} inline-block cursor-pointer`}
          onClick={() => handleClick(option)}
        >
          <span class="px-3 py-[.0625rem] text-lg">{`${option}) `}</span>
          <span
            class={cn(
              "font-japanese origin-left text-lg font-medium duration-100 ease-out hover:scale-[107%]",
              props.class,
            )}
          >
            {text}
          </span>
        </p>
      </div>
    )
  }

  return (
    <div class="!space-y-3 pl-7">
      <For each={["a", "b", "c", "d"] as const}>
        {(option) => (
          <Show when={options[option]}>
            {renderOption(option, options[option])}
          </Show>
        )}
      </For>
    </div>
  )
}

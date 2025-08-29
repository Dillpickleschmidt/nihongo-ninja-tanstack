// src/components/CheckboxQuestion.tsx
import { createSignal, For } from "solid-js"
import { cn } from "@/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { extractHiragana, convertFuriganaToRubyHtml } from "@/data/utils/vocab"

type CheckboxQuestionProps = {
  questions: string[]
  correctQuestions: string[]
  class?: string
  horizontal?: boolean
  furiganaSize?: string
}

export default function CheckboxQuestion(props: CheckboxQuestionProps) {
  const [checkedQuestions, setCheckedQuestions] = createSignal<Set<string>>(
    new Set(),
  )
  const [submitted, setSubmitted] = createSignal(false)

  const enhancedQuestions = props.questions.map((question) => ({
    word: extractHiragana(question),
    rubyText: convertFuriganaToRubyHtml(question, props.furiganaSize),
    isCorrect: props.correctQuestions.includes(question),
  }))

  const handleCheckboxChange = (question: string) => {
    setCheckedQuestions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(question)) {
        newSet.delete(question)
      } else {
        newSet.add(question)
      }
      return newSet
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const getTextColorClass = (question: string, isCorrect: boolean) => {
    if (!submitted()) return ""
    const isChecked = checkedQuestions().has(question)
    if (isCorrect && isChecked) return "rounded-md font-medium text-green-500"
    if (!isCorrect && !isChecked) return "rounded-md font-medium text-green-500"
    return "dark:text-red-500 text-[#FF0000] rounded-md font-medium"
  }

  return (
    <>
      <ul
        class={
          props.horizontal ? "md:flex md:flex-wrap md:space-x-6" : "space-y-3"
        }
      >
        <For each={enhancedQuestions}>
          {(question) => (
            <li
              class={`flex items-center ${props.horizontal ? "mt-3 space-x-3" : "space-x-3"}`}
            >
              <Checkbox
                id={`checkbox-${question.word}`}
                checked={checkedQuestions().has(question.word)}
                onChange={() => handleCheckboxChange(question.word)}
                class="cursor-pointer ease-out hover:scale-[102%]"
              />
              <label
                for={`checkbox-${question.word}`}
                class={cn(
                  `${getTextColorClass(question.word, question.isCorrect)} cursor-pointer ${!props.horizontal && "pr-6"} font-japanese text-xl`,
                  props.class,
                )}
              >
                <span
                  class={cn("font-japanese text-xl", props.class)}
                  innerHTML={question.rubyText}
                />
              </label>
            </li>
          )}
        </For>
      </ul>
      <Button onClick={handleSubmit} size="sm" variant="outline">
        Submit
      </Button>
    </>
  )
}

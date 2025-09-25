import { JSX, splitProps } from "solid-js"
import { cn } from "@/utils"
import { TextField, TextFieldTextArea } from "@/components/ui/text-field"

type CustomTextAreaProps = {
  backgroundColor?: string
  foregroundColor?: string
  spacing?: number
  class?: string
} & JSX.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function CustomTextArea(
  props: CustomTextAreaProps,
): JSX.Element {
  const [local, textAreaProps] = splitProps(props, [
    "backgroundColor",
    "foregroundColor",
    "spacing",
    "class",
  ])

  const backgroundColor = local.backgroundColor ?? "hsl(var(--card))"
  const foregroundColor = local.foregroundColor ?? "hsl(var(--card-foreground))"
  const spacing = local.spacing ?? 10

  const noteStyle = {
    "background-attachment": "local",
    "background-image": `
      linear-gradient(to right, ${backgroundColor} ${spacing}px, transparent ${spacing}px),
      linear-gradient(to left, ${backgroundColor} ${spacing}px, transparent ${spacing}px),
      repeating-linear-gradient(${backgroundColor}, ${backgroundColor} ${spacing * 3}px, ${foregroundColor} ${spacing * 3}px, ${foregroundColor} ${spacing * 3 + 1}px, ${backgroundColor} ${spacing * 3 + 1}px)
    `,
    "line-height": `${spacing * 3 + 1}px`,
    padding: "8px 10px",
  }

  return (
    <TextField class="h-full w-full">
      <TextFieldTextArea
        style={noteStyle}
        class={cn("!px-6 text-lg", local.class)}
        {...textAreaProps}
      />
    </TextField>
  )
}

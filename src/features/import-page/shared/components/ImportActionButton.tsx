import { Button } from "@/components/ui/button"

interface ImportActionButtonProps {
  onClick: () => void
  variant: "manual" | "automatic" | "learning-path"
  label: string
}

const colors = {
  manual: "bg-blue-600 hover:bg-blue-700",
  automatic: "bg-purple-600 hover:bg-purple-700",
  "learning-path": "bg-orange-600 hover:bg-orange-700",
}

export function ImportActionButtonDesktop(props: ImportActionButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      class={`w-full ${colors[props.variant]} text-white`}
    >
      {props.label}
    </Button>
  )
}

export function ImportActionButtonMobile(props: ImportActionButtonProps) {
  return (
    <div class="fixed bottom-20 left-0 right-0 px-4 z-40">
      <Button
        onClick={props.onClick}
        class={`w-full ${colors[props.variant]} text-white`}
      >
        {props.label}
      </Button>
    </div>
  )
}

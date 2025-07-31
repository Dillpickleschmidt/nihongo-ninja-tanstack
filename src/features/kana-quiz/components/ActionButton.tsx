import { Button } from "@/components/ui/button"
import { SmoothCard } from "@/features/learn-page/components/shared/SmoothCard"

export function ActionButton(props: {
  width: number
  height: number
  onClick?: () => void
  variant: "primary" | "retry" | "success"
  children: any
}) {
  const gradientClasses = {
    primary: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    retry:
      "from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500",
    success:
      "from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
  }

  return (
    <SmoothCard
      width={props.width}
      height={props.height}
      cornerRadius={16}
      cornerSmoothing={1}
      class={`flex cursor-pointer items-center justify-center bg-gradient-to-r ${gradientClasses[props.variant]} shadow-lg transition-all duration-200 hover:shadow-xl`}
    >
      <Button
        onClick={props.onClick}
        variant="ghost"
        class="h-full w-full text-sm font-semibold text-white outline-none hover:bg-transparent sm:text-base"
      >
        {props.children}
      </Button>
    </SmoothCard>
  )
}

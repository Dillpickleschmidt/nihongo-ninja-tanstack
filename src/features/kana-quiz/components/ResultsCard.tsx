import { SmoothCard } from "@/features/dashboard/components/shared/SmoothCard"

export function ResultsCard(props: {
  width: number
  height: number
  theme: { gradient: string; title: string; message: string }
  numCorrect: number
  total: number
}) {
  return (
    <SmoothCard
      width={props.width}
      height={props.height}
      cornerRadius={24}
      cornerSmoothing={1}
      class={`mx-auto mb-4 flex flex-col items-center justify-center bg-gradient-to-br ${props.theme.gradient} text-white shadow-lg`}
    >
      <h1 class="mb-2 px-4 text-center text-2xl font-semibold sm:text-4xl">
        {props.theme.title}
      </h1>
      <p class="px-4 text-center text-sm text-white/90 sm:text-lg">
        You got {props.numCorrect} out of {props.total} correct.{" "}
        {props.theme.message}
      </p>
    </SmoothCard>
  )
}

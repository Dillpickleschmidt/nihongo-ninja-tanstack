import { SmoothCard } from "@/features/dashboard/components/SmoothCard"

export function HeaderCard(props: {
  width: number
  height: number
  title: string
}) {
  return (
    <SmoothCard
      width={props.width}
      height={props.height}
      cornerRadius={24}
      cornerSmoothing={1}
      class="mx-auto mb-4 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white"
    >
      <h1 class="mb-2 px-4 text-xl font-semibold sm:text-3xl">{props.title}</h1>
      <p class="mb-1 px-4 text-center text-base text-blue-100">
        Type the english spelling of each character into their respective boxes.
      </p>
      <p class="px-4 text-sm text-blue-200">
        Take it as many times as you like! 👍
      </p>
    </SmoothCard>
  )
}

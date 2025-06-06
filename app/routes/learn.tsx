// app/routes/learn.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { BackgroundImage } from "@/components/BackgroundImage"
import { Background } from "@/features/dashboard/components/Background"

export const Route = createFileRoute("/learn")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LearnLayout,
})

function LearnLayout() {
  return (
    <div class="relative min-h-screen w-full overflow-y-auto">
      <Background position="fixed" opacity={0.04} />
      <BackgroundImage
        class="!fixed z-[-1]"
        backgroundImage="/img/dots.svg"
        backgroundImageSize="400px"
        backgroundImageOpacity={2.5}
      />
      <BackgroundImage
        class="z-[-1] !-mt-[4.1rem] min-h-screen"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={4}
      />

      <Outlet />
    </div>
  )
}

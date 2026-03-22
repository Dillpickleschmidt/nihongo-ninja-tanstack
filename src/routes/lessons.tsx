import {
  createFileRoute,
  Link,
  Outlet,
  useMatches,
} from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"
import { ArrowLeft } from "lucide-solid"

export const Route = createFileRoute("/lessons")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 6,
        opacityOffset: -0.35,
        showGradient: false,
      })
    }
  },
  component: LessonTestLayout,
})

function hasMaxWidth(
  data: unknown,
): data is { maxWidth: string } {
  return !!data && typeof data === "object" && "maxWidth" in data
}

function LessonTestLayout() {
  const matches = useMatches()
  const maxWidth = () => {
    const data = matches().at(-1)?.loaderData
    return hasMaxWidth(data) ? data.maxWidth : "max-w-3xl"
  }

  return (
    <div class="relative min-h-screen">
      {/* Dust texture overlay */}
      <div
        class="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          "background-image": "url(/img/dust-splatter-1.png)",
          "background-size": "600px",
          "background-repeat": "repeat",
        }}
      />

      {/* Decorative sumi-e artwork — top right */}
      <div class="pointer-events-none fixed top-0 right-0 z-0 h-[500px] w-[400px] opacity-20">
        <img
          src="/img/mountain-temple-1.jpg"
          alt=""
          class="h-full w-full object-contain object-right-top"
        />
      </div>

      {/* Decorative cherry blossom — bottom left */}
      <div class="pointer-events-none fixed bottom-0 left-0 z-0 size-[350px] md:size-[380px] opacity-20">
        <img
          src="/img/cherry-blossom-branch.jpg"
          alt=""
          class="h-full w-full object-contain object-left-bottom -scale-x-100"
        />
      </div>

      {/* Back button */}
      <div class="fixed top-4 left-4 z-50">
        <Link
          to="/dashboard"
          class="flex items-center gap-1 text-sm text-white/30 transition-colors hover:text-white/60"
        >
          <ArrowLeft class="size-3.5" />
          Back
        </Link>
      </div>

      {/* Content */}
      <div class={`relative z-10 mx-auto ${maxWidth()}`}>
        <Outlet />
      </div>
    </div>
  )
}

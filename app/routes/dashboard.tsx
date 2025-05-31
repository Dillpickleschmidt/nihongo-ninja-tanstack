// app/routes/dashboard.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { getExternalResources, getLessons } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader"
import { ContentSection } from "@/features/dashboard/components/ContentSection"
import { LessonsSection } from "@/features/dashboard/components/LessonsSection"
import { StrugglesSection } from "@/features/dashboard/components/StrugglesSection"
import { HistorySection } from "@/features/dashboard/components/HistorySection"

export const Route = createFileRoute("/dashboard")({
  loader: async () => {
    // Hardcoded for now
    const textbook = "genki_1"
    const chapter = "genki_1_ch4"

    // Get fast data immediately
    const externalResources = getExternalResources(textbook, chapter)
    const lessons = getLessons(textbook, chapter)

    // Defer thumbnail loading - don't await these
    const thumbnailPromises = externalResources.map((resource) =>
      fetchThumbnailUrl(resource.external_url, resource.creator_id).then(
        (thumbnailUrl) => ({
          resourceId: resource.id,
          thumbnailUrl,
        }),
      ),
    )

    return {
      // Fast data
      externalResources,
      lessons,
      // Deferred data - individual promises for progressive loading
      deferredThumbnails: thumbnailPromises,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  const struggles = [
    "～て",
    "留学生",
    "Intransat...",
    "～てしま",
    "助詞",
    "敬語",
    "カタカナ",
    "ひらがな",
  ]

  const historyItems = [
    { name: "Gym", icon: "⚡", amount: -40.99, color: "bg-orange-500" },
    { name: "Coffee", icon: "☕", amount: -5.5, color: "bg-amber-600" },
    { name: "Study Books", icon: "📚", amount: -29.99, color: "bg-blue-500" },
  ]

  return (
    <div class="font-poppins">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <style>
        {`
        .custom-gradient-mask {
          mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        
        .centered-bg-image {
          position: absolute;
          top: -64px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          height: 100vh;
          min-height: 100vh;
          object-fit: cover;
          object-position: center;
          z-index: -2;
          pointer-events: none;
          opacity: 0.18;
        }
        
        @media (max-width: 768px) {
          .centered-bg-image {
            min-width: calc(100vw + 30px);
            width: calc(100vw + 30px);
            left: calc(50% + 15px);
          }
        }
        `}
      </style>

      <img
        src="/img/japanese-gate.png"
        class="custom-gradient-mask centered-bg-image"
        alt="Decorative Japanese Gate"
      />

      <DashboardHeader chapterTitle="Chapter 14" dailyProgress={20} />
      <ContentSection
        resources={loaderData().externalResources}
        thumbnailPromises={loaderData().deferredThumbnails}
      />
      <LessonsSection lessons={loaderData().lessons} progressPercentage={75} />
      <StrugglesSection struggles={struggles} />
      <HistorySection items={historyItems} />
    </div>
  )
}

import { createFileRoute } from '@tanstack/solid-router'
import { createSignal, For, onMount, onCleanup } from 'solid-js'
import { BottomNav } from '@/features/navbar/Nav'
import { TextbookChapterBackgrounds } from '@/components/TextbookChapterBackgrounds'
import { LevelCard } from '@/features/homepage/hero/LevelCard'
import { WelcomeSection } from '@/features/homepage/hero/WelcomeSection'
import { ToolsSection } from '@/features/homepage/tools/ToolsSection'
import { GuidesSection } from '@/features/homepage/guides/GuidesSection'
import { GuidesSidebar } from '@/features/homepage/guides/GuidesSidebar'
import { FeaturesSection } from "@/features/homepage/guides/FeaturesSection"
import { Sidebar } from '@/features/sidebar/Sidebar'
import { TableOfContents } from '@/components/TableOfContents'
import { SSRMediaQuery } from '@/components/SSRMediaQuery'
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
  animateElementIn,
  animateElementOut,
} from '@/utils/animations'
import { createScrollObserver, observeOneWaySnap } from '@/utils/scroll'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

interface LevelItem {
  level: string
  description: string
}

const JLPT_LEVELS: LevelItem[] = [
  { level: 'N5', description: 'Beginner' },
  { level: 'N4', description: 'Upper Beginner' },
  { level: 'N3', description: 'Intermediate' },
  { level: 'N2', description: 'Upper Intermediate' },
  { level: 'N1', description: 'Advanced / Fluent' },
]

const TOC_ITEMS = [
  { id: 'difficulty-selection', title: 'Knowledge Selection' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'your-japanese-companion', title: 'Your Japanese Companion' },
  { id: 'features', title: 'Details' },
]

function RouteComponent() {
  // Refs for trigger elements (content sections)
  let heroRef: HTMLElement | undefined
  let guidesSectionRef: HTMLDivElement | undefined
  let toolsSectionRef: HTMLDivElement | undefined

  // Refs for target elements (sidebars, nav)
  let guidesSidebarRef: HTMLDivElement | undefined
  let toolsSidebarRef: HTMLDivElement | undefined
  let tocRef: HTMLDivElement | undefined

  const [selectedLevel, setSelectedLevel] = createSignal<string>('N5')
  const [bgBlur, setBgBlur] = createSignal(16)

  onMount(() => {
    const cleanups: (() => void)[] = []

    // Hero section - self-animating
    if (heroRef) {
      cleanups.push(
        observeElementForAnimation(heroRef, { initialPosition: "down", startVisible: true, noExit: true })
      )
    }

    // === Blur behaviors (works on all screen sizes) ===
    if (guidesSectionRef) {
      cleanups.push(
        createScrollObserver(guidesSectionRef, {
          onEnter: () => setBgBlur(0),
          onExitUp: () => setBgBlur(16),
        })
      )
    }

    // === Sidebar/Nav animations (desktop only, refs may be undefined on mobile) ===

    // GuidesSidebar - exits both directions
    if (guidesSectionRef && guidesSidebarRef) {
      const ref = guidesSidebarRef
      cleanups.push(
        createScrollObserver(guidesSectionRef, {
          onEnter: () => animateElementIn(ref, "left"),
          onExitUp: () => animateElementOut(ref, "left"),
          onExitDown: () => animateElementOut(ref, "left"),
        })
      )
    }

    // ToolsSidebar - exits both directions
    if (toolsSectionRef && toolsSidebarRef) {
      const ref = toolsSidebarRef
      cleanups.push(
        createScrollObserver(toolsSectionRef, {
          onEnter: () => animateElementIn(ref, "left"),
          onExitUp: () => animateElementOut(ref, "left"),
          onExitDown: () => animateElementOut(ref, "left"),
        })
      )
    }

    // TOC - only exits on scroll up
    if (guidesSectionRef && tocRef) {
      const ref = tocRef
      cleanups.push(
        createScrollObserver(guidesSectionRef, {
          onEnter: () => animateElementIn(ref, "right"),
          onExitUp: () => animateElementOut(ref, "right"),
        })
      )
    }

    // === Snap behavior ===
    const snapElements = document.querySelectorAll('.snap-start, .snap-center, .snap-end')
    snapElements.forEach(el => {
      cleanups.push(observeOneWaySnap(el as HTMLElement))
    })

    onCleanup(() => cleanups.forEach(cleanup => cleanup()))
  })

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)
    document.getElementById("getting-started")?.scrollIntoView({ behavior: "smooth" })
  }

  const dailyProgress = 65

  return (
    <>
      <TextbookChapterBackgrounds
        blur={bgBlur()}
        opacityOffset={0}
        showGradient={true}
      />

      <main class="min-h-screen">
        {/* --- Hero Section - JLPT Level Selection --- */}
        <section ref={heroRef} id="difficulty-selection" class="snap-start pb-24 pt-[9vh] md:pt-[25vh] flex flex-col items-center justify-center">
          <WelcomeSection />
          <div class="mx-auto flex flex-wrap justify-center gap-4 md:gap-6 px-4">
            <For each={JLPT_LEVELS}>
              {(item) => <LevelCard item={item} onSelect={handleLevelSelect} />}
            </For>
          </div>
        </section>

        <div class="flex">
          {/* Left side: Sections with sidebars */}
          <div class='flex-1'>
            {/* --- Learning Path Section --- */}
            <section id="getting-started" class="flex">
              <div ref={toolsSectionRef} class="snap-start relative w-full mx-auto max-w-7xl">
                <ToolsSection selectedLevel={selectedLevel()} onLevelChange={setSelectedLevel} />
              </div>
            </section>

            {/* --- Guides Section --- */}
            <section class="flex">
              <div ref={guidesSectionRef} class="relative w-full mx-auto max-w-7xl">
                <GuidesSection />
                <FeaturesSection />
              </div>
            </section>
          </div>

        </div>
      </main>

      {/* Fixed sidebars (outside main flow) */}
      <SSRMediaQuery showFrom="md">
        <GuidesSidebar ref={(el) => guidesSidebarRef = el} />
        <Sidebar ref={(el) => toolsSidebarRef = el} animated={true} />
      </SSRMediaQuery>

      {/* Fixed Table of Contents */}
      <SSRMediaQuery showFrom="xl">
        <div
          ref={tocRef}
          class="fixed top-32 right-6 w-64"
          style={getInitialAnimationStyles("right")}
        >
          <TableOfContents items={TOC_ITEMS} />
        </div>
      </SSRMediaQuery>

      {/* --- Bottom Nav (Mobile Only) --- */}
      <SSRMediaQuery hideFrom="md">
        <BottomNav
          dailyProgressPercentage={dailyProgress}
          class="md:hidden"
        />
      </SSRMediaQuery>
    </>
  )
}

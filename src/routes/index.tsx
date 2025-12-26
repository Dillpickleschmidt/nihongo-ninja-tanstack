import { createFileRoute, Link } from "@tanstack/solid-router"
import { createSignal, onMount } from "solid-js"
import { FloatingKanji } from "@/features/homepage/components/floating-kanji"
import { TextbookSelectionDialog } from "@/features/homepage/components/textbook-selection-dialog"
import { HeroSection } from "@/features/homepage/sections/hero-section"
import { QuickFeatures } from "@/features/homepage/sections/quick-features"
import { MainFeatures } from "@/features/homepage/sections/main-features"
import { StatsSection } from "@/features/homepage/sections/stats-section"
import { VideoShowcaseSection } from "@/features/homepage/sections/video-showcase-section"
import { CTASection } from "@/features/homepage/sections/cta-section"
import { PremiumCallout } from "@/features/homepage/sections/premium-callout"
import { Footer } from "@/features/homepage/sections/footer"
import { useColorAnimation } from "@/features/homepage/lib/use-color-animation"

export const Route = createFileRoute("/")({
  component: Homepage,
})

function Homepage() {
  const [heroLoaded, setHeroLoaded] = createSignal(false)
  const [dialogOpen, setDialogOpen] = createSignal(false)

  // Initialize color cycling animation
  useColorAnimation()

  onMount(() => {
    // Trigger hero animation
    setTimeout(() => setHeroLoaded(true), 100)
  })

  return (
    <div class="z-0 relative min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      <style>{`
        @property --landing-accent { syntax: "<color>"; inherits: true; initial-value: #f59e0b; }
        @property --landing-accent-end { syntax: "<color>"; inherits: true; initial-value: #f43f5e; }

        :root { transition: --landing-accent 2s ease-in-out, --landing-accent-end 2s ease-in-out; }

        .landing-accent-gradient { background: linear-gradient(to right, var(--landing-accent), var(--landing-accent-end)); }
      `}</style>

      {/* Floating kanji decorations - furthest back */}
      <FloatingKanji char="忍" class="top-20 left-[10%] -z-20" delay={0} />
      <FloatingKanji char="語" class="top-[40%] right-[5%] -z-20" delay={200} />
      <FloatingKanji
        char="学"
        class="bottom-[20%] left-[15%] -z-20"
        delay={400}
      />

      {/* Noise texture - above kanji, below content */}
      <div class="fixed inset-0 -z-10">
        <div
          class="absolute inset-0 opacity-[0.015]"
          style={{
            "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-neutral-950/70">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" class="flex items-center gap-2 text-lg font-bold">
            <img src="/icons/ninja.png" alt="Ninja" class="size-8 -mb-1.25" />
            <span class="bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
              Nihongo Ninja
            </span>
          </Link>
          <div class="hidden items-center gap-8 text-sm -ml-20 text-white/60 md:flex">
            <a href="#features" class="hover:text-white transition-colors">
              Features
            </a>
            <Link to="/discover" class="hover:text-white transition-colors">
              Discover
            </Link>
            <Link to="/about" class="hover:text-white transition-colors">
              About
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            class="landing-accent-gradient rounded-full px-5 py-2 text-sm font-medium text-white transition-all hover:scale-105"
            style={{
              "box-shadow":
                "0 10px 15px -3px color-mix(in srgb, var(--landing-accent) 20%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--landing-accent) 20%, transparent)",
            }}
          >
            Explore
          </button>
        </div>
      </nav>

      {/* Page Sections */}
      <HeroSection
        heroLoaded={heroLoaded}
        onExplore={() => setDialogOpen(true)}
      />
      <QuickFeatures />
      <MainFeatures />
      <StatsSection />
      <PremiumCallout />
      <VideoShowcaseSection />
      <CTASection onExplore={() => setDialogOpen(true)} />
      <Footer />

      {/* Textbook Selection Dialog */}
      <TextbookSelectionDialog
        open={dialogOpen()}
        onOpenChange={setDialogOpen}
      />
    </div>
  )
}

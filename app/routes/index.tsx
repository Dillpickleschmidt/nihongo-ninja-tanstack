import ExternalResourceIcons from "@/features/homepage/ExternalResourceIcons"
import Nav from "@/features/homepage/Nav"
import { createFileRoute } from "@tanstack/solid-router"
import { BackgroundImage } from "@/components/BackgroundImage"

export const Route = createFileRoute("/")({
  component: RouteComponent,
  staleTime: Infinity,
})

function RouteComponent() {
  return (
    <div class="relative">
      <BackgroundImage
        class="z-[-1] !-mt-[4.1rem] min-h-screen"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={3}
      />
      <Nav />
      <div class="flex w-full flex-col items-center px-4">
        <div class="max-w-4xl pt-12 text-center lg:pt-24">
          <h1 class="dark:text-muted-foreground font-serif text-5xl leading-12 font-medium lg:text-7xl lg:leading-20">
            The <span class="text-primary font-inter">best materials</span>, at
            the <span class="text-primary font-inter">right time</span>, in{" "}
            <span class="text-primary font-inter">one place</span>.
          </h1>
          <div class="mx-auto max-w-2xl pt-12">
            <h3 class="text-lg lg:text-xl">
              Combining the best Japanese language resources on the internet
              with spaced repetition and custom learning tools.
            </h3>
            <div class="flex w-full justify-center pt-4">
              {/* <ExternalResourceIcons /> */}
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-7xl pt-10">
          <div class="max-w-6xl">
            <p class="text-muted-foreground text-center text-xs lg:text-sm">
              Nihongo Ninja is not affiliated with any of the listed sources. We
              only embed videos as per YouTube's Terms of Service, use public
              APIs provided by these sites, or provide URLs to visit them. We
              love these creaters and would love to bring more attention to
              them.
            </p>
          </div>
          <div class="bg-muted mx-auto mt-3 h-4 max-w-lg rounded-t-full"></div>
        </div>
        <div class="bg-muted mx-auto h-[800px] w-full max-w-7xl rounded-4xl" />

        <div class="mx-auto w-full max-w-7xl pt-24">
          <h2 class="w-full text-5xl font-medium">You have control</h2>
          <p class="pt-8 text-xl">
            We don't force you to go through beginner material if you've already
            done it.
          </p>
          <p class="text-muted-foreground pt-48">
            Chances are that you've already gone through some material by the
            time you've come across Nihongo Ninja, anyway.
          </p>
        </div>
        <div class="mx-auto w-full max-w-7xl pt-24">
          <h2 class="w-full text-5xl font-medium">
            Feel confident about your progress
          </h2>
          <p class="pt-8 text-xl">Language tools shouldn't be black boxes.</p>
          <p class="pt-48">
            We want you to know exactly what you're struggling with, see what's
            coming up, and look at a clear history of what you've accomplished.
          </p>
        </div>
      </div>
      <div class="mx-auto w-full max-w-7xl pt-24">
        <h2 class="w-full text-5xl font-medium">
          Be excited to come back every day
        </h2>
        <p class="pt-8 text-xl">
          Instant gratification, engaging stories, and the world's knowledge at
          your fingertips.
        </p>
        <p class="text-muted-foreground pt-48 text-center text-2xl">
          Our whole ethos is about having fun. Getting input from only one
          source quickly gets dull. Trying to wing it and "absorb the language
          naturally" is incredibly frustrating in the beginning.{" "}
        </p>
        <p class="mx-auto max-w-5xl pt-16 text-center text-3xl font-medium italic">
          Nihongo Ninja aims to walk the fine line between structure and freedom
          by offering best-in-class tools while bringing passionate artists and
          creators to you.
        </p>
        <div class="h-32 w-full" />
      </div>
    </div>
  )
}

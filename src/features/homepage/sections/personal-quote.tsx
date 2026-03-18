import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ClickableTooltip } from "@/components/ClickableTooltip"

const bounceKeyframes = `
@keyframes sprite-bounce {
  0%, 100% { transform: translateY(0); }
  4% { transform: translateY(-3px); }
  8% { transform: translateY(3px); }
  12% { transform: translateY(-1.5px); }
  16% { transform: translateY(1.5px); }
  20% { transform: translateY(0); }
}
`

export function PersonalQuote() {
  return (
    <section class="relative pt-4 lg:pt-6">
      <style>{bounceKeyframes}</style>
      <div class="mx-auto max-w-3xl px-6">
        <div class="flex gap-5 lg:gap-6">
          <div class="flex flex-col items-center pt-1">
            <Avatar class="size-10 shrink-0">
              {/* <AvatarImage src="/avatars/dylan.jpg" alt="Dylan" /> */}
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div
              class="mt-3 flex-1 w-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, var(--landing-accent), var(--landing-accent-end))",
              }}
            />
          </div>
          <blockquote>
            <p class="text-sm font-medium text-white/80 mb-3">
              Dylan{" "}
              <span class="text-white/40 font-normal">
                · Creator of Nihongo Ninja
              </span>
            </p>
            <p class="leading-relaxed text-white/60 lg:text-lg">
              I went through some Japanese textbooks, and while their grammar
              explanations are usually pretty decent, let me tell you, the
              practice sections were inefficient and sooo boring. I spent more
              mental effort trying to understand what they were asking and come
              up with situations to write about than actually practicing the
              grammar the lesson claimed to be about.
            </p>
            <p class="mt-4 leading-relaxed text-white/60 lg:text-lg">
              That's why I made the tools on Nihongo Ninja
              <ClickableTooltip content="yes, I actually used to write with em-dashes and no AI did not write this for me">
                <span
                  class="inline-block"
                  style={{ animation: "sprite-bounce 3s ease-in-out infinite" }}
                >
                  —
                </span>
              </ClickableTooltip>
              you get{" "}
              <span class="text-white/80 font-medium">clear instructions</span>,{" "}
              <span class="text-white/80 font-medium">instant feedback</span> on
              your work, and 100% of your effort goes into learning the task at
              hand. You might even enjoy them and end up doing some multiple
              times just for fun{" "}
              <span class="text-sm text-white/40">(shocking, I know)</span>.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

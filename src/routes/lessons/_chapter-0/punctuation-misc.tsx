import { createFileRoute } from "@tanstack/solid-router"
import {
  StudentBubble,
  SenseiBubble,
  Action,
} from "@/features/lessons/components/DialogueBubbles"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-0/punctuation-misc")({

  component: PunctuationMisc,
})

function PunctuationMisc() {
  return (
    <div class="relative pb-32">
      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>Japanese Punctuation & Spacing</>}
        subtitle="Where the rules you're used to stop applying."
      >
        <OverviewItem>Uppercase? Lowercase?</OverviewItem>
        <OverviewItem>Punctuation characters</OverviewItem>
        <OverviewItem>Spaces?</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* No uppercase or lowercase */}
        <div class="space-y-5">
          <SectionLabel>No uppercase or lowercase</SectionLabel>
          <StudentBubble>
            Wait, Japanese doesn't have capital letters?
          </StudentBubble>
          <SenseiBubble>
            <Action>without looking up from his brushwork</Action> Nope. No
            uppercase, no lowercase. Each character has one form. That's it.
          </SenseiBubble>
        </div>

        {/* Punctuation */}
        <div class="space-y-5">
          <SectionLabel>Punctuation</SectionLabel>
          <StudentBubble>What about question marks and periods?</StudentBubble>
          <SenseiBubble>
            <Action>flips page</Action> Question marks are used sparingly...
          </SenseiBubble>
          <StudentBubble>...Sensei?</StudentBubble>
          <SenseiBubble>
            Usually, the particle{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">か</span> at
            the end of a sentence signals a question. The question mark (？)
            shows up more in casual writing.
          </SenseiBubble>

          <div class="py-4">
            <AsideBlock>
              <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Japanese speakers use{" "}
                <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                  か
                </span>{" "}
                to indicate questions in polite and formal contexts. You
                literally say 'ka' at the end of the sentence. In casual
                settings, they might drop{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">か</span> and rely on
                intonation, which is written with a question mark (？). Or they
                might use both (also only in informal contexts).
              </p>
            </AsideBlock>
          </div>

          <StudentBubble>
            Oh, that's weird. I'll have to get used to that.
          </StudentBubble>
          <StudentBubble>
            So, what about periods? Surely, they use those... right Sensei?
          </StudentBubble>
          <SenseiBubble>
            <Action>sighs</Action> The period in Japanese is called 句点
            (kuten). Works the same as English, but instead of a solid dot, it's
            a small hollow circle (。).
          </SenseiBubble>
        </div>

        {/* No spaces */}
        <div class="space-y-5">
          <SectionLabel>No spaces</SectionLabel>
          <StudentBubble>
            Do Japanese sentences have spaces between words like in English?
          </StudentBubble>
          <SenseiBubble>
            <Action>eye twitching slightly</Action> Oh, spaces...{" "}
            <Action>nervous laughter</Action> Let me tell you about spaces. Or
            rather, the complete and total ABSENCE of spaces! That's right,
            Japanese doesn't use ANY spaces between words!
            <br />
            <br />
            Do you have ANY idea how many hours I spent trying to get this
            website to understand where one word ends and another begins?! The
            computer just stares at an endless stream of characters like some
            kind of confused tourist!
            <br />
            <br />
            <Action>takes deep breath</Action>
          </SenseiBubble>
          <SenseiBubble>
            Traditional Japanese writing flows like a river. A river that flows
            straight through the gates of hell, past the screaming souls of web
            developers, and into the ninth circle where most Japanese language
            tool developers have given up and are just hardcoding everything.{" "}
            <Action>adjusts collar</Action> But I digress...
            <br />
            <br />
            Modern Japanese sometimes uses spaces in children's books or
            learning materials to help with readability. Which would have made
            my life SO much easier!
            <br />
            <br />
            <Action>composes self</Action>
            <br />
            <br />
            Not that I'm bitter about it or anything.
          </SenseiBubble>

          <div class="py-4">
            <AsideBlock>
              <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Japanese doesn't use spaces between words. However, when typing,
                you'll notice that punctuation marks like{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">。</span> and{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">、</span> have
                built-in spacing to separate sentences. Japanese characters are
                also double-width, which means punctuation marks take up more
                space, appearing as{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">？</span> and{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">！</span>.
              </p>
            </AsideBlock>
          </div>

          <StudentBubble>...Are you okay, Sensei?</StudentBubble>
          <SenseiBubble>I'm fine. Let's move on.</SenseiBubble>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>No uppercase or lowercase in Japanese</SummaryItem>
          <SummaryItem>
            Questions use the particle{" "}
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">か</span>{" "}
            (question marks are casual and optional)
          </SummaryItem>
          <SummaryItem>
            Periods are small hollow circles (
            <span class="font-japanese text-foreground/80 dark:text-white/80">。</span>)
          </SummaryItem>
          <SummaryItem>No spaces between words</SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
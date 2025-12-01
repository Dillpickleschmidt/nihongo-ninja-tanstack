import { BookOpenCheck, Sparkles, UploadCloud, Link as LinkIcon } from "lucide-solid"
import { ImportOptionCard } from "./ImportOptionCard"

export interface MethodSelectionProps {
  tool: "nihongo" | "anki"
}

export function MethodSelection(props: MethodSelectionProps) {
  return (
    <div class="flex flex-col items-center gap-8">
      <div class="mx-auto max-w-5xl text-center">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Personalize Your <span class="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Learning Path</span>
        </h1>
        <p class="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
          {props.tool === "nihongo"
            ? "Tell us what you already know and what you want to learn next."
            : "Sync your Anki progress or generate new content."}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6 md:gap-8">
        {props.tool === "nihongo" ? (
          <>
            {/* Option 1: Manual */}
            <ImportOptionCard
              href="/import/nihongo/manual"
              title="Mark What You Know"
              description="Manually mark vocabulary and grammar you already know."
              icon={BookOpenCheck}
              time="15-30m"
              accentColor="blue"
            />

            {/* Option 2: Automatic */}
            <ImportOptionCard
              href="/import/nihongo/automatic"
              title="Upload History"
              description="Upload your review history from spaced-repetition apps like Anki."
              icon={UploadCloud}
              time="~5m"
              accentColor="purple"
            />

            {/* Option 3: Custom Path */}
            <ImportOptionCard
              href="/import/learning-path"
              title="Generate Custom Path"
              description="Upload content to create a personalized learning path based on content you want to understand."
              icon={Sparkles}
              time="~5m"
              accentColor="orange"
            />
          </>
        ) : (
          <>
            {/* Option 1: Connect */}
            <ImportOptionCard
              href="/import/anki/connect"
              title="Connect Anki"
              description="Connect to your local Anki instance via AnkiConnect to sync reviews."
              icon={LinkIcon}
              time="~7m"
              accentColor="green"
              actionText="Setup Connection"
            />

            {/* Option 2: Custom Path */}
            <ImportOptionCard
              href="/import/learning-path"
              title="Generate Custom Path"
              description="Upload content to create a personalized learning path based on content you want to understand."
              icon={Sparkles}
              time="~5m"
              accentColor="orange"
            />
          </>
        )}
      </div>
    </div>
  )
}

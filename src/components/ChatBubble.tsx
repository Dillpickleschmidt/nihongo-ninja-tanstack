import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { JSX } from "solid-js"

export function ChatBubble({
  speaker,
  text,
}: {
  speaker: "student" | "sensei"
  text: string | JSX.Element
}) {
  const isStudent = speaker === "student"

  return (
    <div
      class={`flex items-end gap-2 ${isStudent ? "justify-start" : "justify-end"}`}
    >
      {isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/student.png" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      )}
      <div
        class={`max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
          isStudent
            ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
            : "bg-sky-500 text-white dark:bg-sky-600"
        }`}
      >
        {text}
      </div>
      {!isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/guru.png" />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}


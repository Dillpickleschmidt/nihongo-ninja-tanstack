import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/utils"

export function ChatAttachment(props: {
  speaker: "student" | "sensei"
  children: any
  class?: string
}) {
  const isStudent = props.speaker === "student"
  return (
    <div
      class={`flex items-start gap-2 ${
        isStudent ? "justify-start" : "justify-end"
      }`}
    >
      {isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/student.png" alt="Student" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      )}
      <div
        class={cn(
          "max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm",
          props.class
            ? props.class
            : isStudent
              ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
              : "bg-sky-500 text-white dark:bg-sky-600",
        )}
      >
        {props.children}
      </div>
      {!isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/guru.png" alt="Sensei" />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

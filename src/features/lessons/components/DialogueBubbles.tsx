import type { JSX } from "solid-js"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Action(props: { children: JSX.Element }) {
  return <span class="font-light italic text-white/30">*{props.children}*</span>
}

export function StudentBubble(props: { children: JSX.Element }) {
  return (
    <div class="flex items-end gap-3">
      <Avatar class="size-7 shrink-0 ring-1 ring-white/10">
        <AvatarImage src="/img/student.png" alt="student" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div class="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-2.5 text-sm leading-relaxed text-white/70">
        {props.children}
      </div>
    </div>
  )
}

export function SenseiBubble(props: { children: JSX.Element }) {
  return (
    <div class="flex items-end justify-end gap-3">
      <div class="max-w-[80%] rounded-2xl rounded-br-sm bg-dynamic-accent/10 px-4 py-2.5 text-sm leading-relaxed text-white/70">
        {props.children}
      </div>
      <Avatar class="size-7 shrink-0 ring-1 ring-white/10">
        <AvatarImage src="/img/guru.png" alt="sensei" />
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    </div>
  )
}

import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function WelcomeSection() {
  return (
    <div class="mx-auto mt-[21vh] max-w-3xl px-6">
      <div class="mb-6 flex items-center justify-center gap-x-1">
        <h2 class="text-center text-2xl font-semibold text-neutral-300">
          Hey there!
        </h2>
        <Avatar class="size-9">
          <AvatarImage src="/icons/ninja.png" alt="Ninja" />
        </Avatar>
      </div>

      <p class="mb-10 text-center text-2xl font-semibold">
        Tell us what <span class="text-pink-300">Japanese level</span> you're at
        and we'll show you the tools you'll find most useful.
      </p>
    </div>
  )
}

export function SidebarUserInfoView() {
  return (
    <div class="relative flex h-full flex-col">
      <div class="flex flex-1 items-center justify-center">
        <p class="text-muted-foreground text-center text-sm">
          Sidebar content coming soon
        </p>
      </div>
      {/* Instruction bar */}
      <div class="border-border/50 bg-card/50 absolute right-0 bottom-0 z-10 w-full border-t p-3">
        <p class="text-muted-foreground text-center text-xs italic">
          Make a deck containing the cards you struggle with most.
        </p>
      </div>
    </div>
  )
}

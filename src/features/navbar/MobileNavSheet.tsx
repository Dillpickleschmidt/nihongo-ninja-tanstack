import { useLocation } from "@tanstack/solid-router"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { NavigationContent } from "@/features/sidebar/Sidebar"

interface MobileNavSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSignOut?: () => void
}

export function MobileNavSheet(props: MobileNavSheetProps) {
  const location = useLocation()

  const isActive = (href: string) => {
    const pathname = location().pathname
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <Sheet open={props.open} onOpenChange={props.onOpenChange}>
      <SheetContent
        position="bottom"
        class="rounded-t-2xl bg-background/80 p-0 pb-safe backdrop-blur-xl"
      >
        <SheetTitle class="sr-only">Navigation</SheetTitle>
        <NavigationContent
          isActive={isActive}
          onNavigate={() => props.onOpenChange(false)}
          onSignOut={props.onSignOut}
        />
      </SheetContent>
    </Sheet>
  )
}

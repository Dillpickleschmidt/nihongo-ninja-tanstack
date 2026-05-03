import { Link, useNavigate } from "@tanstack/solid-router"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-solid"

export function TrialWelcomeDialog() {
  const navigate = useNavigate()

  const close = () => {
    navigate({
      to: ".",
      search: (previous) => {
        const { welcome, ...rest } = previous
        return rest
      },
      replace: true,
    })
  }

  return (
    <Dialog open onOpenChange={(open) => !open && close()}>
      <DialogContent class="bg-neutral-950 text-white">
        <DialogHeader>
          <DialogTitle>Welcome to Nihongo Ninja!</DialogTitle>
          <DialogDescription class="mt-3 text-white/70">
            While most things at Nihongo Ninja are free, you&apos;ve received a
            15-day free trial to our Pro features, which you can view{" "}
            <Link to="/pricing" class="font-medium text-white/80 underline underline-offset-2">
              here
            </Link>
            .
          </DialogDescription>
        </DialogHeader>

        <p class="-mt-2 text-sm leading-6 text-white/70">
          Explore around the site to find hidden kanji, which you can click to
          unlock an additional 30 days free for yourself, plus a referral code to
          give someone else 30 days free, too.
        </p>

        <DialogFooter>
          <Button type="button" onClick={close} class="gap-1.5 bg-dynamic-accent text-black brightness-110 hover:bg-dynamic-accent hover:brightness-125">
            Start learning
            <ArrowRight />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import LogoutButton from "@/features/auth/components/Logout"
import { TourResetDropdown } from "@/features/guided-tour/TourResetDropdown"

// features/settings-page/components/GeneralSettings.tsx
export const GeneralSettings = () => {
  return (
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Profile</h1>
      <div class="border-card-foreground/70 bg-card/70 space-y-6 rounded-xl border p-6 shadow-lg">
        <section>
          <h2 class="mb-3 text-lg font-semibold">Account Management</h2>
          <p class="text-muted-foreground mb-3 text-sm">
            Sign out of your account.
          </p>
          <LogoutButton />
        </section>

        <section>
          <h2 class="mb-3 text-lg font-semibold">Tour Management</h2>
          <p class="text-muted-foreground mb-3 text-sm">
            Reset tour progress to start tours over again.
          </p>
          <TourResetDropdown />
        </section>
      </div>
    </div>
  )
}

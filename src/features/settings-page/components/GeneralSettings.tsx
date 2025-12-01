import LogoutButton from "@/features/auth/components/Logout"
import { TourResetDropdown } from "@/features/guided-tour/TourResetDropdown"
import { SettingsSection } from "./SettingsSection"

export const GeneralSettings = () => {
  return (
    <SettingsSection title="Profile" description="Manage your account settings and application preferences.">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-sm transition-colors hover:bg-background/60">
          <div class="mb-4">
            <h3 class="text-lg font-bold text-white">Account Management</h3>
            <p class="text-sm text-white/60 mt-1">
              Sign out of your account on this device.
            </p>
          </div>
          <div class="flex">
            <LogoutButton />
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-sm transition-colors hover:bg-background/60">
          <div class="mb-4">
            <h3 class="text-lg font-bold text-white">Tour Management</h3>
            <p class="text-sm text-white/60 mt-1">
              Reset tour progress to see onboarding guides again.
            </p>
          </div>
          <div class="flex">
            <TourResetDropdown />
          </div>
        </div>
      </div>
    </SettingsSection>
  )
}

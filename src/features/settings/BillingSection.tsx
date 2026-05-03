import { createSignal, Show } from "solid-js"
import { useQuery, useQueryClient } from "@tanstack/solid-query"
import { useAction } from "convex-solidjs"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { autumnCustomerQueryOptions } from "@/query/query-options"
import { queryKeys } from "@/query/query-keys"
import { hasActiveProSubscription } from "@/features/billing/model"

export function BillingSection() {
  const user = getUser()
  const queryClient = useQueryClient()
  const customerQuery = useQuery(() => ({
    ...autumnCustomerQueryOptions(),
    enabled: !!user(),
  }))
  const attachProPlan = useAction(api.api.billing.attachProPlan)
  const openCustomerPortal = useAction(api.api.billing.openCustomerPortal)
  const [processing, setProcessing] = createSignal(false)

  const isPro = () => hasActiveProSubscription(customerQuery.data)

  const handleAttachPro = async () => {
    setProcessing(true)
    try {
      const result = await attachProPlan.mutate({
        successUrl: `${window.location.origin}/settings`,
      })

      if (result.paymentUrl) {
        window.location.assign(result.paymentUrl)
        return
      }

      await queryClient.invalidateQueries({
        queryKey: queryKeys.autumnCustomer(),
      })
    } finally {
      setProcessing(false)
    }
  }

  const handleOpenPortal = async () => {
    setProcessing(true)
    try {
      const result = await openCustomerPortal.mutate({
        returnUrl: `${window.location.origin}/settings`,
      })

      if (result.url) {
        window.location.assign(result.url)
      }
    } finally {
      setProcessing(false)
    }
  }

  return (
    <Show when={user()}>
      <div>
        <h2 class="mb-4 text-lg font-medium text-white">Billing</h2>

        <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-white">Pro Plan</p>
              <p class="mt-1 text-sm text-white/50">
                <Show
                  when={!customerQuery.error}
                  fallback="Failed to load billing details."
                >
                  <Show
                    when={customerQuery.data !== undefined}
                    fallback="Loading billing details..."
                  >
                    {isPro()
                      ? "Active — includes Built-in SRS"
                      : "$8/month with a 15-day free trial. Includes Built-in SRS."}
                  </Show>
                </Show>
              </p>
            </div>

            <div class="flex gap-3">
              <button
                type="button"
                onClick={handleAttachPro}
                disabled={processing() || customerQuery.data === undefined}
                class="rounded-lg bg-dynamic-accent px-4 py-2 text-sm font-medium text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {processing()
                  ? "Working..."
                  : isPro()
                    ? "Change plan"
                    : "Start Pro"}
              </button>

              <button
                type="button"
                onClick={handleOpenPortal}
                disabled={processing() || customerQuery.data === undefined}
                class="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Manage billing
              </button>
            </div>
          </div>
        </div>

        <Show when={customerQuery.error instanceof Error}>
          <p class="mt-3 text-sm text-red-400">{customerQuery.error?.message}</p>
        </Show>
      </div>
    </Show>
  )
}

export const PRO_PLAN_ID = "pro_plan"

export type BillingCustomer = {
  customerId: string | null
  subscriptions: BillingSubscription[]
}

type BillingSubscription = {
  planId: string
  status: string
}

export function hasActiveProSubscription(customer: BillingCustomer | undefined) {
  return customer?.subscriptions.some(
    (subscription) =>
      subscription.planId === PRO_PLAN_ID && subscription.status === "active",
  ) ?? false
}

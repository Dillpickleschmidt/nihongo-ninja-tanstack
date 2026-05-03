"use node"

import { Autumn } from "autumn-js"
import { v } from "convex/values"
import { action, type ActionCtx } from "../_generated/server"

const PRO_PLAN_ID = "pro_plan"

export const getCustomer = action({
  args: {},
  handler: async (ctx) => {
    const { customerId, customerData } = await getAutumnIdentity(ctx)
    const customer = await getAutumn().customers.getOrCreate({
      customerId,
      ...customerData,
    })

    return {
      customerId: customer.id,
      subscriptions: customer.subscriptions.map((subscription) => ({
        planId: subscription.planId,
        status: subscription.status,
      })),
    }
  },
})

export const attachProPlan = action({
  args: { successUrl: v.optional(v.string()) },
  handler: async (ctx, { successUrl }) => {
    const { customerId, customerData } = await getAutumnIdentity(ctx)
    const autumn = getAutumn()

    await autumn.customers.getOrCreate({ customerId, ...customerData })

    const response = await autumn.billing.attach({
      customerId,
      planId: PRO_PLAN_ID,
      redirectMode: "always",
      successUrl,
    })

    return {
      customerId: response.customerId,
      paymentUrl: response.paymentUrl ?? null,
    }
  },
})

export const openCustomerPortal = action({
  args: { returnUrl: v.optional(v.string()) },
  handler: async (ctx, { returnUrl }) => {
    const { customerId, customerData } = await getAutumnIdentity(ctx)
    const autumn = getAutumn()

    await autumn.customers.getOrCreate({ customerId, ...customerData })

    const response = await autumn.billing.openCustomerPortal({
      customerId,
      returnUrl,
    })

    return {
      customerId: response.customerId,
      url: response.url,
    }
  },
})

function getAutumn() {
  const secretKey = process.env.AUTUMN_SECRET_KEY
  if (!secretKey) {
    throw new Error("AUTUMN_SECRET_KEY is not set")
  }

  return new Autumn({ secretKey })
}

async function getAutumnIdentity(ctx: ActionCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const email = getStringField(identity, "email")
  const name =
    getStringField(identity, "name") ??
    getStringField(identity, "givenName") ??
    email ??
    undefined

  return {
    customerId: identity.subject,
    customerData: {
      name,
      email,
    },
  }
}

function getStringField(value: unknown, field: string) {
  if (!value || typeof value !== "object" || !(field in value)) return undefined
  const fieldValue = (value as Record<string, unknown>)[field]
  return typeof fieldValue === "string" && fieldValue.length > 0
    ? fieldValue
    : undefined
}


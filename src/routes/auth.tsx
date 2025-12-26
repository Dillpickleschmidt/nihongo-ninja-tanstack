import { createFileRoute } from "@tanstack/solid-router"
import LoginSignupForm from "@/components/login-signup-form"

export const Route = createFileRoute("/auth")({
  component: LoginSignupForm,
})

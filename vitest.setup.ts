import { vi } from "vitest"
import "@testing-library/jest-dom"

// Mock @tanstack/solid-start server functions
vi.mock("@tanstack/solid-start", async () => {
  return {
    createServerFn: vi.fn().mockImplementation(() => ({
      handler: vi.fn().mockReturnValue(vi.fn()),
    })),
    serverOnly: vi.fn().mockImplementation((fn: any) => fn),
    isServer: false,
  }
})

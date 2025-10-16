// vitest.setup.ts
import { vi } from "vitest"

// Mock @tanstack/solid-start to avoid JSX issues in tests
// Keep it minimal to not interfere with existing test mocks
vi.mock("@tanstack/solid-start", async () => {
  // Import the original module but mock only what causes JSX issues
  return {
    createServerFn: vi.fn().mockImplementation(() => {
      const mockFn = vi.fn()
      mockFn.inputValidator = vi.fn().mockReturnValue({
        handler: vi.fn(),
      })
      return mockFn
    }),
    serverOnly: vi.fn().mockImplementation((fn: any) => fn),
    isServer: false,
  }
})

vi.mock("@/features/supabase/db/fsrs", () => ({
  upsertFSRSCardForUser: vi.fn(),
  batchUpsertFSRSCardsForUser: vi.fn(),
  getFSRSCards: vi.fn(),
  getUserProgress: vi.fn(),
}))


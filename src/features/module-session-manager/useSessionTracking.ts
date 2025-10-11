import { createSignal, onCleanup } from "solid-js"
import {
  createSession,
  updateSession,
} from "@/features/supabase/db/module-progress"
import { useQueryClient } from "@tanstack/solid-query"
import { userDailyTimeQueryOptions } from "@/features/learn-page/query/query-options"

export function useSessionTracking(userId: string | null, moduleId: string) {
  const queryClient = useQueryClient()

  const [sessionId, setSessionId] = createSignal<string | null>(null)
  let cumulativeTime = 0
  let cumulativeQuestions = 0
  let updateTimer: ReturnType<typeof setTimeout> | null = null
  let firstEventTime: number | null = null
  const WINDOW_DURATION = 5000 // 5 seconds

  const flushToDatabase = () => {
    const sid = sessionId()
    if (!sid || !userId) return

    void updateSession(sid, {
      durationSeconds: cumulativeTime,
      questionsAnswered: cumulativeQuestions,
    }).catch((err) => {
      console.warn("Failed to update session:", err)
    })
  }

  const startSession = async () => {
    if (!userId) return

    const session = await createSession(userId, moduleId, {
      durationSeconds: 20,
      questionsAnswered: 0,
    })
    setSessionId(session.session_id)
  }

  const addTimeAndQuestions = (
    seconds: number,
    incrementQuestions: boolean,
  ) => {
    if (!userId) return

    // Optimistic update
    const queryKey = userDailyTimeQueryOptions(userId, new Date()).queryKey
    queryClient.setQueryData<number>(queryKey, (old) => (old ?? 0) + seconds)

    cumulativeTime += seconds
    if (incrementQuestions) cumulativeQuestions++

    const now = Date.now()

    if (firstEventTime === null) {
      firstEventTime = now
    }

    const timeInWindow = now - firstEventTime
    const remainingTime = WINDOW_DURATION - timeInWindow

    if (updateTimer) {
      clearTimeout(updateTimer)
    }

    if (remainingTime <= 0) {
      flushToDatabase()
      firstEventTime = now

      updateTimer = setTimeout(() => {
        flushToDatabase()
        updateTimer = null
        firstEventTime = null
      }, WINDOW_DURATION)
      return
    }

    updateTimer = setTimeout(() => {
      flushToDatabase()
      updateTimer = null
      firstEventTime = null
    }, remainingTime)
  }

  onCleanup(() => {
    if (updateTimer) {
      clearTimeout(updateTimer)
      flushToDatabase()
    }
  })

  return {
    startSession,
    addTimeAndQuestions,
  }
}

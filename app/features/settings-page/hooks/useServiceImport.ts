import { importServiceData } from "@/features/service-auth/server-functions"
import type { ServiceType } from "../utils/serviceTypes"

export const useServiceImport = (
  loadServiceState: () => Promise<void>,
  setErrors: (
    fn: (prev: Record<ServiceType, string>) => Record<ServiceType, string>,
  ) => void,
  setIsProcessing: (processing: boolean) => void,
) => {
  const importFromService = async (service: ServiceType) => {
    setIsProcessing(true)
    setErrors((prev) => ({ ...prev, [service]: "" }))

    try {
      const result = await importServiceData({ data: { service } })
      if (result.success) {
        await loadServiceState()
        return { success: true }
      } else {
        const errorMessage = result.error || "Import failed"
        setErrors((prev) => ({ ...prev, [service]: errorMessage }))
        return { success: false, error: errorMessage }
      }
    } catch (error) {
      const errorMessage = "Import error"
      setErrors((prev) => ({ ...prev, [service]: errorMessage }))
      return { success: false, error: errorMessage }
    } finally {
      setIsProcessing(false)
    }
  }

  return {
    importFromService,
  }
}

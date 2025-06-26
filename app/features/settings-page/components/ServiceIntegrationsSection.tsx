

import { createSignal, createEffect } from "solid-js";
import { AnkiServiceCard } from "./AnkiServiceCard";
import { WanikaniServiceCard } from "./WanikaniServiceCard";
import { JpdbServiceCard } from "./JpdbServiceCard";
import { useSettings } from "@/context/SettingsContext";
import { jpdbAdapter } from "@/features/fsrs-import/jpdbAdapter";
import { importReviewsServerFn } from "@/features/fsrs-import/importReviewsServerFn";
import { getServiceState, updateServiceSettingsServerFn, connectService } from "@/features/service-auth/server-functions";
import type { ServiceType, ServiceMode, AllServicesState, ServiceSettings } from "../utils/serviceTypes";

export const ServiceIntegrationsSection = () => {
    const { serviceSettings, updateServiceSetting, isInitialized } = useSettings();

    const [servicesState, setServicesState] = createSignal<AllServicesState>({
        jpdb: { status: "disconnected", mode: "disabled", has_api_key: false, is_api_key_valid: false, data_imported: false },
        wanikani: { status: "disconnected", mode: "disabled", has_api_key: false, is_api_key_valid: false, data_imported: false },
        anki: { status: "disconnected", mode: "disabled", has_api_key: false, is_api_key_valid: false, data_imported: false },
    });

    const [errors, setErrors] = createSignal<Record<ServiceType, string>>({ jpdb: "", wanikani: "", anki: "" });
    const [isProcessing, setIsProcessing] = createSignal(false);

    const loadServiceState = async () => {
        try {
            const result = await getServiceState();
            if (result.success && result.data) {
                setServicesState(result.data);
            }
        } catch (error) {
            console.error("Failed to load service state:", error);
        }
    };

    createEffect(() => {
        if (isInitialized()) {
            loadServiceState();
        }
    });

    const handleModeChange = (service: ServiceType, mode: ServiceMode) => {
        updateServiceSetting(service, { mode });
        updateServiceSettingsServerFn({ data: { service, settings: { mode } } });
    };

    const handleJpdbImport = async (apiKey: string, file: File) => {
        setIsProcessing(true);
        setErrors((prev) => ({ ...prev, jpdb: "" }));

        // 1. Validate API Key
        const validationResult = await connectService({ data: { service: "jpdb", credentials: { api_key: apiKey } } });

        if (!validationResult.success) {
            setErrors((prev) => ({ ...prev, jpdb: validationResult.error || "Invalid API Key" }));
            updateServiceSetting("jpdb", { is_api_key_valid: false });
            updateServiceSettingsServerFn({ data: { service: "jpdb", settings: { is_api_key_valid: false } } });
            setIsProcessing(false);
            return;
        }

        // Update service settings with the validated API key
        updateServiceSetting("jpdb", { api_key: apiKey, is_api_key_valid: true });
        updateServiceSettingsServerFn({ data: { service: "jpdb", settings: { api_key: apiKey, is_api_key_valid: true } } });

        // 2. Process and Import File
        try {
            const fileText = await file.text();
            const rawData = JSON.parse(fileText);
            if (!jpdbAdapter.validateInput(rawData)) {
                throw new Error("Invalid JPDB JSON format.");
            }
            const normalizedCards = jpdbAdapter.transformCards(rawData);
            if (normalizedCards.length === 0) {
                throw new Error("No valid cards found in the JPDB export.");
            }
            const importResult = await importReviewsServerFn({ data: { cards: normalizedCards, source: "jpdb" } });
            if (importResult.success) {
                updateServiceSetting("jpdb", { data_imported: true });
                updateServiceSettingsServerFn({ data: { service: "jpdb", settings: { data_imported: true } } });
                updateServiceSettingsServerFn({ data: { service: "jpdb", settings: { data_imported: true } } });
            } else {
                throw new Error(importResult.error || "File import failed.");
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
            setErrors((prev) => ({ ...prev, jpdb: `Import failed: ${errorMessage}` }));
        } finally {
            setIsProcessing(false);
        }
    };

    const createCommonProps = (serviceType: ServiceType) => ({
        serviceState: () => servicesState()[serviceType],
        settings: () => serviceSettings()[serviceType], // This is the correct way to access the settings signal
        setSetting: (settings: Partial<ServiceSettings>) => updateServiceSetting(serviceType, settings),
        error: () => errors()[serviceType],
        setError: (error: string) => setErrors(prev => ({ ...prev, [serviceType]: error })),
        isProcessing: isProcessing,
        setIsProcessing: setIsProcessing,
    });

    return (
        <div class="space-y-6">
            <h2 class="mb-6 text-2xl font-bold">Service Integrations</h2>
            <AnkiServiceCard {...createCommonProps("anki")} />
            <WanikaniServiceCard {...createCommonProps("wanikani")} />
            <JpdbServiceCard {...createCommonProps("jpdb")} onImport={handleJpdbImport} />
        </div>
    );
};



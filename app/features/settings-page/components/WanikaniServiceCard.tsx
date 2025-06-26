import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { ServiceCard } from "./ServiceCard"
import {
  connectService,
  importServiceData,
} from "@/features/service-auth/server-functions"
import type {
  ServiceState,
  ServiceMode,
  ServiceSettings,
} from "../utils/serviceTypes"

interface WanikaniServiceCardProps {
    serviceState: () => ServiceState;
    settings: () => Partial<ServiceSettings>;
    setSetting: (settings: Partial<ServiceSettings>) => void;
    error: () => string;
    setError: (error: string) => void;
    isProcessing: () => boolean;
    setIsProcessing: (processing: boolean) => void;
}

export const WanikaniServiceCard = (props: WanikaniServiceCardProps) => {
    const [wanikaniApiKey, setWanikaniApiKey] = createSignal("");

    const handleConnect = async () => {
        const apiKey = wanikaniApiKey();
        if (!apiKey) return;

        props.setIsProcessing(true);
        props.setError("");

        const result = await connectService({ data: { service: "wanikani", credentials: { api_key: apiKey } } });

        if (result.success) {
            setWanikaniApiKey("");
            props.setSetting({ mode: "live", is_api_key_valid: true });
        } else {
            props.setError(result.error || "An unknown error occurred.");
            props.setSetting({ is_api_key_valid: false });
        }
        props.setIsProcessing(false);
    };

    const handleImport = async () => {
        props.setIsProcessing(true);
        props.setError("");

        const result = await importServiceData({ data: { service: "wanikani" } });

        if (result.success) {
            props.setSetting({ data_imported: true });
        } else {
            props.setError(result.error || "An unknown error occurred.");
            props.setSetting({ data_imported: false });
        }
        props.setIsProcessing(false);
    };

    return (
        <ServiceCard
            title="WaniKani Integration"
            gradient="from-green-600/90 via-emerald-700/90 to-teal-800/90"
            borderColor="border-green-400/30"
            iconColor="bg-green-300"
            service="wanikani"
            selectedMode={props.settings().mode || "disabled"}
            isProcessing={props.isProcessing()}
            onModeChange={(mode) => props.setSetting({ mode })}
        >
            <Show when={props.settings().mode === "live"}>
                <div class="space-y-4">
                    <Show when={!props.settings().is_api_key_valid}>
                        <TextField>
                            <TextFieldLabel class="text-white">WaniKani API Key</TextFieldLabel>
                            <TextFieldInput type="password" placeholder="Enter your WaniKani API key" class="border-white/20 bg-white/10 text-white placeholder:text-white/50" value={wanikaniApiKey()} onInput={(e) => setWanikaniApiKey(e.currentTarget.value)} />
                        </TextField>
                        <Button onClick={handleConnect} disabled={!wanikaniApiKey() || props.isProcessing()} class="border-white/30 bg-white/20 text-white hover:bg-white/30">
                            Connect to WaniKani
                        </Button>
                    </Show>
                    <Show when={props.settings().is_api_key_valid}>
                        <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                            <p class="text-sm text-green-100">✓ Connected to WaniKani - Live access enabled</p>
                        </div>
                    </Show>
                </div>
            </Show>

            <Show when={props.settings().mode === "imported"}>
                <div class="space-y-4">
                    <Show when={!props.settings().data_imported}>
                        <Button onClick={handleImport} disabled={props.isProcessing()} class="border-white/30 bg-white/20 text-white hover:bg-white/30">
                           Import WaniKani Data
                        </Button>
                    </Show>
                    <Show when={props.settings().data_imported}>
                        <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
                            <p class="text-sm text-green-100">✓ WaniKani data imported successfully</p>
                        </div>
                    </Show>
                </div>
            </Show>

            <Show when={props.error()}>
                <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
                    <p class="text-sm text-red-100">✗ {props.error()}</p>
                </div>
            </Show>
        </ServiceCard>
    );
};

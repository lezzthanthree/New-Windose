import { create } from "zustand";

interface IExperimentalState {
    experimental: boolean;
    initializeExperimental: () => void;
}

export const useExperimentalState = create<IExperimentalState>((set) => ({
    experimental: false,
    initializeExperimental: () => {
        const showExperimental =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";
        set({ experimental: showExperimental });
    },
}));

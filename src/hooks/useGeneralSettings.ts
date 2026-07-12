import localforage from "localforage";
import { create } from "zustand";

interface IGeneralSettingState {
    hour24: boolean;
    hideSearchTip: boolean;
    initializeSettings: () => Promise<void>;
    changeSettings: (type: string, state: boolean) => Promise<void>;
}

export const useGeneralSettingsState = create<IGeneralSettingState>((set) => ({
    hour24: false,
    hideSearchTip: false,
    initializeSettings: async () => {
        set({
            hour24: (await localforage.getItem("hour24")) ?? false,
            hideSearchTip:
                (await localforage.getItem("hideSearchTip")) ?? false,
        });
    },
    changeSettings: async (type, state) => {
        await localforage.setItem(type, state);
        set({
            [type]: state,
        });
    },
}));

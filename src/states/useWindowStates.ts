import { create } from "zustand";

interface IWindowState {
    focusedWindow: string | null;
    setFocusedWindow: (window: string | null) => void;
    zCount: number;
    incrementZCount: () => void;

    speedDialWindow: boolean;
    folder1Window: boolean;
    folder2Window: boolean;
    folder3Window: boolean;
    setSpeedDialWindow: (state: boolean) => void;
    setFolder1Window: (state: boolean) => void;
    setFolder2Window: (state: boolean) => void;
    setFolder3Window: (state: boolean) => void;
    openWindow: (id: string) => void;
}

export const useWindowState = create<IWindowState>((set) => ({
    focusedWindow: null,
    setFocusedWindow: (window) => set({ focusedWindow: window }),
    zCount: 0,
    incrementZCount: () => set((s) => ({ zCount: s.zCount + 1 })),
    openWindow: (id: string) => {
        set((state) => ({
            ...state,
            [`${id}Window`]: true,
            focusedWindow: id,
            zCount: state.zCount + 1,
        }));
    },
    speedDialWindow: false,
    folder1Window: false,
    folder2Window: false,
    folder3Window: false,
    setSpeedDialWindow: (state) => set({ speedDialWindow: state }),
    setFolder1Window: (state) => set({ folder1Window: state }),
    setFolder2Window: (state) => set({ folder2Window: state }),
    setFolder3Window: (state) => set({ folder3Window: state }),
}));

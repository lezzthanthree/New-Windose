import { create } from "zustand";

interface IWindowState {
    speedDialWindow: boolean;
    setSpeedDialWindow: (state: boolean) => void;
}

export const useWindowState = create<IWindowState>((set) => ({
    speedDialWindow: true,
    setSpeedDialWindow: (state) => set({ speedDialWindow: state }),
}));

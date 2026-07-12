import localforage from "localforage";
import { create } from "zustand";
import { searchListSettingsKey as searchListKey } from "../data/Consts";
import type ISearchHistory from "../types/ISearchHistory";

interface ISearchState {
    search: string;
    searchHistoryList: ISearchHistory[];
    temporary: string;
    initializeSearchHistoryList: () => void;
    setSearch: (newString: string) => void;
    addQuery: (query: string) => Promise<void>;
    setTemporary: (state: string) => void;
    clear: () => void;
}

export const useSearchState = create<ISearchState>((set, get) => ({
    search: "",
    searchHistoryList: [],
    temporary: "",
    initializeSearchHistoryList: async () => {
        try {
            const searchList =
                await localforage.getItem<ISearchHistory[]>(searchListKey);

            set({
                searchHistoryList: searchList || [],
            });
        } catch (error) {
            console.error("Failed to load searchList:", error);
        }
    },
    addQuery: async (query) => {
        const list = get().searchHistoryList;
        const newSearchList = [
            ...list.filter((s) => s.query.toLowerCase() != query.toLowerCase()),
            {
                query,
                date: new Date(),
            },
        ];

        try {
            await localforage.setItem(searchListKey, newSearchList);
        } catch (error) {
            console.error("Failed to add query:", error);
        }

        set({
            searchHistoryList: newSearchList,
        });
    },
    setSearch: (newString: string) => set({ search: newString }),
    setTemporary: (state) => {
        set({
            temporary: state,
        });
    },
    clear: () => set({ search: "" }),
}));

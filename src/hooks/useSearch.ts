import localforage from "localforage";
import { create } from "zustand";
import { searchListSettingsKey as searchListKey } from "../data/Consts";

interface ISearchHistory {
    query: string;
    date: Date;
}
interface ISearchState {
    search: string;
    searchHistoryList: ISearchHistory[];
    initializeSearchHistoryList: () => void;
    setSearch: (newString: string) => void;
    addQuery: (query: string) => Promise<void>;
    clear: () => void;
}

export const useSearchState = create<ISearchState>((set, get) => ({
    search: "",
    searchHistoryList: [],
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
        if (list.find((s) => s.query.toLowerCase() === query)) return;

        const newSearchList = [
            ...list,
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
    clear: () => set({ search: "" }),
}));

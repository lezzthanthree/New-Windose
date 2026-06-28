import localforage from "localforage";
import { create } from "zustand";
import { noteKey } from "../data/Consts";

interface INote {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    modifiedAt: Date;
}

interface INotesState {
    notes: INote[];
    openedNote: INote | null;
    initializeNotepad: () => Promise<void>;
    createNote: () => void;
    removeNote: (id: number) => void;
    openNote: (id: number) => void;
    closeNote: () => void;
    editContentNote: (content: string) => void;
    editTitleNote: (title: string) => void;
    noteListView: "simple" | "detailed";
    setNoteListView: (view: "simple" | "detailed") => void;
}

export const useNotesState = create<INotesState>((set) => ({
    notes: [],
    openedNote: null,
    initializeNotepad: async () => {
        try {
            const savedNotes = await localforage.getItem<INote[]>(noteKey);
            const notelistView = await localforage.getItem<
                "simple" | "detailed"
            >("noteListView");
            set({
                notes: savedNotes || [],
                noteListView: notelistView || "detailed",
            });
        } catch (error) {
            console.error("Failed to load notes:", error);
        }
    },
    createNote: () =>
        set((s) => {
            const date = new Date();

            const newNote: INote = {
                id: date.valueOf(),
                title: "Untitled",
                content: "",
                createdAt: date,
                modifiedAt: date,
            };

            const newNotes = [...s.notes, newNote];

            localforage.setItem(noteKey, newNotes);

            return {
                openedNote: newNote,
                notes: newNotes,
            };
        }),
    removeNote: (id) =>
        set((s) => {
            const newNotes = s.notes.filter((note) => id != note.id);

            localforage.setItem(noteKey, newNotes);

            return {
                openedNote: null,
                notes: newNotes,
            };
        }),
    openNote: (id) =>
        set((s) => {
            const note = s.notes.find((note) => id == note.id);

            return {
                openedNote: note || null,
            };
        }),
    closeNote: () => set({ openedNote: null }),
    editContentNote: (content) =>
        set((s) => {
            if (!s.openedNote) return {};
            const updatedNote = {
                ...s.openedNote,
                content,
                modifiedAt: new Date(),
            };

            const updatedNotes = s.notes.map((n) =>
                n.id === updatedNote.id ? updatedNote : n,
            );

            localforage.setItem(noteKey, updatedNotes);

            return {
                openedNote: updatedNote,
                notes: updatedNotes,
            };
        }),
    editTitleNote: (title) =>
        set((s) => {
            if (!s.openedNote) return {};
            const updatedNote = {
                ...s.openedNote,
                title,
                modifiedAt: new Date(),
            };

            const updatedNotes = s.notes.map((n) =>
                n.id === updatedNote.id ? updatedNote : n,
            );

            localforage.setItem(noteKey, updatedNotes);

            return {
                openedNote: updatedNote,
                notes: updatedNotes,
            };
        }),
    noteListView: "detailed",
    setNoteListView: (view) =>
        set(() => {
            localforage.setItem("noteListView", view);
            return { noteListView: view };
        }),
}));

import React from "react";
import { useNotesState } from "../../hooks/useNotes";
import Button from "../Button";
import NoteNotFound from "./NoteNotFound";

const Editor: React.FC = () => {
    const {
        openedNote,
        closeNote,
        removeNote,
        editTitleNote,
        editContentNote,
    } = useNotesState();

    if (!openedNote) return <NoteNotFound />;

    return (
        <div id="editor" className="flex flex-col gap-2 h-full">
            <div className="flex flex-col">
                <input
                    className="flex flex-row gap-2 items-center font-nso-pixelmplus-b text-nso-purple text-4xl truncate"
                    value={openedNote.title}
                    onChange={(e) => {
                        const value = e.target.value;
                        editTitleNote(value);
                    }}
                />
                <p>{openedNote.modifiedAt.toLocaleString()}</p>
            </div>
            <textarea
                className="font-nso-dinkie-9px text-nso-purple text-xl resize-none flex-1"
                placeholder="Your note here..."
                onChange={(e) => {
                    const value = e.target.value;
                    editContentNote(value);
                }}
                value={openedNote.content}
            ></textarea>
            <div className="flex justify-between">
                <Button
                    label="Close"
                    icon="hn-arrow-left"
                    onClick={closeNote}
                />
                <Button
                    label=""
                    icon="hn-trash-alt-solid"
                    onClick={() => {
                        removeNote(openedNote.id);
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;

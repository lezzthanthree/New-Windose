import React from "react";
import Button from "../Button";
import { useNotesState } from "../../hooks/useNotes";

const NoteNotFound: React.FC = () => {
    const { closeNote } = useNotesState();
    return (
        <div id="editor" className="flex flex-col gap-2 h-full">
            <div className="flex flex-1 flex-col items-center justify-center">
                <i className="hn hn-times-circle-solid text-2xl" />
                <p>Error: Note not found</p>
            </div>
            <div className="flex justify-between">
                <Button
                    label="Close"
                    icon="hn-arrow-left"
                    onClick={closeNote}
                />
            </div>
        </div>
    );
};

export default NoteNotFound;

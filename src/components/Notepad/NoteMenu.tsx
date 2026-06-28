import React from "react";
import { useNotesState } from "../../hooks/useNotes";
import Button from "../Button";
import Separator from "./Separator";
import DetailedNote from "./DetailedNote";
import NoFiles from "./NoFiles";

const NoteMenu: React.FC = () => {
    const { notes, createNote } = useNotesState();

    return (
        <div id="file-menu" className="flex flex-col gap-2 h-full">
            <div
                id="file-action-buttons"
                className="flex flex-row justify-between"
            >
                <Button
                    label="Add new note"
                    icon="hn-plus-solid"
                    onClick={createNote}
                />
                <div className="flex flex-row">
                    <Button label="Simple" icon="hn-bars" />
                    <Button label="Detailed" icon="hn-bars-solid" />
                </div>
            </div>
            <Separator />
            <div
                id="note-list"
                className="flex-1 flex flex-col gap-1 overflow-scroll"
            >
                {notes.length > 0 ? (
                    notes
                        .sort(
                            (a, b) =>
                                b.modifiedAt.valueOf() - a.modifiedAt.valueOf(),
                        )
                        .map((note) => (
                            <DetailedNote
                                id={note.id}
                                title={note.title}
                                content={note.content}
                                timestamp={note.modifiedAt.toLocaleString()}
                                key={note.id}
                            />
                        ))
                ) : (
                    <NoFiles />
                )}
            </div>
        </div>
    );
};

export default NoteMenu;

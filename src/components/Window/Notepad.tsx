import React, { useEffect } from "react";
import { Window } from "../Window";
import { useNotesState } from "../../hooks/useNotes";
import NoteMenu from "../Notepad/NoteMenu";
import Button from "../Button";

const NotepadWindow: React.FC = () => {
    const {
        initializeNotes,
        openedNote,
        closeNote,
        removeNote,
        editTitleNote,
        editContentNote,
    } = useNotesState();

    useEffect(() => {
        initializeNotes();
    }, []);

    return (
        <Window title="Notepad" id="notepad" x={150} y={50}>
            <div className="w-lg h-150 p-4 font-nso-dinkie-9px text-nso-purple">
                {!openedNote ? (
                    <NoteMenu />
                ) : (
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
                )}
            </div>
        </Window>
    );
};

export default NotepadWindow;

import React, { useEffect } from "react";
import { Window } from "../Window";
import { useNotesState } from "../../hooks/useNotes";
import NoteMenu from "../Notepad/NoteMenu";
import Editor from "../Notepad/Editor";
import NotepadNotice from "../Notepad/NotepadNotice";

const NotepadWindow: React.FC = () => {
    const { initializeNotes, openedNote } = useNotesState();

    useEffect(() => {
        initializeNotes();
    }, []);

    return (
        <Window title="Notepad" id="notepad" x={150} y={50}>
            <NotepadNotice />
            <div className="w-lg h-150 p-4 font-nso-dinkie-9px text-nso-purple">
                {!openedNote ? <NoteMenu /> : <Editor />}
            </div>
        </Window>
    );
};

export default NotepadWindow;

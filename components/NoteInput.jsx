import { useState, useRef } from 'react';
function NoteInput({onAdd}){

    const [noteInput, setNoteInput] = useState('');
    const inputRef = useRef();

    const handleNoteChange = () => {
        if (noteInput.trim() === '') return;
        onAdd(noteInput);
        setNoteInput('');
        inputRef.current.focus();
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Enter your note"
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                ref={inputRef}
            />
            <button
                type="submit"
                onClick={handleNoteChange}>
                Add Note
            </button>

        </div>
    )
}

export default NoteInput

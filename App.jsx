import {useCallback, useState, useMemo} from 'react';
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import NoteItem from "./components/NoteItem.jsx";

function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (text) => {
        setNotes((previousNotes) => [...previousNotes, {
            id: Date.now(),
            text
        }])
    }

    const onDelete = useCallback((id) => {
        setNotes((previousNotes) => previousNotes.filter((note) => note.id !== id));
    }, [])

    const totalNotes = useMemo(() => notes.length, [notes]);
    return (
        <div>
            <NoteInput
                onAdd={addNote}
            />

            <NoteList
                notes={notes}
                onDelete={onDelete}
            />

            <h2>Total notes: {totalNotes}</h2>
        </div>
    );
}

export default App;

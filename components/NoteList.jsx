import NoteItem from "./NoteItem"
function NoteList({notes, onDelete}){

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <NoteItem
                        key={note?.id}
                        note={note}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NoteList

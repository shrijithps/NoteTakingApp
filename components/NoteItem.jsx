function NoteItem({note, onDelete}){
    return(
        <li>
            {note?.text}
            <button onClick={() => onDelete(note?.id)}>Delete</button>
        </li>
    )
}

export default NoteItem

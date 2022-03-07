import React from 'react'
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector(state => state)

  return (
    <div>
             <ul>
       {notes.map(note=> <li key={note.id} > 
                {note.content}<strong>{note.important ? 'important' : ''}</strong>
       </li>)}
     </ul>

    </div>
  )
}

export default Notes

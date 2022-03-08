import React from 'react'
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector(state => {
    if ( state.filter === 'ALL' ) {
      return state.notes
    }
    return state.filter  === 'IMPORTANT' 
      ? state.notes.filter(note => note.important)
      : state.notes.filter(note => !note.important)
  })

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

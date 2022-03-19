import React from 'react'
import { connect } from "react-redux";

const Notes = (props) => {

  return (
    <div>
             <ul>
       {props.notes.map(note=> <li key={note.id} > 
                {note.content}<strong>{note.important ? 'important' : ''}</strong>
       </li>)}
     </ul>

    </div>
  )
}

const mapStateToProps = (state) => {
  // using props inplace of state due to mapToStateProps
  // map to state function is used to define props of connected component that are based on state of redux store

  if ( state.filter === 'ALL' ) {
    return {
      notes: state.notes
    }
  }
  return{

    notes: (state.filter  === 'IMPORTANT' 
    ? state.notes.filter(note => note.important)
    : state.notes.filter(note => !note.important)
    )
  } 
}
 
const ConnectedNotes = connect(mapStateToProps)(Notes)
export default ConnectedNotes

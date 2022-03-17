import { createNote } from "../reducer/noteReducer";
import { useDispatch } from "react-redux";
import noteService from '../services/notes'

const NewNote = () => {
    const dispatch = useDispatch()  
    const addNote = async(event) => {
      event.preventDefault()  
      const content = event.target.note.value
      event.target.note.value = ''
      console.log(content)
      const newNote = await noteService.createNew(content)
      dispatch(createNote(newNote))
    }
  
  
  return (
    <div>
        <form onSubmit={addNote}>
      <input name="note" />
      <button type='submit'>add</button>
      </form> 
    </div>
  )
}

export default NewNote
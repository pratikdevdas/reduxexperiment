import { createSlice } from "@reduxjs/toolkit"
import noteService from '../services/notes'

const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers:{
        createNote(state,action){
            const content = action.payload
            state.push(content)
        },
        appendNote(state,action){
            state.push(action.payload)
        },
        setNotes(state,action){
            return action.payload
        }
    }
})

  export const {createNote,appendNote,setNotes} = noteSlice.actions

  export const initializeNotes = () => {
      return async dispatch => {
          const notes = await noteService.getAll()
          dispatch(setNotes(notes))
      }
  }
  export default noteSlice.reducer
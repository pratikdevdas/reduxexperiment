import { createSlice } from "@reduxjs/toolkit"
import noteService from '../services/notes'

const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers:{
        appendNote(state,action){
            state.push(action.payload)
        },
        setNotes(state,action){
            return action.payload
        }
    }
})

  export const {appendNote,setNotes} = noteSlice.actions

  export const initializeNotes = () => {
      return async dispatch => {
          const notes = await noteService.getAll()
          dispatch(setNotes(notes))
      }
  }

  export const createNote = content => {
      return async dispatch => {
          const newNote = await noteService.createNew(content)
        dispatch(appendNote(newNote))
      }
  }
  export default noteSlice.reducer
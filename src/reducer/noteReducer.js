import { createSlice } from "@reduxjs/toolkit"

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
  export default noteSlice.reducer
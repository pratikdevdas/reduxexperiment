import { createSlice } from "@reduxjs/toolkit"

const generateId =() => { return Number((Math.random* 100000).toFixed(0))}


const noteSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers:{
        createNote(state,action){
            const content = action.payload
            state.push({
                content,
                important:false,
                id: generateId()
            })
        },
        appendNote(state,action){
            state.push(action.payload)
        }
    }
})

  export const {createNote,appendNote} = noteSlice.actions
  export default noteSlice.reducer
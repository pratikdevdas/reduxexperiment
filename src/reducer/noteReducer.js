import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        content:'state changes are made with actions',
        important:true,
        id:1
      },
      {
        content:'state of store can contain any data',
        important:true,
        id:2
      }
]

const generateId =() => { return Number((Math.random* 100000).toFixed(0))}


const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
        createNote(state,action){
            const content = action.payload
            state.push({
                content,
                important:false,
                id: generateId()
            })
        }
    }
})

  export const {createNote} = noteSlice.actions
  export default noteSlice.reducer
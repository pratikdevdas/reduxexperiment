const noteReducer = (state = [] , action) => {
    
    switch(action.type){
        case 'NEW_NOTE':
            return [...state, action.data]
            default:
                return state
            }
   
  }
  const generateId =() => { return Number((Math.random* 100000).toFixed(0))}

  export const createNote = (content) => {
      return {
          type: 'NEW_NOTE',
          data: {
              content,
              important: false,
              id: generateId()
          }
      }
  }

  export default noteReducer
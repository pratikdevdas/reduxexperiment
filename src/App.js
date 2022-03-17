import { useEffect } from "react";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import { useDispatch } from "react-redux";
import { filterChange } from "./reducer/filterReducer";
import { initializeNotes } from "./reducer/noteReducer";

const App = () => {
 const dispatch = useDispatch()
 
 useEffect(() => {
   dispatch(initializeNotes())
 }, [dispatch])
 
  
  return (
    <>
    <div>
      <input type="radio" name="filter" onChange={()=> dispatch(filterChange('ALL'))} /> All
      <input type="radio" name="filter" onChange={()=> dispatch(filterChange('IMPORTANT'))} /> Imp
      <input type="radio" name="filter" onChange={()=> dispatch(filterChange('NONIMPORTANT'))} /> not imp
    </div>

    <NewNote></NewNote> 
    <Notes></Notes>
    </>
  );
};


export default App
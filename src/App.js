import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
const App = () => {

  
  const filteredSelected = (value) => {
    console.log(value)
  }

  

  return (
    <>
    <div>
      <input type="radio" name="filter" onChange={()=> filteredSelected('ALL')} /> All
      <input type="radio" name="filter" onChange={()=> filteredSelected('IMPORTANT')} /> Imp
      <input type="radio" name="filter" onChange={()=> filteredSelected('NONIMPORTANT')} /> not imp
    </div>

    <NewNote></NewNote> 
    <Notes></Notes>
    </>
  );
};


export default App
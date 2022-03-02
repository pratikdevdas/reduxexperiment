
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import { createStore } from "redux";

const noteReducer = (state = [] , action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return (state = 0);
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const App = () => {

  const handleIncrement = (e) => {
    store.dispatch({ type: "INCREMENT" });
  };

  return (
    <>
      <button onClick={handleIncrement}>increase</button>
      {store.getState()}
    </>
  );
};
  store.subscribe(
    ()=> {
      console.log(store.getState())
      ReactDOM.render(<App></App>,document.getElementById('root'))
    }
  )

ReactDOM.render(<App/>,document.getElementById('root'))
// const renderApp = () =>{ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );}

// renderApp()
// store.subscribe(renderApp)
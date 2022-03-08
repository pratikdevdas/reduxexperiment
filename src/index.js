// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import noteReducer from './reducer/noteReducer';
import filterReducer from './reducer/filterReducer';
import { configureStore } from '@reduxjs/toolkit';
                    
  const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter:filterReducer
  }
})

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> 
  ,
  document.getElementById('root')
);


// renderApp()
// store.subscribe(renderApp)
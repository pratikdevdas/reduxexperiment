// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import filterReducer from './reducer/filterReducer';
import { configureStore } from '@reduxjs/toolkit';
import noteService from './services/notes'                    
import noteReducer,{ setNotes } from './reducer/noteReducer';
  
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter:filterReducer
  }
})

noteService.getAll().then(notes => 
    store.dispatch(setNotes(notes))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> 
  ,
  document.getElementById('root')
);


// renderApp()
// store.subscribe(renderApp)
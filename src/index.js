// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore,combineReducers} from "redux";
import { Provider } from 'react-redux';
import noteReducer from './reducer/noteReducer';
import filterReducer from './reducer/filterReducer';
import { createNote } from './reducer/noteReducer';
import { filterChange } from './reducer/filterReducer';

const reducer = combineReducers({
  notes: noteReducer,
  filter:filterReducer
})
 const store = createStore(reducer);

 console.log(store.getState());
 store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> 
  ,
  document.getElementById('root')
);


// renderApp()
// store.subscribe(renderApp)
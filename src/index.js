import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore} from "redux";
import { Provider } from 'react-redux';
import noteReducer from './reducer/noteReducer';

 const store = createStore(noteReducer);

 
 store.dispatch({

  type:'NEW_NOTE',
  data:{
    content:'the app state is in redux',
    important:true,
    id:1
  }
}
  )
  
store.dispatch({

  type:'NEW_NOTE',
  data:{
    content:'state changes are made with actions',
    important:true,
    id:2
  }
}
  )


const renderApp = () =>{ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);}

renderApp()
store.subscribe(renderApp)
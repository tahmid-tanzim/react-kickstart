import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {createStore} from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            //TODO May be API Call is here
            return action.payload.newState;
            break;
        default:
            return 'STATE';
            break;
    }
};

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: 'CHANGE_STATE',
  payload: {
      newState: 'Hello World New State'
  }
};

store.dispatch(action);
console.log(store.getState());

/* Redux Tutorial End */

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();



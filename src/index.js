import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {createStore, combineReducers} from 'redux';

const productReducer = (state = [], action) => {
    return state;
};

const userReducer = (state = '', action) => {
    return state;
};

const all_reducers = combineReducers({
    products: productReducer,
    users: userReducer
});

const initial_state = {
    products: [
        {
            id: 1,
            name: 'iPhone X'
        },
        {
            id: 2,
            name: 'OnePlus 5'
        }
    ],
    users: 'Tahmid Tanzim'
};

const store = createStore(
    all_reducers,
    initial_state,
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

/* Redux Tutorial End */

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {createStore, combineReducers} from 'redux';

const product_reducer = (state = [], action) => {
    return state;
};

const user_reducer = (state = '', action) => {
    return state;
};

const all_reducers = combineReducers({
    products: product_reducer,
    users: user_reducer
});

const store = createStore(all_reducers);

console.log(store.getState());

/* Redux Tutorial End */

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import productReducer from './reducers/products';
import userReducer from './reducers/user';

const all_reducers = combineReducers({
    products: productReducer,
    user: userReducer
});

const all_store_enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

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
    user: 'Tahmid Tanzim'
};

const app_store = createStore(
    all_reducers,
    initial_state,
    all_store_enhancers
);

/* Redux Tutorial End */

ReactDOM.render(
    <Provider store={app_store}>
        <App title="App Component Test"/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();



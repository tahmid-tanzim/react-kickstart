import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productReducer from './reducers/products';
import userReducer from './reducers/user';

const all_reducers = combineReducers({
    products: productReducer,
    user: userReducer
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
    user: 'Tahmid Tanzim'
};

const app_store = createStore(
    all_reducers,
    initial_state,
    window.devToolsExtension && window.devToolsExtension()
);

/* Redux Tutorial End */

ReactDOM.render(
    <Provider store={app_store}>
        <App title="App Component Test"/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();



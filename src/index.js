import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const productReducer = (state = [], action) => {
    return state;
};

const userReducer = (state = '', {type, payload}) => {
    switch (type) {
        case 'UPDATE_USER':
            return payload;
            break;
    }
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

const app_store = createStore(
    all_reducers,
    initial_state,
    window.devToolsExtension && window.devToolsExtension()
);

/* Redux Tutorial End */

ReactDOM.render(
    <Provider store={app_store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();



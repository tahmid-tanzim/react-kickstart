import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Redux Tutorial Start */
import {createStore} from 'redux';

const reducer = () => {
    return 'STATE';
};

const store = createStore(reducer);

console.log(store.getState());

/* Redux Tutorial End */

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();



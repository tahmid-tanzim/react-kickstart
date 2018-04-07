import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import './styles/index.css';
import './styles/sass/stylesheets/styles.css';

import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

const app_store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store={app_store}>
        <Main/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

/**
 * Hot Module Replacement (HMR)
 * */

module.hot && module.hot.accept();


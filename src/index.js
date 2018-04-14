import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.css';
import './styles/sass/stylesheets/styles.css';

import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <Main/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

/**
 * Hot Module Replacement (HMR)
 * */

// module.hot && module.hot.accept();

// if (module.hot) {
//     let acceptCallback = () => {
//         const nextRootReducer = combineReducers(require('./redux/reducers/index'));
//         store.replaceReducer(nextRootReducer);
//     };
//
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./redux/reducers/index', acceptCallback);
//     module.hot.acceptCallback = acceptCallback;
// }

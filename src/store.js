import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {logger} from './middleware/logger';

// const rootReducer = () => [];
const initialState = {};
const middleware = [thunk, logger];

const enhancers = compose(
    applyMiddleware(...middleware),
    // window.devToolsExtension && window.devToolsExtension()
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducer,
    initialState,
    enhancers
);

export default store;
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

// const rootReducer = () => [];
const initialState = {};
const middleware = [thunk];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    rootReducer,
    initialState,
    enhancers);

export default store;
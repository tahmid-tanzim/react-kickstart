import { combineReducers } from 'redux';
import campaignReducer from './campaign';
import sidebarReducer from './sidebar';

export default combineReducers({campaignReducer, sidebarReducer});
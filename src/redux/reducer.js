import { combineReducers } from 'redux';
import { NavigationStateReducer } from '../modules/navigation/NavigationReducer';

const reducers = {
  NavigationStateReducer,
};

export default combineReducers(reducers);

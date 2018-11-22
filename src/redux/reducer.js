import { combineReducers } from 'redux';
import { NavigationStateReducer } from '../modules/navigation/NavigationReducer';

const reducers = {
  navigationState: NavigationStateReducer,
};

export default combineReducers(reducers);

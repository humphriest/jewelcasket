import { combineReducers } from 'redux';
import { NavigationStateReducer } from '../modules/navigation/NavigationReducer';
import { ProductStateReducer } from '../modules/products/ProductsReducer';

const reducers = {
  navigationState: NavigationStateReducer,
  productState: ProductStateReducer,
};

export default combineReducers(reducers);

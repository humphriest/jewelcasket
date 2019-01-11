import {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  createProductRequest,
} from './ProductsActions';
import { getProducts, createProduct } from '../../util/productsRequest';

export const getProductsThunk = () => {
  return dispatch => {
    dispatch(getProductsRequest());

    return getProducts()
      .then(res => {
        dispatch(getProductsSuccess(res.data));
      })
      .catch(err => {
        console.log('err');
        console.log(err);
        dispatch(getProductsFailure(err));
      });
  };
};

export const createProductThunk = product => dispatch => {
  dispatch(createProductRequest());
  return createProduct(product)
    .then(res => {
      console.log('create prod res');
      console.log(res);
    })
    .catch(err => {
      console.log('create prod error');
      console.log(err);
    });
};

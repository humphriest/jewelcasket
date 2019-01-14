import {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  createProductRequest,
  createCategories,
} from './ProductsActions';
import { getProducts, createProduct } from '../../util/productsRequest';
import { createAndReturnCategories } from '../../util/createCategories';

export const getProductsThunk = () => {
  return dispatch => {
    dispatch(getProductsRequest());

    return getProducts()
      .then(res => {
        const categories = createAndReturnCategories(res.data);

        dispatch(getProductsSuccess(res.data));
        dispatch(createCategories(categories));
      })
      .catch(err => {
        console.log('err');
        console.log(err);
        dispatch(getProductsFailure(err.message));
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

export const DISPLAY_PRODUCT_TYPE = '[product] DISPLAY_PRODUCT_TYPE';
export const TOGGLE_PRODUCT_MODAL = '[product] TOGGLE_PRODUCT_MODAL';

export const GET_PRODUCTS_REQUEST = '[product] GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = '[product] GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = '[product] GET_PRODUCTS_FAILURE';

export const CREATE_PRODUCT_REQUEST = '[product] CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = '[product] CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = '[product] CREATE_PRODUCT_FAILURE';

export function displayProductType(viewType) {
  return {
    type: DISPLAY_PRODUCT_TYPE,
    payload: {
      viewType,
    },
  };
}

export function toggleProductModal() {
  return {
    type: TOGGLE_PRODUCT_MODAL,
  };
}

export function getProductsRequest() {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
}

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  };
}

export function getProductsFailure(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  };
}

export function createProductRequest() {
  return {
    type: CREATE_PRODUCT_REQUEST,
  };
}

export function createProductSuccess() {
  return {
    type: CREATE_PRODUCT_SUCCESS,
  };
}

export function createProductFailure() {
  return {
    type: CREATE_PRODUCT_FAILURE,
  };
}

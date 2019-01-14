import * as actions from './ProductsActions';

const ProductState = () => ({
  viewType: 1,
  isProductModalVisible: false,
  products: undefined,
  error: undefined,
});

export const initialProductState = ProductState();

export function ProductStateReducer(state = initialProductState, action) {
  switch (action.type) {
    case actions.DISPLAY_PRODUCT_TYPE: {
      const { viewType } = action.payload;
      return {
        ...state,
        viewType,
      };
    }
    case actions.TOGGLE_PRODUCT_MODAL: {
      return {
        ...state,
        isProductModalVisible: !state.isProductModalVisible,
      };
    }
    case actions.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
      };
    }
    case actions.GET_PRODUCTS_SUCCESS: {
      const { products } = action.payload;

      return {
        ...state,
        products,
      };
    }
    case actions.CREATE_PRODUCT_REQUEST: {
      return {
        ...state,
      };
    }
    case actions.CREATE_PRODUCT_SUCCESS: {
      const { product } = action.payload;
      const { products } = state;

      return {
        ...state,
        products: products.push(product),
      };
    }
    case actions.CREATE_PRODUCT_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}

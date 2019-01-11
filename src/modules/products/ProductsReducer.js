import * as actions from './ProductsActions';

const ProductState = () => ({
  viewType: 1,
  isProductModalVisible: false,
  products: undefined,
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
    default:
      return state;
  }
}

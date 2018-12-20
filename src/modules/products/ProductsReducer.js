import * as actions from './ProductsActions';

const ProductState = () => ({
  viewType: 1,
  isProductModalVisible: false,
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
    default:
      return state;
  }
}

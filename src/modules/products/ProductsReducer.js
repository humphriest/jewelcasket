import { DISPLAY_PRODUCT_TYPE } from './ProductsActions';

const ProductState = () => ({
  viewType: 1,
});

export const initialProductState = ProductState();

export function ProductStateReducer(state = initialProductState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCT_TYPE: {
      const { viewType } = action.payload;
      return {
        ...state,
        viewType,
      };
    }
    default:
      return state;
  }
}

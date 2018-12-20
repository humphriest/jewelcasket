export const DISPLAY_PRODUCT_TYPE = '[product] DISPLAY_PRODUCT_TYPE';
export const TOGGLE_PRODUCT_MODAL = '[product] TOGGLE_PRODUCT_MODAL';

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

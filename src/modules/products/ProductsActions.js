export const DISPLAY_PRODUCT_TYPE = 'DISPLAY_PRODUCT_TYPE';

export function displayProductType(viewType) {
  return {
    type: DISPLAY_PRODUCT_TYPE,
    payload: {
        viewType,
    },
  };
}
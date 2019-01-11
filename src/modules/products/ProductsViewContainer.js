import { connect } from 'react-redux';
import ProductsView from './ProductsView';
import { toggleProductModal } from './ProductsActions';
import { getProductsThunk, createProductThunk } from './ProductThunks';

export default connect(
  state => ({
    state: state,
    viewType: state.productState.viewType,
    isProductModalVisible: state.productState.isProductModalVisible,
    isMobile: state.navigationState.isMobile,
    products: state.productState.products,
  }),
  dispatch => ({
    toggleProductModal: () => {
      dispatch(toggleProductModal());
    },
    getProducts: () => {
      dispatch(getProductsThunk());
    },
    createProduct: product => {
      dispatch(createProductThunk(product));
    },
  })
)(ProductsView);

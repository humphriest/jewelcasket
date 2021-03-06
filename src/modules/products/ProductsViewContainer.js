import { connect } from 'react-redux';
import ProductsView from './ProductsView';
import { toggleProductModal } from './ProductsActions';

export default connect(
  state => ({
    state: state,
    viewType: state.productState.viewType,
    isProductModalVisible: state.productState.isProductModalVisible,
    isMobile: state.navigationState.isMobile,
  }),
  dispatch => ({
    toggleProductModal: () => {
      dispatch(toggleProductModal());
    },
  })
)(ProductsView);

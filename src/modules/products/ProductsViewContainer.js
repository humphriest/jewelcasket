import { connect } from 'react-redux';
import ProductsView from './ProductsView';
import { displayProductType } from './ProductsActions';

export default connect(
  state => ({
    state: state,
    viewType: state.productState.viewType,
  }),
  dispatch => ({
    displayProductType: productType => {
      dispatch(displayProductType(productType));
    },
  })
)(ProductsView);

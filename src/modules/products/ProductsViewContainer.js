import { connect } from 'react-redux';
import ProductsView from './ProductsView';

export default connect(
  state => ({
    state: state,
    viewType: state.productState.viewType,
  }),
  dispatch => ({})
)(ProductsView);

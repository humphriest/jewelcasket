import { connect } from 'react-redux';
import ProductsView from './ProductsView';

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    // goToProducts: () => {
    //   dispatch(goToHomePage());
    // },
  })
)(ProductsView);

import { connect } from 'react-redux';
import ProductsView from './ProductsView';
import { goToHomePage } from '../navigation/NavigationActions';

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    goToProducts: () => {
      dispatch(goToHomePage());
    },
  })
)(ProductsView);

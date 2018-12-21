import { connect } from 'react-redux';
import HomepageView from './HomepageView';
import { setCurrentView } from '../navigation/NavigationActions';
import { displayProductType } from '../products/ProductsActions';

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    setCurrentView: nextView => {
      dispatch(setCurrentView(nextView));
    },
    displayProductType: productType => {
      dispatch(displayProductType(productType));
    },
  })
)(HomepageView);

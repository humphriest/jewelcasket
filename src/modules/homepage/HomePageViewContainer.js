import { connect } from 'react-redux';
import HomepageView from './HomepageView';
import { goToProducts } from '../navigation/NavigationActions';

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    goToProducts: () => {
      dispatch(goToProducts());
    },
  })
)(HomepageView);

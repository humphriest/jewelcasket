import { connect } from 'react-redux';
import HomepageView from './HomepageView';

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    // goToProducts: () => {
    //   dispatch(goToProducts());
    // },
  })
)(HomepageView);

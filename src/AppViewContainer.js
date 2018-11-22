import { connect } from 'react-redux';
import AppView from './AppView';

export default connect(
  state => ({
    state: state,
    currentView: state.navigationState.currentView,
  }),
  dispatch => ({
    // goToProducts: () => {
    //   dispatch(goToProducts());
    // },
  })
)(AppView);

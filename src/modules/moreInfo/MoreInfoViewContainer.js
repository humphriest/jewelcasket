import { connect } from 'react-redux';
import MoreInfoView from './MoreInfoView';

export default connect(
  state => ({
    state: state,
    currentView: state.navigationState.currentView,
  }),
  dispatch => ({
    // goToProducts: () => {
    //   dispatch(setCurrentView());
    // },
  })
)(MoreInfoView);

import { connect } from 'react-redux';
import ContactUsView from './ContactUsView';
// import { setCurrentView } from './modules/navigation/NavigationActions';

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
)(ContactUsView);

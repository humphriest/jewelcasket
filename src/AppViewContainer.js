import { connect } from 'react-redux';
import AppView from './AppView';
import { setCurrentView } from './modules/navigation/NavigationActions';

export default connect(
  state => ({
    state: state,
    currentView: state.navigationState.currentView,
  }),
  dispatch => ({
    setCurrentView: nextView => {
      console.log(nextView);
      dispatch(setCurrentView(nextView));
    },
  })
)(AppView);

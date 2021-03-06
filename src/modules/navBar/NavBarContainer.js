import { connect } from 'react-redux';

import NavBar from './NavBar';
import { setCurrentView } from '../navigation/NavigationActions';

export default connect(
  state => ({
    state: state,
    // currentView: state.navigationState.currentView,
  }),
  dispatch => ({
    setCurrentView: nextView => {
      dispatch(setCurrentView(nextView));
    },
  })
)(NavBar);

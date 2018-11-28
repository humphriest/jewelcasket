import { connect } from 'react-redux';
import HomepageView from './HomepageView';
import { setCurrentView } from '../navigation/NavigationActions';

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    setCurrentView: nextView => {
      dispatch(setCurrentView(nextView));
    },
  })
)(HomepageView);

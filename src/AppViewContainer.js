import { connect } from 'react-redux';
import AppView from './AppView';

export default connect((state, props) => ({
  initialRoute: props.initialRoute,
  initialRouteParams: props.initialRouteParams,
}))(AppView);

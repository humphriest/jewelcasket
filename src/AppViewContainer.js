import { connect } from 'react-redux';
import AppView from './AppView';
import { setCurrentView, setIsMobile } from './modules/navigation/NavigationActions';
import { displayProductType } from './modules/products/ProductsActions';

export default connect(
  state => ({
    state: state,
    currentView: state.navigationState.currentView,
  }),
  dispatch => ({
    setCurrentView: nextView => {
      dispatch(setCurrentView(nextView));
    },
    displayProductType: productType => {
      dispatch(displayProductType(productType));
    },
    setIsMobile: isMobile => {
      dispatch(setIsMobile(isMobile));
    },
  })
)(AppView);

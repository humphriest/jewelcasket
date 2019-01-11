import { connect } from 'react-redux';
import AppView from './AppView';
import { setCurrentView, setIsMobile } from './modules/navigation/NavigationActions';
import { displayProductType } from './modules/products/ProductsActions';
import { getProductsThunk } from './modules/products/ProductThunks';

export default connect(
  state => ({
    state: state,
    currentView: state.navigationState.currentView,
    products: state.productState.products,
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
    getProducts: () => {
      dispatch(getProductsThunk());
    },
  })
)(AppView);

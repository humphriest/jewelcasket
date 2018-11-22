import { GO_TO_HOMEPAGE, GO_TO_PRODUCTS } from './NavigationActions';

const NavigationState = () => ({
  currentView: 'homepage',
});

export const initialNavigationState = NavigationState();

export function NavigationStateReducer(state = initialNavigationState, action) {
  switch (action.type) {
    case GO_TO_HOMEPAGE: {
      return {
        ...state,
        currentView: 'homepage',
      };
    }
    case GO_TO_PRODUCTS: {
      return {
        ...state,
        currentView: 'products',
      };
    }
    default:
      return state;
  }
}

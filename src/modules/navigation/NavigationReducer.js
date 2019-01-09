import { SET_CURRENT_VIEW, SET_IS_MOBILE } from './NavigationActions';

const NavigationState = () => ({
  currentView: 'homepage',
  isMobile: false,
});

export const initialNavigationState = NavigationState();

export function NavigationStateReducer(state = initialNavigationState, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW: {
      const { nextView } = action.payload;
      window.scrollTo(0, 0);

      return {
        ...state,
        currentView: nextView,
      };
    }
    case SET_IS_MOBILE: {
      const { isMobile } = action.payload;

      return {
        ...state,
        isMobile,
      };
    }
    default:
      return state;
  }
}

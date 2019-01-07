import { SET_CURRENT_VIEW } from './NavigationActions';

const NavigationState = () => ({
  currentView: 'homepage',
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
    default:
      return state;
  }
}

import { GO_TO_HOMEPAGE } from './NavigationActions';

const NavigationState = () => ({
  currentView: 'homepage',
});

export const initialNavigationState = NavigationState();

export function NavigationStateReducer(state = initialNavigationState, action) {
  switch (action.type) {
    case GO_TO_HOMEPAGE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

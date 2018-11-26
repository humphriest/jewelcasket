import { SET_CURRENT_VIEW } from './NavigationActions';

const NavigationState = () => ({
  currentView: 'homepage',
});

export const initialNavigationState = NavigationState();

export function NavigationStateReducer(state = initialNavigationState, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW: {
      const { nextVeiw } = action.payload;
      return {
        ...state,
        currentView: nextVeiw,
      };
    }
    default:
      return state;
  }
}

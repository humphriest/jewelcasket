export const SET_CURRENT_VIEW = '[navigation] SET_CURRENT_VIEW';

export function setCurrentView(nextView) {
  return {
    type: SET_CURRENT_VIEW,
    payload: {
      nextView,
    },
  };
}

export const SET_CURRENT_VIEW = '[navigation] SET_CURRENT_VIEW';

export const setCurrentView = nextVeiw => ({
  type: SET_CURRENT_VIEW,
  payload: {
    nextVeiw,
  },
});

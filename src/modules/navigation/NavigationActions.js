export const SET_CURRENT_VIEW = '[navigation] SET_CURRENT_VIEW';
export const SET_IS_MOBILE = '[navigation] SET_IS_MOBILE';

export function setCurrentView(nextView) {
  return {
    type: SET_CURRENT_VIEW,
    payload: {
      nextView,
    },
  };
}

export function setIsMobile(isMobile) {
  return {
    type: SET_IS_MOBILE,
    payload: {
      isMobile,
    },
  };
}

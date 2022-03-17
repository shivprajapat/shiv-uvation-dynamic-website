import actionTypes from './types';

export const landingPageDataStart = () => ({
  type: actionTypes.LANDING_PAGE_DATA_START,
});

export const landingPageDataSuccess = (data) => ({
  type: actionTypes.LANDING_PAGE_DATA_SUCCEEDED,
  payload: data,
});

export const landingPageDataError = () => ({
  type: actionTypes.LANDING_PAGE_DATA_FAILED,
});


export const historyPageDataStart = () => ({
  type: actionTypes.HISTORY_PAGE_DATA_START,
});

export const historyPageDataSuccess = (data) => ({
  type: actionTypes.HISTORY_DATA_SUCCEEDED,
  payload: data,
});

export const historyPageDataError = () => ({
  type: actionTypes.HISTORY_DATA_FAILED,
});

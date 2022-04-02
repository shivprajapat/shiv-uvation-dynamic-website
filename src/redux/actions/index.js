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
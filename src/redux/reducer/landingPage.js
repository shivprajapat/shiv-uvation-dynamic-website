import UserActionTypes from '../action/types';

const initialAddCreditCard = {
  addCreditCard: {
    isLoading: false,
  },
};

const initialState = {
  ...initialAddCreditCard,
  error: false,
  landingData: { landingPage: true },
};

const landingPageReducer = (state = initialState, action) => {
  console.log(state, 'action');
  switch (action.type) {
    case UserActionTypes.LANDING_PAGE_DATA_START:
      return {
        ...state,
        error: false,
      };

    case UserActionTypes.LANDING_PAGE_DATA_SUCCEEDED:
      return {
        ...state,
        landingData: { ...action.payload, landingPage: false }
      }
    case UserActionTypes.LANDING_PAGE_DATA_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default landingPageReducer;

import UserActionTypes from '../action/types';

const initialAddCreditCard = {
  addCreditCard: {
    isLoading: false,
  },
};

const initialState = {
  ...initialAddCreditCard,
  url: '',
  error: false,
  landingData: { landingPage: true },
};

const landingPageReducer = (state = initialState, action) => {
  console.log(state, 'action');
  switch (action.type) {
    case UserActionTypes.LANDING_PAGE_DATA_START:
      return {
        ...state,
        url: '',
        error: false,
      };
    default:
      return state;
  }
};
export default landingPageReducer;

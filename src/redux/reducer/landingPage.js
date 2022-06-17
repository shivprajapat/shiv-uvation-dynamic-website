import actionTypes from '../actions/types';

const initialState = {

  error: false,
  islandingPage: true,
  landingData: [],
};

const landingPageReducer = (state = initialState, action) => {
  // console.log(state, 'action');
  switch (action.type) {
    case actionTypes.LANDING_PAGE_DATA_START:
      return {...state,error: false,};

    case actionTypes.LANDING_PAGE_DATA_SUCCEEDED:
      return {
        ...state,
        landingData: action.payload,
         islandingPage: false 
      }
    case actionTypes.LANDING_PAGE_DATA_FAILED:
      return { ...state, error: true,islandingPage: false, };
    default:
      return state;
  }
};
export default landingPageReducer;

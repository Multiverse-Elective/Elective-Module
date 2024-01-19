import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userPreferences: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_PREFERENCES:
      return {
        ...state,
        userPreferences: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
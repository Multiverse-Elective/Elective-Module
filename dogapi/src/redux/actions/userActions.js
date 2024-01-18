// src/redux/actions/userActions.js
import * as actionTypes from './actionTypes';

export const setUserPreferences = (preferences) => ({
  type: actionTypes.SET_USER_PREFERENCES,
  payload: preferences,
});

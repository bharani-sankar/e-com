// userActions.js
import { UPDATE_USER_ADDRESS } from './userActionTypes';

export const updateUserAddress = (newAddress) => {
  return {
    type: UPDATE_USER_ADDRESS,
    payload: newAddress,
  };
};

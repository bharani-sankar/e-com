// userReducer.js
import { UPDATE_USER_ADDRESS } from './userActionTypes';

const initialState = {
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
     }
};

export default userReducer;

/* eslint-disable default-param-last */
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAIL, LIST_RESET } from '../types/users';

export const usersReducer = (state = { USERLIST: [] }, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        loading: true,
        USERLIST: [],
      };

    case LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        USERLIST: action.payload,
      };

    case LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
        USERLIST: [],
      };

    case LIST_RESET:
      return {
        USERLIST: [],
      };

    default:
      return state;
  }
};

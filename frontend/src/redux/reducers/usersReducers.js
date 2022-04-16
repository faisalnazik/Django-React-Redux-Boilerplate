/* eslint-disable default-param-last */
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAIL, LIST_RESET } from '../types/users';

export const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return {
        loading: true,
        users: [],
      };

    case LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        users: action.payload,
      };

    case LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case LIST_RESET:
      return {
        users: [],
      };

    default:
      return state;
  }
};

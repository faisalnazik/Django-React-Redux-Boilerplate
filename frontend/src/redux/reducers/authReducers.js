/* eslint-disable default-param-last */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from '../types/auth';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };

    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};

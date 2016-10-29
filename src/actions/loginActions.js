import * as types from './actionTypes';
import { authenticate } from '../api/mockApi';

export function login_Success(user) {
  return { 
    type: types.LOGIN_SUCCESS, 
    user
   };
}

export function login_Fail(user) {
  return { 
    type: types.LOGIN_FAIL
   };
}

export function login({ email, password }) {
  return function (dispatch) {
    return authenticate(email, password).then(user => {
      dispatch(login_Success(user));
    });
  };
}
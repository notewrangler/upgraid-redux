import {url} from 'helpers/network';
import $ from 'jquery';

export function setCurrentUserName(username) {
  return {
    type: 'SET_CURRENT_USERNAME',
    payload: {username: username}
  };
}

export function setCurrentPassword(password) {
  return {
    type: 'SET_CURRENT_PASSWORD',
    payload: {password: password}
  };
}

function loginUserInitiated() {
  return {
    type: 'LOGIN_USER_INITIATED'
  };
}

function loginUserSucceeded(token) {
  return {
    type: 'LOGIN_USER_SUCCEEDED',
    payload: {token: token}
  };
}

function loginUserFailed(response) {
  return {
    type: 'LOGIN_USER_FAILED',
    payload: {response: response}
  };
}

export function loginUser(username, password) {
  return (dispatch) => {
    dispatch(loginUserInitiated());
    $.ajax({
			url:'https://safe-brook-9891.herokuapp.com/api/api-token-auth/',
			method:'post',
			data: {username: username, password:password}
		}).then(function(response){
      if (response.token) {
        dispatch(loginUserSucceeded(response.token));
      } else {
        dispatch(loginUserFailed(response));
      }
    });
  };
}

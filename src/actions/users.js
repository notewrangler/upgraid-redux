import {url} from 'helpers/network';

nction loginUserInitiated(username, password) {
  return {
    type: 'LOGIN_USER_INITIATED',
    payload: {username: username, password: password}
  };
}

function loginUserSucceeded(json) {
  return {
    type: 'LOGIN_USER_SUCCEEDED',
    payload: {json: json}
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
    dispatch(createUserInitiated(username, password));
    fetch(url('api-token-auth'), {
      method: 'post',
      body: JSON.stringify({username: username, password: password})
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(createUserSucceeded(json));
        });
      } else {
        dispatch(createUserFailed(response));
      }
    });
  };
}

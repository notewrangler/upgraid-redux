import {url} from 'helpers/network';
import history from 'helpers/history';
import Routes from '../Routes';



function getProfileInitiated() {
  return {
    type: 'GET_PROFILE_INITIATED'
  };
}

function getProfileSucceeded(json) {
  return {
    type: 'GET_PROFILE_SUCCEEDED',
    payload: {json: json}
  };
}

function getProfileFailed(response) {
  return {
    type: 'GET_PROFILE_FAILED',
    payload: {response: response}
  };
}

export function getProfile(username, token) {
  return (dispatch) => {
    dispatch(getProfileInitiated());
		fetch(url('profile/?username=' + username),{
      headers: 'Authorization': 'Token ' + token
    })
      .then(function(response){
      if (response.ok) {
        response.json().then((json) => {
          dispatch(getProfileSucceeded(json));
        });
      } else {
        dispatch(getProfileFailed(response));
      }
    });
  };
}

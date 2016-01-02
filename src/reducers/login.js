export function currentToken(state='', {type, payload}) {
  switch (type) {
  case 'LOGIN_USER_SUCCEEDED':
    return payload.token;
  default:
    return state;
  }
}

export function currentUserName(state='', {type, payload}) {
  switch (type) {
  case 'SET_CURRENT_USERNAME':
    return payload.username;
  default:
    return state;
  }
}

export function currentPassword(state='', {type, payload}) {
  switch (type) {
  case 'SET_CURRENT_PASSWORD':
    return payload.password;
  default:
    return state;
  }
}

import { combineReducers } from 'redux';
import * as login from 'reducers/login';
import * as ui from 'reducers/ui';

export const rootReducer = combineReducers({
  ui: combineReducers({...ui}),
  login: combineReducers({...login})
});

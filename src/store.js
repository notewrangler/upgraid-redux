import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from 'reducers';

let loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

let customCreateStore = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

let store = customCreateStore(rootReducer);

if (module.hot) {
  module.hot.accept('reducers', () => {
    store.replaceReducer(require('reducers').rootReducer);
  });
}

export {store};

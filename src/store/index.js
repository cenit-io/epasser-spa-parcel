import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import { createInjectorsEnhancer } from 'redux-injectors';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from '../reducers';

const configureStore = (initialState = {}, history) => {
  let composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;

  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-underscore-dangle */
    if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    /* eslint-enable */
  }

  const enhancers = [
    applyMiddleware(sagaMiddleware),
    createInjectorsEnhancer({ createReducer, runSaga }),
  ];

  const asyncReducers = { router: connectRouter(history) };
  const store = createStore(
    createReducer(asyncReducers),
    fromJS(initialState),
    composeEnhancers(...enhancers),
  );

  store.asyncReducers = asyncReducers;

  return store;
};

export default configureStore;

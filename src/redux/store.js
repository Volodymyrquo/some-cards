import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import cardTypesReducer from './cardTypes-reducer';

let rootReducer = combineReducers({
  auth: authReducer,
  cardTypes: cardTypesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

window._store_ = store;

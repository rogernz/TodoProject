import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { cardGameReducer } from './cardGame';

export default combineReducers({
  router: routerReducer,
});

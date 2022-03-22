import {combineReducers} from 'redux';
import userReducer from './userReducer';
import basketReducer from './basketReducer';

export default combineReducers({
  user: userReducer,
  cart: basketReducer,
});

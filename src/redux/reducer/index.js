import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    routing: routerReducer,
  });
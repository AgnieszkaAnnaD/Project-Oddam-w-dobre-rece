import { combineReducers } from 'redux';
import todos from './todos';
import authReducer from './authReducer';
import { firestorReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


export default combineReducers({
    todos,
    auth: authReducer,
    firebase: firebaseReducer,
    routing: routerReducer,
  });
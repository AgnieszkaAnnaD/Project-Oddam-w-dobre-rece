import { combineReducers } from 'redux';
import todos from './todos';
import authReducer from './authReducer';
import { firestorReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    todos,
    auth: authReducer,
    firebase: firebaseReducer
  });
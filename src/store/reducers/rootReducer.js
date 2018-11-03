import authReducer from './authReducer';
import projectReducer from './projectReducer';

//Redux
import {combineReducers} from 'redux';

//Firebase
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})

export default rootReducer;
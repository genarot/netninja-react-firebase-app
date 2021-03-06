//Redux
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

//Firebase
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbConfig         from '../config/fbConfig'

//Default redux
// retorna dispatch  & getState
// const middleWare = [thunk];

//agregar parametros extras al middleware, 
const middleWare = [thunk.withExtraArgument({getFirebase, getFirestore})];

const initialState = {};
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(rootReducer, initialState, 
        composeEnhancers(
                applyMiddleware(...middleWare),
                reactReduxFirebase(fbConfig,{useFirestoreForProfile: true, userProfile: 'users',attachAuthIsReady : true}),
                reduxFirestore(fbConfig)
        )
)

export default store;
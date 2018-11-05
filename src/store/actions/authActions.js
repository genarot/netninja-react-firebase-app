import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, CLEAR_AUTH_ERROR } from "./types";

export const signIn = ( credentials ) =>  async (dispatch, getState,{getFirebase}) =>{
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    )
    .then( () => {
        dispatch({type: LOGIN_SUCCESS})
    } )
    .catch((err) => {
        dispatch({type: LOGIN_ERROR, err})
    })
}

export const signOut = ( ) => (dispatch, getState, {getFirebase}) =>{
    const firebase = getFirebase();

    firebase.auth().signOut()
    .then( () => {
        dispatch({
            type:SIGNOUT_SUCCESS
        })
    })
}

export const clearAuthErrror = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_ERROR
    })
}
export const signUp = (newUser) => async (dispatch, getState, {getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore= getFirestore();

    await firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
    )
    .then((resp) => {
        return  firestore.collection('users').doc(resp.user.uid).set({
            firstName: newUser.firstName,
            lastName:   newUser.lastName,
            initials:   newUser.firstName[0] + newUser.lastName[0]
        })
    })
    .then(() => {
        dispatch({
            type: SIGNUP_SUCCESS
        })
    })
    .catch((err) => {
      dispatch({
          type: SIGNUP_ERROR,
          err
      })  
    });
}
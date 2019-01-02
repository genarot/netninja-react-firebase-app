import {GET_PROJECTS, CREATE_PROJECT, CREATE_PROJECT_ERROR, CLEAR_CURRENT_PROJECT} from './types'

export const getAllProjects = ( ) => async dispatch => {
    
    dispatch({
        type: GET_PROJECTS
    })
}

export const createProject = (project) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(getState());
    
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
    }).then((result) => {
        console.log(result);
        
        dispatch({
            type: CREATE_PROJECT,
            payload: project
        })
    }).catch((err) => {
        
        dispatch({
            type: CREATE_PROJECT_ERROR,
            err
        })
    });
    
}

export const updateProject = (project) => async (dispatch) => {

    dispatch({
        
    })
}

export const clearCurrentProject = () => (dispatch) => {
    dispatch({type: CLEAR_CURRENT_PROJECT})
}
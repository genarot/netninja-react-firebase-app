import {GET_PROJECTS, CREATE_PROJECT, CREATE_PROJECT_ERROR} from './types'

export const getAllProjects = ( ) => async dispatch => {
    const response = await fetch('asa');

    response.json()
    dispatch({
        type: GET_PROJECTS
    })
}

export const createProject = (project) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
        // ...project,
        // authorFirstName: 'Genaro',
        // authorLastName: 'Tinoco',
        // authorId: 12345,
        // createdAt: new Date()
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
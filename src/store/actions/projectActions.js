import {GET_PROJECTS, CREATE_PROJECT} from './types'

export const getAllProjects = ( ) => async dispatch => {
    const response = await fetch('asa');

    response.json()
    dispatch({
        type: GET_PROJECTS
    })
}

export const createProject = (project) => async (dispatch, getState) => {
    
    dispatch({
        type: CREATE_PROJECT,
        payload: project
    })
}

export const updateProject = (project) => async (dispatch) => {

    dispatch({
        
    })
}
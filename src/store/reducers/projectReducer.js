import { GET_PROJECTS, CREATE_PROJECT, CREATE_PROJECT_ERROR, CLEAR_CURRENT_PROJECT } from "../actions/types";

const initState = {
    project: {},
    projects: [],
    error: null
};
const getProjects = (state, action ) => ({
    ...state,
    projects: action.payload
});

const createProject = (state, action ) => ({
    ...state,
    project: action.payload,
    projects: [...state.projects, action.payload]
})

const createProjectError = (state, {err: {code, name, message}} ) => ({
    ...state, 
    error: {code, name, message}
})

const clearCurrentProject = ( state ) => ({
    ...state,
    project: null
})

const projectReducer = (state =initState, action) => {
    switch( action.type ) {
        case GET_PROJECTS:      return getProjects( state, action );
        case CREATE_PROJECT:    return createProject( state, action );
        case CREATE_PROJECT_ERROR: return createProjectError( state, action );
        case CLEAR_CURRENT_PROJECT: return clearCurrentProject(state);
        default:    return state;
    }
}

export default projectReducer;
import { GET_PROJECTS, CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/types";

const initState = {
    projects: []
};

const projectReducer = (state =initState, action) => {
    switch( action.type ) {
        case GET_PROJECTS:
            return{
                ...state,
                projects: action.payload
            }
        case CREATE_PROJECT:
            return{
                ...state,
                project: action.payload,
                projects: [...state.projects, action.payload]
            }
        case CREATE_PROJECT_ERROR:
        const {code, name, message} = action.err;
            return {
                ...state,
                error: {code, name, message}
            }
        default:
            return state;
    }
}

export default projectReducer;
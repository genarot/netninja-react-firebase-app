import { GET_PROJECTS, CREATE_PROJECT } from "../actions/types";

const initState = {
    projects: [
        {id: 1, title:'Proyecto Title 1', content: 'perroasda a sda dsd a'},
        {id: 2, title:'Proyecto 2', content: 'perroasda a sda dsd a'},
        {id: 3, title:'Proyecto 3', content: 'perroasda a sda dsd a'}
    ]
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
                projects: [...state.projects, action.payload]
            }
        default:
            return state;
    }
    return state;
}

export default projectReducer;
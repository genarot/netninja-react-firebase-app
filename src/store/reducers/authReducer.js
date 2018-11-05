import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, CLEAR_AUTH_ERROR } from "../actions/types";

const initState = {};

const authReducer = (state = initState, action) => {
    switch( action.type ) {
        case LOGIN_ERROR:
            console.log('login error', action.err);
            return {
                ...state,
                authError: action.err.message
            }
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                authError: null
            }
        case LOGIN_SUCCESS:
            console.log('Login success');
            return {
                ...state, 
                authError: null
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                authError: null
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;
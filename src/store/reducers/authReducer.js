import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, CLEAR_AUTH_ERROR } from "../actions/types";

const initState = {};
const loginError = ( state, action) => ({
    ...state,
    authError: 'Login failed'
})
const loginSuccess = ( state, action ) => ({
    ...state, 
    authError: null
})
const signUpError = ( state, action ) => ({
    ...state,
    authError: action.err.message
})
const authReducer = (state = initState, action) => {
    switch( action.type ) {
        case LOGIN_ERROR:   return loginError( state, action );
        case LOGIN_SUCCESS: return loginSuccess( state, action );
        case SIGNUP_SUCCESS: return loginSuccess( state, action );
        case SIGNUP_ERROR:   return signUpError( state, action );
        default:    return state;
    }
}

export default authReducer;
const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Logowanie nie powiodło się')
            return {
                ...state, 
                authError: 'Logowanie nie powiodło się'
            }
        case 'LOGIN_SUCCESS':
            console.log('logowanie powiodło się');
            return {
                ...state, 
                authError: null
            }
        case 'SIGNOUT_SUCCESS': 
            console.log("Wylogowano");
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('rejestracja powiodła się');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('rejestracja nie powiodła się');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    } 
}
export default authReducer
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
        default:
            return state;
    } 
}
export default authReducer
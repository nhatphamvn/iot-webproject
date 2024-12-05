export const HANDLE_LOGIN_SUCCESS = 'handle_login_success'

export const doLogin = payload =>{
    return{
        type: HANDLE_LOGIN_SUCCESS,
        payload
    }
}


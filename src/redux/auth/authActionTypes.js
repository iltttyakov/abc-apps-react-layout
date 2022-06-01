const authActionTypes = {
    login: {
        start: 'AUTH_LOGIN_START_ACTION',
        success: 'AUTH_LOGIN_SUCCESS_ACTION',
        error: 'AUTH_LOGIN_ERROR_ACTION',
        finish: 'AUTH_LOGIN_FINISH_ACTION'
    },
    logout: {
        finish: 'AUTH_LOGOUT_ACTION'
    },
    get: {
        start: 'AUTH_GET_START_ACTION',
        success: 'AUTH_GET_SUCCESS_ACTION',
        error: 'AUTH_GET_ERROR_ACTION',
        finish: 'AUTH_GET_FINISH_ACTION'
    },
}
export default authActionTypes
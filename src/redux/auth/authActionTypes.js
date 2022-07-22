const authActionTypes = {
    login: {
        start: 'AUTH_LOGIN_START_ACTION',
        success: 'AUTH_LOGIN_SUCCESS_ACTION',
        finish: 'AUTH_LOGIN_FINISH_ACTION'
    },

    logout: {
        finish: 'AUTH_LOGOUT_ACTION'
    },

    get: {
        start: 'AUTH_GET_START_ACTION',
        success: 'AUTH_GET_SUCCESS_ACTION',
        finish: 'AUTH_GET_FINISH_ACTION'
    },

    editPassword: {
        start: 'AUTH_EDIT_PASSWORD_START_ACTION',
        success: 'AUTH_EDIT_PASSWORD_SUCCESS_ACTION',
        finish: 'AUTH_EDIT_PASSWORD_FINISH_ACTION'
    },

    editTheme: {
        toggle: 'AUTH_THEME_TOGGLE_ACTION'
    },

    shrinkSidebar: 'AUTH_SHRINK_SIDEBAR_ACTION',

    getCountries: {
        start: 'AUTH_GET_COUNTRIES_START_ACTION',
        success: 'AUTH_GET_COUNTRIES_SUCCESS_ACTION',
        finish: 'AUTH_GET_COUNTRIES_FINISH_ACTION'
    },
}
export default authActionTypes
import authActionTypes from "./authActionTypes";


const initialState = {
    id: null,
    login: null,
    rights: [],
    theme: 'night',
    loginInProgress: false,
    getInProgress: false,

    passwordEditInProcess: false,

    sidebarShrink: false,
}


export default function authReducer(state = initialState, action) {
    switch (action.type) {

        /** LOGIN **/
        case authActionTypes.login.start:
            return {...state, login_in_progress: true}
        case authActionTypes.login.success:
            return {...state, ...action.payload.res}
        case authActionTypes.login.finish:
            return {...state, login_in_progress: false}
        /** END LOGIN **/


        /** LOGOUT **/
        case authActionTypes.logout.finish:
            return initialState
        /** END LOGOUT **/


        /** GET **/
        case authActionTypes.get.start:
            return {
                ...state,
                getInProgress: true
            }
        case authActionTypes.get.success:
            return {
                ...state,
                ...action.payload.res
            }
        case authActionTypes.get.finish:
            return {
                ...state,
                getInProgress: false
            }
        /** END GET **/


        /** EDIT THEME **/
        case authActionTypes.editTheme.toggle:
            return {...state, theme: state.theme === 'night' ? 'day' : 'night'}
        /** END EDIT THEME **/


        /** SHRINK SIDEBAR **/
        case authActionTypes.shrinkSidebar:
            return {...state, sidebarShrink: !state.sidebarShrink}
        /** END SHRINK SIDEBAR **/


        /** EDIT PASSWORD **/
        case authActionTypes.editPassword.start:
            return {...state, passwordEditInProcess: true}
        case authActionTypes.editPassword.success:
            return {...state}
        case authActionTypes.editPassword.finish:
            return {...state, passwordEditInProcess: false}
        /** END EDIT PASSWORD **/


        default:
            return state

    }
}
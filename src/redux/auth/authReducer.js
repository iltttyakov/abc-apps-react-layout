import authActionTypes, {
    AUTH_GET_SUCCESS_ACTION,
    AUTH_LOGIN_ERROR_ACTION,
    AUTH_LOGIN_FINISH_ACTION,
    AUTH_LOGIN_START_ACTION,
    AUTH_LOGIN_SUCCESS_ACTION, AUTH_LOGOUT_ACTION
} from "./authActionTypes";
import authActions from "./authActions";


const initialState = {
    id: null,
    login: null,
    rights: [],
    theme: 'night',
    loginInProgress: false,
    getInProgress: false,
}


export default function authReducer(state = initialState, action) {
    switch (action.type) {

        /** LOGIN **/
        case authActionTypes.login.start:
            return {...state, login_in_progress: true}

        case authActionTypes.login.success:
            return {...state, ...action.payload.res}

        case authActionTypes.login.error:
            return {...state}

        case authActionTypes.login.finish:
            return {...state, login_in_progress: false}
        /** END LOGIN **/


        /** LOGOUT **/
        case authActionTypes.logout.finish:
            return initialState
        /** END LOGOUT **/


        /** GET **/
        case authActionTypes.get.success:
            return {...state, ...action.payload.res}
        /** END GET **/


        default:
            return state

    }
}
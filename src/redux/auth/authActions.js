import createAction from "../createAction";
import Cookies from "universal-cookie";
import api from "../../api/api";
import {dispatch} from "../store";
import authActionTypes from "./authActionTypes";

const login = ({auth_login, auth_password}) => {
    return dispatch => {
        dispatch(createAction(authActionTypes.login.start))
        api.auth.get({auth_login, auth_password})
            .then(response => {
                // устанавливаем токен в cookies
                const cookies = new Cookies()
                cookies.set('auth_token', response.res.auth_token)
                dispatch(createAction(authActionTypes.login.success, response))
            })
            .catch(response => {
                dispatch(createAction(authActionTypes.login.error, response))
            })
            .finally(() => {
                dispatch(createAction(authActionTypes.login.finish))
            })
    }
}

const logout = () => {
    return dispatch => {
        const cookies = new Cookies()
        cookies.remove('auth_token')
        dispatch(createAction(authActionTypes.logout.finish))
    }
}

const isAuthorized = () => {
    const cookies = new Cookies()
    return !!cookies.get('auth_token')
}

const get = () => {
    return dispatch => {
        dispatch(createAction(authActionTypes.get.start))
        api.auth.get()
            .then(response => {
                dispatch(createAction(authActionTypes.get.success, response))
            })
            .catch(response => {
                dispatch(createAction(authActionTypes.get.error, response))
            })
            .finally(() => {
                dispatch(createAction(authActionTypes.get.finish))
            })
    }
}

export default {
    login: data => dispatch(login(data)),
    logout: () => dispatch(logout()),
    isAuthorized: () => isAuthorized(),
    get: () => dispatch(get())
}
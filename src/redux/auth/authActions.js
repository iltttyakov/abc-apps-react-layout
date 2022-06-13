import createAction from "../createAction";
import Cookies from "universal-cookie";
import api from "../../api/api";
import {dispatch} from "../store";
import authActionTypes from "./authActionTypes";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";

const login = ({auth_login, auth_password}) => {
    return dispatch => {
        dispatch(createAction(authActionTypes.login.start))
        api.auth.get({auth_login, auth_password})
            .then(response => {
                const cookies = new Cookies()
                cookies.set('auth_token', response.res.auth_token)
                dispatch(createAction(authActionTypes.login.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
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
        window.location.href = '/'
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
                errorToasty(response.msg)
            })
            .finally(() => {
                dispatch(createAction(authActionTypes.get.finish))
            })
    }
}

const editTheme = theme => {
    return dispatch => {
        dispatch(createAction(authActionTypes.editTheme.toggle))
        api.auth.editTheme(theme)
            .then(response => console.log(response))
            .catch(response => console.log(response))
    }
}

const editPassword = (old_password, new_password) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(authActionTypes.editPassword.start))
        api.auth.editPassword(old_password, new_password)
            .then(response => {
                toast.success('Данные обновлены')
                dispatch(createAction(authActionTypes.editPassword.success, response))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(authActionTypes.editPassword.finish))
            })
    }
}

const shrinkSidebar = () => dispatch(createAction(authActionTypes.shrinkSidebar))


export default {
    login: data => dispatch(login(data)),
    logout: () => dispatch(logout()),
    isAuthorized: () => isAuthorized(),
    get: () => dispatch(get()),
    editTheme: theme => dispatch(editTheme(theme)),
    editPassword: (old_password, new_password) => dispatch(editPassword(old_password, new_password)),
    shrinkSidebar,
}

import createAction from "../createAction";
import userActionTypes from "./userActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(userActionTypes.modal.open))
const modalClose = () => dispatch(createAction(userActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(userActionTypes.table.start))
        api.user.table(body)
            .then(response => {
                dispatch(createAction(userActionTypes.table.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(userActionTypes.table.finish))
            })
    }
}

const get = (id) => {
    return dispatch => {
        dispatch(createAction(userActionTypes.get.start))
        api.user.get(id)
            .then(response => {
                dispatch(createAction(userActionTypes.get.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(userActionTypes.get.finish))
            })
    }
}

const edit = body => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(userActionTypes.edit.start, body))
        api.user.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(userActionTypes.edit.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(userActionTypes.edit.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(userActionTypes.del.start))
        api.user.del(id)
            .then(response => {
                toast.success('Пользователь удален')
                dispatch(createAction(userActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(userActionTypes.del.finish))
            })
    }
}


export default {
    table: body => dispatch(table(body)),
    modalOpen, modalClose,
    get: id => dispatch(get(id)),
    edit: body => dispatch(edit(body)),
    del: id => dispatch(del(id)),
}
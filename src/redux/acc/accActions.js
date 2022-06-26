import {dispatch} from "../store";
import createAction from "../createAction";
import accActionTypes from "./accActionTypes";
import api from "../../api/api";
import AsyncToasty from "../../helpers/asyncToasty";


const modalOpen = () => dispatch(createAction(accActionTypes.modal.open))
const modalClose = () => dispatch(createAction(accActionTypes.modal.close))

const table = (body) => {
    return dispatch => {
        dispatch(createAction(accActionTypes.table.start))
        api.acc.table(body)
            .then(response => {
                console.log(response)
                dispatch(createAction(accActionTypes.table.success, response.res))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(accActionTypes.table.finish))
            })
    }
}

const get = (id) => {
    return dispatch => {
        dispatch(createAction(accActionTypes.get.start))
        api.acc.get(id)
            .then(response => {
                dispatch(createAction(accActionTypes.get.success, response.res))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(accActionTypes.get.finish))
            })
    }
}

const getDomains = () => {
    return dispatch => {
        dispatch(createAction(accActionTypes.getDomains.start))
        api.acc.getDomains()
            .then(response => {
                dispatch(createAction(accActionTypes.getDomains.success, response.res))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(accActionTypes.getDomains.finish))
            })
    }
}

const edit = (body, onSuccess = () => null) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(accActionTypes.edit.start))
        api.acc.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(accActionTypes.edit.success))
                onSuccess()
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(accActionTypes.edit.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(accActionTypes.del.start))
        api.acc.del(id)
            .then(response => {
                toast.success('Аккаунт удален')
                dispatch(createAction(accActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(accActionTypes.del.finish))
            })
    }
}


export default {
    modalOpen, modalClose,
    table: (body) => dispatch(table(body)),
    get: id => dispatch(get(id)),
    getDomains: () => dispatch(getDomains()),
    edit: (body, onSuccess = () => null) => dispatch(edit(body, onSuccess)),
    del: id => dispatch(del(id))
}
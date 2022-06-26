import createAction from "../createAction";
import streamActionTypes from "./streamActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import accActionTypes from "../acc/accActionTypes";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(streamActionTypes.modal.open))
const modalClose = () => dispatch(createAction(streamActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(streamActionTypes.table.start))
        api.stream.table(body)
            .then(response => {
                dispatch(createAction(streamActionTypes.table.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
            })
            .finally(response => {
                dispatch(createAction(streamActionTypes.table.finish))
            })
    }
}

const get = (id) => {
    return dispatch => {
        dispatch(createAction(streamActionTypes.get.start))
        api.stream.get(id)
            .then(response => {
                dispatch(createAction(streamActionTypes.get.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log('stream.get', response)
            })
            .finally(() => {
                dispatch(createAction(streamActionTypes.get.finish))
            })
    }
}

const getOwners = () => {
    return dispatch => {
        dispatch(createAction(streamActionTypes.getOwners.start))
        api.stream.getOwners()
            .then(response => {
                dispatch(createAction(streamActionTypes.getOwners.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log('stream.getOwners', response)
            })
            .finally(() => dispatch(createAction(streamActionTypes.getOwners.finish)))
    }
}

const getApps = () => {
    return dispatch => {
        dispatch(createAction(streamActionTypes.getApps.start))
        api.stream.getApps()
            .then(response => {
                dispatch(createAction(streamActionTypes.getApps.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log('stream.getApps', response)
            })
            .finally(() => {
                dispatch(createAction(streamActionTypes.getApps.finish))
            })
    }
}

const edit = (body, onSuccess = () => null) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(streamActionTypes.edit.start, body))
        api.stream.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(streamActionTypes.edit.success, response.res))
                onSuccess()
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(streamActionTypes.edit.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(streamActionTypes.del.start))
        api.stream.del(id)
            .then(response => {
                toast.success('Поток удален')
                dispatch(createAction(streamActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(streamActionTypes.del.finish))
            })
    }
}

export default {
    table: body => dispatch(table(body)),
    modalOpen, modalClose,
    getOwners: () => dispatch(getOwners()),
    getApps: () => dispatch(getApps()),
    get: id => dispatch(get(id)),
    edit: (body, onSuccess = () => null) => dispatch(edit(body, onSuccess)),
    del: id => dispatch(del(id)),
}
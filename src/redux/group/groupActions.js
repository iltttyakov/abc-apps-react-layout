import createAction from "../createAction";
import groupActionTypes from "./groupActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(groupActionTypes.modal.open))
const modalClose = () => dispatch(createAction(groupActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(groupActionTypes.table.start))
        api.group.table(body)
            .then(response => {
                dispatch(createAction(groupActionTypes.table.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(groupActionTypes.table.finish))
            })
    }
}

const get = (id) => {
    return dispatch => {
        dispatch(createAction(groupActionTypes.get.start))
        api.group.get(id)
            .then(response =>
                dispatch(createAction(groupActionTypes.get.success, response.res))
            )
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(groupActionTypes.get.finish))
            })
    }
}

const edit = body => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(groupActionTypes.edit.start))
        api.group.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(groupActionTypes.edit.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(groupActionTypes.edit.finish))
            })
    }
}

const getApps = () => {
    return dispatch => {
        dispatch(createAction(groupActionTypes.getApps.start))
        api.group.getApps()
            .then(response => {
                dispatch(createAction(groupActionTypes.getApps.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(groupActionTypes.getApps.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(groupActionTypes.del.start))
        api.group.del(id)
            .then(response => {
                toast.success('Группа удалена')
                dispatch(createAction(groupActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(groupActionTypes.del.finish))
            })
    }
}

export default {
    table: body => dispatch(table(body)),
    modalOpen, modalClose,
    get: id => dispatch(get(id)),
    del: id => dispatch(del(id)),
    edit: body => dispatch(edit(body)),
    getApps: () => dispatch(getApps())
}
import createAction from "../createAction";
import appManagerActionTypes from "./appManagerActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";
import appActionTypes from "../app/appActionTypes";


const modalOpen = () => dispatch(createAction(appManagerActionTypes.modal.open))
const modalClose = () => dispatch(createAction(appManagerActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(appManagerActionTypes.table.start))
        api.appManager.table(body)
            .then(response => {
                dispatch(createAction(appManagerActionTypes.table.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appManagerActionTypes.table.finish))
            })
    }
}

const get = id => {
    return dispatch => {
        dispatch(createAction(appManagerActionTypes.get.start))
        api.appManager.get(id)
            .then(response => {
                dispatch(createAction(appManagerActionTypes.get.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appManagerActionTypes.get.finish))
            })
    }
}

const edit = (body, onSuccess = () => null) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(appManagerActionTypes.edit.start))
        api.appManager.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(appManagerActionTypes.edit.success, response))
                onSuccess()
            })
            .catch(response => {
                console.log(response)
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(appManagerActionTypes.edit.finish))
            })
    }
}

const getBuyers = () => {
    return dispatch => {
        dispatch(createAction(appManagerActionTypes.getBuyers))
        api.appManager.getBuyers()
            .then(response => {
                dispatch(createAction(appManagerActionTypes.getBuyers.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appManagerActionTypes.getBuyers.finish))
            })
    }
}

const getTenants = () => {
    return dispatch => {
        dispatch(createAction(appManagerActionTypes.getTenants))
        api.appManager.getTenants()
            .then(response => {
                dispatch(createAction(appManagerActionTypes.getTenants.success, response))
            })
            .catch(response => {
                dispatch(createAction(appManagerActionTypes.getTenants.error, response))
            })
            .finally(() => {
                dispatch(createAction(appManagerActionTypes.getTenants.finish))
            })
    }
}


export default {
    table: body => dispatch(table(body)),
    get: id => dispatch(get(id)),
    edit: (body, onSuccess = () => null) => dispatch(edit(body, onSuccess)),
    modalOpen, modalClose,
    getBuyers: () => dispatch(getBuyers()),
    getTenants: () => dispatch(getTenants()),
}
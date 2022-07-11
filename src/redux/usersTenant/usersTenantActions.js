import createAction from "../createAction";
import usersTenantActionTypes from "./usersTenantActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(usersTenantActionTypes.modal.open))
const modalClose = () => dispatch(createAction(usersTenantActionTypes.modal.close))

const table = body => {
    console.log(body)
    return dispatch => {
        dispatch(createAction(usersTenantActionTypes.table.start))
        api.usersTenant.table(body)
            .then(response => {
                dispatch(createAction(usersTenantActionTypes.table.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(usersTenantActionTypes.table.finish))
            })
    }
}

const get = id => {
    return dispatch => {
        dispatch(createAction(usersTenantActionTypes.get.start))
        api.usersTenant.get(id)
            .then(response => {
                dispatch(createAction(usersTenantActionTypes.get.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(usersTenantActionTypes.get.finish))
            })
    }
}

const edit = (body, onSuccess = () => null) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(usersTenantActionTypes.edit.start))
        api.usersTenant.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(usersTenantActionTypes.edit.success, response))
                onSuccess()
            })
            .catch(response => {
                console.log(response)
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(usersTenantActionTypes.edit.finish))
            })
    }
}


export default {
    table: body => dispatch(table(body)),
    get: id => dispatch(get(id)),
    edit: (body, onSuccess = () => null) => dispatch(edit(body, onSuccess)),
    modalOpen, modalClose
}
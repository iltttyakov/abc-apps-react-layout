import createAction from "../createAction";
import appBuyerActionTypes from "./appBuyerActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(appBuyerActionTypes.modal.open))
const modalClose = () => dispatch(createAction(appBuyerActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(appBuyerActionTypes.table.start))
        api.appBuyer.table(body)
            .then(response => {
                dispatch(createAction(appBuyerActionTypes.table.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appBuyerActionTypes.table.finish))
            })
    }
}

const get = id => {
    return dispatch => {
        dispatch(createAction(appBuyerActionTypes.get.start))
        api.appBuyer.get(id)
            .then(response => {
                dispatch(createAction(appBuyerActionTypes.get.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appBuyerActionTypes.get.finish))
            })
    }
}

const edit = (body, onSuccess = () => null) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(appBuyerActionTypes.edit.start))
        api.appBuyer.edit(body)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(appBuyerActionTypes.edit.success, response))
                onSuccess()
            })
            .catch(response => {
                console.log(response)
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(appBuyerActionTypes.edit.finish))
            })
    }
}


export default {
    table: body => dispatch(table(body)),
    get: id => dispatch(get(id)),
    edit: (body, onSuccess = () => null) => dispatch(edit(body, onSuccess)),
    modalOpen, modalClose
}
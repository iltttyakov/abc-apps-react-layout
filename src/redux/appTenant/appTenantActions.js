import createAction from "../createAction";
import appTenantActionTypes from "./appTenantActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(appTenantActionTypes.modal.open))
const modalClose = () => dispatch(createAction(appTenantActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(appTenantActionTypes.table.start))
        api.appTenant.table(body)
            .then(response => {
                dispatch(createAction(appTenantActionTypes.table.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appTenantActionTypes.table.finish))
            })
    }
}

const get = id => {
    return dispatch => {
        dispatch(createAction(appTenantActionTypes.get.start))
        api.appTenant.get(id)
            .then(response => {
                dispatch(createAction(appTenantActionTypes.get.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appTenantActionTypes.get.finish))
            })
    }
}

export default {
    table: body => dispatch(table(body)),
    get: id => dispatch(get(id)),
    modalOpen, modalClose
}
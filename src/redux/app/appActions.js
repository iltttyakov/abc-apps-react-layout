import createAction from "../createAction";
import appActionTypes from "./appActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import {toast} from "react-toastify";
import AsyncToasty from "../../helpers/asyncToasty";
import groupActionTypes from "../group/groupActionTypes";
import paths from "../../components/paths";
import errorToasty from "../../helpers/errorToasty";


const table = body => {
    return dispatch => {
        dispatch(createAction(appActionTypes.table.start))
        api.app.table(body)
            .then(response => {
                dispatch(createAction(appActionTypes.table.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.table.finish))
            })
    }
}


const get = id => {
    return dispatch => {
        dispatch(createAction(appActionTypes.get.start))
        api.app.get({id})
            .then(response => {
                dispatch(createAction(appActionTypes.get.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.get.finish))
            })
    }
}


const getAccs = () => {
    return dispatch => {
        dispatch(createAction(appActionTypes.getAccs))
        api.app.getAccs()
            .then(response => {
                dispatch(createAction(appActionTypes.getAccs.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.getAccs.finish))
            })
    }
}

const getBuyers = () => {
    return dispatch => {
        dispatch(createAction(appActionTypes.getBuyers))
        api.app.getBuyers()
            .then(response => {
                dispatch(createAction(appActionTypes.getBuyers.success, response))
            })
            .catch(response => {
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.getBuyers.finish))
            })
    }
}

const getTenants = () => {
    return dispatch => {
        dispatch(createAction(appActionTypes.getTenants))
        api.app.getTenants()
            .then(response => {
                dispatch(createAction(appActionTypes.getTenants.success, response))
            })
            .catch(response => {
                dispatch(createAction(appActionTypes.getTenants.error, response))
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.getTenants.finish))
            })
    }
}


const edit = (body, image, onSuccess) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(appActionTypes.edit.start))
        api.app.edit(
            body,
            [{name: 'icon', data: image}]
        )
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(appActionTypes.edit.success, response))
                onSuccess()
            })
            .catch(response => {
                console.log(response)
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.edit.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(appActionTypes.del.start))
        api.app.del(id)
            .then(response => {
                toast.success('Приложение удалено')
                dispatch(createAction(appActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.del.finish))
            })
    }
}


export default {
    table: body => dispatch(table(body)),
    get: id => dispatch(get(id)),
    getAccs: () => dispatch(getAccs()),
    getBuyers: () => dispatch(getBuyers()),
    getTenants: () => dispatch(getTenants()),
    edit: (body, icon, onSuccess = () => null) => dispatch(edit(body, icon, onSuccess)),
    del: id => dispatch(del(id))
}
import createAction from "../createAction";
import domainActionTypes from "./domainActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import errorToasty from "../../helpers/errorToasty";


const modalOpen = () => dispatch(createAction(domainActionTypes.modal.open))
const modalClose = () => dispatch(createAction(domainActionTypes.modal.close))

const table = body => {
    return dispatch => {
        dispatch(createAction(domainActionTypes.table.start))
        api.domain.table(body)
            .then(response => {
                dispatch(createAction(domainActionTypes.table.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(domainActionTypes.table.finish))
            })
    }
}

const get = (id) => {
    return dispatch => {
        dispatch(createAction(domainActionTypes.get.start))
        api.domain.get(id)
            .then(response =>
                dispatch(createAction(domainActionTypes.get.success, response.res))
            )
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() =>
                dispatch(createAction(domainActionTypes.get.finish))
            )
    }
}

const edit = (body, onSuccess = () => null) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(domainActionTypes.edit.start, body))
        api.domain.edit(body)
            .then(response => {
                dispatch(createAction(domainActionTypes.edit.success))
                toast.success('Изменения сохранены')
                onSuccess()
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(domainActionTypes.edit.finish))
            })
    }
}

const getAccs = () => {
    return dispatch => {
        console.log('getAccs')
        dispatch(createAction(domainActionTypes.getAccs.start))
        api.domain.getAccs()
            .then(response => {
                dispatch(createAction(domainActionTypes.getAccs.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(domainActionTypes.getAccs.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(domainActionTypes.del.start))
        api.domain.del(id)
            .then(response => {
                toast.success('Домен удален')
                dispatch(createAction(domainActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(domainActionTypes.del.finish))
            })
    }
}

const check = (ids, toastType = 'default') => {
    return dispatch => {
        const toast = new AsyncToasty('Проверяем домены')
        dispatch(createAction(domainActionTypes.check.start))
        api.domain.check(ids)
            .then(response => {
                dispatch(createAction(domainActionTypes.check.success, response.res))
                if (toastType === 'default') {
                    toast.success('Домены проверены')
                } else {
                    if (response.res.failed) {
                        toast.error('Домен не прошёл проверку')
                    } else {
                        toast.success('Домены прошёл проверку')
                    }
                }
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(domainActionTypes.check.finish))
            })
    }
}

export default {
    table: body => dispatch(table(body)),
    modalOpen, modalClose,
    get: id => dispatch(get(id)),
    edit: (body, onSuccess = () => null) => dispatch(edit(body, onSuccess)),
    getAccs: () => dispatch(getAccs()),
    del: id => dispatch(del(id)),
    check: (ids, toastType = 'default') => dispatch(check(ids, toastType)),
}
import createAction from "../createAction";
import notificationActionTypes from "./notificationActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";
import AsyncToasty from "../../helpers/asyncToasty";
import downloadCsvFile from "../../helpers/downloadCsvFile";
import errorToasty from "../../helpers/errorToasty";


const table = body => {
    return dispatch => {
        dispatch(createAction(notificationActionTypes.table.start))
        api.notification.table(body)
            .then(response => {
                dispatch(createAction(notificationActionTypes.table.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.table.finish))
            })
    }
}

const get = (id) => {
    return dispatch => {
        dispatch(createAction(notificationActionTypes.get.start))
        api.notification.get(id)
            .then(response => {
                dispatch(createAction(notificationActionTypes.get.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.get.finish))
            })
    }
}

const edit = (body, image, onSuccess) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(notificationActionTypes.edit.start, body))
        api.notification.edit(
            body,
            [{name: 'image', data: image}]
        )
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(notificationActionTypes.edit.success, response))
                onSuccess()
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() =>
                dispatch(createAction(notificationActionTypes.edit.finish))
            )
    }
}

const getGroups = () => {
    return dispatch => {
        dispatch(createAction(notificationActionTypes.getGroups.start))
        api.notification.getGroups()
            .then(response => {
                dispatch(createAction(notificationActionTypes.getGroups.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.getGroups.finish))
            })
    }
}

const getApps = () => {
    return dispatch => {
        dispatch(createAction(notificationActionTypes.getApps.start))
        api.notification.getApps()
            .then(response => {
                dispatch(createAction(notificationActionTypes.getApps.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.getApps.finish))
            })
    }
}

const getOwners = () => {
    return dispatch => {
        dispatch(createAction(notificationActionTypes.getOwners.start))
        api.notification.getOwners()
            .then(response => {
                dispatch(createAction(notificationActionTypes.getOwners.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.getOwners.finish))
            })
    }
}

const statistics = ids => {
    return dispatch => {
        const toast = new AsyncToasty('Получаем статистику')
        dispatch(createAction(notificationActionTypes.statistics.start))
        api.notification.statistics(ids)
            .then(response => {
                toast.success('Статистика получена')
                downloadCsvFile('statistics', response.res.csv)
                dispatch(createAction(notificationActionTypes.statistics.success, response))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.statistics.finish))
            })
    }
}

const cancel = id => {
    return dispatch => {
        const toast = new AsyncToasty('Отменяем уведомление...')
        dispatch(createAction(notificationActionTypes.cancel.start))
        api.notification.cancel(id)
            .then(response => {

                toast.success('Уведомление отменено')
                dispatch(createAction(notificationActionTypes.cancel.success))
            })
            .catch(response => {

                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.cancel.finish))
            })
    }
}

const del = id => {
    return dispatch => {
        const toast = new AsyncToasty('Удаляем')
        dispatch(createAction(notificationActionTypes.del.start))
        api.notification.del(id)
            .then(response => {
                toast.success('Уведомление удалено')
                dispatch(createAction(notificationActionTypes.del.success))
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(notificationActionTypes.del.finish))
            })
    }
}


export default {
    table: body => dispatch(table(body)),
    get: id => dispatch(get(id)),
    del: id => dispatch(del(id)),
    cancel: id => dispatch(cancel(id)),
    edit: (body, image, onSuccess = () => null) => dispatch(edit(body, image, onSuccess)),
    getGroups: () => dispatch(getGroups()),
    getApps: () => dispatch(getApps()),
    getOwners: () => dispatch(getOwners()),
    statistics: ids => dispatch(statistics(ids))
}
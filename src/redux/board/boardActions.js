import createAction from "../createAction";
import api from "../../api/api";
import {dispatch} from "../store";
import boardActionTypes from "./boardActionTypes";
import errorToasty from "../../helpers/errorToasty";
import AsyncToasty from "../../helpers/asyncToasty";


const get = page => {
    return dispatch => {
        dispatch(createAction(boardActionTypes.get.start))
        api.board.get({page})
            .then(response => {
                dispatch(createAction(boardActionTypes.get.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(boardActionTypes.get.finish))
            })
    }
}

const hide = id => {
    return dispatch => {
        dispatch(createAction(boardActionTypes.hide.start))
        api.board.hide({id})
            .then(response => {
                dispatch(createAction(boardActionTypes.hide.success, response))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(boardActionTypes.hide.finish))
            })
    }
}

const editAccNote = (id, note, onSuccess) => {
    return dispatch => {
        const toast = new AsyncToasty('Сохраняем')
        dispatch(createAction(boardActionTypes.editAccNote.start))
        api.board.editAccNote(id, note)
            .then(response => {
                toast.success('Изменения сохранены')
                dispatch(createAction(boardActionTypes.editAccNote.success, response))
                onSuccess()
            })
            .catch(response => {
                toast.error(response.msg)
            })
            .finally(() => {
                dispatch(createAction(boardActionTypes.editAccNote.finish))
            })
    }
}

export default {
    get: (page = 0) => dispatch(get(page)),
    hide: id => dispatch(hide(id)),
    editAccNote: (id, note, onSuccess) => dispatch(editAccNote(id, note, onSuccess))
}
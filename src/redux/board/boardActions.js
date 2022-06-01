import createAction from "../createAction";
import api from "../../api/api";
import {dispatch} from "../store";
import boardActionTypes from "./boardActionTypes";


const get = page => {
    return dispatch => {
        dispatch(createAction(boardActionTypes.get.start))
        api.board.get({page})
            .then(response => {
                dispatch(createAction(boardActionTypes.get.success, response))
            })
            .catch(response => {
                dispatch(createAction(boardActionTypes.get.error, response))
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
                dispatch(createAction(boardActionTypes.hide.error, response))
            })
            .finally(() => {
                dispatch(createAction(boardActionTypes.hide.finish))
            })
    }
}

export default {
    get: (page = 0) => dispatch(get(page)),
    hide: id => dispatch(hide(id))
}
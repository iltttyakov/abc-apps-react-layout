import {dispatch} from "../store";
import createAction from "../createAction";
import logActionTypes from "./logActionTypes";
import api from "../../api/api";
import errorToasty from "../../helpers/errorToasty";


const table = (body) => {
    return dispatch => {
        dispatch(createAction(logActionTypes.table.start))
        api.log.table(body)
            .then(response => {
                dispatch(createAction(logActionTypes.table.success, response.res))
            })
            .catch(response => {
                errorToasty(response.msg)
                console.log(response)
            })
            .finally(() => {
                dispatch(createAction(logActionTypes.table.finish))
            })
    }
}

export default {
    table: body => dispatch(table(body))
}
import createAction from "../createAction";
import appActionTypes from "./appActionTypes";
import api from "../../api/api";
import {dispatch} from "../store";


const table = (
    {
        list,
        length,
        search,
        sort_by,
        order,
        search_type,
        search_store,
        search_mode,
        search_status,
    }
) => {
    return dispatch => {
        dispatch(createAction(appActionTypes.table.start))
        api.app.table({
            list,
            length,
            search,
            sort_by,
            order,
            search_type,
            search_store,
            search_mode,
            search_status,
        })
            .then(response => {
                console.log(response)
                dispatch(createAction(appActionTypes.table.success, response))
            })
            .catch(response => {
                console.log(response)
                dispatch(createAction(appActionTypes.table.error, response))
            })
            .finally(() => {
                dispatch(createAction(appActionTypes.table.finish))
            })
    }
}

export default {
    table: (
        {list, length, search, sort_by, order, search_type, search_store, search_mode, search_status,}
    ) => dispatch(table({list, length, search, sort_by, order, search_type, search_store, search_mode, search_status}))
}
import logActionTypes from "./logActionTypes";

const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
}


export default function logReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case logActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case logActionTypes.table.success:
            return {
                ...state,
                table: action.payload.data,
                tableFilteredCount: action.payload.recordsFiltered,
            }
        case logActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false
            }
        /** END TABLE **/

        default:
            return state

    }
}
import appBuyerActionTypes from "./appBuyerActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: true,

    active: null,
    activeIsLoading: true,

    editInProcess: false,
}

export default function appBuyerReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case appBuyerActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case appBuyerActionTypes.table.success:
            return {
                ...state,
                table: action.payload.res.data,
                tableFilteredCount: action.payload.res.recordsFiltered,
            }
        case appBuyerActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false,
            }
        /** END TABLE **/


        /** GET  **/
        case appBuyerActionTypes.get.start:
            return {
                ...state,
                activeIsLoading: true
            }
        case appBuyerActionTypes.get.success:
            return {
                ...state,
                active: action.payload.res
            }
        case appBuyerActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET  **/


        /** EDIT **/
        case appBuyerActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true
            }
        case appBuyerActionTypes.edit.success:
            return {
                ...state,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case appBuyerActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** MODAL **/
        case appBuyerActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case appBuyerActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        default:
            return state

    }
}
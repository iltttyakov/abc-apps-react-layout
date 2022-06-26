import accActionTypes from "./accActionTypes";

const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: false,

    modalIsOpen: false,

    active: null,
    activeIsLoading: false,

    domains: [],
    domainsIsLoading: true,

    editInProcess: false,
}

export default function accReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case accActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case accActionTypes.table.success:
            return {
                ...state,
                table: action.payload.data,
                tableFilteredCount: action.payload.recordsFiltered,
            }
        case accActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false
            }
        /** END TABLE **/


        /** GET **/
        case accActionTypes.get.start:
            return {
                ...state,
                active: null,
                activeIsLoading: true,
            }
        case accActionTypes.get.success:
            return {
                ...state,
                active: action.payload
            }
        case accActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET **/


        /** EDIT **/
        case accActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true,
            }
        case accActionTypes.edit.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case accActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** DEL **/
        case accActionTypes.del.start:
            return {
                ...state,
                editInProcess: true
            }
        case accActionTypes.del.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case accActionTypes.del.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END DEL **/


        /** MODAL **/
        case accActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case accActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        /** GET DOMAINS **/
        case accActionTypes.getDomains.start:
            return {
                ...state,
                domainsIsLoading: true
            }
        case accActionTypes.getDomains.success:
            return {
                ...state,
                domains: action.payload
            }
        case accActionTypes.getDomains.finish:
            return {
                ...state,
                domainsIsLoading: false
            }
        /** END GET DOMAINS **/


        default:
            return state

    }
}
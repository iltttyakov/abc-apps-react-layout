import groupActionTypes from "./groupActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: false,

    modalIsOpen: false,

    active: null,
    activeIsLoading: false,

    editInProcess: false,

    apps: [],
    appsIsLoading: true,
}

export default function groupReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case groupActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case groupActionTypes.table.success:
            return {
                ...state,
                table: action.payload.data,
                tableFilteredCount: action.payload.recordsFiltered,
            }
        case groupActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false
            }
        /** END TABLE **/


        /** GET **/
        case groupActionTypes.get.start:
            return {
                ...state,
                active: null,
                activeIsLoading: true
            }
        case groupActionTypes.get.success:
            return {
                ...state,
                active: action.payload
            }
        case groupActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET **/


        /** MODAL **/
        case groupActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case groupActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        /** EDIT **/
        case groupActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true,
            }
        case groupActionTypes.edit.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case groupActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** DEL **/
        case groupActionTypes.del.start:
            return {
                ...state,
                editInProcess: true
            }
        case groupActionTypes.del.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case groupActionTypes.del.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END DEL **/


        /** GET APPS **/
        case groupActionTypes.getApps.start:
            return {
                ...state,
                appsIsLoading: true
            }
        case groupActionTypes.getApps.success:
            return {
                ...state,
                apps: action.payload
            }
        case groupActionTypes.getApps.finish:
            return {
                ...state,
                appsIsLoading: false
            }
        /** END GET APPS **/


        default:
            return state
    }
}
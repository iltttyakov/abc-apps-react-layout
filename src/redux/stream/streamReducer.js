import streamActionTypes from "./streamActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: true,

    modalIsOpen: false,

    active: null,
    activeIsLoading: false,

    editInProcess: false,

    owners: [],
    ownersIsLoading: true,

    apps: [],
    appsIsLoading: true,
}

export default function streamReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case streamActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case streamActionTypes.table.success:
            return {
                ...state,
                table: action.payload.data,
                tableFilteredCount: action.payload.recordsFiltered,
            }
        case streamActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false,
            }
        /** END TABLE **/


        /** GET **/
        case streamActionTypes.get.start:
            return {
                ...state,
                active: null,
                activeIsLoading: true
            }
        case streamActionTypes.get.success:
            return {
                ...state,
                active: action.payload
            }
        case streamActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET **/


        /** MODAL **/
        case streamActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case streamActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        /** GET OWNERS **/
        case streamActionTypes.getOwners.start:
            return {
                ...state,
                ownersIsLoading: true
            }
        case streamActionTypes.getOwners.success:
            return {
                ...state,
                owners: action.payload
            }
        case streamActionTypes.getOwners.finish:
            return {
                ...state,
                ownersIsLoading: false
            }
        /** END GET OWNERS **/


        /** GET APPS **/
        case streamActionTypes.getApps.start:
            return {
                ...state,
                appsIsLoading: true
            }
        case streamActionTypes.getApps.success:
            return {
                ...state,
                apps: action.payload
            }
        case streamActionTypes.getApps.finish:
            return {
                ...state,
                appsIsLoading: false
            }
        /** END GET APPS **/


        /** DEL **/
        case streamActionTypes.del.start:
            return {
                ...state,
                editInProcess: true
            }
        case streamActionTypes.del.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case streamActionTypes.del.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END DEL **/


        /** EDIT **/
        case streamActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true,
            }
        case streamActionTypes.edit.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case streamActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        default:
            return state
    }
}
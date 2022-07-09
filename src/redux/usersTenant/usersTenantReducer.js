import usersTenantActionTypes from "./usersTenantActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: false,

    active: null,
    activeIsLoading: true,

    editInProcess: false,

    organicAppsAll: {},

    modalIsOpen: false,
}

export default function usersTenantReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case usersTenantActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case usersTenantActionTypes.table.success:
            return {
                ...state,
                table: action.payload.res.data,
                tableFilteredCount: action.payload.res.recordsFiltered,
            }
        case usersTenantActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false,
            }
        /** END TABLE **/


        /** GET  **/
        case usersTenantActionTypes.get.start:
            return {
                ...state,
                activeIsLoading: true
            }
        case usersTenantActionTypes.get.success:
            return {
                ...state,
                active: action.payload.res,
                organicAppsAll: action.payload.res['organic_apps_all'],
            }
        case usersTenantActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET  **/


        /** EDIT **/
        case usersTenantActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true
            }
        case usersTenantActionTypes.edit.success:
            return {
                ...state,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case usersTenantActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** MODAL **/
        case usersTenantActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case usersTenantActionTypes.modal.close:
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
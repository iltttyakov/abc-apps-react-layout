import userActionTypes from "./userActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: false,

    modalIsOpen: false,

    active: null,
    activeIsLoading: false,

    organicAppsAll: {},

    editInProcess: false,

    roles: [],
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case userActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case userActionTypes.table.success:
            return {
                ...state,
                table: action.payload.data,
                tableFilteredCount: action.payload.recordsFiltered,
            }
        case userActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false
            }
        /** END TABLE **/


        /** GET **/
        case userActionTypes.get.start:
            return {
                ...state,
                active: null,
                activeIsLoading: true
            }
        case userActionTypes.get.success:
            return {
                ...state,
                active: action.payload,
                organicAppsAll: action.payload['organic_apps_all']
            }
        case userActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET **/


        /** MODAL **/
        case userActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case userActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        /** EDIT **/
        case userActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true,
            }
        case userActionTypes.edit.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case userActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** DEL **/
        case userActionTypes.del.start:
            return {
                ...state,
                editInProcess: true
            }
        case userActionTypes.del.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case userActionTypes.del.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END DEL **/


        /** GET ROLES **/
        case userActionTypes.getRoles.start:
            return {...state}
        case userActionTypes.getRoles.success:
            return {
                ...state,
                roles: action.payload
            }
        case userActionTypes.getRoles.finish:
            return {...state}
        /** END GET ROLES **/


        default:
            return state
    }
}
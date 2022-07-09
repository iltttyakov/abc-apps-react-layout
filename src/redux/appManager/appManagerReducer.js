import appManagerActionTypes from "./appManagerActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: false,

    active: null,
    activeIsLoading: true,

    buyers: [],
    tenants: [],

    editInProcess: false,
}

export default function appManagerReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case appManagerActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case appManagerActionTypes.table.success:
            return {
                ...state,
                table: action.payload.res.data,
                tableFilteredCount: action.payload.res.recordsFiltered,
            }
        case appManagerActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false,
            }
        /** END TABLE **/


        /** GET  **/
        case appManagerActionTypes.get.start:
            return {
                ...state,
                activeIsLoading: true
            }
        case appManagerActionTypes.get.success:
            return {
                ...state,
                active: action.payload.res
            }
        case appManagerActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET  **/


        /** EDIT **/
        case appManagerActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true
            }
        case appManagerActionTypes.edit.success:
            return {
                ...state,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case appManagerActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** MODAL **/
        case appManagerActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case appManagerActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        /** GET BUYERS **/
        case appManagerActionTypes.getBuyers.start:
            return {...state, buyersIsLoading: true}
        case appManagerActionTypes.getBuyers.success:
            return {...state, buyers: action.payload.res}
        case appManagerActionTypes.getBuyers.finish:
            return {...state, buyersIsLoading: false}
        /** END GET BUYERS **/


        /** GET TENANTS **/
        case appManagerActionTypes.getTenants.start:
            return {...state, tenantsIsLoading: true}
        case appManagerActionTypes.getTenants.success:
            return {...state, tenants: action.payload.res}
        case appManagerActionTypes.getTenants.finish:
            return {...state, tenantsIsLoading: false}
        /** END GET TENANTS **/


        default:
            return state

    }
}
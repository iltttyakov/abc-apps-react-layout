import appTenantActionTypes from "./appTenantActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,

    active: null,
    activeIsLoading: true,
}

export default function appTenantReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case appTenantActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case appTenantActionTypes.table.success:
            return {
                ...state,
                table: action.payload.res.data,
                tableFilteredCount: action.payload.res.recordsFiltered,
            }
        case appTenantActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
            }
        /** END TABLE **/


        /** GET  **/
        case appTenantActionTypes.get.start:
            return {
                ...state,
                activeIsLoading: true
            }
        case appTenantActionTypes.get.success:
            return {
                ...state,
                active: action.payload.res
            }
        case appTenantActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET  **/


        /** MODAL **/
        case appTenantActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case appTenantActionTypes.modal.close:
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
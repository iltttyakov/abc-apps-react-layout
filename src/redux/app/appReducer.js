import appActionTypes from "./appActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,

    active: null,
    activeIsLoading: true,

    accs: [],
    accsIsLoading: true,

    buyers: [],
    buyersIsLoading: true,

    tenants: [],
    tenantsIsLoading: true,

    editInProcess: false,
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case appActionTypes.table.start:
            return {...state, tableIsLoading: true}
        case appActionTypes.table.success:
            return {
                ...state,
                table: action.payload.res.data,
                tableFilteredCount: action.payload.res.recordsFiltered,
            }
        case appActionTypes.table.finish:
            return {...state, tableIsLoading: false}
        /** END TABLE **/


        /** GET  **/
        case appActionTypes.get.start:
            return {...state, activeIsLoading: true}
        case appActionTypes.get.success:
            return {...state, active: action.payload.res}
        case appActionTypes.get.finish:
            return {...state, activeIsLoading: false}
        /** END GET  **/


        /** GET ACCS **/
        case appActionTypes.getAccs.start:
            return {...state, accsIsLoading: true}
        case appActionTypes.getAccs.success:
            return {...state, accs: action.payload.res}
        case appActionTypes.getAccs.finish:
            return {...state, accsIsLoading: false}
        /** END GET ACCS **/


        /** GET BUYERS **/
        case appActionTypes.getBuyers.start:
            return {...state, buyersIsLoading: true}
        case appActionTypes.getBuyers.success:
            return {...state, buyers: action.payload.res}
        case appActionTypes.getBuyers.finish:
            return {...state, buyersIsLoading: false}
        /** END GET BUYERS **/


        /** GET TENANTS **/
        case appActionTypes.getTenants.start:
            return {...state, tenantsIsLoading: true}
        case appActionTypes.getTenants.success:
            return {...state, tenants: action.payload.res}
        case appActionTypes.getTenants.finish:
            return {...state, tenantsIsLoading: false}
        /** END GET TENANTS **/


        /** EDIT **/
        case appActionTypes.edit.start:
            return {...state, editInProcess: true}
        case appActionTypes.edit.success:
            return {...state}
        case appActionTypes.edit.finish:
            return {...state, editInProcess: false}
        /** END EDIT **/


        default:
            return state

    }
}
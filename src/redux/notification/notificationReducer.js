import notificationActionTypes from "./notificationActionTypes";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,

    active: null,
    activeIsLoading: false,

    editInProcess: false,

    groups: [],
    groupsIsLoading: true,

    apps: [],
    appsIsLoading: true,

    owners: [],
    ownersIsLoading: true,
}

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case notificationActionTypes.table.start:
            return {...state, tableIsLoading: true}
        case notificationActionTypes.table.success:
            return {
                ...state,
                table: action.payload.res.data,
                tableFilteredCount: action.payload.res.recordsFiltered,
            }
        case notificationActionTypes.table.finish:
            return {...state, tableIsLoading: false}
        /** END TABLE **/


        /** GET **/
        case notificationActionTypes.get.start:
            return {
                ...state,
                active: null,
                activeIsLoading: true,
                editInProcess: false
            }
        case notificationActionTypes.get.success:
            return {...state, active: action.payload.res}
        case notificationActionTypes.get.finish:
            return {...state, activeIsLoading: false}
        /** END GET **/


        /** GET GROUPS **/
        case notificationActionTypes.getGroups.start:
            return {
                ...state,
                groupsIsLoading: true
            }
        case notificationActionTypes.getGroups.success:
            return {
                ...state,
                groups: action.payload
            }
        case notificationActionTypes.getGroups.finish:
            return {
                ...state,
                groupsIsLoading: false
            }
        /** END GET GROUPS **/


        /** GET APPS **/
        case notificationActionTypes.getApps.start:
            return {...state, appsIsLoading: true}
        case notificationActionTypes.getApps.success:
            return {...state, apps: action.payload.res}
        case notificationActionTypes.getApps.finish:
            return {...state, appsIsLoading: false}
        /** END GET APPS **/


        /** GET OWNERS **/
        case notificationActionTypes.getOwners.start:
            return {...state, ownersIsLoading: true}
        case notificationActionTypes.getOwners.success:
            return {...state, owners: action.payload.res}
        case notificationActionTypes.getOwners.finish:
            return {...state, ownersIsLoading: false}
        /** END GET OWNERS **/


        /** CANCEL **/
        case notificationActionTypes.cancel.start:
            return {...state, editInProcess: true}
        case notificationActionTypes.cancel.success:
            return {...state}
        case notificationActionTypes.cancel.finish:
            return {...state, editInProcess: false}
        /** END CANCEL **/


        default:
            return state
    }
}
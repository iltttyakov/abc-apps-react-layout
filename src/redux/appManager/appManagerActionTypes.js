const appManagerActionTypes = {

    table: {
        start: 'APP_MANAGER_TABLE_START_ACTION',
        success: 'APP_MANAGER_TABLE_SUCCESS_ACTION',
        finish: 'APP_MANAGER_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'APP_MANAGER_GET_START_ACTION',
        success: 'APP_MANAGER_GET_SUCCESS_ACTION',
        finish: 'APP_MANAGER_GET_FINISH_ACTION'
    },

    modal: {
        open: 'APP_MANAGER_MODAL_OPEN',
        close: 'APP_MANAGER_MODAL_CLOSE',
    },

    edit: {
        start: 'APP_MANAGER_EDIT_START_ACTION',
        success: 'APP_MANAGER_EDIT_SUCCESS_ACTION',
        finish: 'APP_MANAGER_EDIT_FINISH_ACTION'
    },

    getBuyers: {
        start: 'APP_MANAGER_GET_BUYERS_START_ACTION',
        success: 'APP_MANAGER_GET_BUYERS_SUCCESS_ACTION',
        finish: 'APP_MANAGER_GET_BUYERS_FINISH_ACTION'
    },

    getTenants: {
        start: 'APP_MANAGER_GET_TENANTS_START_ACTION',
        success: 'APP_MANAGER_GET_TENANTS_SUCCESS_ACTION',
        finish: 'APP_MANAGER_GET_TENANTS_FINISH_ACTION'
    },

}

export default appManagerActionTypes
const groupActionTypes = {

    table: {
        start: 'GROUP_TABLE_START_ACTION',
        success: 'GROUP_TABLE_SUCCESS_ACTION',
        finish: 'GROUP_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'GROUP_GET_START_ACTION',
        success: 'GROUP_GET_SUCCESS_ACTION',
        finish: 'GROUP_GET_FINISH_ACTION'
    },

    modal: {
        open: 'GROUP_MODAL_OPEN',
        close: 'GROUP_MODAL_CLOSE',
    },

    edit: {
        start: 'GROUP_EDIT_START_ACTION',
        success: 'GROUP_EDIT_SUCCESS_ACTION',
        finish: 'GROUP_EDIT_FINISH_ACTION'
    },

    getApps: {
        start: 'GROUP_GET_APPS_START_ACTION',
        success: 'GROUP_GET_APPS_SUCCESS_ACTION',
        finish: 'GROUP_GET_APPS_FINISH_ACTION'
    },

    del: {
        start: 'GROUP_DEL_START_ACTION',
        success: 'GROUP_DEL_SUCCESS_ACTION',
        finish: 'GROUP_DEL_FINISH_ACTION'
    },
}

export default groupActionTypes
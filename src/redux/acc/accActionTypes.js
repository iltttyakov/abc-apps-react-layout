const accActionTypes = {

    table: {
        start: 'ACC_TABLE_START_ACTION',
        success: 'ACC_TABLE_SUCCESS_ACTION',
        finish: 'ACC_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'ACC_GET_START_ACTION',
        success: 'ACC_GET_SUCCESS_ACTION',
        finish: 'ACC_GET_FINISH_ACTION'
    },

    getDomains: {
        start: 'ACC_GET_DOMAINS_START_ACTION',
        success: 'ACC_GET_DOMAINS_SUCCESS_ACTION',
        finish: 'ACC_GET_DOMAINS_FINISH_ACTION'
    },

    modal: {
        open: 'ACC_MODAL_OPEN',
        close: 'ACC_MODAL_CLOSE',
    },

    edit: {
        start: 'ACC_EDIT_START_ACTION',
        success: 'ACC_EDIT_SUCCESS_ACTION',
        finish: 'ACC_EDIT_FINISH_ACTION'
    },

    create: {
        start: 'ACC_CREATE_START_ACTION',
        success: 'ACC_CREATE_SUCCESS_ACTION',
        finish: 'ACC_CREATE_FINISH_ACTION'
    },

    del: {
        start: 'ACC_DEL_START_ACTION',
        success: 'ACC_DEL_SUCCESS_ACTION',
        finish: 'ACC_DEL_FINISH_ACTION'
    },

}

export default accActionTypes
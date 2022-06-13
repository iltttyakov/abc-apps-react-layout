const domainActionTypes = {

    table: {
        start: 'DOMAIN_TABLE_START_ACTION',
        success: 'DOMAIN_TABLE_SUCCESS_ACTION',
        finish: 'DOMAIN_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'DOMAIN_GET_START_ACTION',
        success: 'DOMAIN_GET_SUCCESS_ACTION',
        finish: 'DOMAIN_GET_FINISH_ACTION'
    },

    modal: {
        open: 'DOMAIN_MODAL_OPEN',
        close: 'DOMAIN_MODAL_CLOSE',
    },

    edit: {
        start: 'DOMAIN_EDIT_START_ACTION',
        success: 'DOMAIN_EDIT_SUCCESS_ACTION',
        finish: 'DOMAIN_EDIT_FINISH_ACTION'
    },

    getAccs: {
        start: 'DOMAIN_GET_ACCS_START_ACTION',
        success: 'DOMAIN_GET_ACCS_SUCCESS_ACTION',
        finish: 'DOMAIN_GET_ACCS_FINISH_ACTION'
    },

    del: {
        start: 'DOMAIN_DEL_START_ACTION',
        success: 'DOMAIN_DEL_SUCCESS_ACTION',
        finish: 'DOMAIN_DEL_FINISH_ACTION'
    },

    check: {
        start: 'DOMAIN_CHECK_START_ACTION',
        success: 'DOMAIN_CHECK_SUCCESS_ACTION',
        finish: 'DOMAIN_CHECK_FINISH_ACTION'
    },
}

export default domainActionTypes
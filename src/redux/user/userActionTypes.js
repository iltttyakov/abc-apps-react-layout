const userActionTypes = {

    table: {
        start: 'USER_TABLE_START_ACTION',
        success: 'USER_TABLE_SUCCESS_ACTION',
        finish: 'USER_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'USER_GET_START_ACTION',
        success: 'USER_GET_SUCCESS_ACTION',
        finish: 'USER_GET_FINISH_ACTION'
    },

    modal: {
        open: 'USER_MODAL_OPEN',
        close: 'USER_MODAL_CLOSE',
    },

    edit: {
        start: 'USER_EDIT_START_ACTION',
        success: 'USER_EDIT_SUCCESS_ACTION',
        finish: 'USER_EDIT_FINISH_ACTION'
    },

    getRoles: {
        start: 'USER_GET_ROLES_START_ACTION',
        success: 'USER_GET_ROLES_SUCCESS_ACTION',
        finish: 'USER_GET_ROLES_FINISH_ACTION',
    },

    del: {
        start: 'USER_DEL_START_ACTION',
        success: 'USER_DEL_SUCCESS_ACTION',
        finish: 'USER_DEL_FINISH_ACTION'
    },
}

export default userActionTypes
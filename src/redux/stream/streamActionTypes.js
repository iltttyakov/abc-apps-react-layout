const streamActionTypes = {

    table: {
        start: 'STREAM_TABLE_START_ACTION',
        success: 'STREAM_TABLE_SUCCESS_ACTION',
        finish: 'STREAM_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'STREAM_GET_START_ACTION',
        success: 'STREAM_GET_SUCCESS_ACTION',
        finish: 'STREAM_GET_FINISH_ACTION'
    },

    modal: {
        open: 'STREAM_MODAL_OPEN',
        close: 'STREAM_MODAL_CLOSE',
    },

    getOwners: {
        start: 'STREAM_GET_OWNER_START_ACTION',
        success: 'STREAM_GET_OWNER_SUCCESS_ACTION',
        finish: 'STREAM_GET_OWNER_FINISH_ACTION'
    },

    getApps: {
        start: 'STREAM_GET_APPS_START_ACTION',
        success: 'STREAM_GET_APPS_SUCCESS_ACTION',
        finish: 'STREAM_GET_APPS_FINISH_ACTION'
    },

    edit: {
        start: 'STREAM_EDIT_START_ACTION',
        success: 'STREAM_EDIT_SUCCESS_ACTION',
        finish: 'STREAM_EDIT_FINISH_ACTION'
    },

    del: {
        start: 'STREAM_DEL_START_ACTION',
        success: 'STREAM_DEL_SUCCESS_ACTION',
        finish: 'STREAM_DEL_FINISH_ACTION'
    },
}

export default streamActionTypes
const boardActionTypes = {
    get: {
        start: 'BOARD_GET_START_ACTION',
        success: 'BOARD_GET_SUCCESS_ACTION',
        finish: 'BOARD_GET_FINISH_ACTION'
    },

    hide: {
        start: 'BOARD_HIDE_START_ACTION',
        success: 'BOARD_HIDE_SUCCESS_ACTION',
        finish: 'BOARD_HIDE_FINISH_ACTION'
    },

    editAccNote: {
        start: 'BOARD_EDIT_ACC_NOTE_START_ACTION',
        success: 'BOARD_EDIT_ACC_NOTE_SUCCESS_ACTION',
        finish: 'BOARD_EDIT_ACC_NOTE_FINISH_ACTION'
    },
}
export default boardActionTypes
const notificationActionTypes = {
    table: {
        start: 'NOTIFICATION_TABLE_START_ACTION',
        success: 'NOTIFICATION_TABLE_SUCCESS_ACTION',
        finish: 'NOTIFICATION_TABLE_FINISH_ACTION'
    },

    get: {
        start: 'NOTIFICATION_GET_START_ACTION',
        success: 'NOTIFICATION_GET_SUCCESS_ACTION',
        finish: 'NOTIFICATION_GET_FINISH_ACTION'
    },

    edit: {
        start: 'NOTIFICATION_EDIT_APPS_START_ACTION',
        success: 'NOTIFICATION_EDIT_APPS_SUCCESS_ACTION',
        finish: 'NOTIFICATION_EDIT_APPS_FINISH_ACTION'
    },

    getGroups: {
        start: 'NOTIFICATION_GET_GROUPS_START_ACTION',
        success: 'NOTIFICATION_GET_GROUPS_SUCCESS_ACTION',
        finish: 'NOTIFICATION_GET_GROUPS_FINISH_ACTION'
    },

    getApps: {
        start: 'NOTIFICATION_GET_APPS_START_ACTION',
        success: 'NOTIFICATION_GET_APPS_SUCCESS_ACTION',
        finish: 'NOTIFICATION_GET_APPS_FINISH_ACTION'
    },

    getOwners: {
        start: 'NOTIFICATION_GET_OWNERS_START_ACTION',
        success: 'NOTIFICATION_GET_OWNERS_SUCCESS_ACTION',
        finish: 'NOTIFICATION_GET_OWNERS_FINISH_ACTION'
    },

    statistics: {
        start: 'NOTIFICATION_STATISTICS_START_ACTION',
        success: 'NOTIFICATION_STATISTICS_SUCCESS_ACTION',
        finish: 'NOTIFICATION_STATISTICS_FINISH_ACTION'
    },

    cancel: {
        start: 'NOTIFICATION_CANCEL_START_ACTION',
        success: 'NOTIFICATION_CANCEL_SUCCESS_ACTION',
        finish: 'NOTIFICATION_CANCEL_FINISH_ACTION'
    },

    del: {
        start: 'NOTIFICATION_DEL_START_ACTION',
        success: 'NOTIFICATION_DEL_SUCCESS_ACTION',
        finish: 'NOTIFICATION_DEL_FINISH_ACTION'
    },
}

export default notificationActionTypes
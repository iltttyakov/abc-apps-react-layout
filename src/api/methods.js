export const BASE_API_URL = 'https://golotomo.site/api'

export const AUTH_GET_API_METHOD = 'auth.get'


export default {
    auth: {
        get: 'auth.get',
        editTheme: 'auth.edit_theme',
        editPassword: 'auth.edit_password'
    },

    board: {
        get: 'board.get',
        hide: 'board.acc_hide',
    },

    acc: {
        table: 'acc.table',
        get: 'acc.get',
        getDomains: 'acc.get_domains',
        edit: 'acc.edit',
        del: 'acc.del',
    },

    app: {
        table: 'app.table',
        get: 'app.get',
        getAccs: 'app.get_accs',
        getBuyers: 'app.get_buyers',
        getTenants: 'app.get_tenants',
        edit: 'app.edit',
        del: 'app.del',
    },

    appBuyer: {
        table: 'app_buyer.table',
        get: 'app_buyer.get',
        edit: 'app_buyer.edit'
    },

    appTenant: {
        table: 'app_tenant.table',
        get: 'app_tenant.get',
    },

    stream: {
        table: 'stream.table',
        getOwners: 'stream.get_owners',
        getAps: 'stream.get_apps',
        get: 'stream.get',
        edit: 'stream.edit',
        del: 'stream.del'
    },

    domain: {
        table: 'domain.table',
        get: 'domain.get',
        edit: 'domain.edit',
        getAccs: 'domain.get_accs',
        del: 'domain.del',
        check: 'domain.check',
    },

    log: {
        table: 'log.table'
    },

    user: {
        get: 'user.get',
        edit: 'user.edit',
        table: 'user.table',
        del: 'user.del',
    },

    notification: {
        get: 'notification.get',
        edit: 'notification.edit',
        table: 'notification.table',
        getGroups: 'notification.get_groups',
        getApps: 'notification.get_apps',
        getOwners: 'notification.get_owners',
        statistics: 'notification.statistics',
        cancel: 'notification.cancel',
        del: 'notification.del',
    },

    group: {
        get: 'group.get',
        getApps: 'group.get_apps',
        del: 'group.del',
        edit: 'group.edit',
        table: 'group.table',
    }

}

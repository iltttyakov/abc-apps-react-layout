import inArray from "../../../helpers/inArray";

export const rightsFields = {
    'board': ['board_no', 'board_rw'],
    'streams': ['streams_no', 'streams_own', 'streams_all'],
    'grey': ['grey_no', 'grey_r', 'grey_rw'],
    'white': ['white_no', 'white_r', 'white_rw'],
    'accs': ['accs_no', 'accs_r', 'accs_rw'],
    'notifications': ['notifications_no', 'notifications_own', 'notifications_all']
}


export const roleRights = {
    "admin": {
        "grey": "grey_rw",
        "white": "white_rw",
        "accs": "accs_rw",
        "board": "board_rw",
        "streams": "streams_all",
        "notifications": "notifications_all",
        "streams_owner": "1",
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": "1",
        "apps_del": "1",
        "apps_rw_buyer": "1",
        "apps_playMarket": "1",
        "apps_appStore": "1",
        "apps_huawei": "1",
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": "1",
        "accs_del": "1",
        "board_add": "1",
        "board_del": "1",
        "users": "1",
        "dev": "1",
        "domains": "1",
        "notifications_owner": "1",
        "notifications_buyer": false,
        "log": "1",
        "apps_buyer": false,
        "apps_tenant": false
    },
    "dev": {
        "grey": "grey_rw",
        "white": "white_rw",
        "accs": "accs_r",
        "board": "board_rw",
        "streams": "streams_no",
        "notifications": "notifications_no",
        "streams_owner": false,
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": "1",
        "apps_del": "1",
        "apps_rw_buyer": false,
        "apps_playMarket": "1",
        "apps_appStore": false,
        "apps_huawei": false,
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": false,
        "accs_del": false,
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": "1",
        "domains": false,
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": false
    },
    "dev-ios": {
        "grey": "grey_rw",
        "white": "white_rw",
        "accs": "accs_r",
        "board": "board_rw",
        "streams": "streams_no",
        "notifications": "notifications_no",
        "streams_owner": false,
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": "1",
        "apps_del": "1",
        "apps_rw_buyer": false,
        "apps_playMarket": false,
        "apps_appStore": "1",
        "apps_huawei": false,
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": false,
        "accs_del": false,
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": "1",
        "domains": false,
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": false
    },
    "farmer": {
        "grey": "grey_no",
        "white": "white_no",
        "accs": "accs_rw",
        "board": "board_no",
        "streams": "streams_no",
        "notifications": "notifications_no",
        "streams_owner": false,
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": false,
        "apps_del": false,
        "apps_rw_buyer": false,
        "apps_playMarket": false,
        "apps_appStore": false,
        "apps_huawei": false,
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": "1",
        "accs_del": "1",
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": false,
        "domains": false,
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": false
    },
    "uploader": {
        "grey": "grey_r",
        "white": "white_rw",
        "accs": "accs_rw",
        "board": "board_no",
        "streams": "streams_no",
        "notifications": "notifications_no",
        "streams_owner": false,
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": "1",
        "apps_del": "1",
        "apps_rw_buyer": false,
        "apps_playMarket": "1",
        "apps_appStore": "1",
        "apps_huawei": "1",
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": "1",
        "accs_del": "1",
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": false,
        "domains": false,
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": false
    },
    "bayer": {
        "grey": "grey_no",
        "white": "white_no",
        "accs": "accs_no",
        "board": "board_no",
        "streams": "streams_own",
        "notifications": "notifications_no",
        "streams_owner": "1",
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": false,
        "apps_del": false,
        "apps_rw_buyer": false,
        "apps_playMarket": false,
        "apps_appStore": false,
        "apps_huawei": false,
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": false,
        "accs_del": false,
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": false,
        "domains": false,
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": false
    },
    "helper": {
        "grey": "grey_no",
        "white": "white_no",
        "accs": "accs_no",
        "board": "board_no",
        "streams": "streams_no",
        "notifications": "notifications_no",
        "streams_owner": false,
        "streams_apps_buyer": false,
        "streams_apps_tenant": false,
        "apps_add": false,
        "apps_del": false,
        "apps_rw_buyer": false,
        "apps_playMarket": false,
        "apps_appStore": false,
        "apps_huawei": false,
        "apps_list_buyer": false,
        "apps_list_tenant": false,
        "accs_add": false,
        "accs_del": false,
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": false,
        "domains": "1",
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": false
    },
    "client": {
        "grey": "grey_no",
        "white": "white_no",
        "accs": "accs_no",
        "board": "board_no",
        "streams": "streams_own",
        "notifications": "notifications_own",
        "streams_owner": "1",
        "streams_apps_buyer": "1",
        "streams_apps_tenant": false,
        "apps_add": false,
        "apps_del": false,
        "apps_rw_buyer": false,
        "apps_playMarket": false,
        "apps_appStore": false,
        "apps_huawei": false,
        "apps_list_buyer": "1",
        "apps_list_tenant": false,
        "accs_add": false,
        "accs_del": false,
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": false,
        "domains": false,
        "notifications_owner": "1",
        "notifications_buyer": "1",
        "log": false,
        "apps_buyer": "1",
        "apps_tenant": false
    },
    "tenant": {
        "grey": "grey_no",
        "white": "white_no",
        "accs": "accs_no",
        "board": "board_no",
        "streams": "streams_own",
        "notifications": "notifications_no",
        "streams_owner": "1",
        "streams_apps_buyer": false,
        "streams_apps_tenant": "1",
        "apps_add": false,
        "apps_del": false,
        "apps_rw_buyer": false,
        "apps_playMarket": false,
        "apps_appStore": false,
        "apps_huawei": false,
        "apps_list_buyer": false,
        "apps_list_tenant": "1",
        "accs_add": false,
        "accs_del": false,
        "board_add": false,
        "board_del": false,
        "users": false,
        "dev": false,
        "domains": false,
        "notifications_owner": false,
        "notifications_buyer": false,
        "log": false,
        "apps_buyer": false,
        "apps_tenant": "1"
    }
}


export const roles = {
    'admin': 'grey_rw,white_rw,accs_rw,board_rw,streams_all,streams_owner,apps_add,apps_del,apps_rw_buyer,apps_playMarket,apps_appStore,apps_huawei,accs_add,accs_del,board_add,board_del,users,dev,domains,notifications_all,notifications_owner,log',
    'dev': 'grey_rw,white_rw,accs_r,board_rw,apps_add,apps_del,apps_playMarket,dev',
    'dev-ios': 'grey_rw,white_rw,accs_r,board_rw,apps_add,apps_del,apps_appStore,dev',
    'farmer': 'accs_rw,accs_add,accs_del',
    'uploader': 'grey_r,white_rw,accs_rw,apps_add,apps_del,apps_playMarket,apps_appStore,apps_huawei,accs_add,accs_del',
    'bayer': 'streams_own,streams_owner',
    'helper': 'domains',
    'client': 'streams_own,streams_owner,streams_apps_buyer,apps_list_buyer,notifications_own,notifications_owner,notifications_buyer,apps_buyer',
    'tenant': 'streams_own,streams_owner,streams_apps_tenant,apps_list_tenant,apps_tenant',
}

export const getRights = rights => {
    rights = rights.split(',')
    const data = {}

    rights.forEach(right => {
        data[right] = '1'
    })

    Object.keys(rightsFields).forEach(fieldName => {
        let filled = false
        rightsFields[fieldName].forEach(value => {
            if (inArray(rights, value)) {
                data[fieldName] = value
                filled = true
            }
        })
        if (!filled) data[fieldName] = rightsFields[fieldName][0]
    })

    return data
}

export const getRoleFromRights = fields => {
    let result = 'none'

    Object.keys(roleRights).forEach(roleName => {
        const role = roleRights[roleName]
        let isThisRole = true
        watchingFields.forEach(right => {
            isThisRole = isThisRole && (fields[right] == role[right])
        })
        if (isThisRole) {
            result = roleName
        }
    })

    return result
}

export const watchingFields = [
    'grey',
    'white',
    'accs',
    'board',
    'streams',
    'notifications',
    'streams_owner',
    'streams_apps_buyer',
    'streams_apps_tenant',
    'apps_add',
    'apps_del',
    'apps_rw_buyer',
    'apps_playMarket',
    'apps_appStore',
    'apps_huawei',
    'apps_list_buyer',
    'apps_list_tenant',
    'accs_add',
    'accs_del',
    'board_add',
    'board_del',
    'users',
    'dev',
    'domains',
    'notifications_owner',
    'notifications_buyer',
    'log',
    'apps_buyer',
    'apps_tenant',
]
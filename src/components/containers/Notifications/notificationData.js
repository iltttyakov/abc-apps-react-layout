export const notificationDefaultValues = {
    id: '',
    is_smart: false,
    heading: '',
    subtitle: '',
    text: '',
    date: '',
    time: '',
    repeat_period: 'once',
    smart_type: 'install_noreg',
    owner: '0',
    apps: [],
    group_id: '0',
    settings_all_countries: false,
    settings_timezone: false,
    settings_active: false,
    copy: false,
    smart: 'install_noreg',
}


export const notificationAppsUnpacking = notification => {
    const apps_add = notification.apps_add
        ? notification.apps_add.split(',')
        : []
    const app_groups_apps = notification.app_groups_apps
        ? notification.app_groups_apps.split(',')
        : []
    const apps_sub = notification.apps_sub
        ? notification.apps_sub.split(',')
        : []

    return apps_add
        .concat(app_groups_apps)
        .filter(el => !apps_sub.includes(el))
}


export const notificationUnpacking = notification => {
    return notification
        ? {
            ...notificationDefaultValues,
            ...notification,
            apps: notificationAppsUnpacking(notification),
            settings_active: notification.settings_active === '1',
            settings_all_countries: notification.settings_all_countries === '1',
            settings_timezone: notification.settings_timezone === '1',
        }
        : notificationDefaultValues
}

export const notificationPackaging = (data, notification = {}) => {
    const clearData = {
        ...notification,
        ...data,
        countries: data['countries'] ? data['countries'].join(',') : ''
    }

    if (!clearData['settings_active']) delete clearData['settings_active']
    if (!clearData['settings_all_countries']) delete clearData['settings_all_countries']
    if (!clearData['settings_timezone']) delete clearData['settings_timezone']

    return clearData
}
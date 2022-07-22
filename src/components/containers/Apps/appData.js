export const appDefaultValues = {
    id: '',
    name: '',
    package: '',
    type: 'white',
    store: 'playMarket',
    account: '',
    buyer: '0',
    date_create: '',
    date_approve: '',
    date_ban: '',
    mode: 'false',
    proxy_host: '',
    proxy_port: '',
    proxy_login: '',
    proxy_password: '',
    note: '',
    af_login: '',
    af_password: '',
    fb_app_id: '',
    fb_app_access_token: '',
    fb_client_token: '',
    fb_secret: '',
    dev_key: '',
    onesignal_name: '',
    onesignal_id: '',
    onesignal_key: '',
    creator: '',
    builder: '',
    naming: 'false',
    link: '',
    countries: '',
    fields: [{key: '', val: ''}]
}

export const appUnpacking = app => {
    return app
        ? {
            ...app,
            countries: app.countries ? app.countries.split(',') : '',
            tenants: app.tenants ? app.tenants.split(',') : '',
            fields: [...app.fields, {key: '', val: ''}],
        }
        : appDefaultValues
}

export const appPacking = (data, app = {}) => {
    data['fields'] = data.fields
        .map(field => {
            if (field.key !== '' && field.val !== '') {
                return {key: field.key, value: field.val}
            } else {
                return null
            }
        })
        .filter(Boolean)
    data['link'] = data['link'] ? data['link'] : ''

    return {
        ...app,
        ...data
    }
}

export const appValidate = (data, form) => {
    let hasErrors = false

    data['fields'].forEach(field => {
        if (field.key === '' && field.val === '') {
        } else if (
            (field.key === '' && field.val !== '')
            ||
            (field.key !== '' && field.val === '')
        ) {
            hasErrors = true
            form.setError('fields', {
                type: 'custom',
                message: 'Оба поля должны быть заполнены'
            })
        }
    })

    return hasErrors
}
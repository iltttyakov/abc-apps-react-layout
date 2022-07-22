const BASE_URL = 'https://golotomo.site/img/'

export const getIconUrl = (name) => {
    let url = ''

    if (name === 'no_icon') {
        url = `${BASE_URL}${name}.png`
    } else {
        url = `${BASE_URL}apps/${name}.png`
    }

    return url
}

export const getNotificationIconUrl = (name) => `${BASE_URL}notifications/${name}`
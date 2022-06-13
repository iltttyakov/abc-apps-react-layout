Object.filter = function (obj, filtercheck) {
    let result = {}
    Object.keys(obj).forEach((key) => {
        if (filtercheck(obj[key])) result[key] = obj[key]
    })
    return result
}

/**
 * Очищает параметры для запроса к API
 * @param params словарь с параметрами запроса из формы фильтра
 */
const clearFilterParams = params => {
    let clearedParams = params

    clearedParams = Object.filter(params, (value) => !!value && value.length !== 0)
    Object.keys(clearedParams).map(key => {
        if (Array.isArray(clearedParams[key])) {
            clearedParams[key] = clearedParams[key].join('|')
        }
        clearedParams[key] = clearedParams[key].toString()
    })


    return clearedParams
}

export default clearFilterParams
import base from "../base";
import methods from "../methods";

const get = id => base(methods.notification.get, {id})
const del = id => base(methods.notification.del, {id})
const cancel = id => base(methods.notification.cancel, {id})
const edit = (body, optional = null) => base(methods.notification.edit, body, optional)
const table = body => base(methods.notification.table, body)
const getGroups = () => base(methods.notification.getGroups)
const getApps = () => base(methods.notification.getApps)
const getOwners = () => base(methods.notification.getOwners)
const statistics = ids => base(methods.notification.statistics, {ids})

export default {
    get,
    cancel,
    del,
    edit,
    table,
    getGroups,
    getApps,
    getOwners,
    statistics,
}
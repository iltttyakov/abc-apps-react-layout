import base from "../base";
import methods from "../methods";

const get = id => base(methods.group.get, {id})
const getApps = () => base(methods.group.getApps)
const del = id => base(methods.group.del, {id})
const edit = body => base(methods.group.edit, body)
const table = body => base(methods.group.table, body)


export default {
    get,
    getApps,
    del,
    edit,
    table,
}
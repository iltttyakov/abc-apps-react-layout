import base from "../base";
import methods from "../methods";

const table = body => base(methods.acc.table, body)
const get = id => base(methods.acc.get, {id})
const getDomains = () => base(methods.acc.getDomains)
const edit = body => base(methods.acc.edit, body)
const del = id => base(methods.acc.del, {id})

export default {
    table,
    get,
    getDomains,
    edit,
    del
}
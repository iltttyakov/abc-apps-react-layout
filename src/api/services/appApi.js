import base from "../base";
import methods from "../methods";

const table = body => base(methods.app.table, body)
const get = body => base(methods.app.get, body)
const getAccs = () => base(methods.app.getAccs)
const getBuyers = () => base(methods.app.getBuyers)
const getTenants = () => base(methods.app.getTenants)
const edit = (body, optional = null) => base(methods.app.edit, body, optional)
const del = id => base(methods.app.del, {id})

export default {
    table, get, getAccs, getBuyers, getTenants, edit, del
}
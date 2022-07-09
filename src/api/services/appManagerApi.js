import base from "../base";
import methods from "../methods";

const table = body => base(methods.appManager.table, body)
const get = id => base(methods.appManager.get, {id})
const edit = body => base(methods.appManager.edit, body)
const getBuyers = () => base(methods.appManager.getBuyers)
const getTenants = () => base(methods.appManager.getTenants)

export default {
    table, get, edit, getBuyers, getTenants
}

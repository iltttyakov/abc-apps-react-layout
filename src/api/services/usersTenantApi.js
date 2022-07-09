import methods from "../methods";
import base from "../base";

const get = id => base(methods.userTenant.get, {id})
const edit = body => base(methods.userTenant.edit, body)
const table = body => base(methods.userTenant.table, body)

export default {
    get, edit, table
}
import base from "../base";
import methods from "../methods";

const table = body => base(methods.appBuyer.table, body)
const get = id => base(methods.appBuyer.get, {id})
const edit = body => base(methods.appBuyer.edit, body)

export default {
    table, get, edit,
}

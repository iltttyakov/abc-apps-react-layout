import base from "../base";
import methods from "../methods";

const table = body => base(methods.appTenant.table, body)
const get = id => base(methods.appTenant.get, {id})

export default {
    table, get
}

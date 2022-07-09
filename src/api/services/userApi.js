import base from "../base";
import methods from "../methods";


const get = id => base(methods.user.get, {id})
const edit = body => base(methods.user.edit, body)
const table = body => base(methods.user.table, body)
const del = id => base(methods.user.del, {id})
const getRoles = () => base(methods.user.get_roles)


export default {
    get, edit, table, del, getRoles
}
import base from "../base";
import methods from "../methods";


const table = body => base(methods.domain.table, body)
const get = id => base(methods.domain.get, {id})
const edit = body => base(methods.domain.edit, body)
const getAccs = () => base(methods.domain.getAccs)
const del = id => base(methods.domain.del, {id})
const check = ids => base(methods.domain.check, {ids})


export default {
    table, get, edit, getAccs, del, check
}
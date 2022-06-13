import base from '../base'
import methods from "../methods";

const table = data => base(methods.stream.table, data)
const getOwners = () => base(methods.stream.getOwners)
const getApps = () => base(methods.stream.getAps)
const get = id => base(methods.stream.get, {id})
const edit = body => base(methods.stream.edit, body)
const del = id => base(methods.stream.del, {id})


export default {
    table, getOwners, getApps, get, edit, del
}
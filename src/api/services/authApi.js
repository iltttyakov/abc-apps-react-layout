import base from "../base";
import {AUTH_GET_API_METHOD} from "../urls";

const get = data => {
    return base(AUTH_GET_API_METHOD, data)
}

export default {
    get,
}
import base from "../base";
import {BOARD_GET_API_METHOD, BOARD_HIDE_API_METHOD} from "../urls";

const get = data => {
    return base(BOARD_GET_API_METHOD, data)
}

const hide = data => {
    return base(BOARD_HIDE_API_METHOD, data)
}

export default {
    get,
    hide
}
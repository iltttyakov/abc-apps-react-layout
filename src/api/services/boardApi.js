import base from "../base";
import methods from "../methods";

const get = body => base(methods.board.get, body)
const hide = body => base(methods.board.hide, body)


export default {
    get, hide
}
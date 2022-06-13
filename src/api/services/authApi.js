import base from "../base";
import methods from "../methods";

const get = data => base(methods.auth.get, data)
const editTheme = theme => base(methods.auth.editTheme, {theme})
const editPassword = (old_password, new_password) => base(methods.auth.editPassword, {old_password, new_password})

export default {
    get, editTheme, editPassword
}
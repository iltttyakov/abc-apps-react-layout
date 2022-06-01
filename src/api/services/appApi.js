import base from "../base";
import {APP_TABLE_API_METHOD} from "../urls";

const table = (data) => {
    return base(APP_TABLE_API_METHOD, data)
}

export default {
    table
}
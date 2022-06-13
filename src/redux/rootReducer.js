import {combineReducers} from "redux"
import authReducer from "./auth/authReducer";
import boardReducer from "./board/boardReducer";
import appReducer from "./app/appReducer";
import accReducer from "./acc/accReducer";
import logReducer from "./log/logReducer";
import streamReducer from "./stream/streamReducer";
import domainReducer from "./domain/domainReducer";
import userReducer from "./user/userReducer";
import notificationReducer from "./notification/notificationReducer";
import groupReducer from "./group/groupReducer";
import appBuyerReducer from "./appBuyer/appBuyerReducer";
import appTenantReducer from "./appTenant/appTenantReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    board: boardReducer,
    app: appReducer,
    appBuyer: appBuyerReducer,
    appTenant: appTenantReducer,
    acc: accReducer,
    log: logReducer,
    stream: streamReducer,
    domain: domainReducer,
    user: userReducer,
    notification: notificationReducer,
    group: groupReducer
})

export default rootReducer
import authApi from "./services/authApi";
import boardApi from "./services/boardApi";
import appApi from "./services/appApi";
import accApi from "./services/accApi";
import logApi from "./services/logApi";
import streamApi from "./services/streamApi";
import domainApi from "./services/domainApi";
import userApi from "./services/userApi";
import notificationApi from "./services/notificationApi";
import groupApi from "./services/groupApi";
import appBuyerApi from "./services/appBuyerApi";
import appTenantApi from "./services/appTenantApi";

export default {
    auth: authApi,
    board: boardApi,
    app: appApi,
    appBuyer: appBuyerApi,
    appTenant: appTenantApi,
    acc: accApi,
    log: logApi,
    stream: streamApi,
    domain: domainApi,
    user: userApi,
    notification: notificationApi,
    group: groupApi,
}
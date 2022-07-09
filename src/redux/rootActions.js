import authActions from "./auth/authActions";
import boardActions from "./board/boardActions";
import appActions from "./app/appActions";
import accActions from "./acc/accActions";
import logActions from "./log/logActions";
import streamActions from "./stream/streamActions";
import domainActions from "./domain/domainActions";
import userActions from "./user/userActions";
import notificationActions from "./notification/notificationActions";
import groupActions from "./group/groupActions";
import appBuyerActions from "./appBuyer/appBuyerActions";
import appTenantActions from "./appTenant/appTenantActions";
import appManagerActions from "./appManager/appManagerActions";
import usersTenantActions from "./usersTenant/usersTenantActions";


export default {
    auth: authActions,
    board: boardActions,
    app: appActions,
    appBuyer: appBuyerActions,
    appTenant: appTenantActions,
    appManager: appManagerActions,
    acc: accActions,
    log: logActions,
    stream: streamActions,
    domain: domainActions,
    user: userActions,
    usersTenant: usersTenantActions,
    notification: notificationActions,
    group: groupActions
}
import React, {useEffect, useState} from 'react'
import {Route, Switch, Redirect} from "react-router-dom"


import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'


import {useSelector} from "react-redux";
import storage from "../redux/rootActions";
import {ToastContainer} from "react-toastify";
import paths from "./paths";
import BoardPage from "./pages/BoardPage";
import AppsPage from "./pages/AppsPage";
import AppNewPage from "./pages/AppNewPage";
import AccountsPage from "./pages/AccountsPage";
import StreamsPage from "./pages/StreamsPage";
import LogsPage from "./pages/LogsPage";
import NotificationsPage from "./pages/NotificationsPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import DomainsPage from "./pages/DomainsPage";
import AppSinglePage from "./pages/AppSinglePage";
import NotificationSinglePage from "./pages/NotificationSinglePage";
import NotificationNewPage from "./pages/NotificationNewPage";
import GroupsPage from "./pages/GroupsPage";
import DocumentationPage from "./pages/DocumentationPage";
import ProfilePage from "./pages/ProfilePage";
import SmartNotificationsPage from "./pages/SmartNotificationsPage";
import AppsBuyerPage from "./pages/AppsBuyerPage";
import AppsTenantPage from "./pages/AppsTenantPage";
import SmartNotificationNewPage from "./pages/SmartNotificationNewPage";
import inArray from "../helpers/inArray";
import NotFoundPage from "./pages/NotFoundPage";
import AppsManagerPage from "./pages/AppsManagerPage";
import UsersTenantPage from "./pages/UsersTenantPage";


const appRights = rights => {
    const store = ['apps_playMarket', 'apps_appStore', 'apps_huawei',]
    const app = ['grey_r', 'grey_rw', 'white_r', 'white_rw']

    let storeRight = false
    store.forEach(store => {
        storeRight = storeRight || inArray(rights, store)
    })

    let appRight = false
    app.forEach(app => {
        appRight = appRight || inArray(rights, app)
    })

    return storeRight && appRight
}


function App() {
    const user = useSelector(state => state.auth)
    const [homePage, setHomePage] = useState('/')

    useEffect(() => {
        if (storage.auth.isAuthorized()) {
            storage.auth.get()
        }
    }, [])

    useEffect(() => {
        if (user.rights.length) {
            if (inArray(user.rights, 'board_rw')) {
                setHomePage(paths.BoardPage)
            } else if (appRights(user.rights)) {
                setHomePage(paths.AppsPage)
            } else if (inArray(user.rights, 'apps_buyer')) {
                setHomePage(paths.AppsBuyerPage)
            } else if (inArray(user.rights, 'apps_tenant')) {
                setHomePage(paths.AppsTenantPage)
            } else if (inArray(user.rights, 'apps_manager')) {
                setHomePage(paths.AppsManagerPage)
            } else if (inArray(user.rights, 'accs_r') || inArray(user.rights, 'accs_rw')) {
                setHomePage(paths.AccountsPage)
            } else if (inArray(user.rights, 'streams_own') || inArray(user.rights, 'streams_all')) {
                setHomePage(paths.StreamsPage)
            } else if (inArray(user.rights, 'domains')) {
                setHomePage(paths.DomainsPage)
            } else if (inArray(user.rights, 'log')) {
                setHomePage(paths.LogsPage)
            } else if (inArray(user.rights, 'dev')) {
                setHomePage(paths.DocumentationPage)
            } else if (inArray(user.rights, 'notifications_own') || inArray(user.rights, 'notifications_all')) {
                setHomePage(paths.NotificationsPage)
            } else if (inArray(user.rights, 'users')) {
                setHomePage(paths.UsersPage)
            } else if (inArray(user.rights, 'users_tenant')) {
                setHomePage(paths.UsersTenantPage)
            } else {
                setHomePage(paths.BoardPage)
            }
        }
    }, [user])


    return (
        <>
            <Switch>
                {
                    !!user.login
                        ? <>

                            <Route exact path={paths.BoardPage} component={BoardPage}/>

                            <Route exact path={paths.AppsBuyerPage} component={AppsBuyerPage}/>
                            <Route exact path={paths.AppsTenantPage} component={AppsTenantPage}/>
                            <Route exact path={paths.AppsManagerPage} component={AppsManagerPage}/>

                            <Route exact path={paths.AppPage} component={AppSinglePage}/>
                            <Route exact path={paths.NewAppPage} component={AppNewPage}/>
                            <Route exact path={paths.AppsPage} component={AppsPage}/>
                            <Route exact path={paths.AccountsPage} component={AccountsPage}/>
                            <Route exact path={paths.StreamsPage} component={StreamsPage}/>
                            <Route exact path={paths.DomainsPage} component={DomainsPage}/>
                            <Route exact path={paths.LogsPage} component={LogsPage}/>

                            <Route exact path={paths.SmartNotificationsPage} component={SmartNotificationsPage}/>
                            <Route exact path={paths.SmartNotificationNewPage} component={SmartNotificationNewPage}/>
                            <Route exact path={paths.NotificationNewPage} component={NotificationNewPage}/>
                            <Route exact path={paths.NotificationSinglePage} component={NotificationSinglePage}/>
                            <Route exact path={paths.NotificationsPage} component={NotificationsPage}/>

                            <Route exact path={paths.GroupsPage} component={GroupsPage}/>

                            <Route exact path={paths.UsersPage} component={UsersPage}/>
                            <Route exact path={paths.UsersTenantPage} component={UsersTenantPage}/>

                            <Route exact path={paths.DocumentationPage} component={DocumentationPage}/>
                            <Route exact path={paths.ProfilePage} component={ProfilePage}/>

                            <Route exact path={'/'} render={() => <Redirect to={homePage}/>}/>
                            {/*<Route path={''} component={NotFoundPage}/>*/}
                        </>
                        : <Route component={LoginPage}/>
                }
            </Switch>
            <ToastContainer/>
        </>
    )
}

export default App

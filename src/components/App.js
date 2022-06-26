import React, {useEffect, useState} from 'react'
import {Route, Switch} from "react-router-dom"


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


function App() {
    const user = useSelector(state => state.auth)
    const [homePage, setHomePage] = useState(() => BoardPage)

    useEffect(() => {
        if (storage.auth.isAuthorized()) {
            storage.auth.get()
        }
    }, [])

    useEffect(() => {
        if (inArray(user.rights, 'apps_buyer')) {
            setHomePage(() => AppsBuyerPage)
        } else if (inArray(user.rights, 'apps_tenant')) {
            setHomePage(() => AppsTenantPage)
        }
    }, [user])

    useEffect(() => {
        console.log('updated at 21:46')
    }, [])


    return (
        <>
            <Switch>
                {
                    !!user.login
                        ? <>
                            <Route exact path={paths.HomePage} component={homePage}/>
                            <Route exact path={paths.AppsBuyerPage} component={AppsBuyerPage}/>
                            <Route exact path={paths.AppsTenantPage} component={AppsTenantPage}/>
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
                            <Route exact path={paths.DocumentationPage} component={DocumentationPage}/>
                            <Route exact path={paths.ProfilePage} component={ProfilePage}/>
                        </>
                        : <Route component={LoginPage}/>
                }
            </Switch>
            <ToastContainer/>
        </>
    )
}

export default App

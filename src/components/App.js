import React, {useEffect} from 'react'
import {Route, Switch} from "react-router-dom"

import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'
import 'react-toastify/dist/ReactToastify.css';

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


function App() {
    const user = useSelector(state => state.auth)

    useEffect(() => {
        if (storage.auth.isAuthorized()) {
            storage.auth.get()
        }
    }, [])


    return (
        <>
            <Switch>
                {
                    !!user.login
                        ? <>
                            <Route exact path={paths.BoardPage} component={BoardPage}/>
                            <Route exact path={paths.AppPage} component={AppSinglePage}/>
                            <Route exact path={paths.NewAppPage} component={AppNewPage}/>
                            <Route exact path={paths.AppsPage} component={AppsPage}/>
                            <Route exact path={paths.AppsBuyerPage} component={AppsBuyerPage}/>
                            <Route exact path={paths.AppsTenantPage} component={AppsTenantPage}/>
                            <Route exact path={paths.AccountsPage} component={AccountsPage}/>
                            <Route exact path={paths.StreamsPage} component={StreamsPage}/>
                            <Route exact path={paths.DomainsPage} component={DomainsPage}/>
                            <Route exact path={paths.LogsPage} component={LogsPage}/>
                            <Route exact path={paths.SmartNotificationsPage} component={SmartNotificationsPage}/>
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

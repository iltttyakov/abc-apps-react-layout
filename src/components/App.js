import React from 'react'
import {Route, Switch} from "react-router-dom"


import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'


import BoardPage from "./pages/BoardPage";
import AppsPage from "./pages/AppsPage";
import NewAppPage from "./pages/NewAppPage";
import AccountsPage from "./pages/AccountsPage";
import StreamsPage from "./pages/StreamsPage";
import LogsPage from "./pages/LogsPage";
import NotificationsPage from "./pages/NotificationsPage";
import UsersPage from "./pages/UsersPage";


export const urls = {
    BoardPage: '/',
    AppsPage: '/apps',
    NewAppPage: '/apps/new',
    AccountsPage: '/accounts',
    StreamsPage: '/streams',
    LogsPage: '/logs',
    NotificationsPage: '/notifications',
    UsersPage: '/users',
}


function App() {
    return (
        <Switch>
            <Route exact path={urls.AppsPage} component={AppsPage}/>
            <Route exact path={urls.NewAppPage} component={NewAppPage}/>
            <Route exact path={urls.AccountsPage} component={AccountsPage}/>
            <Route exact path={urls.StreamsPage} component={StreamsPage}/>
            <Route exact path={urls.LogsPage} component={LogsPage}/>
            <Route exact path={urls.NotificationsPage} component={NotificationsPage}/>
            <Route exact path={urls.UsersPage} component={UsersPage}/>
            <Route exact path={urls.BoardPage} component={BoardPage}/>
        </Switch>
    )
}

export default App

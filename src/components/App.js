import React, {useEffect} from 'react'
import {Route, Switch} from "react-router-dom"


import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'
import 'react-toastify/dist/ReactToastify.css';


import BoardPage from "./pages/BoardPage";
import AppsPage from "./pages/AppsPage";
import NewAppPage from "./pages/NewAppPage";
import AccountsPage from "./pages/AccountsPage";
import StreamsPage from "./pages/StreamsPage";
import LogsPage from "./pages/LogsPage";
import NotificationsPage from "./pages/NotificationsPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import storage from "../redux/storage";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";


export const urls = {
    BoardPage: '/',
    LoginPage: '/login',
    AppsPage: '/apps',
    NewAppPage: '/apps/new',
    AccountsPage: '/accounts',
    StreamsPage: '/streams',
    LogsPage: '/logs',
    NotificationsPage: '/notifications',
    UsersPage: '/users',
}


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
                            <Route exact path={urls.AppsPage} component={AppsPage}/>
                            <Route exact path={urls.NewAppPage} component={NewAppPage}/>
                            <Route exact path={urls.AccountsPage} component={AccountsPage}/>
                            <Route exact path={urls.StreamsPage} component={StreamsPage}/>
                            <Route exact path={urls.LogsPage} component={LogsPage}/>
                            <Route exact path={urls.NotificationsPage} component={NotificationsPage}/>
                            <Route exact path={urls.UsersPage} component={UsersPage}/>
                            {/*<Route exact path={urls.BoardPage} component={BoardPage}/>*/}
                            <Route exact path={urls.BoardPage} component={AppsPage}/>
                        </>
                        : <Route exact path={urls.BoardPage} component={LoginPage}/>
                }
            </Switch>
            <ToastContainer/>
        </>
    )
}

export default App

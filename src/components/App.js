import React, {useEffect} from 'react'
import {Route, Switch, useLocation} from "react-router-dom"


import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'


import BoardPage from "./pages/BoardPage";
import AppsPage from "./pages/AppsPage";
import NewAppPage from "./pages/NewAppPage";
import AccountsPage from "./pages/AccountsPage";


function App() {
    return (
        <Switch>
            {/*<Route exact path={'/'} component={BoardPage}/>*/}
            {/*<Route exact path={'/'} component={AppsPage}/>*/}
            {/*<Route exact path={'/'} component={NewAppPage}/>*/}
            <Route exact path={'/'} component={AccountsPage}/>
        </Switch>
    )
}

export default App

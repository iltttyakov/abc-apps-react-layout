import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter} from "react-router-dom";

import {Provider} from 'react-redux'
import {store} from "./redux/store"

const app = (
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
)


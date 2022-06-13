import React from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Login from "../containers/Login/Login";
import Loader from "../ui/Loader/Loader";
import {useSelector} from "react-redux";


const LoginPage = () => {
    const user = useSelector(state => state.auth)

    return (
        <LayoutFluid>
            <Loader process={user.loginInProgress || user.getInProgress}>
                <Login/>
            </Loader>
        </LayoutFluid>
    );
};

export default LoginPage;
import React, {useEffect} from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Login from "../containers/Login/Login";
import Loader from "../ui/Loader/Loader";
import {useSelector} from "react-redux";
import setTitle from "../../helpers/seo";


const LoginPage = () => {
    useEffect(() => {
        setTitle('Авторизация')
    }, [])

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
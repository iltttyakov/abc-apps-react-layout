import React from 'react';
import LayoutFluid from "../wrappers/Layout/LayoutFluid";
import Login from "../containers/Login/Login";


const LoginPage = () => {
    return (
        <LayoutFluid>
            <Login/>
        </LayoutFluid>
    );
};

export default LoginPage;
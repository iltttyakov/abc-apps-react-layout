import React from 'react';
import cls from './Layout.module.scss'
import HeaderFluid from "../../sections/MainHeader/HeaderFluid";
import Container from "../Container/Container";


const LayoutFluid = ({children}) => {
    return (
        <>

            <header className={cls.header}>
                <HeaderFluid/>
            </header>

            <main className={cls.main}>
                <Container className={cls.container}>
                    {children}
                </Container>
            </main>

        </>
    );
};

export default LayoutFluid;
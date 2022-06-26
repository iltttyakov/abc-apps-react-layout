import React from 'react';
import cls from './Layout.module.scss'
import HeaderFluid from "../Header/HeaderFluid";
import Container from "../../ui/Container/Container";


const LayoutFluid = ({title, actions, children}) => {
    return (
        <>

            <HeaderFluid/>

            <Container>
                <main className={cls.main}>
                    {
                        title || actions
                            ? <div className={cls.pageHeaderFluid}>
                                <h1 className={cls.title}>{title}</h1>
                                <div className={cls.actions}>
                                    {actions}
                                </div>
                            </div>
                            : null
                    }
                    {children}
                </main>
            </Container>

        </>
    );
};

export default LayoutFluid;
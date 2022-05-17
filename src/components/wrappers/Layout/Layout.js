import React from 'react';
import cls from './Layout.module.scss'
import MainSidebar from "../../sections/MainSidebar/MainSidebar";
import MainHeader from "../../sections/MainHeader/MainHeader";

const Layout = (
    {
        children,
        fluid = false,
    }
) => {
    return (
        <div className={cls.box}>

            {
                !fluid
                    ? <div className={cls.sidebar}>
                        <MainSidebar/>
                    </div>
                    : null
            }

            <div className={cls.content}>

                <header className={cls.header}>
                    <MainHeader/>
                </header>

                <main className={cls.main}>

                    {children}

                </main>

            </div>

        </div>
    );
};

export default Layout;
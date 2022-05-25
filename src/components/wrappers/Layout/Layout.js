import React from 'react';
import cls from './Layout.module.scss'
import MainSidebar from "../../sections/MainSidebar/MainSidebar";
import MainHeader from "../../sections/MainHeader/MainHeader";

const Layout = ({children}) => {
    return (
        <div className={cls.box}>

            <div className={cls.sidebar}>
                <MainSidebar/>
            </div>

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
import React from 'react';
import cls from './Layout.module.scss'
import MainSidebar from "../MainSidebar/MainSidebar";
import HeaderMain from "../Header/HeaderMain";

const Layout = (
    {
        title,
        actions,
        children
    }
) => {
    return (
        <div className={cls.box}>

            <div className={cls.sidebar}>
                <MainSidebar/>
            </div>

            <div className={cls.content}>

                <HeaderMain/>

                <main className={cls.main}>
                    {
                        title || actions
                            ? <div className={cls.pageHeader}>
                                <h1 className={cls.title}>{title}</h1>
                                <div className={cls.actions}>
                                    {actions}
                                </div>
                            </div>
                            : null
                    }

                    {children}
                </main>

            </div>

        </div>
    );
};

export default Layout;
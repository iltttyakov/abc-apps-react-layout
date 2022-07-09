import React from 'react';
import cls from './Header.module.scss'
import ThemeSwitch from "../../containers/ThemeSwitch/ThemeSwitch";
import UserIcon from "../../containers/UserIcon/UserIcon";
import Balance from "../../containers/Balance/Balance";

const HeaderMain = () => {
    return (
        <header className={cls.box}>

            <div className={cls.right}>
                <div className={cls.balance}>
                    <Balance/>
                </div>

                <div className={cls.themeSwitch}>
                    <ThemeSwitch/>
                </div>

                <UserIcon/>
            </div>

        </header>
    );
};

export default HeaderMain;
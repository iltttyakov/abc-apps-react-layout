import React from 'react';
import cls from './Header.module.scss'
import ThemeSwitch from "../../containers/ThemeSwitch/ThemeSwitch";
import UserIcon from "../../containers/UserIcon/UserIcon";

const HeaderMain = () => {
    return (
        <header className={cls.box}>

            <div className={cls.themeSwitch}>
                <ThemeSwitch/>
            </div>

            <UserIcon/>

        </header>
    );
};

export default HeaderMain;
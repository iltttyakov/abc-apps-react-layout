import React from 'react';
import cls from './MainHeader.module.scss'
import ThemeSwitch from "../../ui/ThemeSwitch/ThemeSwitch";
import UserIcon from "../../ui/UserIcon/UserIcon";

const MainHeader = () => {
    return (
        <div className={cls.box}>

            <div className={cls.themeSwitch}>
                <ThemeSwitch/>
            </div>

            <UserIcon/>

        </div>
    );
};

export default MainHeader;
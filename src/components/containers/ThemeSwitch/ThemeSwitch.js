import React, {useEffect, useState} from 'react';
import cls from './ThemeSwitch.module.scss'
import Icons from "../../ui/Icons/Icons";
import Toggle from "../../ui/Toggle/Toggle";
import actions from "../../../redux/rootActions";
import {useSelector} from "react-redux";


const themeTypes = {
    night: 'night',
    day: 'day',
}


const ThemeSwitch = () => {
    const login = useSelector(state => state.auth.login)
    const theme = useSelector(state => state.auth.theme)

    const themeSwitchHandler = () => {
        const newTheme = theme === themeTypes.night
            ? themeTypes.day
            : themeTypes.night
        actions.auth.editTheme(newTheme)
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])


    return login
        ? <div className={cls.box}>
            <Icons className={cls.icon} size={20} name={'sun'}/>
            <Toggle
                className={cls.toggle}
                onChange={themeSwitchHandler}
                checked={theme === themeTypes.night}
            />
            <Icons className={cls.icon} size={20} name={'moon'}/>
        </div>
        : null
};

export default ThemeSwitch;
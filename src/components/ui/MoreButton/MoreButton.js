import React from 'react';
import cls from './MoreButton.module.scss'
import {NavLink} from "react-router-dom";
import Icons from "../Icons/Icons";


const MoreButton = (
    {
        color = 'dark'
    }
) => {
    const iconCls = [cls.icon]

    switch (color) {
        case 'dark':
            iconCls.push(cls.dark)
            break
        case 'light':
            iconCls.push(cls.light)
            break
    }

    return (
        <NavLink to={'#'}>
            <Icons name={'more'} size={20} className={iconCls.join(' ')}/>
        </NavLink>
    );
};

export default MoreButton;
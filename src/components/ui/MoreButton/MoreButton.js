import React from 'react';
import cls from './MoreButton.module.scss'
import {NavLink} from "react-router-dom";
import Icons from "../Icons/Icons";


const MoreButton = (
    {
        url = null,
        onClick = null,
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
        onClick
            ? <button className={cls.box} onClick={onClick}>
                <Icons name={'more'} size={20} className={iconCls.join(' ')}/>
            </button>
            : url
                ? <NavLink to={url} className={cls.box}>
                    <Icons name={'more'} size={20} className={iconCls.join(' ')}/>
                </NavLink>
                : null
    );
};

export default MoreButton;
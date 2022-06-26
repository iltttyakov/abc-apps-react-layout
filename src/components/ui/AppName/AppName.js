import React from 'react';
import cls from './AppName.module.scss'
import AppIcon from "../AppIcon/AppIcon";
import {NavLink} from "react-router-dom";

const AppName = (
    {
        name,
        icon = null,
        to = null,
        linkStore,
        style = {},
    }
) => {
    return (
        <div className={cls.box} style={style}>
            <AppIcon
                name={icon}
                className={cls.icon}
            />
            <span className={cls.name}>
                {name}
                {
                    to
                        ? <NavLink to={to} className={cls.nameLink}/>
                        : <a className={cls.nameLink} href={linkStore} target={'_blank'}></a>
                }
            </span>
        </div>
    );
};

export default AppName;
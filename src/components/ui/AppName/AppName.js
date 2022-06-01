import React from 'react';
import cls from './AppName.module.scss'
import AppIcon from "../AppIcon/AppIcon";

const AppName = (
    {
        name,
        icon = null,
        link_store,
    }
) => {
    return (
        <div className={cls.box}>
            <AppIcon
                name={icon}
                className={cls.icon}
            />
            <span className={cls.name}>
                <a className={cls.nameLink} href={link_store} target={'_blank'}>
                {name}
                </a>
            </span>
        </div>
    );
};

export default AppName;
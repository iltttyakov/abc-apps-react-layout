import React from 'react';
import cls from './AppIcon.module.scss'


import noIcon from './no_icon.png'
import icons from "../Icons/Icons";
import {getIconUrl} from "../../../helpers/getIconUrl";


const AppIcon = (
    {
        name,
        mode = 'false',
        className = null
    }
) => {
    return (
        <div
            className={[
                cls.container, className,
                mode === 'true' ? cls.mode : null,
            ].join(' ')}
        >
            <img
                className={cls.icon}
                src={name ? getIconUrl(name) : noIcon}
                width={26}
                height={26}
                alt={'Иконка приложения'}
            />
        </div>
    );
};

export default AppIcon;
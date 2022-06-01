import React from 'react';
import cls from './AppIcon.module.scss'

const BASE_URL = 'https://golotomo.site/img/apps/'
const getUrl = (name) => `${BASE_URL}${name}.png`

import noIcon from './no_icon.png'
import icons from "../Icons/Icons";

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
                src={name ? getUrl(name) : noIcon}
                width={26}
                height={26}
                alt={'Иконка приложения'}
            />
        </div>
    );
};

export default AppIcon;
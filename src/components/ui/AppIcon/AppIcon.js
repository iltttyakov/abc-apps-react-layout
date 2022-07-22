import React from 'react';
import cls from './AppIcon.module.scss'
import noIcon from './no_icon.png'
import {getIconUrl} from "../../../helpers/getIconUrl";


const AppIcon = (
    {
        name,
        mode = 'false',
        className = null,
    }
) => {
    return (
        <div
            className={[
                cls.container, className,
                mode === 'true' ? cls.mode : null,
            ].join(' ')}
        >
            {
                name
                    ? <img
                        className={cls.icon}
                        src={getIconUrl(name)}
                        width={26}
                        height={26}
                        alt={'Иконка приложения'}
                    />
                    : null
            }
        </div>
    );
};

export default AppIcon;
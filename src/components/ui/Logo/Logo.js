import React from 'react';
import cls from './Logo.module.scss'

import logoIcon from './logo-icon.svg'

const Logo = (
    {
        full = true
    }
) => {
    return (
        <div className={[cls.box, full ? null : cls.shrink].join(' ')}>
            <img className={cls.image} src={logoIcon} width={24} height={24} alt={'Иконка логотипа'}/>
            <span className={cls.text}>
                ABC Apps
            </span>
        </div>
    );
};

export default Logo;
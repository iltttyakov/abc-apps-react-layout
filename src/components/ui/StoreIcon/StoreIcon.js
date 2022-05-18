import React from 'react'
import cls from './StoreIcon.module.scss'

import googleIcon from './google-icon.png'

const StoreIcon = ({store = 'google'}) => {

    let icon = null
    let alt = ''
    switch (store) {
        case 'google':
            icon = googleIcon
            alt = 'Google Play'
    }

    return (
        <div className={cls.container}>
            <img
                className={cls.icon} src={icon} alt={alt}
            />
        </div>
    );
};

export default StoreIcon;
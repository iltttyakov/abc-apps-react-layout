import React from 'react'
import cls from './StoreIcon.module.scss'

import playMarket from './playMarket.svg'
import huawei from './huawei.svg'
import appStore from './appStore.svg'


const StoreIcon = ({store = 'google'}) => {
    let icon = null
    let alt = ''

    switch (store) {
        case 'PM':
            icon = playMarket
            alt = 'Play market'
            break

        case 'AS':
            icon = appStore
            alt = 'App Store'
            break

        case 'H':
            icon = huawei
            alt = 'Huawei'
            break
    }

    return (
        <div className={cls.container}>
            <img
                className={cls.icon} src={icon} alt={alt}
                width={22} height={22}
            />
        </div>
    );
};

export default StoreIcon;
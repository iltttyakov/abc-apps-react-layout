import React from 'react'
import cls from './StoreIcon.module.scss'

import playMarket from './playMarket.svg'
import huawei from './huawei.svg'
import appStore from './appStore.svg'
import makeId from "../../../helpers/makeid";


export const StoreIconSizes = {
    NORMAL: 'normal',
    SMALL: 'small'
}


const StoreIcon = (
    {
        store,
        size = StoreIconSizes.NORMAL
    }
) => {
    const iconCls = [cls.icon]

    if (size === StoreIconSizes.SMALL) iconCls.push(cls.small)

    let icons = []

    store.split(',').forEach(store => {
        if (store === 'PM' || store === 'playMarket') {
            icons.push(
                <img
                    key={makeId(3)}
                    className={iconCls.join(' ')} src={playMarket} alt={'Play market'}
                    width={22} height={22}
                />
            )
        } else if (store === 'AS' || store === 'appStore') {
            icons.push(
                <img
                    key={makeId(3)}
                    className={iconCls.join(' ')} src={appStore} alt={'AppSingle Store'}
                    width={22} height={22}
                />
            )
        } else if (store === 'H' || store === 'huawei') {
            icons.push(
                <img
                    key={makeId(3)}
                    className={iconCls.join(' ')} src={huawei} alt={'Huawei'}
                    width={22} height={22}
                />
            )
        }
    })


    return (
        <div className={cls.container}>
            {
                icons.length
                    ? icons
                    : null
            }
        </div>
    );
};

export default StoreIcon;
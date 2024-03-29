import React from 'react';
import cls from './AppList.module.scss'


const AppList = (
    {
        items
    }
) => {
    return (
        <ul className={cls.list}>
            {
                Object.keys(items).map((key, i) => {
                    return (
                        <li className={cls.item} key={i}>
                            {items[key]}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default AppList;
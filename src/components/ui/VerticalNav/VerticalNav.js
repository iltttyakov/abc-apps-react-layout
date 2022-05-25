import React from 'react';
import cls from './VerticalNav.module.scss'
import Icons from "../Icons/Icons";
import {urls} from "../../App";
import {NavLink} from "react-router-dom";


const navList = [
    {
        iconName: 'menu',
        label: 'Доска',
        link: '/',
    },
    {
        iconName: 'grid',
        label: 'Приложения',
        link: '/apps',
    },
    {
        iconName: 'user-scan',
        label: 'Аккаунты',
        link: '/accounts',
    },
    {
        iconName: 'swap',
        iconType: 'stroke',
        label: 'Потоки',
        link: '/streams',
    },
    // {
    //     iconName: 'discovery',
    //     label: 'Домены',
    //     active: false,
    //     link: '#',
    // },
    {
        iconName: 'close-circle',
        label: 'Логи',
        link: '/logs',
    },
    // {
    //     iconName: 'note',
    //     label: 'Документация',
    //     link: '#',
    // },
    {
        iconName: 'notification',
        label: 'Уведомления',
        link: '/notifications',
    },
    {
        iconName: 'two-user',
        label: 'Пользователи',
        link: '/users',
    },
]

const VerticalNav = (
    {
        full = true
    }
) => {
    return (
        <ul className={[cls.list, full ? null : cls.shrink].join(' ')}>

            {
                Object.keys(navList).map((keyName, i) => {
                    return (
                        <li
                            className={[cls.item].join(' ')}
                            key={i}
                        >
                            <NavLink
                                exact
                                to={navList[i]['link']}
                                className={cls.link}
                                activeClassName={cls.active}
                            />
                            <Icons
                                className={[cls.icon, navList[i]['iconType'] ? cls.stroke : null].join(' ')}
                                size={24} name={navList[i]['iconName']}
                            />
                            <span className={cls.label}>{navList[i]['label']}</span>
                        </li>
                    )
                })
            }

        </ul>
    );
};

export default VerticalNav;
import React from 'react';
import cls from './VerticalNav.module.scss'
import Icons from "../Icons/Icons";


const navList = [
    {
        iconName: 'menu',
        label: 'Доска',
        active: true,
        link: '#',
    },
    {
        iconName: 'grid',
        label: 'Приложения',
        active: false,
        link: '#',
    },
    {
        iconName: 'user-scan',
        label: 'Аккаунты',
        active: false,
        link: '#',
    },
    {
        iconName: 'swap',
        label: 'Потоки',
        active: false,
        link: '#',
    },
    {
        iconName: 'discovery',
        label: 'Домены',
        active: false,
        link: '#',
    },
    {
        iconName: 'close-circle',
        label: 'Логи',
        active: false,
        link: '#',
    },
    {
        iconName: 'note',
        label: 'Документация',
        active: false,
        link: '#',
    },
    {
        iconName: 'notification',
        label: 'Уведомления',
        active: false,
        link: '#',
    },
    {
        iconName: 'two-user',
        label: 'Пользователи',
        active: false,
        link: '#',
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
                            className={[cls.item, navList[i]['active'] ? cls.active : null].join(' ')}
                            key={i}
                        >
                            <Icons className={cls.icon} size={24} name={navList[i]['iconName']}/>
                            <span className={cls.label}>{navList[i]['label']}</span>
                            <a href={navList[i]['link']} className={cls.link}/>
                        </li>
                    )
                })
            }

        </ul>
    );
};

export default VerticalNav;
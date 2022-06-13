import React from 'react';
import cls from './VerticalNav.module.scss'
import Icons from "../../ui/Icons/Icons";
import {NavLink} from "react-router-dom";
import paths from "../../paths";


const navList = [
    {
        iconName: 'menu',
        label: 'Доска',
        link: paths.BoardPage,
    },
    {
        iconName: 'grid',
        label: 'Приложения',
        link: paths.AppsPage,
    },
    {
        iconName: 'grid',
        label: 'Приложения (покупатели)',
        link: paths.AppsBuyerPage,
    },
    {
        iconName: 'grid',
        label: 'Приложения (арендаторы)',
        link: paths.AppsTenantPage,
    },
    {
        iconName: 'user-scan',
        label: 'Аккаунты',
        link: paths.AccountsPage,
    },
    {
        iconName: 'swap',
        iconType: 'stroke',
        label: 'Потоки',
        link: paths.StreamsPage,
    },
    {
        iconName: 'discovery',
        label: 'Домены',
        link: paths.DomainsPage,
    },
    {
        iconName: 'close-circle',
        label: 'Логи',
        link: '/logs',
    },
    {
        iconName: 'note',
        label: 'Документация',
        link: paths.DocumentationPage,
    },
    {
        iconName: 'notification',
        label: 'Уведомления',
        link: paths.NotificationsPage,
    },
    {
        iconName: 'two-user',
        label: 'Пользователи',
        link: paths.UsersPage,
    },
]

const VerticalNav = () => {
    return (
        <ul className={cls.list}>
            {navList.map((item, i) =>
                <li
                    className={[cls.item].join(' ')}
                    key={i}
                >
                    <NavLink
                        exact
                        to={item['link']}
                        className={cls.link}
                        activeClassName={cls.active}
                    />
                    <Icons
                        className={[
                            cls.icon,
                            item['iconType'] ? cls.stroke : null
                        ].join(' ')}
                        size={24} name={item['iconName']}
                    />
                    <span className={cls.label}>{navList[i]['label']}</span>
                </li>
            )}
        </ul>
    );
};

export default VerticalNav;
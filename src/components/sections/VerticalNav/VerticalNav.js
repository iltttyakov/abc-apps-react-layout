import React from 'react';
import cls from './VerticalNav.module.scss'
import Icons from "../../ui/Icons/Icons";
import {NavLink} from "react-router-dom";
import paths from "../../paths";
import RoleFunc from "../../containers/Role/RoleFunc";
import inArray from "../../../helpers/inArray";


const navList = [
    {
        iconName: 'menu',
        label: 'Доска',
        link: paths.HomePage,
        access: rights => {
            return inArray(rights, 'board_rw')
        }
    },
    {
        iconName: 'grid',
        label: 'Приложения',
        link: paths.AppsPage,
        access: rights => {
            const store = ['apps_playMarket', 'apps_appStore', 'apps_huawei',]
            const app = ['grey_r', 'grey_rw', 'white_r', 'white_rw']

            let storeRight = false
            store.forEach(store => {
                storeRight = storeRight || inArray(rights, store)
            })

            let appRight = false
            app.forEach(app => {
                appRight = appRight || inArray(rights, app)
            })

            return storeRight && appRight
        }
    },
    {
        iconName: 'grid',
        label: 'Приложения',
        link: paths.AppsBuyerPage,
        access: rights => inArray(rights, 'apps_buyer')
    },
    {
        iconName: 'grid',
        label: 'Приложения',
        link: paths.AppsTenantPage,
        access: rights => inArray(rights, 'apps_tenant')
    },
    {
        iconName: 'user-scan',
        label: 'Аккаунты',
        link: paths.AccountsPage,
        access: rights => inArray(rights, 'accs_r') || inArray(rights, 'accs_rw')
    },
    {
        iconName: 'swap',
        iconType: 'stroke',
        label: 'Потоки',
        link: paths.StreamsPage,
        access: rights => inArray(rights, 'streams_own') || inArray(rights, 'streams_all')
    },
    {
        iconName: 'discovery',
        label: 'Домены',
        link: paths.DomainsPage,
        access: rights => inArray(rights, 'domains')
    },
    {
        iconName: 'close-circle',
        label: 'Логи',
        link: '/logs',
        access: rights => inArray(rights, 'log')
    },
    {
        iconName: 'note',
        label: 'Документация',
        link: paths.DocumentationPage,
        access: rights => inArray(rights, 'dev')
    },
    {
        iconName: 'notification',
        label: 'Уведомления',
        link: paths.NotificationsPage,
        access: rights => inArray(rights, 'notifications_own') || inArray(rights, 'notifications_all')
    },
    {
        iconName: 'two-user',
        label: 'Пользователи',
        link: paths.UsersPage,
        access: rights => inArray(rights, 'users')
    },
]

const VerticalNav = () => {
    return (
        <ul className={cls.list}>
            {navList.map((item, i) =>
                <RoleFunc callback={item['access']} key={i}>
                    <li className={[cls.item].join(' ')}>
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
                </RoleFunc>
            )}
        </ul>
    );
};

export default VerticalNav;
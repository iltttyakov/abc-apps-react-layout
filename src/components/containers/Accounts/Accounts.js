import React from 'react';
import {useForm} from "react-hook-form";
import Page from "../../ui/Page/Page";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Table from "../../ui/Table/Table";
import {StatusTypes} from "../../ui/StatusTag/StatusTag";

import appIcon1 from './app-icons/app-icon-1.png'
import appIcon2 from './app-icons/app-icon-2.png'
import appIcon3 from './app-icons/app-icon-3.png'
import appIcon4 from './app-icons/app-icon-4.png'
import appIcon5 from './app-icons/app-icon-5.png'
import appIcon6 from './app-icons/app-icon-6.png'
import AccountTableRow from "./AccountTableRow";


const accounts = [
    {
        icon: appIcon1,
        name: '0830',
        status: StatusTypes.PUBLISH,
        farm: 'Фарм',
        store: 'PM',
        host: 'Хост',
        port: 'Порт',
        login: 'Логин',
        password: 'Пароль',
        domain: '',
        login2: 'Логин',
        password2: 'Пароль',
    },
    {
        icon: appIcon2,
        name: '0830',
        status: StatusTypes.BAN,
        farm: 'Фарм',
        store: 'PM',
        host: 'Хост',
        port: 'Порт',
        login: 'Логин',
        password: 'Пароль',
        domain: '',
        login2: 'Логин',
        password2: 'Пароль',
    },
    {
        icon: appIcon3,
        name: '0830',
        status: StatusTypes.MODERATION,
        farm: 'Фарм',
        store: 'PM',
        host: 'Хост',
        port: 'Порт',
        login: 'Логин',
        password: 'Пароль',
        domain: '',
        login2: 'Логин',
        password2: 'Пароль',
    },
    {
        icon: appIcon4,
        name: '0830',
        status: StatusTypes.MODERATION,
        farm: 'Фарм',
        store: 'PM',
        host: 'Хост',
        port: 'Порт',
        login: 'Логин',
        password: 'Пароль',
        domain: '',
        login2: 'Логин',
        password2: 'Пароль',
    },
    {
        icon: appIcon5,
        name: '0830',
        status: StatusTypes.BAN,
        farm: 'Фарм',
        store: 'PM',
        host: 'Хост',
        port: 'Порт',
        login: 'Логин',
        password: 'Пароль',
        domain: '',
        login2: 'Логин',
        password2: 'Пароль',
    },
    {
        icon: appIcon6,
        name: '0830',
        status: StatusTypes.PUBLISH,
        farm: 'Фарм',
        store: 'PM',
        host: 'Хост',
        port: 'Порт',
        login: 'Логин',
        password: 'Пароль',
        domain: '',
        login2: 'Логин',
        password2: 'Пароль',
    },
]


const Accounts = () => {
    const form = useForm({
        defaultValues: {
            filter: ['handed-over', 'farm']
        },
    })

    const columns = [
        {
            width: 7,
            filterable: true,
            filter: {
                multiple: false,
                name: 'd',
                label: 'D',
                options: [
                    {label: 'D', value: 'D'},
                    {label: 'D2', value: 'D2'},
                    {label: 'D3', value: 'D3'},
                ],
                ...form
            }
        },
        {
            width: 14,
            sortable: true,
            sorting: {
                label: 'Название',
                name: 'name',
                ...form
            }
        },
        {
            width: 7,
            filterable: true,
            filter: {
                multiple: false,
                name: 'farm',
                label: 'Фарм',
                options: [
                    {label: 'Фарм', value: 'farm'},
                    {label: 'Не фарм', value: 'not-farm'}
                ],
                ...form
            }
        },
        {
            width: 7,
            filterable: true,
            filter: {
                multiple: false,
                name: 'store',
                label: 'PM',
                options: [
                    {label: 'PM', value: 'PM'},
                    {label: 'AS', value: 'AS'},
                    {label: 'H', value: 'H'},
                ],
                ...form
            }
        },
        {header: 'Хост'},
        {header: 'Порт'},
        {header: 'Логин'},
        {header: 'Пароль'},
        {header: 'Домен'},
        {header: 'Пароль'},
        {}
    ]

    return (
        <>
            <Page.Top margin={38}>
                <FilterPanel
                    name={'filter'}
                    options={[
                        {value: 'handed-over', label: 'Сдан'},
                        {value: 'farm', label: 'Фарм'},
                        {value: 'ban', label: 'Бан'},
                    ]}
                    {...form}
                />
            </Page.Top>

            <Table
                columns={columns}
                data={accounts.map((account, i) => <AccountTableRow {...account} key={i}/>)}
            />

        </>

    );
};

export default Accounts;
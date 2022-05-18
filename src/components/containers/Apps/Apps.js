import React from 'react';
import {useForm} from "react-hook-form";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Page from "../../ui/Page/Page";
import Table from "../../ui/Table/Table";
import AppTableRow from "./AppTableRow";

import appIcon1 from './app-icons/app-icon-1.png'
import appIcon2 from './app-icons/app-icon-2.png'
import appIcon3 from './app-icons/app-icon-3.png'
import appIcon4 from './app-icons/app-icon-4.png'
import appIcon5 from './app-icons/app-icon-5.png'
import appIcon6 from './app-icons/app-icon-6.png'

const appList = [
    {
        appName: 'App Name',
        appIcon: appIcon1,
        status: 'publish',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon2,
        status: 'ban',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon3,
        status: 'moderation',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon4,
        status: 'moderation',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon5,
        status: 'ban',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon6,
        status: 'publish',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
]

const Apps = () => {
    const form = useForm({
        defaultValues: {
            filter: ['publish', 'moderation']
        },
    })

    const columns = [
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
            width: 10,
        },
        {
            width: 6,
            sortable: true,
            sorting: {
                label: 'ID',
                name: 'id',
                ...form
            }
        },
        {
            width: 8,
            filterable: true,
            filter: {
                name: 'type',
                label: 'Тип',
                options: [
                    {label: 'Белое', value: 'white'},
                    {label: 'Серое', value: 'grey'}
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
        {
            width: 11,
            sortable: true,
            sorting: {
                label: 'Аккаунт',
                name: 'account',
                ...form
            }
        },
        {
            width: 9,
            sortable: true,
            sorting: {
                label: 'Залив',
                name: 'publish',
                ...form
            }
        },
        {
            width: 9,
            sortable: true,
            sorting: {
                label: 'Апрув',
                name: 'approve',
                ...form
            }
        },
        {
            width: 9,
            sortable: true,
            sorting: {
                label: 'Бан',
                name: 'ban',
                ...form
            }
        },
        {
            filterable: true,
            filter: {
                name: 'organic',
                label: 'Органика',
                options: [
                    {label: 'Органика', value: 'organic'},
                    {label: 'Нет', value: 'not-organic'}
                ],
                ...form
            }
        },
        {
            header: null
        }
    ]


    return (
        <>
            <Page.Top margin={38}>
                <FilterPanel
                    name={'filter'}
                    options={[
                        {value: 'publish', label: 'Опубликовано'},
                        {value: 'moderation', label: 'На модерации'},
                        {value: 'ban', label: 'Бан'},
                        {value: 'all', label: 'Все приложения'},
                    ]}
                    {...form}
                />
            </Page.Top>

            <Table
                columns={columns}
                data={appList.map(
                    (app, i) => <AppTableRow key={i} {...app} />
                )}
            />

        </>
    );
};

export default Apps;
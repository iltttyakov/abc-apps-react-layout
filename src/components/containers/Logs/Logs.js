import React from 'react';
import Page from "../../ui/Page/Page";
import TabPanel from "../../ui/TabPanel/TabPanel";
import {useForm} from "react-hook-form";


import appIcon1 from './app-icons/app-icon-1.png'
import appIcon2 from './app-icons/app-icon-2.png'
import appIcon3 from './app-icons/app-icon-3.png'
import appIcon4 from './app-icons/app-icon-4.png'
import appIcon5 from './app-icons/app-icon-5.png'
import appIcon6 from './app-icons/app-icon-6.png'
import Table from "../../ui/Table/Table";
import LogTableRow from "./LogTableRow";


const logs = [
    {
        id: '43678',
        appIcon: appIcon1,
        appName: 'App Name',
        date: '18.03.2022 17:37:39',
        message: 'Сообщение',
        message2: '',
        request: 'id=301',
        host: 'domen',
    },
    {
        id: '43678',
        appIcon: appIcon2,
        appName: 'App Name',
        date: '18.03.2022 17:37:39',
        message: 'Сообщение',
        message2: '',
        request: 'id=301',
        host: 'domen',
    },
    {
        id: '43678',
        appIcon: appIcon3,
        appName: 'App Name',
        date: '18.03.2022 17:37:39',
        message: 'Сообщение',
        message2: '',
        request: 'id=301',
        host: 'domen',
    },
    {
        id: '43678',
        appIcon: appIcon4,
        appName: 'App Name',
        date: '18.03.2022 17:37:39',
        message: 'Сообщение',
        message2: '',
        request: 'id=301',
        host: 'domen',
    },
    {
        id: '43678',
        appIcon: appIcon5,
        appName: 'App Name',
        date: '18.03.2022 17:37:39',
        message: 'Сообщение',
        message2: '',
        request: 'id=301',
        host: 'domen',
    },
    {
        id: '43678',
        appIcon: appIcon6,
        appName: 'App Name',
        date: '18.03.2022 17:37:39',
        message: 'Сообщение',
        message2: '',
        request: 'id=301',
        host: 'domen',
    },
]


const Logs = () => {
    const form = useForm(
        {
            defaultValues: {
                filter: 'app_info'
            }
        }
    )

    const columns = [
        {
            width: 10,
            sortable: true,
            sorting: {
                label: '#',
                name: 'id',
                ...form
            }
        },
        {
            width: 5,
        },
        {
            width: 13,
            sortable: true,
            sorting: {
                label: 'Приложение',
                name: 'app',
                ...form
            }
        },
        {
            width: 13,
            sortable: true,
            sorting: {
                label: 'Дата',
                name: 'date',
                ...form
            }
        },
        {width: 16, header: 'Сообщение'},
        {width: 16, header: 'Сообщение 2'},
        {width: 18, header: 'Запрос'},
        {header: 'Хост'},
    ]

    return (
        <>

            <Page.Top>
                <TabPanel
                    options={[
                        {label: 'app_info', value: 'app_info'},
                        {label: 'dmbxohsizz', value: 'dmbxohsizz'},
                        {label: 'crypto_errors', value: 'crypto_errors'},
                        {label: 'send_onesignal_id', value: 'send_onesignal_id'},
                        {label: 'FruitWin', value: 'FruitWin'},
                        {label: 'Crystal Win', value: 'Crystal Win'},
                    ]}
                    name={'filter'}
                    {...form}
                />
            </Page.Top>

            <Table
                columns={columns}
                data={logs.map((log, i) => <LogTableRow {...log} key={i}/>)}
            />

        </>
    );
};

export default Logs;
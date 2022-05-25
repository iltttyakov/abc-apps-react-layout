import React from 'react';
import Page from "../../ui/Page/Page";
import TabPanel from "../../ui/TabPanel/TabPanel";
import {useForm} from "react-hook-form";
import {StatusTypes} from "../../ui/StatusTag/StatusTag";
import Table from "../../ui/Table/Table";
import NotificationTableRow from "./NotificationTableRow";
import Modal from "../../ui/Modal/Modal";


const notificationsList = [
    {
        title: 'Title',
        status: StatusTypes.PUBLISH,
        date: '18.03.2022 17:37',
        text: 'text',
        owner: 'user',
        received: '3',
        ctr: '0',
    },
    {
        title: 'Title',
        status: StatusTypes.MODERATION,
        date: '18.03.2022 17:37',
        text: 'text',
        owner: 'user',
        received: '2',
        ctr: '0',
    },
    {
        title: 'Title',
        status: StatusTypes.PUBLISH,
        date: '18.03.2022 17:37',
        text: 'text',
        owner: 'user',
        received: '3',
        ctr: '0',
    },
]


const Notifications = () => {
    const notificationsForm = useForm(
        {
            defaultValues: {
                'filter': ['notifications']
            }
        }
    )
    const notificationsColumns = [
        {
            checkable: true,
            width: 4,
            check: {...notificationsForm}
        },
        {
            width: 10,
            sortable: true,
            sorting: {
                label: 'Заголовок',
                name: 'title',
                ...notificationsForm
            },
        },
        {
            width: 14,
        },
        {
            width: 14,
            sortable: true,
            sorting: {
                label: 'Дата',
                name: 'date',
                ...notificationsForm
            },
        },
        {
            width: 23,
            sortable: true,
            sorting: {
                label: 'Текст',
                name: 'text',
                ...notificationsForm
            },
        },
        {
            width: 13,
            sortable: true,
            sorting: {
                label: 'Владелец',
                name: 'owner',
                ...notificationsForm
            },
        },
        {
            width: 9,
            header: 'Получено'
        },
        {
            width: 4,
            header: 'CTR, %'
        },
        {}
    ]

    return (
        <>

            <Page.Top>
                <TabPanel
                    options={[
                        {label: 'Уведомления', value: 'notifications'},
                        {label: 'Группы приложений', value: 'apps_groups'},
                        {label: 'Смарт', value: 'smart'},
                    ]}
                    name={'filter'}
                    {...notificationsForm}
                />
            </Page.Top>

            <Table
                columns={notificationsColumns}
                data={notificationsList.map((notification, i) =>
                    <NotificationTableRow {...notification} {...notificationsForm} key={i}/>
                )}
            />

        </>
    );
};

export default Notifications;
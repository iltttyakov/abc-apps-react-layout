import React from 'react';
import Page from "../../ui/Page/Page";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import {useForm} from "react-hook-form";
import Table from "../../ui/Table/Table";


import appIcon1 from './app-icons/app-icon-1.png'
import appIcon2 from './app-icons/app-icon-2.png'
import appIcon3 from './app-icons/app-icon-3.png'
import appIcon4 from './app-icons/app-icon-4.png'
import appIcon5 from './app-icons/app-icon-5.png'
import appIcon6 from './app-icons/app-icon-6.png'
import StreamTableRow from "./StreamTableRow";


const streams = [
    {
        appName: 'App Name',
        appIcon: appIcon1,
        ban: false,
        organic: 'organic',
        link: 'https://www...',
        owner: 'user',
        offer: '',
        i: '18',
        r: '0',
        d: '0',
        i2r: '0',
        r2d: 'n/a',
        i2d: '0',
    },
    {
        appName: 'App Name',
        appIcon: appIcon2,
        ban: true,
        organic: 'organic',
        link: 'https://www...',
        owner: 'user',
        offer: '',
        i: '1263',
        r: '12',
        d: '12',
        i2r: '12',
        r2d: 'n/a',
        i2d: '12',
    },
    {
        appName: 'App Name',
        appIcon: appIcon3,
        ban: false,
        organic: 'organic',
        link: 'https://www...',
        owner: 'user',
        offer: '',
        i: '323',
        r: '0',
        d: '0',
        i2r: '0',
        r2d: 'n/a',
        i2d: '0',
    },
    {
        appName: 'App Name',
        appIcon: appIcon4,
        ban: false,
        organic: 'organic',
        link: 'https://www...',
        owner: 'user',
        offer: '',
        i: '432',
        r: '0',
        d: '0',
        i2r: '0',
        r2d: 'n/a',
        i2d: '0',
    },
    {
        appName: 'App Name',
        appIcon: appIcon5,
        ban: true,
        organic: 'organic',
        link: 'https://www...',
        owner: 'user',
        offer: '',
        i: '20',
        r: '0',
        d: '0',
        i2r: '0',
        r2d: 'n/a',
        i2d: '0',
    },
    {
        appName: 'App Name',
        appIcon: appIcon6,
        ban: false,
        organic: 'organic',
        link: 'https://www...',
        owner: 'user',
        offer: '',
        i: '123',
        r: '0',
        d: '0',
        i2r: '0',
        r2d: 'n/a',
        i2d: '0',
    },
]


const Streams = () => {
    const form = useForm()

    const columns = [
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
            width: 9,
        },
        {
            width: 13,
            sortable: true,
            sorting: {
                label: 'Organic',
                name: 'organic',
                ...form
            }
        },
        {width: 13, header: 'Ссылка'},
        {width: 10, header: 'Владелец'},
        {width: 9, header: 'Оффер'},
        {
            width: 4,
            sortable: true,
            sorting: {
                label: 'I',
                name: 'i',
                ...form
            }
        },
        {
            width: 4,
            sortable: true,
            sorting: {
                label: 'R',
                name: 'r',
                ...form
            }
        },
        {
            width: 4,
            sortable: true,
            sorting: {
                label: 'D',
                name: 'd',
                ...form
            }
        },
        {
            width: 5,
            sortable: true,
            sorting: {
                label: 'I2R',
                name: 'i2r',
                ...form
            }
        },
        {
            width: 5,
            sortable: true,
            sorting: {
                label: 'R2D',
                name: 'r2d',
                ...form
            }
        },
        {
            width: 5,
            sortable: true,
            sorting: {
                label: 'I2D',
                name: 'i2d',
                ...form
            }
        },
        {}
    ]

    return (
        <>

            <Page.Top margin={34}>
                <FilterPanel
                    name={'filter'}
                    options={[
                        {label: 'Скрыть забаненные', value: 'hide-ban'}
                    ]}
                    align={'right'}
                    {...form}
                />
            </Page.Top>

            <Page.Content padding={'none'}>

                <Table
                    columns={columns}
                    data={streams.map((stream, i) => <StreamTableRow {...stream} key={i}/>)}
                />
            </Page.Content>

        </>
    );
};

export default Streams;
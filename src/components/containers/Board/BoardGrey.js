import React from 'react';
import accountIcon from "./account-icon.jpg";
import AppCard from "../../ui/AppCard/AppCard";
import AccountCard from "../../ui/AccountCard/AccountCard";
import AppList from "../../ui/AppList/AppList";

import appIcon1 from './app-icon-1.png'
import appIcon2 from './app-icon-2.png'
import appIcon3 from './app-icon-3.png'

const appGreyList = [
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'grey',
                date: '30.03.2022',
                backgroundColor: 'yellow',
                icon: appIcon1
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'grey',
                date: '30.03.2022',
                backgroundColor: 'yellow',
                icon: appIcon2
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'grey',
                date: '30.03.2022',
                backgroundColor: 'grey',
                icon: appIcon3
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'grey',
                date: '30.03.2022',
                backgroundColor: 'yellow',
                icon: appIcon1
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green'
            },
            {
                appName: 'App Name',
                type: 'grey',
                date: '30.03.2022',
                backgroundColor: 'green',
                icon: appIcon2
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green',
                icon: appIcon1
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'green',
                icon: appIcon2
            },
            {
                appName: 'App Name',
                type: 'grey',
                date: '30.03.2022',
                backgroundColor: 'red',
                icon: appIcon3
            },
        ]
    },
]


const appGreyCardList = []

appGreyList.forEach(item => {
    const appList = []
    item['appList'].forEach((item, i) => {
        appList.push(
            <AppCard
                key={i}
                appName={item['appName']}
                type={item['type']}
                backgroundColor={item['backgroundColor']}
                icon={item['icon']}
                date={item['date']}
            />
        )
    })

    appGreyCardList.push(
        <AccountCard
            name={item['accountName']}
            icon={item['accountIcon']}
            note={item['accountNote']}
            appList={<AppList items={appList}/>}
        />
    )
})

export default appGreyCardList
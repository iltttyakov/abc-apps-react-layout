import React from 'react';
import accountIcon from "./account-icon.jpg";
import AppCard from "../../ui/AppCard/AppCard";
import AccountCard from "../../ui/AccountCard/AccountCard";
import AppList from "../../ui/AppList/AppList";

import appIcon1 from './app-icon-1.png'
import appIcon2 from './app-icon-2.png'
import appIcon3 from './app-icon-3.png'

const appBanList = [
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        date: '30.03.2022',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'grey',
                backgroundColor: 'red',
                icon: appIcon1
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        date: '30.03.2022',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'grey',
                backgroundColor: 'red',
                icon: appIcon2
            },
        ]
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        date: '30.03.2022',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'grey',
                backgroundColor: 'red',
                icon: appIcon3
            },
        ]
    },
]


const appBanCardList = []

appBanList.forEach(item => {
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

    appBanCardList.push(
        <AccountCard
            name={item['accountName']}
            icon={item['accountIcon']}
            note={item['accountNote']}
            appList={<AppList items={appList}/>}
            date={item['date']}
        />
    )
})

export default appBanCardList
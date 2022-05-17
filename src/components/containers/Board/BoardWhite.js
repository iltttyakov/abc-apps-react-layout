import React from 'react';
import accountIcon from "./account-icon.jpg";
import AppCard from "../../ui/AppCard/AppCard";
import AccountCard from "../../ui/AccountCard/AccountCard";
import AppList from "../../ui/AppList/AppList";



const appWhiteList = [
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        appList: [
            {
                appName: 'App Name',
                type: 'white',
                date: '30.03.2022',
                backgroundColor: 'yellow'
            },
            {
                appName: 'App Name',
                type: 'white',
                date: '30.03.2022',
                backgroundColor: 'yellow'
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
                backgroundColor: 'red'
            },
            {
                appName: 'App Name',
                type: 'white',
                backgroundColor: 'red'
            },
        ]
    }
]


const appWhiteCardList = []

appWhiteList.forEach(item => {
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

    appWhiteCardList.push(
        <AccountCard
            name={item['accountName']}
            icon={item['accountIcon']}
            note={item['accountNote']}
            appList={<AppList items={appList}/>}
        />
    )
})

export default appWhiteCardList
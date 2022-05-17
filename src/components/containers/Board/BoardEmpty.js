import React from 'react';
import accountIcon from "./account-icon.jpg";
import AccountCard from "../../ui/AccountCard/AccountCard";


const appEmptyList = [
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'green',
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'yellow',
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'green',
    },

    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'yellow',
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'green',
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'green',
    },

    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'green',
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'green',
    },
    {
        accountIcon: accountIcon,
        accountName: 'o320',
        accountNote: 'Примечание к аккаунту',
        backgroundColor: 'yellow',
    },
]


const appEmptyCardList = []

appEmptyList.forEach(item => {
    appEmptyCardList.push(
        <AccountCard
            name={item['accountName']}
            icon={item['accountIcon']}
            note={item['accountNote']}
            backgroundColor={item['backgroundColor']}
        />
    )
})

export default appEmptyCardList
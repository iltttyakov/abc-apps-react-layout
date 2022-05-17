import React, {useState} from 'react';
import TabPanel from "../../ui/TabPanel/TabPanel";
import CardList from "../../ui/CardList/CardList";

import appGreyCardList from "./BoardGrey";
import Page from "../../ui/Page/Page";
import appWhiteCardList from "./BoardWhite";
import appEmptyCardList from "./BoardEmpty";
import appBanCardList from "./BoardBan";

const initialTabList = [
    {
        label: 'С серыми',
        value: 'grey',
        checked: true,
    },
    {
        label: 'С белыми',
        value: 'white'
    },
    {
        label: 'Без приложений',
        value: 'empty'
    },
    {
        label: 'Бан',
        value: 'ban'
    },
    {
        label: 'Скрытые',
        value: 'hide'
    },
]

const tabs = {
    'grey': appGreyCardList,
    'white': appWhiteCardList,
    'empty': appEmptyCardList,
    'ban': appBanCardList,
    'hide': appGreyCardList,
}


const Board = () => {
    let [tabList, setTabList] = useState(initialTabList)
    let [activeTab, setActiveTab] = useState('grey')

    const tabOnChangeHandler = (newValue) => {
        setActiveTab(newValue)

        let newTabList = [...tabList]
        newTabList.forEach(item => {
            item['checked'] = item['value'] === newValue
        })
        setTabList(newTabList)
    }


    return (
        <>
            <Page.Top>
                <TabPanel list={tabList} onChange={tabOnChangeHandler}/>
            </Page.Top>

            <CardList
                items={tabs[activeTab]}
            />
        </>
    );
};

export default Board;
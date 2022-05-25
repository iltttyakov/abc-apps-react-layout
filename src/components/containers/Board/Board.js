import React, {useState} from 'react';
import TabPanel from "../../ui/TabPanel/TabPanel";
import CardList from "../../ui/CardList/CardList";

import appGreyCardList from "./BoardGrey";
import Page from "../../ui/Page/Page";
import appWhiteCardList from "./BoardWhite";
import appEmptyCardList from "./BoardEmpty";
import appBanCardList from "./BoardBan";
import {useForm} from "react-hook-form";


const tabs = {
    'grey': appGreyCardList,
    'white': appWhiteCardList,
    'empty': appEmptyCardList,
    'ban': appBanCardList,
    'hide': appGreyCardList,
}


const Board = () => {
    const [activeTab, setActiveTab] = useState('grey')
    const {register} = useForm(
        {
            defaultValues: {
                'board-tabs': activeTab
            }
        }
    )

    const onTabChange = (value) => {
        setActiveTab(value)
    }

    return (
        <>
            <Page.Top>
                <TabPanel
                    register={register}
                    name={'board-tabs'}
                    options={[
                        {label: 'С серыми', value: 'grey',},
                        {label: 'С белыми', value: 'white'},
                        {label: 'Без приложений', value: 'empty'},
                        {label: 'Бан', value: 'ban'},
                        {label: 'Скрытые', value: 'hide'},
                    ]}
                    onChange={onTabChange}
                />
            </Page.Top>

            <Page.Content>
                <CardList
                    items={tabs[activeTab]}
                />
            </Page.Content>

        </>
    );
};

export default Board;
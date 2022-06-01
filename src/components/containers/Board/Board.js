import React, {useEffect, useState} from 'react';
import TabPanel from "../../ui/TabPanel/TabPanel";
import AccountCardList from "../../ui/AccountCardList/AccountCardList";
import Page from "../../ui/Page/Page";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import storage from "../../../redux/storage";
import AccountCard from "../../ui/AccountCard/AccountCard";
import Loader from "../../ui/Loader/Loader";


const Board = () => {
    const {register} = useForm({defaultValues: {'page': '0'}})
    const board = useSelector(state => state.board)

    useEffect(() => {
        storage.board.get('0')
    }, [])

    const onTabChangeHandler = (page) => {
        storage.board.get(page)
    }


    return (
        <>
            <Page.Top>
                <TabPanel
                    name={'page'}
                    register={register('page', {
                        onChange: (e) => onTabChangeHandler(e.target.value)
                    })}
                    options={[
                        {label: 'С серыми', value: '0',},
                        {label: 'С белыми', value: '1'},
                        {label: 'Без приложений', value: '2'},
                        {label: 'Бан', value: '3'},
                        {label: 'Скрытые', value: '-1'},
                    ]}
                />
            </Page.Top>

            <Page.Content>
                <Loader process={board.listFetchInProgress}>
                    <AccountCardList items={board.list}/>
                </Loader>
            </Page.Content>

        </>
    );
};

export default Board;
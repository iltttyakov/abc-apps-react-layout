import React, {useEffect, useState} from 'react';
import TabPanel from "../ui/TabPanel/TabPanel";
import AccountCardList from "../ui/AccountCardList/AccountCardList";

import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import storage from "../../redux/rootActions";
import AccountCard from "../ui/AccountCard/AccountCard";
import Loader from "../ui/Loader/Loader";
import clearFilterParams from "../../api/clearFilterParams";


const Board = () => {
    const {register, getValues} = useForm({defaultValues: {'page': '0'}})
    const board = useSelector(state => state.board)

    const filterTable = () => {
        const filterParams = clearFilterParams(getValues())
        storage.board.get(filterParams['page'])
    }

    useEffect(() => {
        filterTable()
    }, [])


    return (
        <>
            <TabPanel
                name={'page'}
                register={register}
                onChange={filterTable}
                options={[
                    {label: 'С серыми', value: '0',},
                    {label: 'С белыми', value: '1'},
                    {label: 'Без приложений', value: '2'},
                    {label: 'Бан', value: '3'},
                    {label: 'Скрытые', value: '-1'},
                ]}
            />
            <div style={{padding: 20}}>
                <Loader process={board.listFetchInProgress}>
                    <AccountCardList
                        items={board.list}
                        isHiddenPage={getValues('page') === '-1'}
                    />
                </Loader>
            </div>

        </>
    );
};

export default Board;
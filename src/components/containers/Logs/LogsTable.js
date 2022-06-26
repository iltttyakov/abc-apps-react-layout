import React, {useEffect} from 'react';

import TabPanel from "../../ui/TabPanel/TabPanel";
import {useForm} from "react-hook-form";
import Table from "../../ui/Table/Table";
import AppIcon from "../../ui/AppIcon/AppIcon";
import clearFilterParams from "../../../api/clearFilterParams";
import storage from "../../../redux/rootActions";
import {useSelector} from "react-redux";
import CopyClick from "../../ui/CopyClick/CopyClick";


const columns = [
    {
        width: 6,
        name: 'id',
        label: '#',
        sortable: true,
        scheme: item => item.id
    },
    {
        width: 5,
        scheme: item => <AppIcon name={item.icon}/>
    },
    {
        width: 13,
        name: 'app',
        label: 'Приложение',
        sortable: true,
        scheme: item => item.app
    },
    {
        width: 13,
        name: 'date',
        label: 'Дата',
        sortable: true,
        scheme: item => <span style={{color: '#5030E5'}}><CopyClick>{item.date}</CopyClick></span>
    },
    {
        width: 16,
        name: 'message',
        label: 'Сообщение',
        scheme: item => <CopyClick>{item.message}</CopyClick>
    },
    {
        width: 16,
        name: 'message2',
        label: 'Сообщение 2',
        scheme: item => <CopyClick>{item.message2}</CopyClick>
    },
    {
        width: 18,
        name: 'query',
        label: 'Запрос',
        scheme: item => <span style={{color: '#78BD7E', whiteSpace: 'normal'}}>
            <CopyClick>{item.query}</CopyClick>
        </span>
    },
    {
        label: 'Хост',
        name: 'host',
        scheme: item => <CopyClick>{item.host}</CopyClick>
    },
]

const LogsTable = () => {
    const log = useSelector(state => state.log)
    const form = useForm(
        {
            defaultValues: {
                page: '0',
                list: 1,
                length: 50,
            }
        }
    )

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())
        storage.log.table(filterParams)
    }
    useEffect(filterTable, [])


    return (
        <>
            <TabPanel
                name={'page'}
                options={[
                    {label: 'app_info', value: '0'},
                    {label: 'events', value: '1'},
                    {label: 'onesignal_errors', value: '2'},
                ]}
                {...form}
                onChange={filterTable}
            />

            <Table
                columns={columns}
                data={log.table}
                count={log.tableFilteredCount}
                isLoading={log.tableIsLoading}
                form={form}
                onChange={filterTable}
            />

        </>
    );
};

export default LogsTable;
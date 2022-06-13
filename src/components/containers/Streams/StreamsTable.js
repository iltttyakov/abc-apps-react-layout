import React, {useEffect} from 'react';

import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import {useForm} from "react-hook-form";
import Table from "../../ui/Table/Table";
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import clearFilterParams from "../../../api/clearFilterParams";
import AppName from "../../ui/AppName/AppName";
import StatusTag from "../../ui/StatusTag/StatusTag";
import CopyClick from "../../ui/CopyClick/CopyClick";
import MoreButton from "../../ui/MoreButton/MoreButton";


const columns = [
    {
        width: 13,
        sortable: true,
        label: 'Приложение',
        name: 'apps_name',
        scheme: item => <AppName name={item['apps_name']} icon={item['apps_icon']}/>,
    },
    {
        width: 9,
        scheme: item => item['apps_date_ban'] ? <StatusTag status={'ban'}/> : null,
    },
    {
        width: 13,
        label: 'Нейминг',
        name: 'search_type',
        filterable: true,
        multiple: true,
        options: [
            {label: 'Органические', value: 'organic'},
            {label: 'Нейминг', value: 'organic'},
        ],
        scheme: item => item.naming ? item.naming : 'organic',
    },
    {
        width: 13,
        label: 'Ссылка',
        name: 'link',
        scheme: item => <CopyClick>{item.link}</CopyClick>,
    },
    {
        width: 10,
        label: 'Владелец',
        name: 'users_login',
        rights: 'streams_all',
        scheme: item => <CopyClick>{item['users_login']}</CopyClick>,
    },
    {
        width: 9,
        label: 'Оффер',
        name: 'offer',
        rights: 'streams_all',
        scheme: item => <CopyClick>{item.offer}</CopyClick>,
    },
    {
        width: 4,
        sortable: true,
        label: 'I',
        name: 'inst_count',
        scheme: item => <CopyClick>{item['inst_count']}</CopyClick>,
    },
    {
        width: 4,
        sortable: true,
        label: 'R',
        name: 'reg_count',
        scheme: item => <CopyClick>{item['reg_count']}</CopyClick>,
    },
    {
        width: 4,
        sortable: true,
        label: 'D',
        name: 'dep_count',
        scheme: item => <CopyClick>{item['dep_count']}</CopyClick>,
    },
    {
        width: 5,
        sortable: true,
        label: 'I2R',
        name: 'i2r',
        scheme: item => <CopyClick>{item.i2r}</CopyClick>,
    },
    {
        width: 5,
        sortable: true,
        label: 'R2D',
        name: 'r2d',
        scheme: item => <CopyClick>{item.r2d}</CopyClick>,
    },
    {
        width: 5,
        sortable: true,
        label: 'I2D',
        name: 'i2d',
        scheme: item => <CopyClick>{item.i2d}</CopyClick>,
    },
    {
        name: 'controls',
        scheme: item => <MoreButton onClick={() => {
            storage.stream.modalOpen()
            storage.stream.get(item.id)
        }}/>
    }
]


const StreamsTable = () => {
    const table = useSelector(state => state.stream.table)
    const tableFilteredCount = useSelector(state => state.stream.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.stream.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.stream.tableForcedUpdate)

    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())

        storage.stream.table(filterParams)
    }

    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])


    return (
        <>
            <FilterPanel
                name={'search_is_banned'}
                options={[
                    {label: 'Скрыть забаненные', value: 'false'}
                ]}
                {...form}
                onChange={filterTable}
                align={'right'}
            />

            <Table
                columns={columns}
                data={table}
                count={tableFilteredCount}
                isLoading={tableIsLoading}
                form={form}
                onChange={filterTable}
            />
        </>
    );
};

export default StreamsTable;
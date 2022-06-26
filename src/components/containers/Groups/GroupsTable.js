import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import clearFilterParams from "../../../api/clearFilterParams";
import actions from "../../../redux/rootActions";
import storage from "../../../redux/rootActions";

import CopyClick from "../../ui/CopyClick/CopyClick";
import MoreButton from "../../ui/MoreButton/MoreButton";
import Table from "../../ui/Table/Table";


const columns = [
    {
        width: 45,
        name: 'name',
        label: 'Название',
        sortable: true,
        scheme: item => <CopyClick>{item.name}</CopyClick>,
    },
    {
        width: 45,
        name: 'apps',
        label: 'Приложения',
        sortable: true,
        scheme: item => <CopyClick>{item.apps}</CopyClick>,
    },
    {
        name: 'controls',
        align: 'right',
        scheme: item => <MoreButton onClick={() => {
            actions.group.modalOpen()
            actions.group.get(item.id)
        }}/>
    }
]

const GroupsTable = () => {
    const table = useSelector(state => state.group.table)
    const tableFilteredCount = useSelector(state => state.group.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.group.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.group.tableForcedUpdate)


    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())
        storage.group.table(filterParams)
    }

    useEffect(filterTable, [])
    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])


    return (
        <Table
            columns={columns}
            data={table}
            count={tableFilteredCount}
            isLoading={tableIsLoading}
            form={form}
            onChange={filterTable}
        />
    );
};

export default GroupsTable;